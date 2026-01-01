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
    title: "The Importance of Having a Landing Page for Business",
    subtitle: "Learn how to increase conversion rates and improve business results through optimized landing pages",
    category: "Marketing",
    author: "Development Team",
    publishDate: "January 20, 2024",
    readTime: "6 min read",
    sections: [
      {
        title: "What is a Landing Page?",
        content: "A landing page is a standalone web page created specifically for a marketing or advertising campaign. It's where a visitor 'lands' after clicking on a link in an email, ads from Google, social media, or similar places on the web. Unlike general web pages, landing pages are designed with a single focused objective known as a Call to Action (CTA)."
      },
      {
        title: "Why Landing Pages are Essential for Business",
        content: "Landing pages are essential because they provide a targeted experience for visitors. When someone clicks on an ad about a specific product or service, they expect to see relevant information immediately. A well-designed landing page delivers exactly what visitors are looking for, increasing the chances of conversion significantly."
      },
      {
        title: "Key Benefits of Landing Pages",
        items: [
          "Higher conversion rates compared to regular website pages",
          "Better tracking and analytics for marketing campaigns",
          "Improved user experience with focused content",
          "Easier A/B testing for marketing optimization",
          "Clear and direct call to action"
        ]
      },
      {
        title: "Elements of an Effective Landing Page",
        items: [
          "Compelling headline that matches the ad",
          "Clear and concise value proposition",
          "Eye-catching visuals and professional design",
          "Trust signals like testimonials and guarantees",
          "Simple and prominent call to action button"
        ]
      },
      {
        title: "Best Practices for Landing Page Success",
        content: "To maximize your landing page effectiveness, ensure fast loading times, mobile responsiveness, and minimal distractions. Remove navigation menus, keep forms short, and use contrasting colors for your CTA buttons. Test different versions to find what works best for your audience."
      }
    ],
    conclusion: {
      title: "Conclusion",
      content: "Landing pages are a crucial tool for any business looking to increase conversions and maximize ROI from their marketing efforts. By following best practices and continuously optimizing, you can create landing pages that effectively convert visitors into customers."
    },
    relatedArticles: [
      {
        title: "The Importance of Websites for Organizations and Individuals",
        description: "Discover how a website can transform your business in the digital age",
        href: "/articles/website-importance"
      },
      {
        title: "The Importance of an E-commerce Website",
        description: "Explore the world of e-commerce and its opportunities for growth",
        href: "/articles/ecommerce-website"
      }
    ]
  },
  ar: {
    title: "أهمية امتلاك موقع لاندنج بيدج للنشاط التجاري",
    subtitle: "تعرف على كيفية زيادة معدلات التحويل وتحسين النتائج التجارية من خلال صفحات الهبوط المحسنة",
    category: "التسويق",
    author: "فريق التطوير",
    publishDate: "20 يناير 2024",
    readTime: "6 دقائق قراءة",
    sections: [
      {
        title: "ما هي صفحة الهبوط؟",
        content: "صفحة الهبوط هي صفحة ويب مستقلة تم إنشاؤها خصيصاً لحملة تسويقية أو إعلانية. إنها المكان الذي 'يهبط' فيه الزائر بعد النقر على رابط في بريد إلكتروني أو إعلانات من Google أو وسائل التواصل الاجتماعي. على عكس صفحات الويب العامة، تم تصميم صفحات الهبوط بهدف واحد مركز يُعرف باسم دعوة للعمل (CTA)."
      },
      {
        title: "لماذا صفحات الهبوط ضرورية للأعمال التجارية",
        content: "صفحات الهبوط ضرورية لأنها توفر تجربة مستهدفة للزوار. عندما ينقر شخص ما على إعلان عن منتج أو خدمة معينة، يتوقع رؤية معلومات ذات صلة فوراً. تقدم صفحة الهبوط المصممة جيداً بالضبط ما يبحث عنه الزوار، مما يزيد من فرص التحويل بشكل كبير."
      },
      {
        title: "الفوائد الرئيسية لصفحات الهبوط",
        items: [
          "معدلات تحويل أعلى مقارنة بصفحات الموقع العادية",
          "تتبع وتحليلات أفضل لحملات التسويق",
          "تحسين تجربة المستخدم بمحتوى مركز",
          "سهولة اختبار A/B لتحسين التسويق",
          "دعوة واضحة ومباشرة للعمل"
        ]
      },
      {
        title: "عناصر صفحة الهبوط الفعالة",
        items: [
          "عنوان جذاب يتطابق مع الإعلان",
          "عرض قيمة واضح ومختصر",
          "مرئيات لافتة للنظر وتصميم احترافي",
          "إشارات الثقة مثل الشهادات والضمانات",
          "زر دعوة للعمل بسيط وبارز"
        ]
      },
      {
        title: "أفضل الممارسات لنجاح صفحة الهبوط",
        content: "لتعظيم فعالية صفحة الهبوط، تأكد من سرعة التحميل والتجاوبية مع الأجهزة المحمولة وتقليل الإلهاءات. قم بإزالة قوائم التنقل، واجعل النماذج قصيرة، واستخدم ألواناً متباينة لأزرار CTA. اختبر إصدارات مختلفة للعثور على ما يناسب جمهورك."
      }
    ],
    conclusion: {
      title: "الخاتمة",
      content: "صفحات الهبوط هي أداة حاسمة لأي عمل تجاري يتطلع إلى زيادة التحويلات وتعظيم العائد على الاستثمار من جهود التسويق. من خلال اتباع أفضل الممارسات والتحسين المستمر، يمكنك إنشاء صفحات هبوط تحول الزوار إلى عملاء بفعالية."
    },
    relatedArticles: [
      {
        title: "أهمية الموقع الإلكتروني للمؤسسات والأفراد",
        description: "اكتشف كيف يمكن للموقع الإلكتروني أن يحول عملك في العصر الرقمي",
        href: "/articles/website-importance"
      },
      {
        title: "أهمية امتلاك موقع تجارة إلكترونية",
        description: "استكشف عالم التجارة الإلكترونية وفرص النمو",
        href: "/articles/ecommerce-website"
      }
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const isArabic = locale === "ar"
  const content = articleContent[locale as "en" | "ar"] || articleContent.en

  return {
    title: isArabic
      ? "أهمية صفحات الهبوط للأعمال التجارية | دليل شامل"
      : "The Importance of Landing Pages for Business | Comprehensive Guide",
    description: content.subtitle,
    keywords: isArabic
      ? ["صفحة هبوط", "لاندنج بيدج", "تسويق رقمي", "تحويلات", "حملات إعلانية"]
      : ["landing page", "digital marketing", "conversions", "advertising campaigns", "CTA"],
    openGraph: {
      title: content.title,
      description: content.subtitle,
      images: ["/articles/landing-page.svg"],
      type: "article",
      locale: isArabic ? "ar_EG" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.subtitle,
      images: ["/articles/landing-page.svg"],
    },
    alternates: {
      languages: {
        "en": "https://abdo-front-end.netlify.app/articles/landing-page-importance",
        "ar": "https://abdo-front-end.netlify.app/ar/articles/landing-page-importance"
      }
    }
  }
}

export default async function LandingPageImportancePage() {
  const locale = await getLocale()
  const t = await getTranslations("articles")
  const isArabic = locale === "ar"
  const content = articleContent[locale as "en" | "ar"] || articleContent.en
  const BackArrow = isArabic ? ArrowRight : ArrowLeft

  return (
    <main className="min-h-screen bg-background" dir={isArabic ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="bg-card shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/articles"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-4 transition-colors"
          >
            <BackArrow className={`w-4 h-4 ${isArabic ? "ml-2" : "mr-2"}`} />
            {t("backToArticles")}
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{content.publishDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{content.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{content.author}</span>
            </div>
          </div>

          <Badge className="mb-4">{content.category}</Badge>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {content.title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {content.subtitle}
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-64 md:h-96 bg-gradient-to-r from-green-500/20 to-teal-600/20">
            <Image
              src="/articles/landing-page.svg"
              alt={content.title}
              fill
              className="object-contain p-8"
            />
          </div>

          {/* Article Body */}
          <div className="p-6 md:p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              {content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                  {section.content && (
                    <p className="text-muted-foreground leading-relaxed mb-4">{section.content}</p>
                  )}
                  {section.items && (
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Conclusion */}
              <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">{content.conclusion.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {content.conclusion.content}
              </p>
            </div>

            {/* Share Section */}
            <div className="border-t pt-8 mt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{t("shareArticle")}</h3>
                <Button variant="outline" size="sm">
                  <Share2 className={`w-4 h-4 ${isArabic ? "ml-2" : "mr-2"}`} />
                  {t("share")}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">{t("relatedArticles")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.relatedArticles.map((article, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {article.description}
                </p>
                <Link href={article.href} className="text-primary hover:text-primary/80 font-medium transition-colors">
                  {t("readMore")} {isArabic ? "←" : "→"}
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": content.title,
            "description": content.subtitle,
            "image": "https://abdo-front-end.netlify.app/articles/landing-page.svg",
            "datePublished": "2024-01-20",
            "author": {
              "@type": "Person",
              "name": "Abdeltawab Sha`ban"
            },
            "publisher": {
              "@type": "Person",
              "name": "Abdeltawab Sha`ban"
            },
            "inLanguage": isArabic ? "ar" : "en"
          })
        }}
      />
    </main>
  )
}