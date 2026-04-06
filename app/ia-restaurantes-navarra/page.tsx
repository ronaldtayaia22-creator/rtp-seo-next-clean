import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import IARestaurantesNavarra from '@/components/pages/IARestaurantesNavarra';

export const metadata: Metadata = buildPageMetadata('/ia-restaurantes-navarra', 'es');


const Page = () => {
  return (
    <PageShell language="es">
      <IARestaurantesNavarra language="es" />
    </PageShell>
  );
};

export default Page;


