import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IA2026EuropaHojaRutaEmpresa from '@/components/pages/blog/IA2026EuropaHojaRutaEmpresa';

export const metadata: Metadata = buildPageMetadata('/en/blog/ai-2026-business-navarra-spain-europe-roadmap', 'en');

const Page = () => {
  return (
    <PageShell language="en">
      <IA2026EuropaHojaRutaEmpresa language="en" />
    </PageShell>
  );
};

export default Page;
