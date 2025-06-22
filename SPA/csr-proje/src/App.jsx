import { useState } from 'react';
import './index.css';

const csrBilgileri = [
  {
    id: 1,
    title: "CSR Nedir?",
    body: "Client-Side Rendering, sayfanın içeriğinin tarayıcıda JavaScript ile oluşturulmasıdır. Başlangıçta boş HTML gelir."
  },
  {
    id: 2,
    title: "Avantajları",
    body: "Kullanıcı etkileşimi yüksek uygulamalarda hızlı geçiş sağlar. Sayfalar arası yenileme olmaz."
  },
  {
    id: 3,
    title: "Dezavantajları",
    body: "İlk yükleme süresi uzundur. SEO performansı düşebilir çünkü içerik geç gelir."
  },
  {
    id: 4,
    title: "SEO'ya Etkisi",
    body: "CSR yönteminde Googlebot bazen içeriği göremez. Bu nedenle sayfa SEO açısından zayıf kalabilir."
  },
  {
    id: 5,
    title: "Kullanım Alanları",
    body: "Admin panelleri, dashboardlar, kullanıcı odaklı SPA uygulamaları CSR için uygundur."
  },
];

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark);

  return (
    <div className={dark ? 'dark-theme' : 'light-theme'}>
      {/* Navbar */}
      <nav className="navbar">
        <h1>🚀 SPA SEO Projesi</h1>
        <div className="nav-links">
          <a href="#">Ana Sayfa</a>
          <a href="#">SSR Sayfası</a>
          <a href="#">SSG Sayfası</a>
          <button onClick={toggleTheme}>
            {dark ? "☀️ Açık Tema" : "🌙 Koyu Tema"}
          </button>
        </div>
      </nav>

      {/* İçerik */}
      <div className="container">
        <h2>CSR (Client-Side Rendering) Hakkında</h2>
        {csrBilgileri.map(post => (
          <div key={post.id} className="card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
        <footer className="footer">
          Bu sayfa Client-Side Rendering (CSR) yöntemiyle oluşturulmuştur.
        </footer>
      </div>
    </div>
  );
}

export default App;
