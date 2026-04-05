import Link from 'next/link';
import { useLangPrefix } from '@/lib/language-context';
import type { LinkProps as NextLinkProps } from 'next/link';
import { AnchorHTMLAttributes, forwardRef } from 'react';

type CombinedProps = NextLinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps>;

const LocalizedLink = forwardRef<HTMLAnchorElement, CombinedProps>(({ href, ...props }, ref) => {
  const prefix = useLangPrefix();
  const localizedHref = typeof href === 'string' && href.startsWith('/') ? `${prefix}${href}` : href;
  return <Link ref={ref} href={localizedHref} {...props} />;
});

LocalizedLink.displayName = 'LocalizedLink';

export default LocalizedLink;
