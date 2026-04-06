import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import LegalNotice from '@/components/pages/LegalNotice';

export const metadata: Metadata = buildPageMetadata('/legal-notice', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <LegalNotice language="es" />
    </PageShell>
  );
};

export default Page;

