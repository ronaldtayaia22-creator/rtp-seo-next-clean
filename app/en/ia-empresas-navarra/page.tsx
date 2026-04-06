import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IAEmpresasNavarra from '@/components/pages/IAEmpresasNavarra';

export const metadata: Metadata = buildPageMetadata('/en/ia-empresas-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <IAEmpresasNavarra language="en" />
    </PageShell>
  );
};

export default Page;


