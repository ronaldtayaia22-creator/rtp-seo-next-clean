'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';

interface ContactFormProps {
  language: Language;
}

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  description: string;
};

const ContactForm = ({ language }: ContactFormProps) => {
  const router = useRouter();
  const t = getTranslation(language).contact;

  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const serviceOptions = [
    { value: 'autoCapture', label: t.serviceOptions.autoCapture },
    { value: 'bookings', label: t.serviceOptions.bookings },
    { value: 'leadFollow', label: t.serviceOptions.leadFollow },
    { value: 'internalCRM', label: t.serviceOptions.internalCRM },
    { value: 'fullConnect', label: t.serviceOptions.fullConnect },
    { value: 'other', label: t.serviceOptions.other },
  ];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    try {
      const payload = {
        ...form,
        language,
        sourcePath: typeof window !== 'undefined' ? window.location.pathname : '',
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch('/api/diagnostico', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      router.push(language === 'en' ? '/en/contact-success' : '/contact-success');
    } catch {
      setSubmitError(t.errorSubmit);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid md:grid-cols-2 gap-4">
        <label className="space-y-1.5">
          <span className="text-sm font-medium">{t.name}</span>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            placeholder={t.namePlaceholder}
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </label>

        <label className="space-y-1.5">
          <span className="text-sm font-medium">{t.company}</span>
          <input
            type="text"
            value={form.company}
            onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
            placeholder={t.companyPlaceholder}
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="space-y-1.5">
          <span className="text-sm font-medium">{t.email}</span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            placeholder={t.emailPlaceholder}
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </label>

        <label className="space-y-1.5">
          <span className="text-sm font-medium">{t.phone}</span>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            placeholder={t.phonePlaceholder}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </label>
      </div>

      <label className="space-y-1.5 block">
        <span className="text-sm font-medium">{t.service}</span>
        <select
          value={form.service}
          onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <option value="">{t.servicePlaceholder}</option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-1.5 block">
        <span className="text-sm font-medium">{t.description}</span>
        <textarea
          value={form.description}
          onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
          placeholder={t.descriptionPlaceholder}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
        />
      </label>

      {submitError && (
        <p className="text-sm text-destructive text-center">{submitError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-base hover:shadow-neon transition-all w-full disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {t.sending}
          </>
        ) : (
          <>
            {t.submit}
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        {t.freeDiagnosisDesc} · {t.fastResponseDesc}
      </p>
    </form>
  );
};

export default ContactForm;
