import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import PrivacyPolicy from '@/components/pages/PrivacyPolicy';

export const metadata: Metadata = buildPageMetadata('/en/privacy-policy', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <PrivacyPolicy language="en" />
    </PageShell>
  );
};

export default Page;

