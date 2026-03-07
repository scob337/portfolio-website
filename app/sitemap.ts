import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://abdo-front-end.netlify.app"

  const routes = ["", "/about", "/projects", "/articles", "/contact"]
  const articleSlugs = [
    "website-importance-businesses-individuals",
    "landing-page-importance",
    "corporate-website",
    "ecommerce-website",
    "client-tips",
  ]

  const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
    alternates: {
      languages: {
        en: `${baseUrl}${route}`,
        ar: `${baseUrl}/ar${route}`,
      },
    },
  }))

  const articleEntries: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
    alternates: {
      languages: {
        en: `${baseUrl}/articles/${slug}`,
        ar: `${baseUrl}/ar/articles/${slug}`,
      },
    },
  }))

  return [...sitemapEntries, ...articleEntries]
}
