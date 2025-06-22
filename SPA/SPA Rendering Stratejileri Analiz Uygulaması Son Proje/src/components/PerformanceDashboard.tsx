import React, { useState, useEffect } from 'react';
import { BarChart3, Zap, Clock, Eye, TrendingUp, TrendingDown, Gauge, Globe, Smartphone, Monitor, Tablet } from 'lucide-react';

interface PerformanceMetric {
  name: string;
  csr: number;
  ssr: number;
  ssg: number;
  unit: string;
  description: string;
  higherIsBetter: boolean;
}

interface DeviceMetrics {
  device: string;
  icon: React.ElementType;
  csr: { fcp: number; lcp: number; cls: number; fid: number };
  ssr: { fcp: number; lcp: number; cls: number; fid: number };
  ssg: { fcp: number; lcp: number; cls: number; fid: number };
}

const PerformanceDashboard: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<string>('overview');
  const [selectedDevice, setSelectedDevice] = useState<string>('desktop');

  const coreMetrics: PerformanceMetric[] = [
    {
      name: 'İlk İçerik Boyama',
      csr: 2.8,
      ssr: 1.2,
      ssg: 0.8,
      unit: 's',
      description: 'İlk içeriğin ekranda görünme süresi',
      higherIsBetter: false
    },
    {
      name: 'En Büyük İçerik Boyama',
      csr: 4.1,
      ssr: 2.3,
      ssg: 1.6,
      unit: 's',
      description: 'En büyük içerik öğesinin render edilme süresi',
      higherIsBetter: false
    },
    {
      name: 'Kümülatif Düzen Kayması',
      csr: 0.15,
      ssr: 0.08,
      ssg: 0.02,
      unit: '',
      description: 'Sayfa yüklemesi sırasında görsel kararlılık',
      higherIsBetter: false
    },
    {
      name: 'İlk Girdi Gecikmesi',
      csr: 85,
      ssr: 45,
      ssg: 12,
      unit: 'ms',
      description: 'İlk etkileşimden tarayıcı yanıtına kadar süre',
      higherIsBetter: false
    },
    {
      name: 'Etkileşime Hazır Olma Süresi',
      csr: 3.2,
      ssr: 2.1,
      ssg: 1.4,
      unit: 's',
      description: 'Sayfanın tamamen etkileşimli olma süresi',
      higherIsBetter: false
    },
    {
      name: 'Hız İndeksi',
      csr: 3.8,
      ssr: 2.0,
      ssg: 1.3,
      unit: 's',
      description: 'İçeriğin görsel olarak ne kadar hızlı gösterildiği',
      higherIsBetter: false
    }
  ];

  const seoMetrics: PerformanceMetric[] = [
    {
      name: 'Lighthouse SEO Skoru',
      csr: 75,
      ssr: 92,
      ssg: 98,
      unit: '/100',
      description: 'Genel SEO kalite skoru',
      higherIsBetter: true
    },
    {
      name: 'Meta Etiket Kapsamı',
      csr: 68,
      ssr: 95,
      ssg: 98,
      unit: '%',
      description: 'Gerekli meta etiketlerin mevcut olma yüzdesi',
      higherIsBetter: true
    },
    {
      name: 'Yapılandırılmış Veri Skoru',
      csr: 45,
      ssr: 88,
      ssg: 95,
      unit: '/100',
      description: 'Yapılandırılmış veri uygulamasının kalitesi',
      higherIsBetter: true
    },
    {
      name: 'Taranabilirlik Skoru',
      csr: 62,
      ssr: 94,
      ssg: 98,
      unit: '/100',
      description: 'Arama motorlarının içeriği ne kadar kolay tarayabildiği',
      higherIsBetter: true
    }
  ];

  const deviceMetrics: DeviceMetrics[] = [
    {
      device: 'Masaüstü',
      icon: Monitor,
      csr: { fcp: 1.8, lcp: 3.2, cls: 0.12, fid: 65 },
      ssr: { fcp: 0.9, lcp: 1.8, cls: 0.06, fid: 35 },
      ssg: { fcp: 0.6, lcp: 1.2, cls: 0.01, fid: 8 }
    },
    {
      device: 'Mobil',
      icon: Smartphone,
      csr: { fcp: 3.2, lcp: 4.8, cls: 0.18, fid: 125 },
      ssr: { fcp: 1.5, lcp: 2.8, cls: 0.10, fid: 65 },
      ssg: { fcp: 1.0, lcp: 2.0, cls: 0.03, fid: 18 }
    },
    {
      device: 'Tablet',
      icon: Tablet,
      csr: { fcp: 2.4, lcp: 3.8, cls: 0.14, fid: 85 },
      ssr: { fcp: 1.1, lcp: 2.2, cls: 0.07, fid: 45 },
      ssg: { fcp: 0.8, lcp: 1.6, cls: 0.02, fid: 12 }
    }
  ];

  const getScoreColor = (value: number, higherIsBetter: boolean, isMainValue = false) => {
    const threshold = isMainValue ? [90, 75] : [2.5, 1.5];
    
    if (isMainValue) {
      if (higherIsBetter) {
        if (value >= threshold[0]) return 'text-green-600';
        if (value >= threshold[1]) return 'text-yellow-600';
        return 'text-red-600';
      } else {
        if (value <= 1) return 'text-green-600';
        if (value <= 2.5) return 'text-yellow-600';
        return 'text-red-600';
      }
    }
    
    if (higherIsBetter) {
      if (value >= 90) return 'bg-green-500';
      if (value >= 75) return 'bg-yellow-500';
      return 'bg-red-500';
    } else {
      if (value <= 1) return 'bg-green-500';
      if (value <= 2.5) return 'bg-yellow-500';
      return 'bg-red-500';
    }
  };

  const getPercentageForBar = (value: number, metric: PerformanceMetric) => {
    if (metric.higherIsBetter) {
      return value;
    } else {
      const maxValue = Math.max(metric.csr, metric.ssr, metric.ssg) * 1.2;
      return ((maxValue - value) / maxValue) * 100;
    }
  };

  const renderMetricComparison = (metrics: PerformanceMetric[]) => (
    <div className="space-y-6">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.name}</h3>
            <p className="text-sm text-gray-600">{metric.description}</p>
          </div>
          
          <div className="space-y-4">
            {(['CSR', 'SSR', 'SSG'] as const).map((strategy) => {
              const value = metric[strategy.toLowerCase() as keyof PerformanceMetric] as number;
              const percentage = getPercentageForBar(value, metric);
              
              return (
                <div key={strategy} className="flex items-center space-x-4">
                  <div className="w-12 text-sm font-medium text-gray-700">{strategy}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${getScoreColor(value, metric.higherIsBetter)}`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    ></div>
                  </div>
                  <div className={`w-20 text-right font-semibold ${getScoreColor(value, metric.higherIsBetter, true)}`}>
                    {value}{metric.unit}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Performans Analitik Panosu
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Render stratejisi performansının Core Web Vitals ve SEO metrikleri üzerindeki etkisinin kapsamlı analizi
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2">
          <div className="flex space-x-1">
            {[
              { id: 'overview', label: 'Genel Bakış', icon: BarChart3 },
              { id: 'core-vitals', label: 'Core Web Vitals', icon: Zap },
              { id: 'seo', label: 'SEO Metrikleri', icon: Eye },
              { id: 'devices', label: 'Cihaz Performansı', icon: Smartphone }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedMetric(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    selectedMetric === tab.id
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

      {/* Overview Section */}
      {selectedMetric === 'overview' && (
        <div className="space-y-8">
          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">İstemci Tarafı Render</h3>
                  <p className="text-sm text-gray-600">Zengin etkileşim</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Ort. Yükleme Süresi:</span>
                  <span className="font-semibold text-red-600">2.8s</span>
                </div>
                <div className="flex justify-between">
                  <span>SEO Skoru:</span>
                  <span className="font-semibold text-yellow-600">75/100</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Sunucu Tarafı Render</h3>
                  <p className="text-sm text-gray-600">Dengeli yaklaşım</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Ort. Yükleme Süresi:</span>
                  <span className="font-semibold text-yellow-600">1.2s</span>
                </div>
                <div className="flex justify-between">
                  <span>SEO Skoru:</span>
                  <span className="font-semibold text-green-600">92/100</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Statik Site Üretimi</h3>
                  <p className="text-sm text-gray-600">Maksimum performans</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Ort. Yükleme Süresi:</span>
                  <span className="font-semibold text-green-600">0.8s</span>
                </div>
                <div className="flex justify-between">
                  <span>SEO Skoru:</span>
                  <span className="font-semibold text-green-600">98/100</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Temel Performans Bulguları</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">SSG Performansta Öne Çıkıyor</h4>
                    <p className="text-gray-600 text-sm">Statik üretim tüm Core Web Vitals metriklerinde tutarlı olarak en iyi sonuçları gösteriyor.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">SSR Performans ve Esnekliği Dengeler</h4>
                    <p className="text-gray-600 text-sm">Sunucu tarafı render dinamik içerik yeteneklerini korurken iyi performans sunuyor.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">CSR SEO Zorluklarını Gösteriyor</h4>
                    <p className="text-gray-600 text-sm">İstemci tarafı render önemli SEO ve ilk yükleme performans sorunlarıyla karşılaşıyor.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mobil Performans Farkı</h4>
                    <p className="text-gray-600 text-sm">Stratejiler arasındaki performans farkları mobil cihazlarda en belirgin şekilde görülüyor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Core Web Vitals Section */}
      {selectedMetric === 'core-vitals' && (
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Core Web Vitals Analizi</h2>
            <p className="text-gray-600">Google'ın kullanıcı deneyimi kalitesini ölçmek için kullandığı temel metrikler.</p>
          </div>
          {renderMetricComparison(coreMetrics)}
        </div>
      )}

      {/* SEO Metrics Section */}
      {selectedMetric === 'seo' && (
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">SEO Performans Analizi</h2>
            <p className="text-gray-600">Arama motoru optimizasyonu metrikleri ve içerik keşfedilebilirlik skorları.</p>
          </div>
          {renderMetricComparison(seoMetrics)}
        </div>
      )}

      {/* Device Performance Section */}
      {selectedMetric === 'devices' && (
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Cihaza Özel Performans</h2>
            <p className="text-gray-600 mb-6">Farklı cihaz türleri ve ekran boyutlarında performans varyasyonları.</p>
            
            {/* Device Selector */}
            <div className="flex space-x-2 mb-6">
              {deviceMetrics.map((device) => {
                const Icon = device.icon;
                return (
                  <button
                    key={device.device}
                    onClick={() => setSelectedDevice(device.device.toLowerCase())}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedDevice === device.device.toLowerCase()
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{device.device}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Device-Specific Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['fcp', 'lcp', 'cls', 'fid'].map((metric) => {
              const currentDevice = deviceMetrics.find(d => d.device.toLowerCase() === selectedDevice)!;
                if (!currentDevice) {
    console.warn("Selected device not found in deviceMetrics:", selectedDevice);
    return null;
  }
              const metricNames = {
                fcp: 'İlk İçerik Boyama',
                lcp: 'En Büyük İçerik Boyama',
                cls: 'Kümülatif Düzen Kayması',
                fid: 'İlk Girdi Gecikmesi'
              };
              const units = {
                fcp: 's',
                lcp: 's',
                cls: '',
                fid: 'ms'
              };

              return (
                 <div key={metric} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 className="font-semibold text-gray-900 mb-4">{metricNames[metric as keyof typeof metricNames]}</h3>
      <div className="space-y-3">
        {(['CSR', 'SSR', 'SSG'] as const).map((strategy) => {
          const strategyData = currentDevice[strategy.toLowerCase() as keyof DeviceMetrics];
          const value = strategyData?.[metric as keyof typeof strategyData] ?? 0; // fallback: 0
          return (
            <div key={strategy} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{strategy}</span>
              <span className={`font-semibold ${getScoreColor(value, false, true)}`}>
                {value}{units[metric as keyof typeof units]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceDashboard;