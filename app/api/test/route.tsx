import { getHtmlText } from './_util_/get-html-text';

export const POST = async (req: Request) => {
  const body = await req.json();

  const str = await getHtmlText(body);
  return new Response(str, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
};
