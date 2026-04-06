'use client';

import { useState, useEffect } from 'react';
import { Language } from '@/lib/i18n';
import { LanguageContext } from '@/lib/language-context';
import { getLocalizedPath, normalizeBasePath } from '@/lib/routeLocaleMap';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import AIChatCenter from '@/components/shared/AIChatCenter';
import StickyMobileCTA from '@/components/shared/StickyMobileCTA';
import ExitIntentPopup from '@/components/shared/ExitIntentPopup';
import CookieBanner from '@/components/shared/CookieBanner';
import SplashScreen from '@/components/shared/SplashScreen';
import SEOBreadcrumbs from '@/components/shared/SEOBreadcrumbs';

interface SiteShellProps {
  language: Language;
  children: React.ReactNode;
}

const SiteShell = ({ language, children }: SiteShellProps) => {
  const [showSplash, setShowSplash] = useState(false);
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    const splashShown = sessionStorage.getItem('splashShown');
    if (splashShown) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem('splashShown', 'true');
    setShowSplash(false);
  };

  const langPrefix = language === 'en' ? '/en' : '';

  const handleLanguageChange = (lang: Language) => {
    const currentBasePath = normalizeBasePath(window.location.pathname);
    const localizedPath = getLocalizedPath(currentBasePath, lang);
    window.location.href = localizedPath;
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <LanguageContext.Provider value={{ langPrefix }}>
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation language={language} onLanguageChange={handleLanguageChange} />
        <SEOBreadcrumbs pathname={pathname} language={language} />
        <div className="flex-1">
          {children}
        </div>
        <Footer language={language} />
      </div>
      <AIChatCenter language={language} />
      <StickyMobileCTA language={language} />
      <ExitIntentPopup language={language} />
      <CookieBanner language={language} />
    </LanguageContext.Provider>
  );
};

export default SiteShell;
