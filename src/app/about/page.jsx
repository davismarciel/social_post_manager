import Image from 'next/image';
import styles from './about.module.css';

export const metadata = {
  title: "About",
  description: "Webgram page",
};

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h2 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h2>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>10 years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>10 years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>10 years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About"
          className={styles.img}
          fill
        />
      </div>
    </div>
  );
}
