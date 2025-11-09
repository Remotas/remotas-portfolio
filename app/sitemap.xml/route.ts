// app/sitemap.xml/route.ts
export async function GET() {
  const baseUrl = "https://remotas-portfolio.vercel.app";

  const routes = [
    "",
    "/projects",
    "/experience",
    "/certifications",
    "/cv",
    "/contact",
  ];

  const now = new Date().toISOString();

  const urls = routes
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === "" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
