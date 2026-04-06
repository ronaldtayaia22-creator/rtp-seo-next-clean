import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import AutomatizacionEmpresasNavarra from '@/components/pages/blog/AutomatizacionEmpresasNavarra';

export const metadata: Metadata = buildPageMetadata('/en/blog/automatizacion-empresas-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <AutomatizacionEmpresasNavarra language="en" />
    </PageShell>
  );
};

export default Page;


