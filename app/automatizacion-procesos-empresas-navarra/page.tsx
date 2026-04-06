import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import AutomatizacionProcesos from '@/components/pages/services/AutomatizacionProcesos';

export const metadata: Metadata = buildPageMetadata('/automatizacion-procesos-empresas-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <AutomatizacionProcesos language="es" />
    </PageShell>
  );
};

export default Page;


