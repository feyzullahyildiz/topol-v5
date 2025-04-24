import { render } from '@react-email/components';

import { NodeRendererDefault } from '@/components/render/NodeRendererDefault';

export const POST = async (req: Request) => {
  const body = await req.json();

  const str = await render(<NodeRendererDefault nodes={body} />, { pretty: true });
  return new Response(str, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
};
