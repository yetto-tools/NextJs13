import { LikeButton } from './LikeButton';
import style from './style.module.css';

const fetchPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error);
};

export default async function PostPage() {
  const posts = await fetchPost();

  return (
    <section className={style.posts}>
      {posts.map((post) => (
        <article
          key={post.id}
          className={style.post}
        >
          <div>
            <h2>{post.title}</h2>
          </div>
          <div className={style.post_body}>
            <span>{post.body}</span>
          </div>
          <div className={style.post_body}>
            <LikeButton />
          </div>
        </article>
      ))}
    </section>
  );
}
