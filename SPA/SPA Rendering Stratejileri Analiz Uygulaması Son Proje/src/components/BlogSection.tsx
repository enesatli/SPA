import React, { useState, useEffect } from 'react';
import { Clock, Eye, MessageCircle, Globe, Zap, Server, FileText, ExternalLink } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  views: number;
  comments: number;
  renderMethod: 'CSR' | 'SSR' | 'SSG';
  loadTime: number;
  seoScore: number;
}

const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [renderMethod, setRenderMethod] = useState<'CSR' | 'SSR' | 'SSG'>('CSR');
  const [isLoading, setIsLoading] = useState(false);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "React Server Components'i Anlamak",
      excerpt: "Sunucu tarafı render ile istemci tarafı etkileşimi sağlayan en yeni React özelliklerine derinlemesine bakış.",
      content: "React Server Components, React uygulamalarında render konusunda düşünme şeklimizde paradigma değişikliği temsil ediyor. İstemcide çalışan geleneksel bileşenlerin aksine, Server Components sunucuda çalışır ve render edilmiş çıktılarını istemciye gönderir...",
      author: "Sarah Chen",
      publishDate: "2024-01-15",
      readTime: "8 dk okuma",
      views: 12500,
      comments: 45,
      renderMethod: 'SSR',
      loadTime: 1.2,
      seoScore: 95
    },
    {
      id: 2,
      title: "SPA'lar için Core Web Vitals Optimizasyonu",
      excerpt: "Tek Sayfa Uygulamanızın performans metriklerini ve kullanıcı deneyimini iyileştirmek için pratik stratejiler öğrenin.",
      content: "Core Web Vitals hem kullanıcı deneyimi hem de arama motoru optimizasyonu için kritik metrikler haline geldi. Bu kapsamlı rehber Largest Contentful Paint (LCP), First Input Delay (FID) ve Cumulative Layout Shift (CLS) optimizasyonunu keşfediyor...",
      author: "Michael Rodriguez",
      publishDate: "2024-01-12",
      readTime: "12 dk okuma",
      views: 18700,
      comments: 67,
      renderMethod: 'CSR',
      loadTime: 2.8,
      seoScore: 78
    },
    {
      id: 3,
      title: "Statik Site Üretimi En İyi Uygulamaları",
      excerpt: "Modern web uygulamalarında maksimum performans ve SEO faydaları için SSG'den nasıl yararlanacağınızı keşfedin.",
      content: "Statik Site Üretimi, sayfaları derleme zamanında önceden render ederek benzersiz performans faydaları sunar. Bu yaklaşım her iki dünyanın en iyisini birleştirir: statik sitelerin hızı ile dinamik uygulamaların esnekliği...",
      author: "Emily Watson",
      publishDate: "2024-01-10",
      readTime: "6 dk okuma",
      views: 9200,
      comments: 23,
      renderMethod: 'SSG',
      loadTime: 0.8,
      seoScore: 98
    }
  ];

  const renderMethodInfo = {
    CSR: {
      name: 'İstemci Tarafı Render',
      icon: Globe,
      color: 'blue',
      description: 'İçerik JavaScript kullanarak tarayıcıda render edilir',
      pros: ['İlk yüklemeden sonra hızlı navigasyon', 'Zengin etkileşim', 'Azaltılmış sunucu yükü'],
      cons: ['Yavaş ilk sayfa yüklemesi', 'SEO zorlukları', 'Yükleme sırasında boş sayfa']
    },
    SSR: {
      name: 'Sunucu Tarafı Render',
      icon: Server,
      color: 'purple',
      description: 'İçerik her istek için sunucuda render edilir',
      pros: ['Daha iyi SEO', 'Daha hızlı İlk İçerik Boyama', 'Sosyal medya paylaşımı'],
      cons: ['Yüksek sunucu yükü', 'Yavaş sayfa geçişleri', 'Daha karmaşık önbellekleme']
    },
    SSG: {
      name: 'Statik Site Üretimi',
      icon: FileText,
      color: 'green',
      description: 'İçerik derleme zamanında önceden render edilir',
      pros: ['En hızlı yükleme süreleri', 'Mükemmel SEO', 'CDN dostu'],
      cons: ['İçerikle artan derleme süresi', 'Daha az dinamik içerik', 'Güncellemeler için yeniden derleme gerekir']
    }
  };

  const simulateLoading = (method: 'CSR' | 'SSR' | 'SSG') => {
    setIsLoading(true);
    setRenderMethod(method);
    
    // Render yöntemine göre farklı yükleme sürelerini simüle et
    const loadingTimes = { CSR: 2500, SSR: 1200, SSG: 600 };
    
    setTimeout(() => {
      setIsLoading(false);
    }, loadingTimes[method]);
  };

  const currentMethodInfo = renderMethodInfo[renderMethod];
  const Icon = currentMethodInfo.icon;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Blog Render Gösterimleri
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Farklı render stratejilerinin yükleme performansı, SEO ve kullanıcı deneyimi üzerindeki etkilerini karşılaştırın
        </p>
      </div>

      {/* Render Method Selector */}
      <div className="mb-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Render Yöntemini Seçin</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {Object.entries(renderMethodInfo).map(([method, info]) => {
              const MethodIcon = info.icon;
              const isActive = renderMethod === method;
              const colorClasses = {
                blue: isActive ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100',
                purple: isActive ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-700 hover:bg-purple-100',
                green: isActive ? 'bg-green-600 text-white' : 'bg-green-50 text-green-700 hover:bg-green-100'
              };
              
              return (
                <button
                  key={method}
                  onClick={() => simulateLoading(method as 'CSR' | 'SSR' | 'SSG')}
                  className={`p-4 rounded-xl transition-all duration-200 text-left ${colorClasses[info.color as keyof typeof colorClasses]} ${isActive ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <MethodIcon className="w-5 h-5" />
                    <span className="font-semibold">{method}</span>
                  </div>
                  <p className="text-sm opacity-90">{info.name}</p>
                </button>
              );
            })}
          </div>

          {/* Current Method Info */}
          {!isLoading && (
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Icon className="w-6 h-6 text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-900">{currentMethodInfo.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{currentMethodInfo.description}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-700 mb-2">Avantajlar</h4>
                  <ul className="space-y-1">
                    {currentMethodInfo.pros.map((pro, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-700 mb-2">Dikkat Edilecekler</h4>
                  <ul className="space-y-1">
                    {currentMethodInfo.cons.map((con, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">{renderMethod} yüklemesi simüle ediliyor...</p>
            </div>
          )}
        </div>
      </div>

      {/* Blog Posts Grid */}
      {!isLoading && (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Posts List */}
          <div className="lg:col-span-2 space-y-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.renderMethod === 'CSR' ? 'bg-blue-100 text-blue-700' :
                      post.renderMethod === 'SSR' ? 'bg-purple-100 text-purple-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {post.renderMethod}
                    </span>
                    <span className="text-xs text-gray-500">{post.loadTime}s yükleme süresi</span>
                  </div>
                  <div className="text-xs text-gray-500">{post.publishDate}</div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>Yazar: {post.author}</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>

                {/* Performance Indicators */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-600">SEO Skoru: {post.seoScore}/100</span>
                    </div>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center space-x-1">
                      <span>Devamını Oku</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Performance Metrics Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performans Karşılaştırması</h3>
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div key={post.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{post.renderMethod}</span>
                      <span className="text-xs text-gray-500">{post.loadTime}s</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className={`h-2 rounded-full ${
                          post.renderMethod === 'CSR' ? 'bg-blue-500' :
                          post.renderMethod === 'SSR' ? 'bg-purple-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${(post.seoScore / 100) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-600">SEO Skoru: {post.seoScore}/100</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Temel Bulgular</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>SSG en hızlı yükleme süreleri ve en yüksek SEO skorları gösteriyor</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>SSR iyi SEO ile dengeli performans sağlıyor</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>CSR zengin etkileşim sunuyor ancak yavaş ilk yüklemeler</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for selected post */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedPost.title}</h2>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                <span>Yazar: {selectedPost.author}</span>
                <span>{selectedPost.publishDate}</span>
                <span className={`px-2 py-1 rounded text-xs ${
                  selectedPost.renderMethod === 'CSR' ? 'bg-blue-100 text-blue-700' :
                  selectedPost.renderMethod === 'SSR' ? 'bg-purple-100 text-purple-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {selectedPost.renderMethod}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">{selectedPost.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSection;