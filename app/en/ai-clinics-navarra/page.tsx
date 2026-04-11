import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IAClinicasNavarraPage from '@/components/pages/IAClinicasNavarraPage';

export const metadata: Metadata = buildPageMetadata('/en/ai-clinics-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <IAClinicasNavarraPage language="en" />
    </PageShell>
  );
};

export default Page;


