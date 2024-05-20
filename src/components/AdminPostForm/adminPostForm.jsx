'use client';

import { useFormState } from 'react-dom';
import styles from './adminPostForm.module.css';
import { createPost } from '@/lib/actions';

export default function AdminPostForm({ user_id }) {
  const [state, formAction] = useFormState(createPost, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add new post</h1>
      <input type="hidden" name="user_id" value={user_id} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea type="text" name="desc" rows={10} />
      <button>Add post</button>
      {state && state?.error}
    </form>
  );
}
