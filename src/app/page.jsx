import styles from "./home.module.css"
import Image from "next/image"

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
          <Image className={styles.brandImage} src="/brands.png" alt="Brands" fill/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.heroImg} src="/hero.gif" alt="Hero" fill />
      </div>
    </div>
  )
} 