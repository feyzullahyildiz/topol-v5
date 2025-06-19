import { Resend } from 'resend';

import { getHtmlText } from '../_util_/get-html-text';

export const POST = async (req: Request) => {
  const { to, subject, data, apiKey } = await req.json();

  const html = await getHtmlText(data);
  const resend = new Resend(apiKey || process.env.RESEND_API_KEY);
  const response = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to,
    subject: subject || 'Email DnD Provider Test Mail',
    html,
  });

  return Response.json(response, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
};
