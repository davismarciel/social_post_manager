import LoginForm from '@/components/loginForm/loginForm';
import { auth, signIn } from '@/lib/auth';
import styles from './login.module.css';

export default async function LoginPage() {
  const session = await auth();
  console.log(session);

  const handleGithubLogin = async () => {
    'use server';

    await signIn('github');
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with GitHub</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
}
