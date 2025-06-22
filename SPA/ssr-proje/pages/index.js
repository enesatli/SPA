import Head from 'next/head';

export async function getServerSideProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await res.json();

    return {
      props: { posts },
    };
  } catch (error) {
    console.error('Veri çekme hatası:', error);
    return {
      props: { posts: [] },
    };
  }
}

export default function Home({ posts }) {
  return (
    <div style={{ padding: '2rem' }}>
      <Head>
        <title>SSR Blog Sayfası</title>
        <meta name="description" content="Bu sayfa, SSR yöntemiyle oluşturulmuş örnek bir blog sayfasıdır." />
        <meta name="robots" content="index, follow" />
      </Head>

      <h1>SSR Blog Yazıları</h1>
      {posts && posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} style={{ marginBottom: '1.5rem' }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>Gösterilecek veri bulunamadı.</p>
      )}
    </div>
  );
}
