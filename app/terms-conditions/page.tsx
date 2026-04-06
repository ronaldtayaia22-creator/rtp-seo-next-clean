import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import TermsConditions from '@/components/pages/TermsConditions';

export const metadata: Metadata = buildPageMetadata('/terms-conditions', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <TermsConditions language="es" />
    </PageShell>
  );
};

export default Page;

