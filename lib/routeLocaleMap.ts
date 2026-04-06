import type { Language } from '@/lib/i18n';

const ES_TO_EN_OVERRIDES: Record<string, string> = {
  '/servicios': '/services',
  '/cases': '/casos-ia-navarra',
  '/automatizacion-empresas-navarra': '/automatizacion-procesos-empresas-navarra',
};

const EN_TO_ES_OVERRIDES: Record<string, string> = {
  '/services': '/servicios',
  '/cases': '/casos-ia-navarra',
};

export const normalizeBasePath = (pathname: string): string => {
  if (!pathname) return '/';
  if (pathname === '/en') return '/';
  if (pathname.startsWith('/en/')) {
    return pathname.slice(3) || '/';
  }
  return pathname;
};

export const getLocalizedPath = (basePath: string, targetLang: Language): string => {
  const normalized = normalizeBasePath(basePath);

  if (targetLang === 'en') {
    const enPath = ES_TO_EN_OVERRIDES[normalized] || normalized;
    return `/en${enPath === '/' ? '' : enPath}`;
  }

  return EN_TO_ES_OVERRIDES[normalized] || normalized;
};
