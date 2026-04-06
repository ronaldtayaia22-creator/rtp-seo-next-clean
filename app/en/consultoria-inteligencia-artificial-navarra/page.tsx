import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import ConsultoriaIA from '@/components/pages/services/ConsultoriaIA';

export const metadata: Metadata = buildPageMetadata('/en/consultoria-inteligencia-artificial-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <ConsultoriaIA language="en" />
    </PageShell>
  );
};

export default Page;


