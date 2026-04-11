import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import EjemplosIAEmpresasNavarra from '@/components/pages/blog/EjemplosIAEmpresasNavarra';

export const metadata: Metadata = buildPageMetadata('/en/blog/artificial-intelligence-examples-business-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <EjemplosIAEmpresasNavarra language="en" />
    </PageShell>
  );
};

export default Page;


