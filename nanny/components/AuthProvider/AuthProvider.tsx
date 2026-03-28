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
    // 1. We name this "unsubscribe" because onAuthStateChanged
    // immediately returns the function used to stop the listener.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        clearIsAuthenticated();
      }
    });

    // 2. Cleanup function runs when component unmounts
    return () => {
      unsubscribe(); // Повертаємо функцію очищення ефекта We stop listening. This is important to prevent memory leaks and unintended side effects when the component is no longer in use.
    };
  }, [setUser, clearIsAuthenticated]);

  return <>{children}</>;
}
