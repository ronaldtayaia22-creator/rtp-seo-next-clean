import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import Blog from '@/components/pages/Blog';

export const metadata: Metadata = buildPageMetadata('/en/blog', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <Blog language="en" />
    </PageShell>
  );
};

export default Page;


