import styles from './singlePost.module.css'
import Image from 'next/image'

export default function SinglePostPage() {
  return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="/postTest.png" alt="post" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title }>Title</h1>
          <div className={styles.detail}>
            <Image className={styles.avatar} src="/noavatar.png" alt="post" width={50} height={50}/>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>Davi Sá</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01-05-2003</span>
            </div>
          </div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque iure dolores possimus nemo quam consequatur numquam sit esse id. Obcaecati repellat libero quisquam assumenda eaque maxime, cumque nesciunt fugit?
          </div>
        </div>
      </div>
  )
}