import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import LegalNotice from '@/components/pages/LegalNotice';

export const metadata: Metadata = buildPageMetadata('/en/legal-notice', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <LegalNotice language="en" />
    </PageShell>
  );
};

export default Page;

