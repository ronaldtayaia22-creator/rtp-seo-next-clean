import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import QueEsUnAgenteIA from '@/components/pages/blog/QueEsUnAgenteIA';

export const metadata: Metadata = buildPageMetadata('/blog/que-es-un-agente-ia', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <QueEsUnAgenteIA language="es" />
    </PageShell>
  );
};

export default Page;


