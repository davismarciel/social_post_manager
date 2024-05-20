'use client';

import { useFormState } from 'react-dom';
import styles from './adminUserForm.module.css';
import { addUser } from '@/lib/actions';

export default function AdminUserForm() {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add new user</h1>
      <input required type="text" name="username" placeholder="Username" />
      <input required type="email" name="email" placeholder="Email" />
      <input required type="password" name="password" placeholder="Password" />
      <input type="text" name="img" placeholder="Avatar URL Image" />
      <select required name="isAdmin">
        <option disabled selected value="false"> -- Select role -- </option>
        <option value="true">Admin</option>
        <option value="false">User</option>
      </select>
      <button>Add user</button>
      {state && state?.error}
    </form>
  );
}
