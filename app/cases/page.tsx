import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadataBuilder';
import { redirect } from 'next/navigation';

export const metadata: Metadata = buildPageMetadata('/cases', 'es');


const Page = () => {
  redirect('/casos-ia-navarra');
};

export default Page;

