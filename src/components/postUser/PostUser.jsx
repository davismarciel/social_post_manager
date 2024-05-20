import Image from 'next/image';
import { getUser } from '@/lib/data';
import styles from './postUser.module.css';

export default async function PostUser({ user_id }) {
  const { img, username } = await getUser(user_id);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={img || '/noavatar.png'}
        alt="avatar"
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{username}</span>
      </div>
    </div>
  );
}
