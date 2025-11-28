import { NextRequest, NextResponse } from 'next/server';
import { createAdminUser } from '@/lib/admin';

// This endpoint should be disabled in production or protected
// Use it once to create your admin account, then disable it
export async function POST(request: NextRequest) {
  try {
    // Security check - only allow in development
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { error: 'This endpoint is disabled in production' },
        { status: 403 }
      );
    }

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      );
    }

    const admin = await createAdminUser(email, password);

    if (!admin) {
      return NextResponse.json(
        { error: 'Failed to create admin user. Email may already exist.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Admin user created successfully',
      admin: {
        id: admin.id,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error('Create admin error:', error);
    return NextResponse.json(
      { error: 'Failed to create admin user' },
      { status: 500 }
    );
  }
}
