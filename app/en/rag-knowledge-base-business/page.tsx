import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import RAGConocimiento from '@/components/pages/services/RAGConocimiento';

export const metadata: Metadata = buildPageMetadata('/en/rag-knowledge-base-business', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <RAGConocimiento language="en" />
    </PageShell>
  );
};

export default Page;


