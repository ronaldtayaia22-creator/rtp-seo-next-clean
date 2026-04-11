import { promises as fs } from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, 'app');
const OUTPUT_PATH = path.join(ROOT, 'lib', 'seo', 'generated-route-lastmod.json');

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
const routeGroupsPattern = /^\(.*\)$/;

const shouldExcludeRoute = (route) => {
  if (EXCLUDED_ROUTES.has(route)) return true;
  return EXCLUDED_PREFIXES.some((prefix) => route.startsWith(prefix));
};

const normalizeRoute = (route) => {
  if (!route) return '/';
  return route.startsWith('/') ? route : `/${route}`;
};

const routeFromRelativeDir = (relativeDir) => {
  if (!relativeDir) return '/';

  const segments = relativeDir.split(path.sep).filter(Boolean);
  const routeSegments = [];

  for (const segment of segments) {
    if (routeGroupsPattern.test(segment)) continue;
    if (segment.startsWith('[')) return null;
    routeSegments.push(segment);
  }

  return normalizeRoute(routeSegments.join('/'));
};

const collectRouteFiles = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const collected = [];

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

const parseDate = (value) => {
  if (!value) return null;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toISOString();
};

const readGitDate = (filePath) => {
  try {
    const relPath = path.relative(ROOT, filePath);
    const result = execFileSync('git', ['log', '-1', '--format=%cI', '--', relPath], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();

    return parseDate(result);
  } catch {
    return null;
  }
};

const readFsDate = async (filePath) => {
  try {
    const stats = await fs.stat(filePath);
    return parseDate(stats.mtime.toISOString());
  } catch {
    return null;
  }
};

const main = async () => {
  const routeFiles = await collectRouteFiles(APP_DIR);
  const uniqueByRoute = new Map();

  for (const routeFile of routeFiles) {
    if (!uniqueByRoute.has(routeFile.route)) {
      uniqueByRoute.set(routeFile.route, routeFile.filePath);
    }
  }

  const routes = {};
  const now = new Date().toISOString();

  for (const [route, filePath] of [...uniqueByRoute.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const gitDate = readGitDate(filePath);
    const fsDate = await readFsDate(filePath);
    routes[route] = gitDate || fsDate || now;
  }

  const payload = {
    generatedAt: now,
    routes,
  };

  await fs.writeFile(OUTPUT_PATH, JSON.stringify(payload, null, 2) + '\n', 'utf8');
};

await main();
