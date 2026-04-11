import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import CuantoCuestaIANavarra from '@/components/pages/blog/CuantoCuestaIANavarra';

export const metadata: Metadata = buildPageMetadata('/en/blog/how-much-does-artificial-intelligence-cost-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <CuantoCuestaIANavarra language="en" />
    </PageShell>
  );
};

export default Page;


