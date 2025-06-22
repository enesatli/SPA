// pages/static-blog.js
import Head from 'next/head';

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await res.json();

    return {
      props: { posts },
      revalidate: 60, // ISR: sayfa 60 saniyede bir yeniden oluşturulur
    };
  } catch (error) {
    console.error('Veri çekme hatası:', error);
    return {
      props: { posts: [] },
    };
  }
}

export default function StaticBlog({ posts }) {
  return (
    <div style={{ padding: '2rem' }}>
      <Head>
        <title>SSG Blog Sayfası</title>
        <meta name="description" content="Bu sayfa, SSG yöntemiyle oluşturulmuş örnek bir blog sayfasıdır." />
        <meta name="robots" content="index, follow" />
      </Head>

      <h1>SSG Blog Yazıları</h1>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} style={{ marginBottom: '1.5rem' }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>Veri bulunamadı.</p>
      )}
    </div>
  );
}
