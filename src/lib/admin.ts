import { supabase } from './supabase';
import bcrypt from 'bcryptjs';

export interface AdminUser {
  id: string;
  email: string;
  created_at: string;
}

export interface LoginAttempt {
  id: string;
  email: string;
  attempted_at: string;
  success: boolean;
}

const SALT_ROUNDS = 10;
const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION_MINUTES = 15;

/**
 * Hash a password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * Verify a password against a hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Check if an email is currently locked out due to too many failed attempts
 */
export async function isEmailLockedOut(email: string): Promise<boolean> {
  if (!supabase) return false;

  const lockoutTime = new Date(Date.now() - LOCKOUT_DURATION_MINUTES * 60 * 1000);

  const { data, error } = await supabase
    .from('login_attempts')
    .select('*')
    .eq('email', email)
    .eq('success', false)
    .gte('attempted_at', lockoutTime.toISOString())
    .order('attempted_at', { ascending: false })
    .limit(MAX_LOGIN_ATTEMPTS);

  if (error || !data) return false;

  return data.length >= MAX_LOGIN_ATTEMPTS;
}

/**
 * Record a login attempt
 */
export async function recordLoginAttempt(email: string, success: boolean): Promise<void> {
  if (!supabase) return;

  await supabase.from('login_attempts').insert({
    email,
    success,
    attempted_at: new Date().toISOString(),
  });
}

/**
 * Clear old login attempts (for maintenance)
 */
export async function clearOldLoginAttempts(daysOld: number = 30): Promise<void> {
  if (!supabase) return;

  const cutoffDate = new Date(Date.now() - daysOld * 24 * 60 * 60 * 1000);

  await supabase
    .from('login_attempts')
    .delete()
    .lt('attempted_at', cutoffDate.toISOString());
}

/**
 * Get admin user by email
 */
export async function getAdminByEmail(email: string): Promise<AdminUser | null> {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('admin_users')
    .select('id, email, created_at')
    .eq('email', email)
    .single();

  if (error || !data) return null;

  return data as AdminUser;
}

/**
 * Verify admin credentials
 */
export async function verifyAdminCredentials(
  email: string,
  password: string
): Promise<AdminUser | null> {
  if (!supabase) return null;

  // Check if locked out
  const isLockedOut = await isEmailLockedOut(email);
  if (isLockedOut) {
    throw new Error('Too many failed login attempts. Please try again in 15 minutes.');
  }

  // Get admin user with password hash
  const { data, error } = await supabase
    .from('admin_users')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !data) {
    await recordLoginAttempt(email, false);
    return null;
  }

  // Verify password
  const isValid = await verifyPassword(password, data.password_hash);

  // Record attempt
  await recordLoginAttempt(email, isValid);

  if (!isValid) return null;

  // Return admin user without password hash
  return {
    id: data.id,
    email: data.email,
    created_at: data.created_at,
  };
}

/**
 * Create a new admin user (use this once to create your admin account)
 * Run this from a secure API endpoint or Node.js script
 */
export async function createAdminUser(email: string, password: string): Promise<AdminUser | null> {
  if (!supabase) return null;

  const passwordHash = await hashPassword(password);

  const { data, error } = await supabase
    .from('admin_users')
    .insert({
      email,
      password_hash: passwordHash,
    })
    .select('id, email, created_at')
    .single();

  if (error || !data) return null;

  return data as AdminUser;
}
