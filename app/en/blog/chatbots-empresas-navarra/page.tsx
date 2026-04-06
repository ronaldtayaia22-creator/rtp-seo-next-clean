import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import ChatbotsEmpresasNavarra from '@/components/pages/blog/ChatbotsEmpresasNavarra';

export const metadata: Metadata = buildPageMetadata('/en/blog/chatbots-empresas-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <ChatbotsEmpresasNavarra language="en" />
    </PageShell>
  );
};

export default Page;


