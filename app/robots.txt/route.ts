// app/robots.txt/route.ts
export async function GET() {
  const baseUrl = "https://remotas-portfolio.vercel.app";

  const content = `
User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
  `.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
