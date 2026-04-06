import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IARestaurantesNavarra from '@/components/pages/blog/IARestaurantesNavarra';

export const metadata: Metadata = buildPageMetadata('/en/blog/ia-para-restaurantes-navarra', 'en');


const Page = () => {
  return (
    <PageShell language="en">
      <IARestaurantesNavarra language="en" />
    </PageShell>
  );
};

export default Page;


