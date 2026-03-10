'use client';

import styles from './page.module.css';
import { get, ref, set } from 'firebase/database';
import { auth, db } from '@/lib/firebase/firebase';
import { useEffect, useState } from 'react';
import { signInAnonymously, User } from 'firebase/auth';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}></main>
    </div>
  );
}
