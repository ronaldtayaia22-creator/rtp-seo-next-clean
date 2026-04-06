import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import InteligenciaArtificialNavarra from '@/components/pages/InteligenciaArtificialNavarra';

export const metadata: Metadata = buildPageMetadata('/inteligencia-artificial-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <InteligenciaArtificialNavarra language="es" />
    </PageShell>
  );
};

export default Page;

