import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AdminUser {
  id: string;
  email: string;
}

interface AdminStore {
  admin: AdminUser | null;
  isAuthenticated: boolean;
  setAdmin: (admin: AdminUser | null) => void;
  logout: () => void;
}

export const useAdminStore = create<AdminStore>()(
  persist(
    (set) => ({
      admin: null,
      isAuthenticated: false,
      setAdmin: (admin) =>
        set({
          admin,
          isAuthenticated: !!admin,
        }),
      logout: () =>
        set({
          admin: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: 'tomar-thikana-admin',
    }
  )
);
