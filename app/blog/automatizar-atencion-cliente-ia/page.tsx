import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import AutomatizarAtencionClienteIA from '@/components/pages/blog/AutomatizarAtencionClienteIA';

export const metadata: Metadata = buildPageMetadata('/blog/automatizar-atencion-cliente-ia', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <AutomatizarAtencionClienteIA language="es" />
    </PageShell>
  );
};

export default Page;


