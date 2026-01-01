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
    title: "The Importance of a Corporate Website for Organizations",
    subtitle: "Build trust and credibility through a professional corporate website that reflects your organization's values and services",
    category: "Corporate",
    author: "Development Team",
    publishDate: "January 25, 2024",
    readTime: "7 min read",
    sections: [
      {
        title: "What is a Corporate Website?",
        content: "A corporate website is a business website that represents your company or organization online. It serves as the digital face of your business, providing comprehensive information about your services, values, team, and how to get in touch. Unlike e-commerce sites, corporate websites focus primarily on building brand awareness and credibility."
      },
      {
        title: "Why Your Organization Needs a Corporate Website",
        content: "In today's digital-first world, having a professional corporate website is non-negotiable. It's often the first place potential clients, partners, and employees look when researching your organization. A well-designed corporate website establishes credibility and professionalism from the first impression."
      },
      {
        title: "Key Benefits of Corporate Websites",
        items: [
          "Establishes professional brand identity",
          "Available 24/7 to provide information",
          "Builds trust and credibility with stakeholders",
          "Showcases your products, services, and achievements",
          "Provides a platform for corporate communications"
        ]
      },
      {
        title: "Essential Elements of a Corporate Website",
        items: [
          "About Us page with company history and mission",
          "Services or Products pages with detailed descriptions",
          "Team page showcasing leadership and key personnel",
          "Contact information and inquiry forms",
          "News or Blog section for updates and insights"
        ]
      },
      {
        title: "Best Practices for Corporate Website Design",
        content: "Your corporate website should reflect your brand identity through consistent colors, fonts, and imagery. Ensure easy navigation, fast loading times, and mobile responsiveness. Include clear calls to action and make it easy for visitors to contact you or learn more about your services."
      }
    ],
    conclusion: {
      title: "Conclusion",
      content: "A corporate website is more than just an online presence—it's a powerful tool for building your organization's reputation and reaching new audiences. Investing in a professional, well-designed corporate website will pay dividends in credibility, visibility, and business growth."
    },
    relatedArticles: [
      {
        title: "The Importance of Websites for Organizations and Individuals",
        description: "Discover how a website can transform your business in the digital age",
        href: "/articles/website-importance"
      },
      {
        title: "Important Tips for Clients in Web Development",
        description: "A comprehensive guide with the most important tips for your digital project",
        href: "/articles/client-tips"
      }
    ]
  },
  ar: {
    title: "أهمية امتلاك موقع تعريفي للمؤسسات",
    subtitle: "بناء الثقة والمصداقية من خلال موقع تعريفي احترافي يعكس قيم وخدمات مؤسستك",
    category: "المؤسسات",
    author: "فريق التطوير",
    publishDate: "25 يناير 2024",
    readTime: "7 دقائق قراءة",
    sections: [
      {
        title: "ما هو الموقع التعريفي؟",
        content: "الموقع التعريفي هو موقع أعمال يمثل شركتك أو مؤسستك عبر الإنترنت. يعمل كواجهة رقمية لعملك، يوفر معلومات شاملة عن خدماتك وقيمك وفريقك وكيفية التواصل معك. على عكس مواقع التجارة الإلكترونية، تركز المواقع التعريفية بشكل أساسي على بناء الوعي بالعلامة التجارية والمصداقية."
      },
      {
        title: "لماذا تحتاج مؤسستك إلى موقع تعريفي",
        content: "في عالم اليوم الرقمي، أصبح امتلاك موقع تعريفي احترافي أمراً لا غنى عنه. غالباً ما يكون المكان الأول الذي يبحث فيه العملاء المحتملون والشركاء والموظفون عند البحث عن مؤسستك. الموقع التعريفي المصمم جيداً يؤسس المصداقية والاحترافية من الانطباع الأول."
      },
      {
        title: "الفوائد الرئيسية للمواقع التعريفية",
        items: [
          "تأسيس هوية علامة تجارية احترافية",
          "متاح على مدار الساعة لتوفير المعلومات",
          "بناء الثقة والمصداقية مع أصحاب المصلحة",
          "عرض منتجاتك وخدماتك وإنجازاتك",
          "توفير منصة للاتصالات المؤسسية"
        ]
      },
      {
        title: "العناصر الأساسية للموقع التعريفي",
        items: [
          "صفحة 'من نحن' مع تاريخ الشركة ورسالتها",
          "صفحات الخدمات أو المنتجات مع أوصاف تفصيلية",
          "صفحة الفريق تعرض القيادة والموظفين الرئيسيين",
          "معلومات الاتصال ونماذج الاستفسار",
          "قسم الأخبار أو المدونة للتحديثات والرؤى"
        ]
      },
      {
        title: "أفضل الممارسات لتصميم الموقع التعريفي",
        content: "يجب أن يعكس موقعك التعريفي هوية علامتك التجارية من خلال ألوان وخطوط وصور متسقة. تأكد من سهولة التنقل وسرعة التحميل والتجاوبية مع الأجهزة المحمولة. أضف دعوات واضحة للعمل واجعل من السهل على الزوار التواصل معك أو معرفة المزيد عن خدماتك."
      }
    ],
    conclusion: {
      title: "الخاتمة",
      content: "الموقع التعريفي هو أكثر من مجرد وجود على الإنترنت—إنه أداة قوية لبناء سمعة مؤسستك والوصول إلى جماهير جديدة. الاستثمار في موقع تعريفي احترافي ومصمم جيداً سيحقق عوائد في المصداقية والظهور ونمو الأعمال."
    },
    relatedArticles: [
      {
        title: "أهمية الموقع الإلكتروني للمؤسسات والأفراد",
        description: "اكتشف كيف يمكن للموقع الإلكتروني أن يحول عملك في العصر الرقمي",
        href: "/articles/website-importance"
      },
      {
        title: "نصائح مهمة للعملاء في عالم التطوير",
        description: "دليل شامل بأهم النصائح لمشروعك الرقمي",
        href: "/articles/client-tips"
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
      ? ["موقع تعريفي", "مؤسسات", "هوية رقمية", "مصداقية", "علامة تجارية"]
      : ["corporate website", "organizations", "digital identity", "credibility", "branding"],
    openGraph: {
      title: content.title,
      description: content.subtitle,
      images: ["/articles/corporate-website.svg"],
      type: "article",
      locale: isArabic ? "ar_EG" : "en_US",
    },
    alternates: {
      languages: {
        "en": "https://abdo-front-end.netlify.app/articles/corporate-website",
        "ar": "https://abdo-front-end.netlify.app/ar/articles/corporate-website"
      }
    }
  }
}

export default async function CorporateWebsitePage() {
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
          <div className="relative h-64 md:h-96 bg-gradient-to-r from-blue-500/20 to-indigo-600/20">
            <Image src="/articles/corporate-website.svg" alt={content.title} fill className="object-contain p-8" />
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
          "image": "https://abdo-front-end.netlify.app/articles/corporate-website.svg",
          "datePublished": "2024-01-25",
          "author": { "@type": "Person", "name": "Abdeltawab Sha`ban" },
          "inLanguage": isArabic ? "ar" : "en"
        })
      }} />
    </main>
  )
}