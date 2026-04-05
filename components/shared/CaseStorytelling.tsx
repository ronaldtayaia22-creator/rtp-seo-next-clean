'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { Language } from '@/lib/i18n';
import { ExternalLink, Code, Database, Calendar, Users, Brain, Mail, Layout, Heart, Bell, Zap, Shield, ShoppingCart, Server, Search, BarChart3, Sparkles, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
const doixaLogo = '/images/doixa-logo.png';
const auraLogo = '/images/aura-studio-logo.png';

interface CaseStorytellingProps {
  language: Language;
  initialCaseIndex?: number;
}

const casesData = [
  {
    logo: doixaLogo, logoBg: 'bg-white/90',
    badge: { es: 'Implementación real', en: 'Real implementation' },
    category: { es: 'Clínica estética', en: 'Aesthetic clinic' },
    title: { es: 'Doixa Estética Integral Avanzada', en: 'Doixa Estética Integral Avanzada' },
    subtitle: { es: 'Plataforma de gestión inteligente para centro de estética con reservas online, buffers automáticos y asistente IA conversacional.', en: 'Smart management platform for aesthetics center with online bookings, automatic buffers and conversational AI assistant.' },
    challenge: { es: 'Digitalizar un centro de estética con gestión de tratamientos, reservas inteligentes con buffers y asistencia automatizada al cliente.', en: 'Digitize an aesthetics center with treatment management, smart bookings with buffers and automated customer assistance.' },
    archItems: [
      { icon: Code, label: { es: 'React + TypeScript + Vite', en: 'React + TypeScript + Vite' } },
      { icon: Database, label: { es: 'PostgreSQL con RLS', en: 'PostgreSQL with RLS' } },
      { icon: Calendar, label: { es: 'Reservas con buffers 30 min', en: 'Bookings with 30-min buffers' } },
      { icon: Users, label: { es: 'Múltiples servicios', en: 'Multiple services' } },
      { icon: Brain, label: { es: 'IA con Gemini', en: 'AI with Gemini' } },
      { icon: Mail, label: { es: 'Emails transaccionales', en: 'Transactional emails' } },
      { icon: Layout, label: { es: 'Panel admin', en: 'Admin panel' } },
      { icon: Heart, label: { es: 'Gestión tratamientos', en: 'Treatment mgmt' } },
      { icon: Bell, label: { es: 'Recordatorios auto.', en: 'Auto reminders' } },
      { icon: Shield, label: { es: 'Dashboard cliente', en: 'Client dashboard' } },
    ],
    result: { es: 'Sistema completo que automatiza la gestión, optimiza la agenda y aumenta la conversión mediante IA conversacional especializada.', en: 'Complete system that automates management, optimizes scheduling and increases conversion through specialized conversational AI.' },
    url: 'https://www.doixaestetica.com',
    cta: { es: 'Ver sitio', en: 'View site' },
  },
  {
    logo: auraLogo, logoBg: 'bg-white/90',
    badge: { es: 'Implementación real', en: 'Real implementation' },
    category: { es: 'Peluquería', en: 'Hair salon' },
    title: { es: 'Aura Studio Peluquería', en: 'Aura Studio Peluquería' },
    subtitle: { es: 'Reservas online, CRM de clientes y sistema de fidelización con asistente IA.', en: 'Online booking, client CRM and loyalty system with AI assistant.' },
    challenge: { es: 'Digitalizar una peluquería con reservas en tiempo real, gestión de clientes y campañas de fidelización.', en: 'Digitize a hair salon with real-time bookings, client management and loyalty campaigns.' },
    archItems: [
      { icon: Code, label: { es: 'React + TypeScript + Vite', en: 'React + TypeScript + Vite' } },
      { icon: Database, label: { es: 'PostgreSQL con RLS', en: 'PostgreSQL with RLS' } },
      { icon: Calendar, label: { es: 'Sistema de reservas', en: 'Booking system' } },
      { icon: Users, label: { es: 'CRM de clientes', en: 'Client CRM' } },
      { icon: Brain, label: { es: 'IA conversacional', en: 'Conversational AI' } },
      { icon: Sparkles, label: { es: 'Email marketing', en: 'Email marketing' } },
      { icon: Bell, label: { es: 'Recordatorios auto.', en: 'Auto reminders' } },
      { icon: Layout, label: { es: 'Panel admin', en: 'Admin panel' } },
    ],
    result: { es: 'Automatización completa del negocio con incremento de reservas y mejora de la retención de clientes.', en: 'Complete business automation with increased bookings and improved client retention.' },
    url: 'https://aurorastudiopeluqueria.cloud',
    cta: { es: 'Ver sitio', en: 'View site' },
  },
  {
    logo: null, logoBg: '',
    badge: { es: 'Implementación proyecto', en: 'Project implementation' },
    badgeStyle: 'bg-secondary/20 text-secondary border-secondary/30',
    category: { es: 'E-commerce', en: 'E-commerce' },
    title: { es: 'WAALS barefoot', en: 'WAALS barefoot' },
    subtitle: { es: 'Ecommerce inteligente con integración Shopify y automatización empresarial.', en: 'Smart ecommerce with Shopify integration and business automation.' },
    challenge: { es: 'Construir una plataforma ecommerce moderna con integración avanzada y automatización operativa.', en: 'Build a modern ecommerce platform with advanced integration and operational automation.' },
    archItems: [
      { icon: Code, label: { es: 'React + TypeScript', en: 'React + TypeScript' } },
      { icon: ShoppingCart, label: { es: 'Shopify APIs', en: 'Shopify APIs' } },
      { icon: Server, label: { es: 'Edge Functions', en: 'Edge Functions' } },
      { icon: Database, label: { es: 'PostgreSQL con RLS', en: 'PostgreSQL with RLS' } },
      { icon: Zap, label: { es: 'Webhooks', en: 'Webhooks' } },
      { icon: Brain, label: { es: 'IA conversacional', en: 'Conversational AI' } },
      { icon: Sparkles, label: { es: 'Quiz inteligente', en: 'Smart quiz' } },
      { icon: Search, label: { es: 'SEO técnico', en: 'Technical SEO' } },
      { icon: BarChart3, label: { es: 'CRO', en: 'CRO' } },
    ],
    result: { es: 'Ecommerce escalable con automatización avanzada y preparación para crecimiento internacional.', en: 'Scalable ecommerce with advanced automation and international growth readiness.' },
    url: 'https://waalsbarefoot.lovable.app',
    cta: { es: 'Ver sitio', en: 'View site' },
  },
];

type BookState = 'closed' | 'opening' | 'open';

const CaseStorytelling = ({ language, initialCaseIndex }: CaseStorytellingProps) => {
  const isEs = language === 'es';
  const lang = isEs ? 'es' : 'en';
  const shouldAutoOpen = initialCaseIndex !== undefined;
  const [bookState, setBookState] = useState<BookState>(shouldAutoOpen ? 'open' : 'closed');
  const [activeIndex, setActiveIndex] = useState(initialCaseIndex ?? 0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState<'next' | 'prev'>('next');
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const total = casesData.length;
  const c = casesData[activeIndex];

  const openBook = useCallback(() => {
    setBookState('opening');
    setTimeout(() => setBookState('open'), 1200);
  }, []);

  const flipTo = useCallback((index: number) => {
    if (isFlipping || index === activeIndex || index < 0 || index >= total) return;
    setIsFlipping(true);
    setFlipDir(index > activeIndex ? 'next' : 'prev');
    setTimeout(() => {
      setActiveIndex(index);
      setTimeout(() => setIsFlipping(false), 600);
    }, 500);
  }, [isFlipping, activeIndex, total]);

  const nextPage = useCallback(() => flipTo(activeIndex + 1), [activeIndex, flipTo]);
  const prevPage = useCallback(() => flipTo(activeIndex - 1), [activeIndex, flipTo]);

  // Touch
  useEffect(() => {
    const el = containerRef.current;
    if (!el || bookState !== 'open') return;
    const onStart = (e: TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
    const onEnd = (e: TouchEvent) => {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 60) { diff > 0 ? nextPage() : prevPage(); }
    };
    el.addEventListener('touchstart', onStart, { passive: true });
    el.addEventListener('touchend', onEnd, { passive: true });
    return () => { el.removeEventListener('touchstart', onStart); el.removeEventListener('touchend', onEnd); };
  }, [bookState, nextPage, prevPage]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (bookState === 'closed') { if (e.key === 'Enter') openBook(); return; }
      if (bookState !== 'open') return;
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [bookState, nextPage, prevPage, openBook]);

  // Split arch items into two columns for the right page
  const halfArch = Math.ceil(c.archItems.length / 2);
  const archCol1 = c.archItems.slice(0, halfArch);
  const archCol2 = c.archItems.slice(halfArch);

  return (
    <section ref={containerRef} className="relative py-16 md:py-24 overflow-hidden" style={{ perspective: '2000px' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* BOOK CONTAINER */}
        <div className="max-w-6xl mx-auto" style={{ perspective: '2000px' }}>

          {/* === CLOSED BOOK (COVER) === */}
          {bookState === 'closed' && (
            <div
              className="mx-auto cursor-pointer group"
              onClick={openBook}
              style={{ maxWidth: '900px', transformStyle: 'preserve-3d' }}
            >
              <div className="relative rounded-r-lg rounded-l-sm overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card)/0.8) 100%)',
                  boxShadow: '8px 8px 30px -5px hsl(var(--primary)/0.15), -2px 0 8px -2px rgba(0,0,0,0.3), inset -3px 0 8px -2px rgba(0,0,0,0.1)',
                  minHeight: '500px',
                }}
              >
                {/* Book spine */}
                <div className="absolute left-0 top-0 bottom-0 w-3 rounded-l-sm"
                  style={{
                    background: 'linear-gradient(90deg, hsl(var(--primary)/0.4) 0%, hsl(var(--primary)/0.15) 40%, transparent 100%)',
                    boxShadow: 'inset -1px 0 3px rgba(0,0,0,0.2)',
                  }}
                />
                <div className="absolute left-3 top-0 bottom-0 w-px bg-border/30" />

                {/* Cover content */}
                <div className="flex flex-col items-center justify-center text-center px-8 py-16 md:px-16 md:py-24 min-h-[500px]">
                  <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-[11px] font-medium text-primary tracking-wider uppercase mb-8">
                    {isEs ? 'Portfolio IA' : 'AI Portfolio'}
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                    {isEs ? 'Casos reales de\nInteligencia Artificial' : 'Real Artificial\nIntelligence Cases'}
                  </h2>

                  <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto leading-relaxed mb-10">
                    {isEs
                      ? 'Explora implementaciones reales desarrolladas para empresas que automatizan, escalan y convierten.'
                      : 'Explore real implementations developed for businesses that automate, scale and convert.'}
                  </p>

                  <div className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-sm group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-300">
                    {isEs ? 'Abrir casos' : 'Open cases'}
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  <p className="text-[11px] text-muted-foreground/40 tracking-wide mt-8">
                    {isEs ? 'Navarra · España' : 'Navarra · Spain'}
                  </p>
                </div>

                {/* Page edges (right side) */}
                <div className="absolute right-0 top-2 bottom-2 w-1.5 flex flex-col gap-px">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex-1 bg-muted-foreground/[0.07] rounded-r-sm" />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* === OPENING ANIMATION === */}
          {bookState === 'opening' && (
            <div className="mx-auto" style={{ maxWidth: '900px' }}>
              <div
                className="relative rounded-r-lg rounded-l-sm overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card)/0.8) 100%)',
                  minHeight: '500px',
                  animation: 'bookOpen 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                  transformOrigin: 'left center',
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-3 rounded-l-sm"
                  style={{ background: 'linear-gradient(90deg, hsl(var(--primary)/0.4) 0%, hsl(var(--primary)/0.15) 40%, transparent 100%)' }}
                />
                <div className="flex flex-col items-center justify-center text-center px-16 py-24 min-h-[500px] opacity-50">
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    {isEs ? 'Casos reales de\nInteligencia Artificial' : 'Real Artificial\nIntelligence Cases'}
                  </h2>
                </div>
              </div>
            </div>
          )}

          {/* === OPEN BOOK (TWO PAGES) === */}
          {bookState === 'open' && (
            <div
              className="animate-fade-in"
              style={{ maxWidth: '1100px', margin: '0 auto' }}
            >
              {/* Book wrapper */}
              <div
                className="relative grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden"
                style={{
                  background: 'hsl(var(--card)/0.6)',
                  boxShadow: '0 20px 60px -15px rgba(0,0,0,0.3), 0 0 0 1px hsl(var(--border)/0.3)',
                  minHeight: '520px',
                }}
              >
                {/* Spine shadow (center) */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-8 z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 35%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.12) 65%, transparent 100%)',
                  }}
                />

                {/* Page fold line */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border/40 z-10" />

                {/* LEFT PAGE — Info */}
                <div
                  className={`relative p-6 md:p-8 lg:p-10 flex flex-col transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isFlipping
                      ? flipDir === 'next'
                        ? 'opacity-0 -translate-x-4'
                        : 'opacity-0 translate-x-4'
                      : 'opacity-100 translate-x-0'
                  }`}
                  style={{ background: 'linear-gradient(180deg, hsl(var(--card)/0.3) 0%, hsl(var(--card)/0.1) 100%)' }}
                >
                  {/* Left page edge */}
                  <div className="absolute left-0 top-2 bottom-2 w-0.5 rounded-l"
                    style={{ background: 'linear-gradient(180deg, transparent, hsl(var(--border)/0.3), transparent)' }}
                  />

                  {/* Badge + Category */}
                  <div className="flex items-center gap-3 mb-6">
                    <Badge className={`${(c as any).badgeStyle || 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'} text-[10px]`}>
                      {(c as any).badgeStyle ? '🔵' : '🟢'} {c.badge[lang]}
                    </Badge>
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                      {c.category[lang]}
                    </span>
                  </div>

                  {/* Logo */}
                  {c.logo && (
                    <div className={`${c.logoBg} rounded-lg px-3 py-1.5 self-start mb-4`}>
                      <img src={c.logo} alt={c.title[lang]} className="h-8 w-auto object-contain" />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                    {c.title[lang]}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-primary/80 font-medium text-sm mb-6 leading-relaxed">
                    {c.subtitle[lang]}
                  </p>

                  {/* Challenge */}
                  <div className="mb-4">
                    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-primary flex items-center gap-2 mb-2">
                      <span className="w-4 h-px bg-primary" />
                      {isEs ? 'El reto' : 'The challenge'}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.challenge[lang]}</p>
                  </div>

                  {/* Result */}
                  <div className="mb-6">
                    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-primary flex items-center gap-2 mb-2">
                      <span className="w-4 h-px bg-primary" />
                      {isEs ? 'Resultado' : 'Result'}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.result[lang]}</p>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 border border-primary/40 text-primary rounded-lg font-bold text-xs hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_24px_hsl(var(--primary)/0.25)] transition-all duration-300"
                    >
                      {c.cta[lang]}
                      <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* RIGHT PAGE — Architecture */}
                <div
                  className={`relative p-6 md:p-8 lg:p-10 flex flex-col transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isFlipping
                      ? flipDir === 'next'
                        ? 'opacity-0 translate-x-4'
                        : 'opacity-0 -translate-x-4'
                      : 'opacity-100 translate-x-0'
                  }`}
                  style={{
                    transitionDelay: isFlipping ? '0ms' : '80ms',
                    background: 'linear-gradient(180deg, hsl(var(--card)/0.2) 0%, hsl(var(--card)/0.05) 100%)',
                  }}
                >
                  {/* Right page edge */}
                  <div className="absolute right-0 top-2 bottom-2 w-0.5 rounded-r"
                    style={{ background: 'linear-gradient(180deg, transparent, hsl(var(--border)/0.3), transparent)' }}
                  />

                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-primary flex items-center gap-2 mb-6">
                    <span className="w-4 h-px bg-primary" />
                    {isEs ? 'Arquitectura implementada' : 'Implemented architecture'}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                    <div className="space-y-2">
                      {archCol1.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 bg-muted/15 rounded-lg px-3 py-2 border border-border/30 hover:border-primary/25 transition-all duration-300"
                        >
                          <item.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="text-[11px] text-foreground/85">{item.label[lang]}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {archCol2.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 bg-muted/15 rounded-lg px-3 py-2 border border-border/30 hover:border-primary/25 transition-all duration-300"
                        >
                          <item.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="text-[11px] text-foreground/85">{item.label[lang]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Page corner fold */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-12 h-12 rotate-45 translate-x-6 translate-y-6 bg-background/30 border-t border-border/20" />
                  </div>
                </div>
              </div>

              {/* Page navigation */}
              <div className="flex items-center justify-between mt-6 px-2">
                <button
                  onClick={prevPage}
                  disabled={activeIndex === 0}
                  className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300 disabled:opacity-0 disabled:cursor-default"
                >
                  ← {isEs ? 'Página anterior' : 'Previous page'}
                </button>

                {activeIndex < total - 1 ? (
                  <button
                    onClick={nextPage}
                    className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300"
                  >
                    {isEs ? 'Siguiente página' : 'Next page'} →
                  </button>
                ) : (
                  <span className="text-xs text-muted-foreground/30">
                    {isEs ? 'Último caso' : 'Last case'}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CSS animation for book opening */}
      <style>{`
        @keyframes bookOpen {
          0% { transform: rotateY(0deg); opacity: 1; }
          60% { transform: rotateY(-85deg); opacity: 0.6; }
          100% { transform: rotateY(-180deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default CaseStorytelling;


