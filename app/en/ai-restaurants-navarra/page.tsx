import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IARestaurantesNavarra from '@/components/pages/IARestaurantesNavarra';

export const metadata: Metadata = buildPageMetadata('/en/ai-restaurants-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <IARestaurantesNavarra language="en" />
    </PageShell>
  );
};

export default Page;


