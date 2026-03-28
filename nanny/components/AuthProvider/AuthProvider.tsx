'use client';

import { auth } from '@/lib/firebase/firebase';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuthStore } from '@/lib/store/authStore';
import { AuthState } from '@/lib/store/authStore';

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const setUser = useAuthStore((state: AuthState) => state.setUser);
  const clearIsAuthenticated = useAuthStore(
    (state: AuthState) => state.clearIsAuthenticated,
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        clearIsAuthenticated();
      }
    });
    return () => {
      unsubscribe();
    };
  }, [setUser, clearIsAuthenticated]);

  return <>{children}</>;
}
