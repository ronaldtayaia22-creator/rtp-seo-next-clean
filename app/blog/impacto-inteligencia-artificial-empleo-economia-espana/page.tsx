import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import PageShell from '@/components/PageShell';
import ImpactoIAEmpleoEconomiaEspana from '@/components/pages/blog/ImpactoIAEmpleoEconomiaEspana';

export const metadata: Metadata = buildPageMetadata('/blog/impacto-inteligencia-artificial-empleo-economia-espana', 'es');

const Page = () => {
  return (
    <PageShell language="es">
      <ImpactoIAEmpleoEconomiaEspana language="es" />
    </PageShell>
  );
};

export default Page;
