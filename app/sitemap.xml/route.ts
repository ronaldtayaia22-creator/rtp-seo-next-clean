import { buildSitemapIndexXml, getSeoSitemapEntries } from '@/lib/seo/sitemap';

export const runtime = 'nodejs';

export async function GET() {
  const entries = await getSeoSitemapEntries();
  const latestLastMod = entries.reduce((latest, entry) => {
    return entry.lastModified > latest ? entry.lastModified : latest;
  }, new Date(0).toISOString());

  const xml = buildSitemapIndexXml(latestLastMod);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
