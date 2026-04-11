import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import ChatbotVsAgenteIA from '@/components/pages/blog/ChatbotVsAgenteIA';

export const metadata: Metadata = buildPageMetadata('/en/blog/chatbot-vs-ai-agent', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <ChatbotVsAgenteIA language="en" />
    </PageShell>
  );
};

export default Page;


