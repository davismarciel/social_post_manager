'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './links.module.css';
import NavLink from './navLink/navLink';
import { handleLogout } from '@/lib/actions';
import { auth } from '@/lib/auth';

export default function Links({ session }) {
  const [open, setOpen] = useState(false);

  const links = [
    {
      title: 'Homepage',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ];

  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map(((link) => (
          <NavLink item={link} key={link.title} />
        )))}
        {
          session ? (
            <>
              {
                isAdmin && (
                  <NavLink item={{ title: 'Admin', path: '/admin' }} />
                )
              }
              <form action={handleLogout}>
                <button className={styles.logout}>Logout</button>
              </form>
            </>
          ) : (
            <NavLink item={{ title: 'Login', path: '/login' }} />
          )
        }
      </div>
      <Image className={styles.menuButton} src="/menu.png" alt="Menu" onClick={() => setOpen((prev) => !prev)} width={30} height={30} />
      {
      open && (
      <div className={styles.mobileLinks}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
      )
    }
    </div>
  );
}
