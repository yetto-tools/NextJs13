import { LikeButton } from './LikeButton';
import style from './style.module.css';
import Link from 'next/link';

const urlBase = 'https://jsonplaceholder.typicode.com/posts';

const fetchPost = () => {
  return fetch(urlBase, {
    next: {
      revalidate: 60,
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error);
};

export default async function PostPage() {
  const posts = await fetchPost();

  return (
    <section className={style.posts}>
      {posts.slice(0, 5).map((post) => (
        <article
          key={post.id}
          className={style.post}
        >
          <Link
            href={`/posts/${post.id}`}
            className={style.link}
          >
            <div>
              <h2>{post.title}</h2>
            </div>
          </Link>
          <div className={style.post_body}>
            <span>{post.body}</span>
          </div>
          <div className={style.post_footer}>
            <div>
              <LikeButton />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
