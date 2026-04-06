import type { Metadata } from 'next';
import { getLocalizedPath, normalizeBasePath } from '@/lib/routeLocaleMap';
import type { Language } from '@/lib/i18n';
import { getPageMetadataEntry } from '@/lib/seo/pageMetadata';

const SITE_URL = 'https://rtpdigitalsolutions.es';
const BRAND = 'RTP Digital Solutions';

const toAbsoluteUrl = (path: string): string => {
  const normalized = path === '/' ? '/' : path.replace(/\/+$|^\s+|\s+$/g, '');
  return new URL(normalized, SITE_URL).toString();
};

export const buildPageMetadata = (routePath: string, language: Language): Metadata => {
  const basePath = normalizeBasePath(routePath);
  const lookupPath = getLocalizedPath(basePath, 'es');
  const entry = getPageMetadataEntry(lookupPath);

  const esPath = getLocalizedPath(basePath, 'es');
  const enPath = getLocalizedPath(basePath, 'en');
  const canonicalPath = language === 'en' ? enPath : esPath;

  const title = `${entry.title[language]} | ${BRAND}`;
  const description = entry.description[language];

  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical: toAbsoluteUrl(canonicalPath),
      languages: {
        'es-ES': toAbsoluteUrl(esPath),
        'en-GB': toAbsoluteUrl(enPath),
      },
    },
    openGraph: {
      title,
      description,
      url: toAbsoluteUrl(canonicalPath),
      siteName: BRAND,
      locale: language === 'es' ? 'es_ES' : 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };

  if (entry.noindex) {
    metadata.robots = {
      index: false,
      follow: false,
    };
  }

  return metadata;
};
