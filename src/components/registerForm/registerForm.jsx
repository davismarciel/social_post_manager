'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { handleRegister } from '@/lib/actions';
import styles from './registerForm.module.css';

export default function RegisterForm() {
  const [state, formAction] = useFormState(handleRegister, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push('/login');
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input required type="text" placeholder="Username" name="username" />
      <input required type="email" placeholder="Email" name="email" />
      <input required type="password" placeholder="Password" name="password" />
      <input required type="password" placeholder="Repeat Password" name="passwordRepeat" />
      <button type="submit">Register</button>
      {state?.error}
      <Link href="/login">
        Have an account?
        {' '}
        <b>Login</b>
      </Link>
    </form>
  );
}
