import { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, User, CheckCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const articleContent = {
  en: {
    title: "Important Tips for Clients in Web Development",
    subtitle: "A comprehensive guide for clients with the most important tips to ensure the success of your digital project",
    category: "Tips",
    author: "Development Team",
    publishDate: "February 5, 2024",
    readTime: "10 min read",
    sections: [
      {
        title: "Before Starting Your Project",
        tips: [
          {
            title: "Define Your Goals Clearly",
            content: "Before approaching a developer, clearly define what you want to achieve with your website. Are you looking to generate leads, sell products, or simply establish an online presence? Clear goals help developers create the right solution."
          },
          {
            title: "Know Your Target Audience",
            content: "Understanding who will use your website is crucial. Consider their age, technical skills, preferences, and what devices they use. This information shapes the design and functionality of your site."
          },
          {
            title: "Set a Realistic Budget",
            content: "Quality web development requires investment. Research market rates and set a budget that allows for professional work. Remember that cheaper options often lead to more costs in the long run."
          }
        ]
      },
      {
        title: "During Development",
        tips: [
          {
            title: "Communicate Regularly",
            content: "Maintain open communication with your development team. Regular check-ins help catch issues early and ensure the project stays on track. Don't hesitate to ask questions or provide feedback."
          },
          {
            title: "Provide Clear Feedback",
            content: "When reviewing work, be specific about what you like and don't like. 'I don't like it' isn't helpful. Instead, say 'I'd prefer a brighter color scheme' or 'The navigation feels confusing because...'"
          },
          {
            title: "Trust the Experts",
            content: "While your input is valuable, remember that developers have expertise you may lack. Be open to their suggestions about technical matters, user experience, and best practices."
          }
        ]
      },
      {
        title: "Content Preparation",
        tips: [
          {
            title: "Prepare Content Early",
            content: "Don't wait until the last minute to provide website content. Prepare text, images, and videos early. High-quality content is as important as good design."
          },
          {
            title: "Invest in Quality Images",
            content: "Professional photos and graphics significantly impact how your website is perceived. Avoid low-quality stock photos when possible. Consider investing in professional photography."
          }
        ]
      },
      {
        title: "After Launch",
        tips: [
          {
            title: "Plan for Maintenance",
            content: "A website needs regular updates and maintenance. Budget for ongoing support, security updates, and content refreshes. A neglected website can become a liability."
          },
          {
            title: "Monitor Performance",
            content: "Use analytics to track how visitors interact with your site. This data helps identify areas for improvement and measures the success of your investment."
          }
        ]
      }
    ],
    conclusion: {
      title: "Conclusion",
      content: "Working with a web developer is a partnership. By following these tips, you can ensure smoother communication, better results, and a final product that meets your business goals. Remember, the most successful projects are those where clients and developers work together as a team."
    },
    relatedArticles: [
      {
        title: "The Importance of a Corporate Website for Organizations",
        description: "Build trust through a professional corporate website",
        href: "/articles/corporate-website"
      },
      {
        title: "The Importance of Websites for Organizations and Individuals",
        description: "Discover how a website can transform your business",
        href: "/articles/website-importance"
      }
    ]
  },
  ar: {
    title: "نصائح مهمة للعملاء في عالم التطوير",
    subtitle: "دليل شامل للعملاء يحتوي على أهم النصائح لضمان نجاح مشروعك الرقمي",
    category: "نصائح",
    author: "فريق التطوير",
    publishDate: "5 فبراير 2024",
    readTime: "10 دقائق قراءة",
    sections: [
      {
        title: "قبل بدء المشروع",
        tips: [
          {
            title: "حدد أهدافك بوضوح",
            content: "قبل التواصل مع مطور، حدد بوضوح ما تريد تحقيقه من موقعك. هل تريد جذب عملاء محتملين أم بيع منتجات أم مجرد إنشاء حضور على الإنترنت؟ الأهداف الواضحة تساعد المطورين على إنشاء الحل المناسب."
          },
          {
            title: "اعرف جمهورك المستهدف",
            content: "فهم من سيستخدم موقعك أمر بالغ الأهمية. ضع في اعتبارك أعمارهم ومهاراتهم التقنية وتفضيلاتهم والأجهزة التي يستخدمونها. هذه المعلومات تشكل تصميم ووظائف موقعك."
          },
          {
            title: "ضع ميزانية واقعية",
            content: "تطوير الويب عالي الجودة يتطلب استثماراً. ابحث عن أسعار السوق وضع ميزانية تسمح بعمل احترافي. تذكر أن الخيارات الأرخص غالباً ما تؤدي إلى تكاليف أكثر على المدى الطويل."
          }
        ]
      },
      {
        title: "أثناء التطوير",
        tips: [
          {
            title: "تواصل بانتظام",
            content: "حافظ على تواصل مفتوح مع فريق التطوير. المتابعة المنتظمة تساعد في اكتشاف المشاكل مبكراً وتضمن سير المشروع في المسار الصحيح. لا تتردد في طرح الأسئلة أو تقديم الملاحظات."
          },
          {
            title: "قدم ملاحظات واضحة",
            content: "عند مراجعة العمل، كن محدداً حول ما يعجبك وما لا يعجبك. 'لا يعجبني' ليست مفيدة. بدلاً من ذلك، قل 'أفضل مخطط ألوان أكثر إشراقاً' أو 'التنقل يبدو مربكاً لأن...'"
          },
          {
            title: "ثق بالخبراء",
            content: "بينما مدخلاتك قيمة، تذكر أن المطورين لديهم خبرة قد تفتقر إليها. كن منفتحاً على اقتراحاتهم حول المسائل التقنية وتجربة المستخدم وأفضل الممارسات."
          }
        ]
      },
      {
        title: "تحضير المحتوى",
        tips: [
          {
            title: "جهز المحتوى مبكراً",
            content: "لا تنتظر حتى اللحظة الأخيرة لتقديم محتوى الموقع. جهز النصوص والصور ومقاطع الفيديو مبكراً. المحتوى عالي الجودة لا يقل أهمية عن التصميم الجيد."
          },
          {
            title: "استثمر في صور عالية الجودة",
            content: "الصور والرسومات الاحترافية تؤثر بشكل كبير على كيفية إدراك موقعك. تجنب الصور منخفضة الجودة قدر الإمكان. فكر في الاستثمار في التصوير الاحترافي."
          }
        ]
      },
      {
        title: "بعد الإطلاق",
        tips: [
          {
            title: "خطط للصيانة",
            content: "الموقع يحتاج تحديثات وصيانة منتظمة. خصص ميزانية للدعم المستمر وتحديثات الأمان وتجديد المحتوى. الموقع المهمل يمكن أن يصبح عبئاً."
          },
          {
            title: "راقب الأداء",
            content: "استخدم التحليلات لتتبع كيفية تفاعل الزوار مع موقعك. هذه البيانات تساعد في تحديد مجالات التحسين وقياس نجاح استثمارك."
          }
        ]
      }
    ],
    conclusion: {
      title: "الخاتمة",
      content: "العمل مع مطور ويب هو شراكة. باتباع هذه النصائح، يمكنك ضمان تواصل أفضل ونتائج أفضل ومنتج نهائي يلبي أهداف عملك. تذكر أن المشاريع الأكثر نجاحاً هي تلك التي يعمل فيها العملاء والمطورون معاً كفريق واحد."
    },
    relatedArticles: [
      {
        title: "أهمية امتلاك موقع تعريفي للمؤسسات",
        description: "بناء الثقة من خلال موقع تعريفي احترافي",
        href: "/articles/corporate-website"
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
      ? ["نصائح للعملاء", "تطوير مواقع", "مشاريع رقمية", "العمل مع مطورين"]
      : ["client tips", "web development", "digital projects", "working with developers"],
    openGraph: {
      title: content.title,
      description: content.subtitle,
      images: ["/articles/client-tips.svg"],
      type: "article",
      locale: isArabic ? "ar_EG" : "en_US",
    },
    alternates: {
      languages: {
        "en": "https://abdo-front-end.netlify.app/articles/client-tips",
        "ar": "https://abdo-front-end.netlify.app/ar/articles/client-tips"
      }
    }
  }
}

export default async function ClientTipsPage() {
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
          <div className="relative h-64 md:h-96 bg-gradient-to-r from-purple-500/20 to-pink-600/20">
            <Image src="/articles/client-tips.svg" alt={content.title} fill className="object-contain p-8" />
          </div>

          <div className="p-6 md:p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              {content.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-6">{section.title}</h2>
                  <div className="space-y-6">
                    {section.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="bg-primary/5 rounded-lg p-5 border border-primary/10">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">{tip.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{tip.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
          "image": "https://abdo-front-end.netlify.app/articles/client-tips.svg",
          "datePublished": "2024-02-05",
          "author": { "@type": "Person", "name": "Abdeltawab Sha`ban" },
          "inLanguage": isArabic ? "ar" : "en"
        })
      }} />
    </main>
  )
}