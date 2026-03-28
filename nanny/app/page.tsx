'use client';

import Link from 'next/link';
import css from './page.module.css';
// import { get, ref, set } from 'firebase/database';
// import { auth, db } from '@/lib/firebase/firebase';
// import { useEffect, useState } from 'react';
// import { signInAnonymously, User } from 'firebase/auth';
import { ArrowUpRight, Check } from 'lucide-react';
import { useAuthStore } from '@/lib/store/authStore';

export default function Home() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  // const user = useAuthStore((state) => state.user);
  return (
    <div className={css.page}>
      <main className={css.mainContainer}>
        <section className={css.leftHalf}>
          <div className={css.content}>
            <h1 className={css.title}>Make Life Easier for the Family:</h1>
            <p className={css.description}>
              Find Babysitters Online for All Occasions
            </p>
            <Link
              href={isAuthenticated ? '/nannies' : '/sign-in'}
              className={css.getStarted}
            >
              Get started
              <ArrowUpRight size={24} color="#fbfbfb" className={css.icon} />
            </Link>
          </div>
        </section>
        <section className={css.rightHalf}>
          <div className={css.statsBadge}>
            <div className={css.checkIconWrapper}>
              <Check
                size={20}
                color="var(--background-color)"
                strokeWidth={3}
              />
            </div>
            <div className={css.statsText}>
              <span className={css.statsLabel}>Experienced nannies</span>
              <span className={css.statsNumber}>15,000</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
