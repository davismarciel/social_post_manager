'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { handleLogin } from '@/lib/actions';
import styles from './loginForm.module.css';

export default function LoginForm() {
  const [state, formAction] = useFormState(handleLogin, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push('/blog');
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login with credentials</button>
      {state?.error}
      <Link href="/register">
        Dont have an account?
        {' '}
        <b>Register</b>
      </Link>
    </form>
  );
}
