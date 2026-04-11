import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import ComoImplementarIANavarra from '@/components/pages/blog/ComoImplementarIANavarra';

export const metadata: Metadata = buildPageMetadata('/en/blog/how-to-implement-artificial-intelligence-business-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <ComoImplementarIANavarra language="en" />
    </PageShell>
  );
};

export default Page;


