import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import CuantoCuestaIANavarra from '@/components/pages/blog/CuantoCuestaIANavarra';

export const metadata: Metadata = buildPageMetadata('/blog/cuanto-cuesta-inteligencia-artificial-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <CuantoCuestaIANavarra language="es" />
    </PageShell>
  );
};

export default Page;


