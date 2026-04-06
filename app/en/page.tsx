import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import Index from '@/components/pages/Index';

export const metadata: Metadata = buildPageMetadata('/en', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <Index language="en" />
    </PageShell>
  );
};

export default Page;

