import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import AgentesIAWebNavarra from '@/components/pages/blog/AgentesIAWebNavarra';

export const metadata: Metadata = buildPageMetadata('/blog/agentes-ia-para-paginas-web-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <AgentesIAWebNavarra language="es" />
    </PageShell>
  );
};

export default Page;


