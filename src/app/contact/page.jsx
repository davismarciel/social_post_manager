import Image from 'next/image';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact',
  description: 'Webgram page',
};

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/contact.png"
          alt="Contact"
          fill
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea cols={30} rows={10} placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
