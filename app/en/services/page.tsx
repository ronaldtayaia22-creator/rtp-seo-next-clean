import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import Services from '@/components/pages/Services';

export const metadata: Metadata = buildPageMetadata('/en/services', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <Services language="en" />
    </PageShell>
  );
};

export default Page;


