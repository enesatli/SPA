import React, { useState } from 'react';
import { BarChart3, Globe, Zap, Search, ShoppingBag, BookOpen, Settings, Home } from 'lucide-react';
import HomePage from './components/HomePage';
import BlogSection from './components/BlogSection';
import EcommerceSection from './components/EcommerceSection';
import PerformanceDashboard from './components/PerformanceDashboard';
import SEOAnalysis from './components/SEOAnalysis';
import Documentation from './components/Documentation';

type ActiveSection = 'home' | 'blog' | 'ecommerce' | 'performance' | 'seo' | 'docs';

function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');

  const navigationItems = [
    { id: 'home' as ActiveSection, label: 'Ana Sayfa', icon: Home },
    { id: 'blog' as ActiveSection, label: 'Blog Demoları', icon: BookOpen },
    { id: 'ecommerce' as ActiveSection, label: 'E-ticaret', icon: ShoppingBag },
    { id: 'performance' as ActiveSection, label: 'Performans', icon: BarChart3 },
    { id: 'seo' as ActiveSection, label: 'SEO Analizi', icon: Search },
    { id: 'docs' as ActiveSection, label: 'Dokümantasyon', icon: Settings },
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage onNavigate={setActiveSection} />;
      case 'blog':
        return <BlogSection />;
      case 'ecommerce':
        return <EcommerceSection />;
      case 'performance':
        return <PerformanceDashboard />;
      case 'seo':
        return <SEOAnalysis />;
      case 'docs':
        return <Documentation />;
      default:
        return <HomePage onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SPA Render Analizi</h1>
                <p className="text-xs text-gray-600">SEO ve Performans Araştırması</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-700 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <select
                value={activeSection}
                onChange={(e) => setActiveSection(e.target.value as ActiveSection)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {navigationItems.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {renderActiveSection()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-900 font-semibold">SPA Render Analizi</span>
            </div>
            <div className="text-sm text-gray-600">
              SPA render stratejilerinin SEO ve performans etkilerini analiz eden araştırma projesi
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;