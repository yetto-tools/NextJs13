export default function Post({ params }) {
  const { id } = params;
  return <h1>post {id}</h1>;
}
