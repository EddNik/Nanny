import { create } from 'zustand';
import { User } from 'firebase/auth';
import { persist } from 'zustand/middleware';

export interface AuthState {
  user: User | null; // The state itself still needs to start as null
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User) => void;
  clearIsAuthenticated: () => void;

  isLoginModalOpen: boolean;
  isRegisterModalOpen: boolean;
  setIsLoginModalOpen: () => void;
  closeLoginModal: () => void;
  setIsRegisterModalOpen: () => void;
  closeRegisterModal: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: true,
      isLoginModalOpen: false,
      isRegisterModalOpen: false,

      // Update isAuthenticated based on whether a user object was actually passed to
      setUser: (user) => {
        set({ user, isAuthenticated: true, isLoading: false });
      },

      clearIsAuthenticated: () => {
        set({ user: null, isAuthenticated: false, isLoading: false });
      },

      setIsLoginModalOpen: () => {
        set({ isLoginModalOpen: true, isRegisterModalOpen: false });
      },

      closeLoginModal: () => {
        set({ isLoginModalOpen: false });
      },

      setIsRegisterModalOpen: () => {
        set({ isRegisterModalOpen: true, isLoginModalOpen: false });
      },

      closeRegisterModal: () => {
        set({ isRegisterModalOpen: false });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
