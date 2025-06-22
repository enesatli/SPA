import React from 'react';
import { ArrowRight, Globe, Zap, Search, TrendingUp, BookOpen, ShoppingBag } from 'lucide-react';

interface HomePageProps {
  onNavigate: (section: 'blog' | 'ecommerce' | 'performance' | 'seo' | 'docs') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: Globe,
      title: 'Render Stratejileri',
      description: 'CSR, SSR ve SSG yaklaşımlarını gerçek dünya örnekleriyle karşılaştırın',
      action: () => onNavigate('docs'),
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Performans Analizi',
      description: 'Gerçek zamanlı Lighthouse skorları ve Core Web Vitals ölçümü',
      action: () => onNavigate('performance'),
      color: 'purple'
    },
    {
      icon: Search,
      title: 'SEO Optimizasyonu',
      description: 'Meta etiketleri, yapılandırılmış veri ve arama görünürlüğü analizi',
      action: () => onNavigate('seo'),
      color: 'green'
    }
  ];

  const demoSections = [
    {
      icon: BookOpen,
      title: 'Blog Gösterimleri',
      description: 'Farklı render tekniklerini sergileyen dinamik blog yazıları',
      action: () => onNavigate('blog'),
      color: 'orange'
    },
    {
      icon: ShoppingBag,
      title: 'E-ticaret Örnekleri',
      description: 'SEO ve performans en iyi uygulamalarını gösteren ürün katalogları',
      action: () => onNavigate('ecommerce'),
      color: 'pink'
    }
  ];

  const stats = [
    { label: 'Render Yöntemleri', value: '3', description: 'CSR, SSR, SSG' },
    { label: 'Performans Metrikleri', value: '12+', description: 'Core Web Vitals ve Daha Fazlası' },
    { label: 'SEO Faktörleri', value: '15+', description: 'Kapsamlı Analiz' },
    { label: 'Demo Sayfaları', value: '20+', description: 'Gerçek Dünya Örnekleri' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6">
          <Globe className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          SPA Render
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Analizi</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Tek Sayfa Uygulamalarında farklı render stratejilerinin SEO performansı ve 
          İlk İçerik Boyama üzerindeki etkilerini analiz eden kapsamlı araştırma platformu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('performance')}
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Performans Verilerini Görüntüle
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
          <button
            onClick={() => onNavigate('docs')}
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
          >
            Dokümantasyonu Oku
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
            <div className="text-xs text-gray-500">{stat.description}</div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Araştırma Bileşenleri</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              purple: 'from-purple-500 to-purple-600',
              green: 'from-green-500 to-green-600'
            };
            
            return (
              <div key={index} className="group p-8 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={feature.action}>
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  Keşfet
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Demo Sections */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Canlı Gösterimler</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {demoSections.map((demo, index) => {
            const Icon = demo.icon;
            const colorClasses = {
              orange: 'from-orange-500 to-orange-600',
              pink: 'from-pink-500 to-pink-600'
            };
            
            return (
              <div key={index} className="group p-8 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={demo.action}>
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${colorClasses[demo.color as keyof typeof colorClasses]} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{demo.title}</h3>
                <p className="text-gray-600 mb-6">{demo.description}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  Demoları Görüntüle
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Research Questions */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Araştırma Soruları</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Render Stratejisi Etkisi</h3>
                <p className="text-gray-600">Farklı render stratejileri Googlebot taraması ve PageSpeed skorlarını nasıl etkiliyor?</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Dinamik İçerik Performansı</h3>
                <p className="text-gray-600">API tabanlı dinamik içerikli sayfalar için hangi yöntem daha avantajlı?</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">SEO Kalite Değerlendirmesi</h3>
                <p className="text-gray-600">SEO uzmanları her yaklaşımın kalitesini ve keşfedilebilirliğini nasıl değerlendiriyor?</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Gerçek Dünya Performansı</h3>
                <p className="text-gray-600">Stratejiler arasında Core Web Vitals'da ölçülebilir farklar nelerdir?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;