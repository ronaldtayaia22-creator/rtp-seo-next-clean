import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IA2026EuropaContextoRegulatorio from '@/components/pages/blog/IA2026EuropaContextoRegulatorio';

export const metadata: Metadata = buildPageMetadata('/en/blog/ai-2026-business-navarra-spain-europe-context', 'en');

const Page = () => {
  return (
    <PageShell language="en">
      <IA2026EuropaContextoRegulatorio language="en" />
    </PageShell>
  );
};

export default Page;
