import React, { useState } from 'react';
import { Search, Globe, FileText, Link, Image, Star, CheckCircle, XCircle, AlertCircle, TrendingUp, Eye } from 'lucide-react';

interface SEOFactor {
  name: string;
  csr: 'good' | 'warning' | 'poor';
  ssr: 'good' | 'warning' | 'poor';
  ssg: 'good' | 'warning' | 'poor';
  description: string;
  impact: 'high' | 'medium' | 'low';
}

interface PageAnalysis {
  url: string;
  title: string;
  renderStrategy: 'CSR' | 'SSR' | 'SSG';
  overallScore: number;
  factors: {
    metaTags: 'good' | 'warning' | 'poor';
    structuredData: 'good' | 'warning' | 'poor';
    performance: 'good' | 'warning' | 'poor';
    accessibility: 'good' | 'warning' | 'poor';
    contentQuality: 'good' | 'warning' | 'poor';
  };
}

const SEOAnalysis: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<'all' | 'CSR' | 'SSR' | 'SSG'>('all');
  const [analysisType, setAnalysisType] = useState<'factors' | 'pages' | 'recommendations'>('factors');

  const seoFactors: SEOFactor[] = [
    {
      name: 'Başlık Etiketleri',
      csr: 'poor',
      ssr: 'good',
      ssg: 'good',
      description: 'Dinamik başlık üretimi ve meta etiket bütünlüğü',
      impact: 'high'
    },
    {
      name: 'Meta Açıklamaları',
      csr: 'poor',
      ssr: 'good',
      ssg: 'good',
      description: 'Uygun meta açıklama uygulaması',
      impact: 'high'
    },
    {
      name: 'Yapılandırılmış Veri',
      csr: 'poor',
      ssr: 'warning',
      ssg: 'good',
      description: 'JSON-LD ve şema işaretleme uygulaması',
      impact: 'medium'
    },
    {
      name: 'Open Graph Etiketleri',
      csr: 'poor',
      ssr: 'good',
      ssg: 'good',
      description: 'Sosyal medya paylaşım optimizasyonu',
      impact: 'medium'
    },
    {
      name: 'İçerik İndekslenebilirliği',
      csr: 'poor',
      ssr: 'good',
      ssg: 'good',
      description: 'Arama motorlarının içeriği ne kadar kolay tarayabildiği',
      impact: 'high'
    },
    {
      name: 'URL Yapısı',
      csr: 'warning',
      ssr: 'good',
      ssg: 'good',
      description: 'SEO dostu URL kalıpları ve yönlendirme',
      impact: 'medium'
    },
    {
      name: 'Yükleme Hızı',
      csr: 'poor',
      ssr: 'warning',
      ssg: 'good',
      description: 'Sayfa yükleme performansının sıralamalar üzerindeki etkisi',
      impact: 'high'
    },
    {
      name: 'Mobil Optimizasyon',
      csr: 'warning',
      ssr: 'good',
      ssg: 'good',
      description: 'Mobil öncelikli indeksleme uyumluluğu',
      impact: 'high'
    },
    {
      name: 'İç Bağlantılar',
      csr: 'warning',
      ssr: 'good',
      ssg: 'good',
      description: 'Navigasyon ve bağlantı yapısı etkinliği',
      impact: 'medium'
    },
    {
      name: 'Görsel Optimizasyonu',
      csr: 'warning',
      ssr: 'good',
      ssg: 'good',
      description: 'Alt etiketleri, lazy loading ve görsel SEO',
      impact: 'low'
    }
  ];

  const pageAnalyses: PageAnalysis[] = [
    {
      url: '/blog/react-server-components',
      title: 'React Server Components\'i Anlamak',
      renderStrategy: 'SSR',
      overallScore: 92,
      factors: {
        metaTags: 'good',
        structuredData: 'good',
        performance: 'good',
        accessibility: 'good',
        contentQuality: 'good'
      }
    },
    {
      url: '/urunler/kablosuz-kulaklik',
      title: 'Premium Kablosuz Kulaklık',
      renderStrategy: 'SSG',
      overallScore: 98,
      factors: {
        metaTags: 'good',
        structuredData: 'good',
        performance: 'good',
        accessibility: 'good',
        contentQuality: 'good'
      }
    },
    {
      url: '/panel',
      title: 'Kullanıcı Paneli',
      renderStrategy: 'CSR',
      overallScore: 65,
      factors: {
        metaTags: 'poor',
        structuredData: 'poor',
        performance: 'poor',
        accessibility: 'warning',
        contentQuality: 'warning'
      }
    },
    {
      url: '/blog/core-web-vitals',
      title: 'Core Web Vitals Optimizasyonu',
      renderStrategy: 'SSG',
      overallScore: 95,
      factors: {
        metaTags: 'good',
        structuredData: 'good',
        performance: 'good',
        accessibility: 'good',
        contentQuality: 'good'
      }
    }
  ];

  const getStatusIcon = (status: 'good' | 'warning' | 'poor') => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'poor':
        return <XCircle className="w-5 h-5 text-red-500" />;
    }
  };

  const getStatusColor = (status: 'good' | 'warning' | 'poor') => {
    switch (status) {
      case 'good':
        return 'text-green-600 bg-green-50';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50';
      case 'poor':
        return 'text-red-600 bg-red-50';
    }
  };

  const getImpactColor = (impact: 'high' | 'medium' | 'low') => {
    switch (impact) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'low':
        return 'bg-green-100 text-green-700';
    }
  };

  const recommendations = {
    CSR: [
      {
        title: 'Ön Render Uygulama',
        description: 'Arama motorları için sayfaları ön render etmek için Puppeteer veya Rendertron gibi araçları kullanın',
        priority: 'high',
        effort: 'medium'
      },
      {
        title: 'Meta Etiket Yönetimi Ekleme',
        description: 'React Helmet gibi kütüphaneler kullanarak dinamik meta etiketleri uygulayın',
        priority: 'high',
        effort: 'low'
      },
      {
        title: 'Sunucu Tarafı Analitik',
        description: 'Tarayıcı davranışını anlamak için SEO metriklerini sunucu tarafında takip edin',
        priority: 'medium',
        effort: 'high'
      }
    ],
    SSR: [
      {
        title: 'Bundle Bölme Optimizasyonu',
        description: 'İlk bundle boyutunu azaltmak için kod bölme uygulayın',
        priority: 'medium',
        effort: 'medium'
      },
      {
        title: 'Önbellek Stratejisi',
        description: 'Sunucu tarafında render edilen sayfalar için uygun önbellekleme uygulayın',
        priority: 'high',
        effort: 'medium'
      },
      {
        title: 'Yapılandırılmış Veri Geliştirme',
        description: 'Kapsamlı JSON-LD şema işaretlemesi ekleyin',
        priority: 'medium',
        effort: 'low'
      }
    ],
    SSG: [
      {
        title: 'Artımlı Yeniden Üretim',
        description: 'Dinamik içerik güncellemeleri için ISR uygulayın',
        priority: 'low',
        effort: 'medium'
      },
      {
        title: 'Gelişmiş Görsel Optimizasyonu',
        description: 'Lazy loading ile WebP ve AVIF format desteği uygulayın',
        priority: 'low',
        effort: 'low'
      },
      {
        title: 'İçerik Tazeliği',
        description: 'İçerik güncellemeleri için otomatik derlemeler kurun',
        priority: 'medium',
        effort: 'high'
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          SEO Analizi ve Optimizasyon
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Farklı render stratejilerinin arama motoru optimizasyonu üzerindeki etkilerini karşılaştıran kapsamlı SEO analizi
        </p>
      </div>

      {/* Navigation */}
      <div className="mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2">
          <div className="flex space-x-1">
            {[
              { id: 'factors', label: 'SEO Faktörleri', icon: FileText },
              { id: 'pages', label: 'Sayfa Analizi', icon: Globe },
              { id: 'recommendations', label: 'Öneriler', icon: TrendingUp }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setAnalysisType(tab.id as any)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 flex-1 justify-center ${
                    analysisType === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SEO Factors Analysis */}
      {analysisType === 'factors' && (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">SEO Faktör Karşılaştırması</h2>
            <p className="text-gray-600">Farklı render stratejilerinde temel SEO faktörlerinin analizi.</p>
          </div>

          <div className="space-y-4">
            {seoFactors.map((factor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{factor.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(factor.impact)}`}>
                          {factor.impact === 'high' ? 'yüksek' : factor.impact === 'medium' ? 'orta' : 'düşük'} etki
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{factor.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {(['CSR', 'SSR', 'SSG'] as const).map((strategy) => {
                      const status = factor[strategy.toLowerCase() as keyof typeof factor] as 'good' | 'warning' | 'poor';
                      return (
                        <div
                          key={strategy}
                          className={`p-4 rounded-xl border-2 ${
                            status === 'good' ? 'border-green-200 bg-green-50' :
                            status === 'warning' ? 'border-yellow-200 bg-yellow-50' :
                            'border-red-200 bg-red-50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900">{strategy}</span>
                            {getStatusIcon(status)}
                          </div>
                          <div className={`text-sm font-medium ${
                            status === 'good' ? 'text-green-700' :
                            status === 'warning' ? 'text-yellow-700' :
                            'text-red-700'
                          }`}>
                            {status === 'good' ? 'Optimize' :
                             status === 'warning' ? 'İyileştirme Gerekli' :
                             'Zayıf'}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Page Analysis */}
      {analysisType === 'pages' && (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Bireysel Sayfa Analizi</h2>
            <p className="text-gray-600">Farklı render stratejileri kullanan belirli sayfaların detaylı SEO analizi.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {pageAnalyses.map((page, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{page.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{page.url}</p>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        page.renderStrategy === 'CSR' ? 'bg-blue-100 text-blue-700' :
                        page.renderStrategy === 'SSR' ? 'bg-purple-100 text-purple-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {page.renderStrategy}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold ${
                      page.overallScore >= 90 ? 'text-green-600' :
                      page.overallScore >= 75 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {page.overallScore}
                    </div>
                    <div className="text-sm text-gray-600">SEO Skoru</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {Object.entries(page.factors).map(([factor, status]) => (
                    <div key={factor} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700 capitalize">
                        {factor === 'metaTags' ? 'Meta Etiketleri' :
                         factor === 'structuredData' ? 'Yapılandırılmış Veri' :
                         factor === 'performance' ? 'Performans' :
                         factor === 'accessibility' ? 'Erişilebilirlik' :
                         'İçerik Kalitesi'}
                      </span>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(status)}
                        <span className={`text-sm font-medium ${
                          status === 'good' ? 'text-green-600' :
                          status === 'warning' ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {status === 'good' ? 'İyi' :
                           status === 'warning' ? 'Uyarı' :
                           'Zayıf'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      {analysisType === 'recommendations' && (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Optimizasyon Önerileri</h2>
            <p className="text-gray-600">Her render stratejisi için SEO'yu iyileştirmek üzere uygulanabilir öneriler.</p>
          </div>

          <div className="space-y-8">
            {Object.entries(recommendations).map(([strategy, recs]) => (
              <div key={strategy} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    strategy === 'CSR' ? 'bg-blue-100' :
                    strategy === 'SSR' ? 'bg-purple-100' :
                    'bg-green-100'
                  }`}>
                    <Globe className={`w-6 h-6 ${
                      strategy === 'CSR' ? 'text-blue-600' :
                      strategy === 'SSR' ? 'text-purple-600' :
                      'text-green-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{strategy} Önerileri</h3>
                    <p className="text-gray-600">{strategy.toLowerCase()} uygulamaları için özel optimizasyonlar</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {recs.map((rec, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{rec.title}</h4>
                        <div className="flex space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            rec.priority === 'high' ? 'bg-red-100 text-red-700' :
                            rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {rec.priority === 'high' ? 'yüksek' : rec.priority === 'medium' ? 'orta' : 'düşük'} öncelik
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            rec.effort === 'high' ? 'bg-red-100 text-red-700' :
                            rec.effort === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {rec.effort === 'high' ? 'yüksek' : rec.effort === 'medium' ? 'orta' : 'düşük'} efor
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{rec.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Summary Section */}
      <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">SEO Analizi Özeti</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">SSG SEO'da Öncü</h3>
            <p className="text-sm text-gray-600">
              Statik üretim mükemmel taranabilirlik ve hızlı yükleme süreleriyle en iyi SEO performansını sağlıyor.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">SSR Dengeli Seçim</h3>
            <p className="text-sm text-gray-600">
              Sunucu tarafı render dinamik içerik yeteneklerini korurken iyi SEO sunuyor.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Eye className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">CSR Geliştirme Gerekiyor</h3>
            <p className="text-sm text-gray-600">
              İstemci tarafı render etkili rekabet edebilmek için ön render gibi ek SEO stratejileri gerektiriyor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOAnalysis;