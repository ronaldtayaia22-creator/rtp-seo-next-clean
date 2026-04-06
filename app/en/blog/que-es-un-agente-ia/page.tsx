import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import QueEsUnAgenteIA from '@/components/pages/blog/QueEsUnAgenteIA';

export const metadata: Metadata = buildPageMetadata('/en/blog/que-es-un-agente-ia', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <QueEsUnAgenteIA language="en" />
    </PageShell>
  );
};

export default Page;


