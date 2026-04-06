import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import PrivacyPolicy from '@/components/pages/PrivacyPolicy';

export const metadata: Metadata = buildPageMetadata('/privacy-policy', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <PrivacyPolicy language="es" />
    </PageShell>
  );
};

export default Page;

