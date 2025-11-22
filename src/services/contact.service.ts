import { EmailTemplate } from '@/definitions/contact';

export const SendEmail = async (payload: EmailTemplate) => {
  const response = await fetch('/api/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Error al enviar el email');
  }

  return data;
};
