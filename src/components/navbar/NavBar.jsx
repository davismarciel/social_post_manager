import Link from 'next/link';
import Links from './links/Links';
import styles from './navBar.module.css';

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  );
}
