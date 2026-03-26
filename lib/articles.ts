// Article data with slugs as keys
export const articlesData = [
  {
    id: "website-importance-businesses-individuals",
    image: "/articles/website-importance.svg",
    publishDate: "2024-01-15",
    keywords: {
      en: ["website", "business", "digital presence"],
      ar: ["موقع إلكتروني", "أعمال", "حضور رقمي"]
    }
  },
  {
    id: "landing-page-importance",
    image: "/articles/landing-page.svg",
    publishDate: "2024-01-20",
    keywords: {
      en: ["landing page", "marketing", "conversions"],
      ar: ["لاندنج بيدج", "تسويق", "تحويلات"]
    }
  },
  {
    id: "corporate-website",
    image: "/articles/corporate-website.svg",
    publishDate: "2024-01-25",
    keywords: {
      en: ["corporate website", "organizations", "credibility"],
      ar: ["موقع تعريفي", "مؤسسات", "مصداقية"]
    }
  },
  {
    id: "ecommerce-website",
    image: "/articles/ecommerce-website.svg",
    publishDate: "2024-02-01",
    keywords: {
      en: ["e-commerce", "online store", "sales"],
      ar: ["تجارة إلكترونية", "متجر إلكتروني", "مبيعات"]
    }
  },
  {
    id: "client-tips",
    image: "/articles/client-tips.svg",
    publishDate: "2024-02-05",
    keywords: {
      en: ["tips", "clients", "web development"],
      ar: ["نصائح", "عملاء", "تطوير مواقع"]
    }
  }
];

export const getArticleSlugs = () => articlesData.map(article => article.id);
