'use client';

import { useState, useEffect } from 'react';
import { Language, getTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import Link from '@/components/shared/LocalizedLink';
import { X, Settings, Cookie } from 'lucide-react';

interface CookieBannerProps {
  language: Language;
}

type CookieConsent = {
  necessary: boolean;
  analytical: boolean;
  functional: boolean;
};

const COOKIE_CONSENT_KEY = 'cookie_consent';

export const getCookieConsent = (): CookieConsent | null => {
  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

const CookieBanner = ({ language }: CookieBannerProps) => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytical: false,
    functional: false,
  });

  const t = language === 'es' ? {
    title: 'Esta web utiliza cookies',
    description: 'Utilizamos cookies propias y de terceros para mejorar la experiencia de navegación y analizar el uso del sitio. Puedes aceptar todas, rechazar las no esenciales o configurar tus preferencias.',
    acceptAll: 'Aceptar todas',
    rejectAll: 'Rechazar no esenciales',
    settings: 'Configurar',
    save: 'Guardar preferencias',
    necessary: 'Cookies necesarias',
    necessaryDesc: 'Imprescindibles para el funcionamiento del sitio. No se pueden desactivar.',
    analytical: 'Cookies analíticas',
    analyticalDesc: 'Nos permiten medir el tráfico y analizar tu comportamiento para mejorar el servicio.',
    functional: 'Cookies funcionales',
    functionalDesc: 'Permiten recordar tus preferencias (idioma, sesión, etc.).',
    moreInfo: 'Más información en nuestra',
    privacyLink: 'Política de Privacidad y Cookies',
  } : {
    title: 'This website uses cookies',
    description: 'We use our own and third-party cookies to improve your browsing experience and analyze site usage. You can accept all, reject non-essential cookies, or configure your preferences.',
    acceptAll: 'Accept all',
    rejectAll: 'Reject non-essential',
    settings: 'Settings',
    save: 'Save preferences',
    necessary: 'Necessary cookies',
    necessaryDesc: 'Essential for the website to function. They cannot be disabled.',
    analytical: 'Analytical cookies',
    analyticalDesc: 'Allow us to measure traffic and analyze your behavior to improve the service.',
    functional: 'Functional cookies',
    functionalDesc: 'Allow us to remember your preferences (language, session, etc.).',
    moreInfo: 'More information in our',
    privacyLink: 'Privacy and Cookie Policy',
  };

  useEffect(() => {
    const existing = getCookieConsent();
    if (!existing) {
      setVisible(true);
    }
  }, []);

  const saveConsent = (c: CookieConsent) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(c));
    setVisible(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, analytical: true, functional: true });
  };

  const handleRejectAll = () => {
    saveConsent({ necessary: true, analytical: false, functional: false });
  };

  const handleSave = () => {
    saveConsent(consent);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-card border border-border rounded-2xl shadow-2xl p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2">
              <Cookie className="w-5 h-5 text-primary flex-shrink-0" />
              <h3 className="font-semibold text-foreground">{t.title}</h3>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">{t.description}</p>

          {showSettings && (
            <div className="space-y-3 border-t border-border pt-4">
              {/* Necessary - always on */}
              <label className="flex items-start gap-3 opacity-70">
                <input type="checkbox" checked disabled className="mt-1 accent-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">{t.necessary}</p>
                  <p className="text-xs text-muted-foreground">{t.necessaryDesc}</p>
                </div>
              </label>

              {/* Analytical */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent.analytical}
                  onChange={(e) => setConsent({ ...consent, analytical: e.target.checked })}
                  className="mt-1 accent-primary"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{t.analytical}</p>
                  <p className="text-xs text-muted-foreground">{t.analyticalDesc}</p>
                </div>
              </label>

              {/* Functional */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent.functional}
                  onChange={(e) => setConsent({ ...consent, functional: e.target.checked })}
                  className="mt-1 accent-primary"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{t.functional}</p>
                  <p className="text-xs text-muted-foreground">{t.functionalDesc}</p>
                </div>
              </label>
            </div>
          )}

          <p className="text-xs text-muted-foreground">
            {t.moreInfo}{' '}
            <Link href="/privacy-policy" className="text-primary underline hover:no-underline">
              {t.privacyLink}
            </Link>
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button onClick={handleAcceptAll} className="flex-1 font-semibold">
              {t.acceptAll}
            </Button>
            <Button onClick={handleRejectAll} variant="outline" className="flex-1">
              {t.rejectAll}
            </Button>
            {!showSettings ? (
              <Button onClick={() => setShowSettings(true)} variant="ghost" className="flex-1 gap-1">
                <Settings className="w-4 h-4" />
                {t.settings}
              </Button>
            ) : (
              <Button onClick={handleSave} variant="secondary" className="flex-1">
                {t.save}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

