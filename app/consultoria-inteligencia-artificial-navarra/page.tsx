import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import ConsultoriaIA from '@/components/pages/services/ConsultoriaIA';

export const metadata: Metadata = buildPageMetadata('/consultoria-inteligencia-artificial-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <ConsultoriaIA language="es" />
    </PageShell>
  );
};

export default Page;


