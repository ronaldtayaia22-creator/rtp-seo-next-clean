import { buildSitemapPagesXml, getSeoSitemapEntries } from '@/lib/seo/sitemap';

export const runtime = 'nodejs';

export async function GET() {
  const entries = await getSeoSitemapEntries();
  const xml = buildSitemapPagesXml(entries);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
