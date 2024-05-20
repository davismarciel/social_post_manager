import { unstable_noStore as noStore } from 'next/cache';
import styles from './blog.module.css';

import PostCard from '@/components/postCard/postCard';
// FETCHING POSTS WITH AN API
const getData = async () => {
  noStore();
  const res = await fetch('http://localhost:3000/api/blog');

  if (!res.ok) {
    throw new Error();
  }

  return res.json();
};

export default async function Blog() {
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
