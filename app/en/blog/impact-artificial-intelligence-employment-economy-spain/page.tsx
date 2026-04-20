import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import ImpactoIAEmpleoEconomiaEspana from '@/components/pages/blog/ImpactoIAEmpleoEconomiaEspana';

export const metadata: Metadata = buildPageMetadata('/en/blog/impact-artificial-intelligence-employment-economy-spain', 'en');

const Page = () => {
  return (
    <PageShell language="en">
      <ImpactoIAEmpleoEconomiaEspana language="en" />
    </PageShell>
  );
};

export default Page;
