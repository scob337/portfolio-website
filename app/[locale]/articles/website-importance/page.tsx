import { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

// Article content for both languages
const articleContent = {
  en: {
    title: "The Importance of Websites for Organizations and Individuals",
    subtitle: "In the age of digital technology, having a professional website has become an absolute necessity, not just a luxury",
    category: "Web Development",
    author: "Development Team",
    publishDate: "January 15, 2024",
    readTime: "8 min read",
    introduction: {
      title: "Introduction",
      content: "In today's digitally connected world, having a website is no longer just an additional option, but has become an essential necessity for any organization or individual seeking success and excellence. Whether you're running a large company or a small project or even working as a freelancer, your digital presence plays a pivotal role in determining your success and reach."
    },
    sectionsOrg: {
      title: "The Importance of Websites for Organizations",
      items: [
        {
          title: "1. Building Identity and Credibility",
          content: "A website is your first digital interface in front of customers. It helps build a professional image for the organization and enhances its credibility in the market. Today's customers search for companies online before making a purchase decision."
        },
        {
          title: "2. Reaching New Customers",
          content: "A website allows organizations to reach a wider range of potential customers, not only locally but globally as well. This opens new horizons for growth and expansion."
        },
        {
          title: "3. Improving Customer Service",
          content: "Through the website, comprehensive information about products and services can be provided, frequently asked questions can be answered, and multiple communication channels with customers can be offered around the clock."
        },
        {
          title: "4. Increasing Sales and Revenue",
          content: "The website works as a sales representative working 24/7, helping to increase orders and sales even outside official working hours."
        }
      ]
    },
    sectionsInd: {
      title: "The Importance of Websites for Individuals",
      items: [
        {
          title: "1. Building Personal Brand",
          content: "For freelancers and professionals, a personal website is a powerful tool for showcasing skills, experiences, and achievements in a professional and organized manner."
        },
        {
          title: "2. Showcasing Work and Projects",
          content: "Individuals can use their websites to display their portfolio in an attractive and organized way, which helps in attracting new clients and better job opportunities."
        },
        {
          title: "3. Professional Communication",
          content: "A personal website provides a platform for communication with potential clients and employers, and facilitates the communication and contracting process."
        }
      ]
    },
    statistics: {
      title: "Important Statistics:",
      items: [
        "97% of consumers search for companies online",
        "75% of users judge a company's credibility by its website design",
        "Companies with websites achieve 40% faster growth"
      ]
    },
    challenges: {
      title: "Challenges and Solutions",
      challengesTitle: "Common Challenges:",
      challengesList: [
        "Initial cost of website development",
        "Need for continuous maintenance and updates",
        "Necessity of search engine optimization (SEO)",
        "Need for high-quality content"
      ],
      solutionsTitle: "Suggested Solutions:",
      solutionsList: [
        "Start with a simple website and develop it gradually",
        "Seek specialized experts",
        "Invest in digital marketing",
        "Focus on user experience"
      ]
    },
    conclusion: {
      title: "Conclusion",
      content: "In conclusion, having a professional website is not just an investment in technology, but an investment in the future of your business or career. It is the bridge that connects you with your customers and opens new horizons for growth and development. Don't hesitate to take this important step towards digital success."
    },
    relatedArticles: [
      {
        title: "The Importance of Having a Landing Page for Business",
        description: "Discover how a carefully designed landing page can convert visitors into actual customers",
        href: "/articles/landing-page-importance"
      },
      {
        title: "The Importance of a Corporate Website for Organizations",
        description: "Learn how to build a strong digital identity for organizations through corporate websites",
        href: "/articles/corporate-website"
      }
    ]
  },
  ar: {
    title: "أهمية الموقع الإلكتروني للمؤسسات والأفراد",
    subtitle: "في عصر التكنولوجيا الرقمية، أصبح امتلاك موقع إلكتروني احترافي ضرورة حتمية وليس مجرد رفاهية",
    category: "تطوير المواقع",
    author: "فريق التطوير",
    publishDate: "15 يناير 2024",
    readTime: "8 دقائق قراءة",
    introduction: {
      title: "مقدمة",
      content: "في عالم اليوم المتصل رقمياً، لم يعد امتلاك موقع إلكتروني مجرد خيار إضافي، بل أصبح ضرورة أساسية لأي مؤسسة أو فرد يسعى للنجاح والتميز. سواء كنت تدير شركة كبيرة أو مشروعاً صغيراً أو حتى تعمل كمستقل، فإن وجودك الرقمي يلعب دوراً محورياً في تحديد مدى نجاحك وانتشارك."
    },
    sectionsOrg: {
      title: "أهمية الموقع الإلكتروني للمؤسسات",
      items: [
        {
          title: "1. بناء الهوية والمصداقية",
          content: "الموقع الإلكتروني هو واجهتك الرقمية الأولى أمام العملاء. يساعد في بناء صورة احترافية للمؤسسة ويعزز من مصداقيتها في السوق. العملاء اليوم يبحثون عن الشركات عبر الإنترنت قبل اتخاذ قرار الشراء."
        },
        {
          title: "2. الوصول لعملاء جدد",
          content: "يتيح الموقع الإلكتروني للمؤسسات الوصول إلى شريحة أوسع من العملاء المحتملين، ليس فقط محلياً بل عالمياً أيضاً. هذا يفتح آفاقاً جديدة للنمو والتوسع."
        },
        {
          title: "3. تحسين خدمة العملاء",
          content: "من خلال الموقع، يمكن تقديم معلومات شاملة عن المنتجات والخدمات، والإجابة على الأسئلة الشائعة، وتوفير قنوات تواصل متعددة مع العملاء على مدار الساعة."
        },
        {
          title: "4. زيادة المبيعات والإيرادات",
          content: "الموقع الإلكتروني يعمل كمندوب مبيعات يعمل 24/7، مما يساعد في زيادة الطلبات والمبيعات حتى خارج ساعات العمل الرسمية."
        }
      ]
    },
    sectionsInd: {
      title: "أهمية الموقع الإلكتروني للأفراد",
      items: [
        {
          title: "1. بناء العلامة الشخصية",
          content: "للمستقلين والمهنيين، الموقع الشخصي هو أداة قوية لعرض المهارات والخبرات والإنجازات بطريقة احترافية ومنظمة."
        },
        {
          title: "2. عرض الأعمال والمشاريع",
          content: "يمكن للأفراد استخدام مواقعهم لعرض معرض أعمالهم (Portfolio) بطريقة جذابة ومنظمة، مما يساعد في جذب عملاء جدد وفرص عمل أفضل."
        },
        {
          title: "3. التواصل المهني",
          content: "الموقع الشخصي يوفر منصة للتواصل مع العملاء المحتملين وأصحاب العمل، ويسهل عملية التواصل والتعاقد."
        }
      ]
    },
    statistics: {
      title: "إحصائيات مهمة:",
      items: [
        "97% من المستهلكين يبحثون عن الشركات عبر الإنترنت",
        "75% من المستخدمين يحكمون على مصداقية الشركة من خلال تصميم موقعها",
        "الشركات التي لديها مواقع إلكترونية تحقق نمواً أسرع بـ 40%"
      ]
    },
    challenges: {
      title: "التحديات والحلول",
      challengesTitle: "التحديات الشائعة:",
      challengesList: [
        "التكلفة المبدئية لتطوير الموقع",
        "الحاجة لصيانة وتحديث مستمر",
        "ضرورة تحسين محركات البحث (SEO)",
        "الحاجة لمحتوى عالي الجودة"
      ],
      solutionsTitle: "الحلول المقترحة:",
      solutionsList: [
        "البدء بموقع بسيط وتطويره تدريجياً",
        "الاستعانة بخبراء متخصصين",
        "الاستثمار في التسويق الرقمي",
        "التركيز على تجربة المستخدم"
      ]
    },
    conclusion: {
      title: "خاتمة",
      content: "في الختام، امتلاك موقع إلكتروني احترافي ليس مجرد استثمار في التكنولوجيا، بل استثمار في مستقبل عملك أو مهنتك. إنه الجسر الذي يربطك بعملائك ويفتح لك آفاقاً جديدة للنمو والتطور. لا تتردد في اتخاذ هذه الخطوة المهمة نحو النجاح الرقمي."
    },
    relatedArticles: [
      {
        title: "أهمية امتلاك موقع لاندنج بيدج للنشاط التجاري",
        description: "اكتشف كيف يمكن لصفحة الهبوط المصممة بعناية أن تحول الزوار إلى عملاء فعليين",
        href: "/articles/landing-page-importance"
      },
      {
        title: "أهمية امتلاك موقع تعريفي للمؤسسات",
        description: "تعرف على كيفية بناء هوية رقمية قوية للمؤسسات من خلال المواقع التعريفية",
        href: "/articles/corporate-website"
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
      ? "أهمية الموقع الإلكتروني للمؤسسات والأفراد | دليل شامل 2024"
      : "The Importance of Websites for Organizations and Individuals | Comprehensive Guide 2024",
    description: isArabic
      ? "اكتشف أهمية امتلاك موقع إلكتروني احترافي للمؤسسات والأفراد، وكيف يمكن أن يساعد في بناء الهوية الرقمية وزيادة المبيعات والوصول لعملاء جدد."
      : "Discover the importance of having a professional website for organizations and individuals, and how it can help build digital identity, increase sales, and reach new customers.",
    keywords: isArabic
      ? ["أهمية الموقع الإلكتروني", "موقع للمؤسسات", "موقع للأفراد", "تصميم مواقع", "الهوية الرقمية", "التسويق الإلكتروني"]
      : ["website importance", "organizational websites", "personal websites", "web design", "digital identity", "digital marketing"],
    openGraph: {
      title: content.title,
      description: content.subtitle,
      images: ["/articles/website-importance.svg"],
      type: "article",
      locale: isArabic ? "ar_EG" : "en_US",
      url: `https://abdo-front-end.netlify.app${isArabic ? "/ar" : ""}/articles/website-importance`,
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.subtitle,
      images: ["/articles/website-importance.svg"],
    },
    alternates: {
      canonical: `https://abdo-front-end.netlify.app${isArabic ? "/ar" : ""}/articles/website-importance`,
      languages: {
        "en": "https://abdo-front-end.netlify.app/articles/website-importance",
        "ar": "https://abdo-front-end.netlify.app/ar/articles/website-importance"
      }
    }
  }
}

export default async function WebsiteImportancePage() {
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
          <div className="relative h-64 md:h-96 bg-gradient-to-r from-primary/20 to-blue-600/20">
            <Image
              src="/articles/website-importance.svg"
              alt={content.title}
              fill
              className="object-contain p-8"
            />
          </div>

          {/* Article Body */}
          <div className="p-6 md:p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <h2 className="text-2xl font-bold text-foreground mb-6">{content.introduction.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {content.introduction.content}
              </p>

              {/* Organizations Section */}
              <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">{content.sectionsOrg.title}</h2>
              {content.sectionsOrg.items.map((item, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              ))}

              {/* Individuals Section */}
              <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">{content.sectionsInd.title}</h2>
              {content.sectionsInd.items.map((item, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              ))}

              {/* Statistics */}
              <div className="bg-primary/5 p-6 rounded-lg my-8 border border-primary/10">
                <h3 className="text-xl font-semibold text-primary mb-4">{content.statistics.title}</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {content.statistics.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Challenges and Solutions */}
              <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">{content.challenges.title}</h2>

              <h3 className="text-xl font-semibold text-foreground mb-4">{content.challenges.challengesTitle}</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                {content.challenges.challengesList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4">{content.challenges.solutionsTitle}</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                {content.challenges.solutionsList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

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
            "image": "https://abdo-front-end.netlify.app/articles/website-importance.svg",
            "datePublished": "2024-01-15",
            "dateModified": "2024-01-15",
            "author": {
              "@type": "Person",
              "name": "Abdeltawab Sha`ban",
              "url": "https://abdo-front-end.netlify.app"
            },
            "publisher": {
              "@type": "Person",
              "name": "Abdeltawab Sha`ban",
              "logo": {
                "@type": "ImageObject",
                "url": "https://abdo-front-end.netlify.app/Logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://abdo-front-end.netlify.app${isArabic ? "/ar" : ""}/articles/website-importance`
            },
            "inLanguage": isArabic ? "ar" : "en",
            "keywords": isArabic
              ? "أهمية الموقع الإلكتروني, موقع للمؤسسات, موقع للأفراد, تصميم مواقع"
              : "website importance, organizational websites, personal websites, web design"
          })
        }}
      />
    </main>
  )
}