import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import TermsConditions from '@/components/pages/TermsConditions';

export const metadata: Metadata = buildPageMetadata('/en/terms-conditions', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <TermsConditions language="en" />
    </PageShell>
  );
};

export default Page;

