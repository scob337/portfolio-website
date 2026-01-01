import { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const articleContent = {
  en: {
    title: "The Importance of an E-commerce Website",
    subtitle: "Explore the world of e-commerce and how your online store can open new horizons for growth",
    category: "E-commerce",
    author: "Development Team",
    publishDate: "February 1, 2024",
    readTime: "8 min read",
    sections: [
      {
        title: "The E-commerce Revolution",
        content: "E-commerce has transformed the way we buy and sell products and services. With the rise of online shopping, businesses that embrace e-commerce can reach customers globally, operate 24/7, and significantly reduce overhead costs compared to traditional brick-and-mortar stores."
      },
      {
        title: "Why Your Business Needs an E-commerce Website",
        content: "An e-commerce website is essential for any business looking to expand its reach and increase sales. It provides customers with the convenience of shopping anytime, anywhere, and gives businesses access to valuable customer data and insights that can drive growth and improve marketing strategies."
      },
      {
        title: "Key Benefits of E-commerce",
        items: [
          "24/7 availability - your store never closes",
          "Global reach - sell to customers worldwide",
          "Lower operational costs compared to physical stores",
          "Easy scalability as your business grows",
          "Detailed analytics and customer insights",
          "Personalized shopping experiences"
        ]
      },
      {
        title: "Essential Features for E-commerce Success",
        items: [
          "Secure payment processing systems",
          "User-friendly product catalog and search",
          "Mobile-responsive design",
          "Shopping cart and checkout optimization",
          "Customer reviews and ratings",
          "Inventory management integration"
        ]
      },
      {
        title: "Getting Started with E-commerce",
        content: "Starting an e-commerce business requires careful planning. Consider your target market, product selection, platform choice, and marketing strategy. Focus on providing an excellent user experience, secure transactions, and reliable customer service to build trust and encourage repeat purchases."
      }
    ],
    conclusion: {
      title: "Conclusion",
      content: "E-commerce is not just the future—it's the present. Whether you're a small business looking to expand or an established company wanting to increase sales channels, an e-commerce website is a powerful tool for growth. Start your e-commerce journey today and unlock new opportunities for your business."
    },
    relatedArticles: [
      {
        title: "The Importance of Having a Landing Page for Business",
        description: "Learn how landing pages can boost your conversion rates",
        href: "/articles/landing-page-importance"
      },
      {
        title: "The Importance of Websites for Organizations and Individuals",
        description: "Discover how a website can transform your business",
        href: "/articles/website-importance"
      }
    ]
  },
  ar: {
    title: "أهمية امتلاك موقع تجارة إلكترونية",
    subtitle: "استكشف عالم التجارة الإلكترونية وكيف يمكن لمتجرك الإلكتروني أن يفتح آفاقاً جديدة للنمو",
    category: "التجارة الإلكترونية",
    author: "فريق التطوير",
    publishDate: "1 فبراير 2024",
    readTime: "8 دقائق قراءة",
    sections: [
      {
        title: "ثورة التجارة الإلكترونية",
        content: "غيرت التجارة الإلكترونية طريقة شراء وبيع المنتجات والخدمات. مع ازدهار التسوق عبر الإنترنت، يمكن للشركات التي تتبنى التجارة الإلكترونية الوصول إلى عملاء عالمياً، والعمل على مدار الساعة، وتقليل تكاليف التشغيل بشكل كبير مقارنة بالمتاجر التقليدية."
      },
      {
        title: "لماذا يحتاج عملك إلى موقع تجارة إلكترونية",
        content: "موقع التجارة الإلكترونية ضروري لأي عمل يتطلع إلى توسيع نطاقه وزيادة مبيعاته. يوفر للعملاء راحة التسوق في أي وقت ومن أي مكان، ويمنح الشركات الوصول إلى بيانات ورؤى قيمة للعملاء يمكن أن تدفع النمو وتحسن استراتيجيات التسويق."
      },
      {
        title: "الفوائد الرئيسية للتجارة الإلكترونية",
        items: [
          "متاح على مدار الساعة - متجرك لا يغلق أبداً",
          "الوصول العالمي - البيع للعملاء في جميع أنحاء العالم",
          "تكاليف تشغيل أقل مقارنة بالمتاجر الفعلية",
          "سهولة التوسع مع نمو عملك",
          "تحليلات مفصلة ورؤى العملاء",
          "تجارب تسوق مخصصة"
        ]
      },
      {
        title: "الميزات الأساسية لنجاح التجارة الإلكترونية",
        items: [
          "أنظمة معالجة دفع آمنة",
          "كتالوج منتجات وبحث سهل الاستخدام",
          "تصميم متجاوب مع الأجهزة المحمولة",
          "تحسين عربة التسوق وعملية الدفع",
          "مراجعات وتقييمات العملاء",
          "تكامل إدارة المخزون"
        ]
      },
      {
        title: "البدء في التجارة الإلكترونية",
        content: "يتطلب بدء عمل تجارة إلكترونية تخطيطاً دقيقاً. ضع في اعتبارك السوق المستهدف واختيار المنتجات ومنصة التجارة واستراتيجية التسويق. ركز على توفير تجربة مستخدم ممتازة ومعاملات آمنة وخدمة عملاء موثوقة لبناء الثقة وتشجيع عمليات الشراء المتكررة."
      }
    ],
    conclusion: {
      title: "الخاتمة",
      content: "التجارة الإلكترونية ليست المستقبل فحسب—إنها الحاضر. سواء كنت شركة صغيرة تتطلع إلى التوسع أو شركة راسخة ترغب في زيادة قنوات المبيعات، فإن موقع التجارة الإلكترونية هو أداة قوية للنمو. ابدأ رحلتك في التجارة الإلكترونية اليوم واكتشف فرصاً جديدة لعملك."
    },
    relatedArticles: [
      {
        title: "أهمية امتلاك موقع لاندنج بيدج للنشاط التجاري",
        description: "تعلم كيف يمكن لصفحات الهبوط تعزيز معدلات التحويل",
        href: "/articles/landing-page-importance"
      },
      {
        title: "أهمية الموقع الإلكتروني للمؤسسات والأفراد",
        description: "اكتشف كيف يمكن للموقع الإلكتروني أن يحول عملك",
        href: "/articles/website-importance"
      }
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const isArabic = locale === "ar"
  const content = articleContent[locale as "en" | "ar"] || articleContent.en

  return {
    title: content.title,
    description: content.subtitle,
    keywords: isArabic
      ? ["تجارة إلكترونية", "متجر إلكتروني", "بيع أونلاين", "مبيعات", "تسوق عبر الإنترنت"]
      : ["e-commerce", "online store", "online sales", "digital commerce", "online shopping"],
    openGraph: {
      title: content.title,
      description: content.subtitle,
      images: ["/articles/ecommerce-website.svg"],
      type: "article",
      locale: isArabic ? "ar_EG" : "en_US",
    },
    alternates: {
      languages: {
        "en": "https://abdo-front-end.netlify.app/articles/ecommerce-website",
        "ar": "https://abdo-front-end.netlify.app/ar/articles/ecommerce-website"
      }
    }
  }
}

export default async function EcommerceWebsitePage() {
  const locale = await getLocale()
  const t = await getTranslations("articles")
  const isArabic = locale === "ar"
  const content = articleContent[locale as "en" | "ar"] || articleContent.en
  const BackArrow = isArabic ? ArrowRight : ArrowLeft

  return (
    <main className="min-h-screen bg-background" dir={isArabic ? "rtl" : "ltr"}>
      <div className="bg-card shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/articles" className="inline-flex items-center text-primary hover:text-primary/80 mb-4 transition-colors">
            <BackArrow className={`w-4 h-4 ${isArabic ? "ml-2" : "mr-2"}`} />
            {t("backToArticles")}
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>{content.publishDate}</span></div>
            <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>{content.readTime}</span></div>
            <div className="flex items-center gap-1"><User className="w-4 h-4" /><span>{content.author}</span></div>
          </div>

          <Badge className="mb-4">{content.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{content.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{content.subtitle}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96 bg-gradient-to-r from-orange-500/20 to-red-600/20">
            <Image src="/articles/ecommerce-website.svg" alt={content.title} fill className="object-contain p-8" />
          </div>

          <div className="p-6 md:p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              {content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                  {section.content && <p className="text-muted-foreground leading-relaxed mb-4">{section.content}</p>}
                  {section.items && (
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      {section.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  )}
                </div>
              ))}
              <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">{content.conclusion.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{content.conclusion.content}</p>
            </div>

            <div className="border-t pt-8 mt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{t("shareArticle")}</h3>
                <Button variant="outline" size="sm">
                  <Share2 className={`w-4 h-4 ${isArabic ? "ml-2" : "mr-2"}`} />{t("share")}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">{t("relatedArticles")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.relatedArticles.map((article, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2">{article.title}</h3>
                <p className="text-muted-foreground mb-4">{article.description}</p>
                <Link href={article.href} className="text-primary hover:text-primary/80 font-medium">{t("readMore")} {isArabic ? "←" : "→"}</Link>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Article",
          "headline": content.title, "description": content.subtitle,
          "image": "https://abdo-front-end.netlify.app/articles/ecommerce-website.svg",
          "datePublished": "2024-02-01",
          "author": { "@type": "Person", "name": "Abdeltawab Sha`ban" },
          "inLanguage": isArabic ? "ar" : "en"
        })
      }} />
    </main>
  )
}