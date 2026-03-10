'use client';

import styles from './page.module.css';
import { get, ref, set } from 'firebase/database';
import { auth, db } from '@/lib/firebase/firebase';
import { useEffect, useState } from 'react';
import { signInAnonymously, User } from 'firebase/auth';

export default function Home() {
  // const [user, setUser] = useState<User | null>(null);
  // useEffect(() => {
  //   console.log(signInAnonymously(auth));
  //   signInAnonymously(auth)
  //     .then((value) => {
  //       console.log('Signed in user:', value.user);
  //       setUser(value.user);
  //     })
  //     .catch((error) => {
  //       console.error('Auth error:', error);
  //     });

  //   const babysittersRef = ref(db, 'babysitters');

  //   get(babysittersRef).then((data) => {
  //     if (data.exists()) {
  //       console.log('Babysitters data:', data);
  //     } else {
  //       console.log('No data found');
  //     }
  //   });
  // }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <h1>Firebase Test Page</h1>;
        {user ? (
          <p>
            You are signed in as {user.email}: <strong>{user.uid}</strong>
          </p>
        ) : (
          <p>Not signed in</p>
        )} */}
      </main>
    </div>
  );
}
