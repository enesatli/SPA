SPA-Karsilastirmalar
SPA(tek sayfa web sitesi) için CSR,SSR ve SSG yöntemlerinin optimizasyon ve performans karşılaştırmaları

SPA SEO & Performans Karşılaştırma Projesi (CSR, SSR, SSG)
Bu proje, tek sayfa uygulamaların (SPA) üç farklı render stratejisi olan CSR (Client-Side Rendering), SSR (Server-Side Rendering) ve SSG (Static Site Generation) yöntemlerini karşılaştırmalı olarak analiz etmek amacıyla geliştirilmiştir.

🎯 Amaç
Render yöntemlerinin SEO uyumluluğunu ve ilk boyama süresine (FCP) etkisini ölçmek
API çağrılı dinamik içeriklerde hangi yöntemin daha avantajlı olduğunu belirlemek
Lighthouse verileri ile teknik kıyaslama yapmak
📁 Proje Yapısı
📦 root ├── csr-proje # Vite + React (CSR) ├── ssr-proje-temiz # Next.js (SSR ve SSG içerir) │ ├── pages │ │ ├── index.js # SSR örneği │ │ └── static-blog.js # SSG örneği

🚀 Kurulum
Node.js yüklü olmalıdır. (v18+ önerilir)

## CSR projesi (Vite + React)
cd csr-proje
npm install
npm run dev
# http://localhost:5173

# SSR/SSG projesi (Next.js)
cd ssr-proje-temiz
npm install
npm run dev
# http://localhost:3000

## 🔍 Test Araçları
 Chrome Lighthouse (Performance + SEO)

 WebPageTest (isteğe bağlıdır)

 Google Search Console (canlıya alındığında önerilir)
Lighthouse Sonuçları (Özet)

| Yöntem | SEO | Performance | FCP  | LCP  | TBT    |
| ------ | --- | ----------- | ---- | ---- | ------ |
| CSR    | 92  | 63          | —    | —    | —      |
| SSR    | 100 | 48          | 1.0s | 9.4s | 1760ms |
| SSG    | 100 | 40          | 1.0s | 9.5s | 1910ms |

## Önerilen Kullanım Senaryoları
| Durum                                     | En Uygun Yöntem   |
| ----------------------------------------- | --------------    |
| SEO öncelikli sayfa (Blog, Ürün)          | ✅ SSG / SSR     |
| Sık değişen veri, kullanıcıya özel içerik | ✅ SSR           |
| Hızlı SPA deneyimi, az sayfa değişimi     | ✅ CSR           |

## Katkı ve Geliştirme
Bu repo akademik amaçlı hazırlanmıştır. Forklayabilir, yıldız verebilir ya da katkıda bulunabilirsiniz ⭐

## Lisans
MIT Lisansı.
