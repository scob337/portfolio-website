import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = "https://abdo-front-end.netlify.app";
  const routes = ["", "/about", "/projects", "/articles", "/contact"];
  const articleSlugs = [
    "website-importance-businesses-individuals",
    "landing-page-importance",
    "corporate-website",
    "ecommerce-website",
    "client-tips",
  ];

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemapXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  // Add routes
  routes.forEach(route => {
    sitemapXml += `  <url>\n`;
    sitemapXml += `    <loc>${baseUrl}${route}</loc>\n`;
    sitemapXml += `    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${route}"/>\n`;
    sitemapXml += `    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar${route}"/>\n`;
    sitemapXml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    sitemapXml += `    <changefreq>${route === "" ? "weekly" : "monthly"}</changefreq>\n`;
    sitemapXml += `    <priority>${route === "" ? "1.0" : "0.8"}</priority>\n`;
    sitemapXml += `  </url>\n`;
  });

  // Add articles
  articleSlugs.forEach(slug => {
    sitemapXml += `  <url>\n`;
    sitemapXml += `    <loc>${baseUrl}/articles/${slug}</loc>\n`;
    sitemapXml += `    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/articles/${slug}"/>\n`;
    sitemapXml += `    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/articles/${slug}"/>\n`;
    sitemapXml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    sitemapXml += `    <changefreq>monthly</changefreq>\n`;
    sitemapXml += `    <priority>0.6</priority>\n`;
    sitemapXml += `  </url>\n`;
  });

  sitemapXml += `</urlset>`;

  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
