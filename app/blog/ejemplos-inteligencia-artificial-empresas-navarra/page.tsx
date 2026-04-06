import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import EjemplosIAEmpresasNavarra from '@/components/pages/blog/EjemplosIAEmpresasNavarra';

export const metadata: Metadata = buildPageMetadata('/blog/ejemplos-inteligencia-artificial-empresas-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <EjemplosIAEmpresasNavarra language="es" />
    </PageShell>
  );
};

export default Page;


