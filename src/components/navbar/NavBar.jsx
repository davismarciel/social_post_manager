import Link from 'next/link';
import Links from './links/Links';
import styles from './navBar.module.css';
import { auth } from '@/lib/auth';

export default async function NavBar() {
  const session = await auth();

  // console.log(session);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
}
