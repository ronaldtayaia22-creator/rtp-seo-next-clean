import { NextResponse } from 'next/server';

type DiagnosticoPayload = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  service: string;
  description: string;
  language: 'es' | 'en';
  sourcePath?: string;
  submittedAt?: string;
};

const getWebhookUrl = (): string | undefined => {
  return (
    process.env.DIAGNOSTICO_WEBHOOK_URL ||
    process.env.N8N_DIAGNOSTICO_WEBHOOK_URL ||
    process.env.DIAGNOSTICO_AUTOMATION_WEBHOOK_URL
  );
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<DiagnosticoPayload>;

    if (!body.name || !body.company || !body.email || !body.service || !body.description) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    const payload: DiagnosticoPayload = {
      name: body.name,
      company: body.company,
      email: body.email,
      phone: body.phone || '',
      service: body.service,
      description: body.description,
      language: body.language === 'en' ? 'en' : 'es',
      sourcePath: body.sourcePath || '',
      submittedAt: body.submittedAt || new Date().toISOString(),
    };

    const webhookUrl = getWebhookUrl();

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!webhookResponse.ok) {
        return NextResponse.json({ ok: false, error: 'Webhook submission failed' }, { status: 502 });
      }
    } else {
      console.info('[diagnostico] lead captured locally', payload);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request payload' }, { status: 400 });
  }
}
