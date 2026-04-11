import { promises as fs } from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://rtpdigitalsolutions.es';
const APP_DIR = path.join(process.cwd(), 'app');

const EXCLUDED_ROUTES = new Set([
  '/automatizacion-ia-navarra',
  '/en/ai-automation-navarra',
  '/reservar',
  '/en/reservar',
  '/contact-success',
  '/en/contact-success',
  '/admin',
  '/cases',
  '/automatizacion-empresas-navarra',
]);

const EXCLUDED_PREFIXES = ['/admin/', '/en/admin/', '/api/'];

const MIN_TRUSTED_LASTMOD_YEAR = 2020;
const KNOWN_INVALID_LASTMOD = '2018-10-20T01:46:40.000Z';

export type SeoSitemapEntry = {
  route: string;
  url: string;
  lastModified: string;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

type RouteFile = {
  route: string;
  filePath: string;
};

const routeGroupsPattern = /^\(.*\)$/;

const shouldExcludeRoute = (route: string): boolean => {
  if (EXCLUDED_ROUTES.has(route)) return true;
  return EXCLUDED_PREFIXES.some((prefix) => route.startsWith(prefix));
};

const normalizeRoute = (route: string): string => {
  if (route === '') return '/';
  return route.startsWith('/') ? route : `/${route}`;
};

const toPublicUrl = (route: string): string => {
  if (route === '/') return `${BASE_URL}/`;
  return `${BASE_URL}${route}`;
};

const getRouteSettings = (route: string): Pick<SeoSitemapEntry, 'changeFrequency' | 'priority'> => {
  if (route === '/' || route === '/en') {
    return { changeFrequency: 'weekly', priority: 1.0 };
  }

  if (route === '/blog' || route === '/en/blog') {
    return { changeFrequency: 'weekly', priority: 0.8 };
  }

  if (route.startsWith('/blog/') || route.startsWith('/en/blog/')) {
    return { changeFrequency: 'monthly', priority: 0.7 };
  }

  if (
    route === '/legal-notice' ||
    route === '/privacy-policy' ||
    route === '/terms-conditions' ||
    route === '/en/legal-notice' ||
    route === '/en/privacy-policy' ||
    route === '/en/terms-conditions'
  ) {
    return { changeFrequency: 'yearly', priority: 0.3 };
  }

  if (
    route === '/servicios' ||
    route === '/en/services' ||
    route === '/diagnostico-ia-navarra' ||
    route === '/en/diagnosis-ai-navarra' ||
    route === '/inteligencia-artificial-navarra' ||
    route === '/en/artificial-intelligence-navarra' ||
    route === '/ia-empresas-navarra' ||
    route === '/en/ai-business-navarra'
  ) {
    return { changeFrequency: 'weekly', priority: 0.9 };
  }

  return { changeFrequency: 'monthly', priority: 0.8 };
};

const routeFromRelativeDir = (relativeDir: string): string | null => {
  if (!relativeDir) return '/';

  const segments = relativeDir.split(path.sep).filter(Boolean);
  const routeSegments: string[] = [];

  for (const segment of segments) {
    if (routeGroupsPattern.test(segment)) continue;
    if (segment.startsWith('[')) return null;
    routeSegments.push(segment);
  }

  return normalizeRoute(routeSegments.join('/'));
};

const collectRouteFiles = async (dir: string): Promise<RouteFile[]> => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const collected: RouteFile[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const nested = await collectRouteFiles(fullPath);
      collected.push(...nested);
      continue;
    }

    if (!entry.isFile() || entry.name !== 'page.tsx') continue;

    const routeDir = path.dirname(fullPath);
    const relativeDir = path.relative(APP_DIR, routeDir);
    const route = routeFromRelativeDir(relativeDir);

    if (!route || shouldExcludeRoute(route)) continue;

    collected.push({ route, filePath: fullPath });
  }

  return collected;
};

const formatIsoDate = (date: Date): string => date.toISOString();

const parseEnvDate = (value: string | undefined): string | null => {
  if (!value) return null;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return null;
  return formatIsoDate(parsed);
};

const PROJECT_FALLBACK_LASTMOD =
  parseEnvDate(process.env.SITEMAP_LASTMOD) ||
  parseEnvDate(process.env.VERCEL_GIT_COMMIT_DATE) ||
  parseEnvDate(process.env.VERCEL_DEPLOYMENT_CREATED_AT) ||
  formatIsoDate(new Date());

const isTrustworthyLastmod = (date: Date): boolean => {
  if (Number.isNaN(date.getTime())) return false;
  if (formatIsoDate(date) === KNOWN_INVALID_LASTMOD) return false;

  const year = date.getUTCFullYear();
  const currentYear = new Date().getUTCFullYear();
  return year >= MIN_TRUSTED_LASTMOD_YEAR && year <= currentYear + 1;
};

const resolveLastModified = async (filePath: string): Promise<string> => {
  const stats = await fs.stat(filePath);
  const mtime = stats.mtime;

  if (isTrustworthyLastmod(mtime)) {
    return formatIsoDate(mtime);
  }

  return PROJECT_FALLBACK_LASTMOD;
};

const escapeXml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const getSeoSitemapEntries = async (): Promise<SeoSitemapEntry[]> => {
  const routeFiles = await collectRouteFiles(APP_DIR);
  const uniqueByRoute = new Map<string, RouteFile>();

  for (const routeFile of routeFiles) {
    if (!uniqueByRoute.has(routeFile.route)) {
      uniqueByRoute.set(routeFile.route, routeFile);
    }
  }

  const entries = await Promise.all(
    [...uniqueByRoute.values()].map(async ({ route, filePath }) => {
      const settings = getRouteSettings(route);
      const lastModified = await resolveLastModified(filePath);

      return {
        route,
        url: toPublicUrl(route),
        lastModified,
        changeFrequency: settings.changeFrequency,
        priority: settings.priority,
      } satisfies SeoSitemapEntry;
    })
  );

  return entries.sort((a, b) => a.route.localeCompare(b.route));
};

export const buildSitemapPagesXml = (entries: SeoSitemapEntry[]): string => {
  const body = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${escapeXml(entry.lastModified)}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;
};

export const buildSitemapIndexXml = (lastModified: string): string => `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${escapeXml(`${BASE_URL}/sitemap-pages.xml`)}</loc>
    <lastmod>${escapeXml(lastModified)}</lastmod>
  </sitemap>
</sitemapindex>`;
