import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import AutomatizarAtencionClienteIA from '@/components/pages/blog/AutomatizarAtencionClienteIA';

export const metadata: Metadata = buildPageMetadata('/en/blog/automatizar-atencion-cliente-ia', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <AutomatizarAtencionClienteIA language="en" />
    </PageShell>
  );
};

export default Page;


