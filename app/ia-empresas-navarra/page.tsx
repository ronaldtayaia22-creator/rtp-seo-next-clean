import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IAEmpresasNavarra from '@/components/pages/IAEmpresasNavarra';

export const metadata: Metadata = buildPageMetadata('/ia-empresas-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <IAEmpresasNavarra language="es" />
    </PageShell>
  );
};

export default Page;


