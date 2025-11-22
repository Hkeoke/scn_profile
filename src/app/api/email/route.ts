import { emailService } from '@/services/email.service';
import { NextResponse } from 'next/server';

export async function OPTIONS() {
  const response = NextResponse.json({});
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const result = await emailService.sendContactEmail({
      name,
      email,
      message
    });

    if (!result.success) {
      return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
