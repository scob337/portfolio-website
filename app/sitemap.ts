import { MetadataRoute } from 'next'
import { articlesData } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://abdo-front-end.netlify.app";
  const locales = ["en", "ar"];
  const staticRoutes = ["", "/about", "/projects", "/articles", "/contact"];

  const entries: MetadataRoute.Sitemap = [];

  // Helper to get alternate languages for a path
  const getAlternates = (path: string) => {
    return {
      languages: {
        en: `${baseUrl}${path}`,
        ar: `${baseUrl}/ar${path}`,
        "x-default": `${baseUrl}${path}`,
      },
    };
  };

  // Static Routes
  staticRoutes.forEach(route => {
    // English (Default)
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1.0 : 0.8,
      alternates: getAlternates(route),
    });

    // Arabic
    entries.push({
      url: `${baseUrl}/ar${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1.0 : 0.8,
      alternates: getAlternates(route),
    });
  });

  // Articles
  articlesData.forEach(article => {
    const path = `/articles/${article.id}`;
    
    // English
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: new Date(article.publishDate),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: getAlternates(path),
    });

    // Arabic
    entries.push({
      url: `${baseUrl}/ar${path}`,
      lastModified: new Date(article.publishDate),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: getAlternates(path),
    });
  });

  return entries;
}
