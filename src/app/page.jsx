import Image from 'next/image';
import styles from './home.module.css';
import { deleteUser } from '@/lib/actions';

export const metadata = {
  title: ' Home | Webgram',
  description: 'Webgram page',
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero distinctio voluptatum, cum voluptatibus consequuntur.</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image className={styles.brandImage} src="/brands.png" alt="Brands" fill />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.heroImg} unoptimized src="/hero.gif" alt="Hero" fill />
      </div>
      <div>
        {deleteUser}
      </div>
    </div>
  );
}
