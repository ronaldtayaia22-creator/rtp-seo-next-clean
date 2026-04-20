import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import TrabajosRiesgoIAYAdaptacion from '@/components/pages/blog/TrabajosRiesgoIAYAdaptacion';

export const metadata: Metadata = buildPageMetadata('/en/blog/jobs-at-risk-from-ai-and-how-to-adapt', 'en');

const Page = () => {
  return (
    <PageShell language="en">
      <TrabajosRiesgoIAYAdaptacion language="en" />
    </PageShell>
  );
};

export default Page;
