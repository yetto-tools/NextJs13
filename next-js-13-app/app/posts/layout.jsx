export default function PostsLayout({ children }) {
  return (
    <div>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>
        &bull;Post &bull;
      </h1>
      {children}
    </div>
  );
}
