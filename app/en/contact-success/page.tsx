import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import ContactSuccess from '@/components/pages/ContactSuccess';

export const metadata: Metadata = buildPageMetadata('/en/contact-success', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <ContactSuccess language="en" />
    </PageShell>
  );
};

export default Page;


