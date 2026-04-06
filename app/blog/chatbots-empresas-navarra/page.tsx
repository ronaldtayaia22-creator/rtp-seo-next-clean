import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import ChatbotsEmpresasNavarra from '@/components/pages/blog/ChatbotsEmpresasNavarra';

export const metadata: Metadata = buildPageMetadata('/blog/chatbots-empresas-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <ChatbotsEmpresasNavarra language="es" />
    </PageShell>
  );
};

export default Page;


