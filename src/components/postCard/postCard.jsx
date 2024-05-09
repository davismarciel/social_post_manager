import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
export default function PostCard() {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/postTest.png" alt="Post" fill objectFit='cover' className={styles.img}/>
        </div>
        <span className={styles.date}>01.05.2003</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et corrupti explicabo ullam ut fugit quaerat architecto iusto alias facilis dolore perferendis reprehenderit expedita tenetur ipsum provident, quibusdam ex fugiat, eum vel accusamus. Necessitatibus, rem cupiditate?</p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
}