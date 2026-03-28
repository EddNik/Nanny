'use client';

import { useAuthStore } from '@/lib/store/authStore';
import Link from 'next/link';
import Button from '../Button/Button';
import css from './Header.module.css';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';
import toast from 'react-hot-toast';
import { handleApiError } from '@/utils/errorHandler';

export default function Header() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  const setIsRegisterModalOpen = useAuthStore(
    (state) => state.setIsRegisterModalOpen,
  );
  const setIsLoginModalOpen = useAuthStore(
    (state) => state.setIsLoginModalOpen,
  );

  const handleLogOut = async () => {
    try {
      await signOut(auth);

      toast.success('Logged out successfully');
    } catch (error) {
      handleApiError(error, 'Failed to log out');
    }
  };

  return (
    <>
      <header className={css.header}>
        <Link href="/" className={css.logo}>
          Nanny.Services
        </Link>

        <div className={css.rightSection}>
          <nav className={css.nav}>
            <Link href="/" className={css.navigationLink}>
              Home
            </Link>
            <Link href="/nannies" className={css.navigationLink}>
              Nannies
            </Link>
            {isAuthenticated && (
              <Link href="/favorites" className={css.navigationLink}>
                Favorites
              </Link>
            )}
          </nav>
          <div className={css.authContainer}>
            {isAuthenticated ? (
              <>
                <span>{user?.displayName || 'You are logged in'}</span>

                <Button onClick={handleLogOut} className={css.logoutButton}>
                  Log Out
                </Button>
              </>
            ) : (
              <div className={css.authButtons}>
                <Button
                  onClick={setIsLoginModalOpen}
                  className={css.loginButton}
                >
                  Log In
                </Button>

                <Button
                  onClick={setIsRegisterModalOpen}
                  className={css.registrationButton}
                >
                  Registration
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
