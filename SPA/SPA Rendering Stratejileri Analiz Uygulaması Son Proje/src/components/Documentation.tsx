import React, { useState } from 'react';
import { BookOpen, Code, Lightbulb, Target, BarChart3, Search, Globe, Server, FileText, ExternalLink } from 'lucide-react';

const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');

  const sections = [
    { id: 'overview', title: 'Proje Genel Bakış', icon: Target },
    { id: 'methodology', title: 'Araştırma Metodolojisi', icon: BarChart3 },
    { id: 'csr', title: 'İstemci Tarafı Render', icon: Globe },
    { id: 'ssr', title: 'Sunucu Tarafı Render', icon: Server },
    { id: 'ssg', title: 'Statik Site Üretimi', icon: FileText },
    { id: 'findings', title: 'Temel Bulgular', icon: Lightbulb },
    { id: 'implementation', title: 'Uygulama Rehberi', icon: Code }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Proje Genel Bakış</h2>
              <p className="text-lg text-gray-600 mb-6">
                Bu kapsamlı araştırma projesi, farklı render stratejilerinin Tek Sayfa Uygulaması (SPA) performansı, SEO etkinliği ve kullanıcı deneyimi metrikleri üzerindeki etkilerini analiz eder.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Araştırma Hedefleri</h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>CSR, SSR ve SSG yaklaşımları arasında performans metriklerini karşılaştırmak</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>SEO etkinliği ve arama motoru görünürlüğünü analiz etmek</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Core Web Vitals ve kullanıcı deneyimi etkisini ölçmek</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Her strateji için uygulanabilir öneriler sunmak</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Analiz Kapsamı</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Blog içerik yönetim sistemleri</li>
                  <li>• E-ticaret ürün katalogları</li>
                  <li>• Dinamik kullanıcı panelleri</li>
                  <li>• Statik pazarlama sayfaları</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Ölçüm Araçları</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Google Lighthouse denetimleri</li>
                  <li>• WebPageTest analizi</li>
                  <li>• Search Console verileri</li>
                  <li>• Core Web Vitals izleme</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'methodology':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Araştırma Metodolojisi</h2>
              <p className="text-lg text-gray-600 mb-6">
                Araştırmamız render stratejilerini birden fazla boyutta analiz etmek ve karşılaştırmak için sistematik bir yaklaşım benimser.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Test Çerçevesi</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Performans Testi</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Lighthouse CI entegrasyonu</li>
                      <li>• Gerçek dünya cihaz testi</li>
                      <li>• Ağ kısıtlama</li>
                      <li>• Tekrarlı ölçümler</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">SEO Analizi</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Googlebot simülasyonu</li>
                      <li>• Meta etiket doğrulama</li>
                      <li>• Yapılandırılmış veri testi</li>
                      <li>• Taranabilirlik değerlendirmesi</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-2">Kullanıcı Deneyimi</h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Core Web Vitals</li>
                      <li>• Erişilebilirlik denetimleri</li>
                      <li>• Mobil optimizasyon</li>
                      <li>• Etkileşim takibi</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Test Senaryoları</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">Senaryo 1: Blog İçeriği</h4>
                    <p className="text-gray-600 text-sm">
                      Dinamik yorumlar, sosyal paylaşım ve ilgili içerik önerileri içeren statik blog yazıları.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">Senaryo 2: E-ticaret Kataloğu</h4>
                    <p className="text-gray-600 text-sm">
                      Filtreleme, arama işlevselliği ve dinamik fiyat güncellemeleri içeren ürün listeleri.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">Senaryo 3: Kullanıcı Paneli</h4>
                    <p className="text-gray-600 text-sm">
                      Gerçek zamanlı veri güncellemeleri ve etkileşimli bileşenler içeren kişiselleştirilmiş arayüzler.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'csr':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">İstemci Tarafı Render (CSR)</h2>
              <p className="text-lg text-gray-600 mb-6">
                İçeriğin ilk sayfa yüklemesinden sonra JavaScript kullanarak tarayıcıda render edildiği geleneksel SPA yaklaşımı.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Avantajlar</h3>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>İlk yüklemeden sonra hızlı navigasyon</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Zengin etkileşimli kullanıcı deneyimleri</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Azaltılmış sunucu işleme yükü</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Daha kolay önbellekleme stratejileri</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Zorluklar</h3>
                <ul className="space-y-2 text-red-800">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Yavaş ilk sayfa yüklemeleri</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>SEO ve sosyal medya paylaşım sorunları</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>JavaScript yüklemesi sırasında boş sayfa</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Düşük performanslı cihazlarda zayıf performans</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performans Metrikleri</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-1">2.8s</div>
                  <div className="text-sm text-gray-600">İlk İçerik Boyama</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-1">4.1s</div>
                  <div className="text-sm text-gray-600">En Büyük İçerik Boyama</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">75</div>
                  <div className="text-sm text-gray-600">SEO Skoru</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-1">85ms</div>
                  <div className="text-sm text-gray-600">İlk Girdi Gecikmesi</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Optimizasyon Stratejileri</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">Ön Render</h4>
                  <p className="text-blue-800 text-sm">
                    Arama motorları ve sosyal medya tarayıcıları için statik HTML üretmek üzere Puppeteer gibi araçları veya Prerender.io gibi hizmetleri kullanın.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">Kod Bölme</h4>
                  <p className="text-blue-800 text-sm">
                    İlk bundle boyutunu azaltmak ve yükleme performansını iyileştirmek için rota tabanlı ve bileşen tabanlı kod bölme uygulayın.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">Aşamalı Geliştirme</h4>
                  <p className="text-blue-800 text-sm">
                    JavaScript olmadan temel işlevsellik sağlayın ve JavaScript yüklendikten sonra etkileşimli özelliklerle geliştirin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ssr':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sunucu Tarafı Render (SSR)</h2>
              <p className="text-lg text-gray-600 mb-6">
                Sayfaların her istek için sunucuda render edildiği ve anında içerik görünürlüğü sağlayan dinamik yaklaşım.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Avantajlar</h3>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Daha hızlı İlk İçerik Boyama</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mükemmel SEO performansı</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Daha iyi sosyal medya paylaşımı</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>JavaScript olmadan çalışır</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-4">Dikkat Edilecekler</h3>
                <ul className="space-y-2 text-orange-800">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Yüksek sunucu kaynak kullanımı</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Daha karmaşık önbellekleme stratejileri</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Yavaş sayfa arası navigasyon</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Hidrasyon karmaşıklığı</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performans Metrikleri</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">1.2s</div>
                  <div className="text-sm text-gray-600">İlk İçerik Boyama</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">2.3s</div>
                  <div className="text-sm text-gray-600">En Büyük İçerik Boyama</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">92</div>
                  <div className="text-sm text-gray-600">SEO Skoru</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">45ms</div>
                  <div className="text-sm text-gray-600">İlk Girdi Gecikmesi</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Uygulama En İyi Uygulamaları</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-medium text-purple-900 mb-2">Verimli Veri Getirme</h4>
                  <p className="text-purple-800 text-sm">
                    Sunucu yanıt sürelerini minimize etmek için paralel veri getirme ve veritabanı sorgu optimizasyonu uygulayın.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-medium text-purple-900 mb-2">Akıllı Önbellekleme</h4>
                  <p className="text-purple-800 text-sm">
                    Optimal performans için CDN, sunucu tarafı ve tarayıcı önbelleklemesi dahil çok katmanlı önbellekleme stratejileri kullanın.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-medium text-purple-900 mb-2">Hidrasyon Optimizasyonu</h4>
                  <p className="text-purple-800 text-sm">
                    Seçici hidrasyon ve aşamalı geliştirme teknikleriyle hidrasyon yükünü minimize edin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ssg':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Statik Site Üretimi (SSG)</h2>
              <p className="text-lg text-gray-600 mb-6">
                Sayfaların derleme zamanında üretildiği ve maksimum performans ile SEO faydaları sağlayan ön render yaklaşımı.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Avantajlar</h3>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mümkün olan en hızlı yükleme süreleri</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mükemmel SEO performansı</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>CDN dostu mimari</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Gelişmiş güvenlik</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-4">Sınırlamalar</h3>
                <ul className="space-y-2 text-yellow-800">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Daha fazla içerikle artan derleme süreleri</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sınırlı gerçek zamanlı dinamik içerik</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Güncellemeler için yeniden derleme gerekir</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Yüksek kişiselleştirilmiş içerik için karmaşık</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performans Metrikleri</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">0.8s</div>
                  <div className="text-sm text-gray-600">İlk İçerik Boyama</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">1.6s</div>
                  <div className="text-sm text-gray-600">En Büyük İçerik Boyama</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">98</div>
                  <div className="text-sm text-gray-600">SEO Skoru</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">12ms</div>
                  <div className="text-sm text-gray-600">İlk Girdi Gecikmesi</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Gelişmiş Teknikler</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-900 mb-2">Artımlı Statik Yeniden Üretim (ISR)</h4>
                  <p className="text-green-800 text-sm">
                    Tam yeniden derlemeler olmadan içerik güncellemek için statik üretimi talep üzerine yeniden üretimle birleştirin.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-900 mb-2">Hibrit Render</h4>
                  <p className="text-green-800 text-sm">
                    Kişiselleştirilmiş bölümler için istemci tarafı veri getirme kullanarak statik ve dinamik içeriği karıştırın.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-900 mb-2">Edge Computing</h4>
                  <p className="text-green-800 text-sm">
                    Statik site performans faydalarını korurken dinamik özellikler için edge fonksiyonlarından yararlanın.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'findings':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Temel Araştırma Bulguları</h2>
              <p className="text-lg text-gray-600 mb-6">
                Üç render stratejisini birden fazla performans ve SEO boyutunda karşılaştıran kapsamlı analiz sonuçları.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Performans Özeti</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">SSG Kazanan</h4>
                  <p className="text-sm text-gray-600">
                    Tüm Core Web Vitals metriklerinde ve SEO skorlarında tutarlı olarak en iyi performansı gösteriyor
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Server className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">SSR Dengeli</h4>
                  <p className="text-sm text-gray-600">
                    Dinamik içerik gereksinimleri için esneklikle iyi performans sunuyor
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">CSR Zorlukları</h4>
                  <p className="text-sm text-gray-600">
                    Rekabetçi performans için önemli optimizasyon gerektiriyor
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Web Vitals Analizi</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">İlk İçerik Boyama</h4>
                      <p className="text-sm text-gray-600">İlk görünür içeriğe kadar süre</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">SSG: 0.8s | SSR: 1.2s | CSR: 2.8s</div>
                      <div className="text-xs text-green-600">SSG, CSR'den %65 daha hızlı</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">SEO Performansı</h4>
                      <p className="text-sm text-gray-600">Arama motoru optimizasyon skoru</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">SSG: 98/100 | SSR: 92/100 | CSR: 75/100</div>
                      <div className="text-xs text-green-600">SSG, CSR'den %31 daha yüksek</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cihaza Özel Bulgular</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Masaüstü Performansı</h4>
                    <p className="text-sm text-blue-800">
                      Tüm stratejiler masaüstünde makul performans gösteriyor, SSG CSR'den 2x daha hızlı yükleniyor.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-medium text-orange-900 mb-2">Mobil Performansı</h4>
                    <p className="text-sm text-orange-800">
                      Performans farkları mobil cihazlarda önemli ölçüde genişliyor, CSR SSG'den 3x daha yavaş FCP gösteriyor.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Ağ Koşulları</h4>
                    <p className="text-sm text-green-800">
                      SSG tüm ağ koşullarında tutarlı performans sürdürürken, CSR hızla bozuluyor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO Etki Analizi</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-medium text-green-900 mb-2">Arama Motoru Tarama</h4>
                    <p className="text-sm text-green-800">
                      SSG ve SSR sayfaları anında taranabilirken, CSR optimal indeksleme için ek ön render kurulumu gerektiriyor.
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-medium text-yellow-900 mb-2">Sosyal Medya Paylaşımı</h4>
                    <p className="text-sm text-yellow-800">
                      Dinamik meta etiketleri SSR ve SSG ile mükemmel çalışıyor, ancak CSR uygulamaları için özel işlem gerektiriyor.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-900 mb-2">İçerik Tazeliği</h4>
                    <p className="text-sm text-blue-800">
                      SSR gerçek zamanlı içerik güncellemeleri sağlıyor, SSG yeniden derleme döngüleri gerektiriyor ve CSR anında güncellemeler sunuyor ancak zayıf ilk SEO.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'implementation':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Uygulama Rehberi</h2>
              <p className="text-lg text-gray-600 mb-6">
                Belirli kullanım durumları ve gereksinimlere dayalı her render stratejisini uygulamak için pratik öneriler.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Karar Çerçevesi</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">SSG'yi Şu Durumlarda Seçin:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• İçerik seyrek değişiyor</li>
                    <li>• SEO kritik</li>
                    <li>• Maksimum performans gerekli</li>
                    <li>• Global içerik dağıtımı</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">SSR'yi Şu Durumlarda Seçin:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Dinamik içerik gerekli</li>
                    <li>• Kişiselleştirme gerekli</li>
                    <li>• Gerçek zamanlı veri güncellemeleri</li>
                    <li>• Dengeli performans/esneklik</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">CSR'yi Şu Durumlarda Seçin:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Zengin etkileşim gerekli</li>
                    <li>• Özel/kimlik doğrulamalı içerik</li>
                    <li>• Karmaşık durum yönetimi</li>
                    <li>• SEO daha az önemli</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Teknik Uygulama</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Modern Çerçeveler</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong className="text-green-600">SSG:</strong> Next.js, Gatsby, Nuxt.js, SvelteKit
                      </div>
                      <div>
                        <strong className="text-purple-600">SSR:</strong> Next.js, Nuxt.js, SvelteKit, Remix
                      </div>
                      <div>
                        <strong className="text-blue-600">CSR:</strong> Create React App, Vue CLI, Angular CLI
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Hibrit Yaklaşımlar</h4>
                    <p className="text-sm text-gray-600">
                      Stratejileri birleştirmeyi düşünün: pazarlama sayfaları için SSG, dinamik içerik için SSR ve etkileşimli özellikler için CSR.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Performans Optimizasyonu</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Evrensel Optimizasyonlar</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Kod bölme ve lazy loading uygulayın</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Modern formatlarla görselleri optimize edin</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Statik varlık dağıtımı için CDN kullanın</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Uygun önbellekleme stratejileri uygulayın</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Stratejiye Özel</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>SSG: Dinamik güncellemeler için ISR uygulayın</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>SSR: Sunucu yanıt sürelerini optimize edin</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>CSR: SEO için ön render ekleyin</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Core Web Vitals'ı sürekli izleyin</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Gelecek Düşünceleri</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Yeni Teknolojiler</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Edge computing ve edge fonksiyonları</li>
                      <li>• Streaming SSR ve React 18 özellikleri</li>
                      <li>• Progressive Web App yetenekleri</li>
                      <li>• Performans için Web Assembly</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">İzleme ve Analitik</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Gerçek Kullanıcı İzleme (RUM)</li>
                      <li>• Core Web Vitals takibi</li>
                      <li>• SEO performans izleme</li>
                      <li>• İş etkisi ölçümü</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Araştırma Dokümantasyonu
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          SPA render stratejisi araştırma metodolojimiz, bulgularımız ve uygulama rehberlerimizin kapsamlı dokümantasyonu
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sticky top-8">
            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{section.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;