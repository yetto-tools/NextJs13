const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error);
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
          <p>{comment.email}</p>
        </li>
      ))}
    </ul>
  );
}
