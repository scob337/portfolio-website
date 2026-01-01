import { Metadata } from "next"
import { getTranslations, getLocale } from "next-intl/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Article data with slugs as keys
const articlesData = [
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
]

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations("articles")

  const isArabic = locale === "ar"

  return {
    title: isArabic
      ? "مقالات تطوير الويب | عبد التواب شعبان"
      : "Web Development Articles | Abdeltawab Sha`ban",
    description: isArabic
      ? "اكتشف أهمية المواقع الإلكترونية للأعمال والأفراد. تعلم عن صفحات الهبوط، المواقع التعريفية، التجارة الإلكترونية، ونصائح الخبراء."
      : "Discover the importance of websites for businesses and individuals. Learn about landing pages, corporate websites, e-commerce solutions, and expert tips.",
    keywords: isArabic
      ? ["مقالات تطوير الويب", "أهمية المواقع", "صفحات الهبوط", "مواقع تعريفية", "تجارة إلكترونية", "تسويق رقمي"]
      : ["web development articles", "website importance", "landing pages", "corporate websites", "e-commerce", "digital marketing"],
    openGraph: {
      title: isArabic
        ? "مقالات تطوير الويب | عبد التواب شعبان"
        : "Web Development Articles | Abdeltawab Sha`ban",
      description: isArabic
        ? "مقالات متخصصة في تطوير الويب والتسويق الرقمي"
        : "Expert insights on web development and digital marketing",
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      url: `https://abdo-front-end.netlify.app${isArabic ? "/ar" : ""}/articles`,
      images: [
        {
          url: "/Logo.png",
          width: 1200,
          height: 630,
          alt: isArabic ? "مقالات تطوير الويب" : "Web Development Articles"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: isArabic
        ? "مقالات تطوير الويب | عبد التواب شعبان"
        : "Web Development Articles | Abdeltawab Sha`ban",
      description: isArabic
        ? "مقالات متخصصة في تطوير الويب والتسويق الرقمي"
        : "Expert insights on web development and digital marketing",
      images: ["/Logo.png"]
    },
    alternates: {
      canonical: `https://abdo-front-end.netlify.app${isArabic ? "/ar" : ""}/articles`,
      languages: {
        "en": "https://abdo-front-end.netlify.app/articles",
        "ar": "https://abdo-front-end.netlify.app/ar/articles"
      }
    }
  }
}

export default async function ArticlesPage() {
  const locale = await getLocale()
  const t = await getTranslations("articles")
  const isArabic = locale === "ar"
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight

  // Build articles with translations
  const articles = articlesData.map(article => ({
    ...article,
    title: t(`items.${article.id}.title`),
    excerpt: t(`items.${article.id}.excerpt`),
    category: t(`items.${article.id}.category`),
    readTime: t(`items.${article.id}.readTime`),
    keywords: article.keywords[locale as "en" | "ar"] || article.keywords.en
  }))

  return (
    <main className="min-h-screen bg-background" dir={isArabic ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0 bg-[url('/modern-tech-background-pattern.jpg')] opacity-5 bg-cover bg-center" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              {t("pageTitle")}
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              {t("heroTitle")}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("heroDescription")}
            </p>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-12">
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("selectedArticles")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("selectedDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden h-full bg-card">
                  <div className="relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute top-4 ${isArabic ? "right-4" : "left-4"}`}>
                      <Badge variant="secondary" className="bg-background/90 text-foreground">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.publishDate).toLocaleDateString(isArabic ? 'ar-EG' : 'en-US')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime} {t("readTime")}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.keywords.slice(0, 3).map((keyword, keywordIndex) => (
                        <Badge key={keywordIndex} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/articles/${article.id}`}>
                      <Button className="w-full group-hover:bg-primary/90 transition-colors">
                        {t("readArticle")}
                        <ArrowIcon className={`h-4 w-4 ${isArabic ? "mr-2" : "ml-2"}`} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("ctaTitle")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("ctaDescription")}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                {t("ctaButton")}
                <ArrowIcon className={`h-5 w-5 ${isArabic ? "mr-2" : "ml-2"}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data for Articles List */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": isArabic ? "مقالات تطوير الويب" : "Web Development Articles",
            "description": isArabic
              ? "مجموعة من المقالات المتخصصة في تطوير الويب والتسويق الرقمي"
              : "A collection of specialized articles on web development and digital marketing",
            "url": `https://abdo-front-end.netlify.app${isArabic ? "/ar" : ""}/articles`,
            "inLanguage": isArabic ? "ar" : "en",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": articles.length,
              "itemListElement": articles.map((article, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Article",
                  "headline": article.title,
                  "description": article.excerpt,
                  "image": `https://abdo-front-end.netlify.app${article.image}`,
                  "datePublished": article.publishDate,
                  "author": {
                    "@type": "Person",
                    "name": "Abdeltawab Sha`ban"
                  },
                  "url": `https://abdo-front-end.netlify.app${isArabic ? "/ar" : ""}/articles/${article.id}`
                }
              }))
            }
          })
        }}
      />
    </main>
  )
}