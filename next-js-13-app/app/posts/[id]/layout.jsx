import Link from 'next/link';
import style from '../style.module.css';

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error);
};

export default async function Post({ children, params }) {
  const { id } = params;
  const post = await fetchSinglePost(id);
  return (
    <div className={style.posts}>
      <article className={style.post}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link href={`/posts/${id}/comments`}>Ver Comentarios...</Link>
        {children}
      </article>
    </div>
  );
}
