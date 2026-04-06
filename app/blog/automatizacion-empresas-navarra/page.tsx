import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import AutomatizacionEmpresasNavarra from '@/components/pages/blog/AutomatizacionEmpresasNavarra';

export const metadata: Metadata = buildPageMetadata('/blog/automatizacion-empresas-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <AutomatizacionEmpresasNavarra language="es" />
    </PageShell>
  );
};

export default Page;


