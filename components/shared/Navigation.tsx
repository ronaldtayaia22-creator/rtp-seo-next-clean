'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from '@/components/shared/LocalizedLink';
import { Menu, X } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';
import LanguageSelector from './LanguageSelector';

interface NavigationProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const Navigation = ({ language, onLanguageChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = getTranslation(language).nav;
  const isEs = language === 'es';

  const navItems = [
    { path: isEs ? '/servicios' : '/services', label: t.services },
    { path: '/ia-empresas-navarra', label: t.sectores },
    { path: '/casos-ia-navarra', label: t.cases },
    { path: '/blog', label: 'Blog' },
    { path: '/diagnostico-ia-navarra', label: t.diagnostico },
  ];

  const basePath = pathname.startsWith('/en/')
    ? pathname.slice(3)
    : pathname === '/en' ? '/' : pathname;
  const isActive = (path: string) => basePath === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border isolate">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center md:hidden">
            <img
              src="/images/logo.png"
              alt="RTP Digital Solutions"
              className="h-16 w-auto mix-blend-screen brightness-75 contrast-200 saturate-150"
            />
          </Link>

          <div className="hidden md:flex w-full items-center justify-between">
            
            <div className="flex items-center gap-6">
              {navItems.slice(0, 3).map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium transition-all relative group whitespace-nowrap ${
                    isActive(item.path)
                      ? 'text-primary'
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            <Link href="/" className="flex items-center justify-center mx-4">
              <img
                src="/images/logo.png"
                alt="RTP Digital Solutions"
                className="h-20 w-auto mix-blend-screen brightness-75 contrast-200 saturate-150"
              />
            </Link>

            <div className="flex items-center gap-6">
              {navItems.slice(3).map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium transition-all relative group whitespace-nowrap ${
                    isActive(item.path)
                      ? 'text-primary'
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
              <LanguageSelector
                currentLang={language}
                onLanguageChange={onLanguageChange}
              />
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <LanguageSelector
                currentLang={language}
                onLanguageChange={onLanguageChange}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
