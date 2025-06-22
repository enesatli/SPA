import React, { useState } from 'react';
import { ShoppingCart, Star, Heart, Filter, Search, Grid, List, TrendingUp, Clock, Zap } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
  renderStrategy: 'CSR' | 'SSR' | 'SSG';
  loadTime: number;
  seoScore: number;
}

const EcommerceSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [renderStrategy, setRenderStrategy] = useState<'CSR' | 'SSR' | 'SSG'>('CSR');
  const [isLoading, setIsLoading] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Kablosuz Kulaklık",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 124,
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "elektronik",
      isNew: true,
      renderStrategy: 'CSR',
      loadTime: 2.1,
      seoScore: 72
    },
    {
      id: 2,
      name: "Akıllı Fitness Saati",
      price: 249,
      rating: 4.6,
      reviews: 89,
      image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "elektronik",
      isFeatured: true,
      renderStrategy: 'SSR',
      loadTime: 1.3,
      seoScore: 88
    },
    {
      id: 3,
      name: "Ergonomik Ofis Koltuğu",
      price: 449,
      originalPrice: 599,
      rating: 4.9,
      reviews: 203,
      image: "https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "mobilya",
      renderStrategy: 'SSG',
      loadTime: 0.7,
      seoScore: 95
    },
    {
      id: 4,
      name: "Profesyonel Kamera Lensi",
      price: 899,
      rating: 4.7,
      reviews: 56,
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "elektronik",
      renderStrategy: 'CSR',
      loadTime: 2.4,
      seoScore: 69
    },
    {
      id: 5,
      name: "Modern Masa Lambası",
      price: 129,
      rating: 4.4,
      reviews: 78,
      image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "mobilya",
      isNew: true,
      renderStrategy: 'SSR',
      loadTime: 1.1,
      seoScore: 91
    },
    {
      id: 6,
      name: "Kablosuz Şarj Pedi",
      price: 49,
      originalPrice: 79,
      rating: 4.2,
      reviews: 145,
      image: "https://images.pexels.com/photos/4526430/pexels-photo-4526430.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "elektronik",
      renderStrategy: 'SSG',
      loadTime: 0.9,
      seoScore: 93
    }
  ];

  const categories = [
    { id: 'all', name: 'Tüm Ürünler' },
    { id: 'elektronik', name: 'Elektronik' },
    { id: 'mobilya', name: 'Mobilya' }
  ];

  const simulateRenderChange = (strategy: 'CSR' | 'SSR' | 'SSG') => {
    setIsLoading(true);
    setRenderStrategy(strategy);
    
    const loadingTimes = { CSR: 2000, SSR: 1200, SSG: 600 };
    
    setTimeout(() => {
      setIsLoading(false);
    }, loadingTimes[strategy]);
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getLoadTimeColor = (time: number) => {
    if (time <= 1) return 'text-green-600';
    if (time <= 2) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          E-ticaret Performans Analizi
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Farklı render stratejilerinin ürün keşfi, yükleme hızı ve SEO sıralamaları üzerindeki etkilerini karşılaştırın
        </p>
      </div>

      {/* Render Strategy Selector */}
      <div className="mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Render Stratejisini Seçin</h2>
            <div className="flex space-x-2">
              {(['CSR', 'SSR', 'SSG'] as const).map((strategy) => (
                <button
                  key={strategy}
                  onClick={() => simulateRenderChange(strategy)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    renderStrategy === strategy
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {strategy}
                </button>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">Ort. Yükleme Süresi</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {(filteredProducts.reduce((sum, p) => sum + p.loadTime, 0) / filteredProducts.length).toFixed(1)}s
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">Ort. SEO Skoru</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {Math.round(filteredProducts.reduce((sum, p) => sum + p.seoScore, 0) / filteredProducts.length)}/100
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">Ürünler</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {filteredProducts.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{renderStrategy} stratejisi ile ürünler yükleniyor...</p>
        </div>
      ) : (
        <>
          {/* Filters and Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden ${
                  viewMode === 'list' ? 'flex items-center' : ''
                }`}
              >
                <div className={`${viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-square'} bg-gray-100 relative overflow-hidden`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex flex-col space-y-2">
                    {product.isNew && (
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        YENİ
                      </span>
                    )}
                    {product.isFeatured && (
                      <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        ÖNE ÇIKAN
                      </span>
                    )}
                  </div>
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900 text-lg hover:text-blue-600 transition-colors cursor-pointer">
                      {product.name}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} değerlendirme)
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ₺{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ₺{product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Yükleme Süresi</div>
                      <div className={`text-sm font-semibold ${getLoadTimeColor(product.loadTime)}`}>
                        {product.loadTime}s
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">SEO Skoru</div>
                      <div className={`text-sm font-semibold ${getPerformanceColor(product.seoScore)}`}>
                        {product.seoScore}/100
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button className="flex-1 bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Sepete Ekle</span>
                    </button>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.renderStrategy === 'CSR' ? 'bg-blue-100 text-blue-700' :
                      product.renderStrategy === 'SSR' ? 'bg-purple-100 text-purple-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {product.renderStrategy}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Performance Summary */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Performans Analizi Özeti</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">SSG Performansı</h3>
                <p className="text-sm text-gray-600">
                  Statik üretim, ürün sayfaları için en hızlı yükleme süreleri ve en yüksek SEO skorları sağlıyor
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">SSR Dengesi</h3>
                <p className="text-sm text-gray-600">
                  Sunucu tarafı render, dinamik ürün verileri için makul performansla iyi SEO sunuyor
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">CSR Etkileşimi</h3>
                <p className="text-sm text-gray-600">
                  İstemci tarafı render zengin filtreleme ve etkileşimler sağlıyor ancak ilk SEO'yu etkileyebiliyor
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EcommerceSection;