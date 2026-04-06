import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import AutomatizacionProcesos from '@/components/pages/services/AutomatizacionProcesos';

export const metadata: Metadata = buildPageMetadata('/en/automatizacion-procesos-empresas-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <AutomatizacionProcesos language="en" />
    </PageShell>
  );
};

export default Page;


