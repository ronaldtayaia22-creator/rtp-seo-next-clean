import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IAClinicasNavarra from '@/components/pages/blog/IAClinicasNavarra';

export const metadata: Metadata = buildPageMetadata('/en/blog/ia-para-clinicas-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <IAClinicasNavarra language="en" />
    </PageShell>
  );
};

export default Page;


