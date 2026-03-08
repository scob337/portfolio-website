import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://abdo-front-end.netlify.app";
  const routes = ["", "/about", "/projects", "/articles", "/contact"];
  const articleSlugs = [
    "website-importance-businesses-individuals",
    "landing-page-importance",
    "corporate-website",
    "ecommerce-website",
    "client-tips",
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Add static routes for both languages
  routes.forEach(route => {
    // English (Default)
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}${route}`,
          ar: `${baseUrl}/ar${route}`,
        },
      },
    });

    // Arabic
    entries.push({
      url: `${baseUrl}/ar${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}${route}`,
          ar: `${baseUrl}/ar${route}`,
        },
      },
    });
  });

  // Add articles for both languages
  articleSlugs.forEach(slug => {
    // English
    entries.push({
      url: `${baseUrl}/articles/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/articles/${slug}`,
          ar: `${baseUrl}/ar/articles/${slug}`,
        },
      },
    });

    // Arabic
    entries.push({
      url: `${baseUrl}/ar/articles/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/articles/${slug}`,
          ar: `${baseUrl}/ar/articles/${slug}`,
        },
      },
    });
  });

  return entries;
}
