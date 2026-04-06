import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import InteligenciaArtificialNavarra from '@/components/pages/InteligenciaArtificialNavarra';

export const metadata: Metadata = buildPageMetadata('/en/inteligencia-artificial-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <InteligenciaArtificialNavarra language="en" />
    </PageShell>
  );
};

export default Page;

