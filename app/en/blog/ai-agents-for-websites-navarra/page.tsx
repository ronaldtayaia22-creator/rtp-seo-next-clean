import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import AgentesIAWebNavarra from '@/components/pages/blog/AgentesIAWebNavarra';

export const metadata: Metadata = buildPageMetadata('/en/blog/ai-agents-for-websites-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <AgentesIAWebNavarra language="en" />
    </PageShell>
  );
};

export default Page;


