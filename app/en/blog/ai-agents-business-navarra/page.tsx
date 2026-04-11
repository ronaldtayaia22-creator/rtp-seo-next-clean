import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import AgentesIAEmpresasNavarra from '@/components/pages/blog/AgentesIAEmpresasNavarra';

export const metadata: Metadata = buildPageMetadata('/en/blog/ai-agents-business-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <AgentesIAEmpresasNavarra language="en" />
    </PageShell>
  );
};

export default Page;


