import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import DesarrolloWebIA from '@/components/pages/services/DesarrolloWebIA';

export const metadata: Metadata = buildPageMetadata('/en/desarrollo-web-inteligencia-artificial', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <DesarrolloWebIA language="en" />
    </PageShell>
  );
};

export default Page;


