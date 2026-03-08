import { Metadata } from "next"
import { getTranslations, getLocale } from "next-intl/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Globe, TrendingUp, Users, Shield, Clock, Star, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const articleContent = {
  en: {
    title: "The Importance of Websites for Businesses and Individuals",
    subtitle: "Discover how a website can transform your business and enhance your digital presence in the modern age.",
    category: "Business",
    author: "Development Team",
    publishDate: "January 15, 2024",
    readTime: "5 min read",
    sections: [
      {
        title: "The Digital Age and Your Presence",
        content: "In today's digital landscape, a website is no longer a luxury but a fundamental necessity. Whether you're an individual building a personal brand or an organization seeking global reach, your website serves as your digital home and the first point of contact for your audience."
      },
      {
        title: "Key Reasons Why a Website is Essential",
        items: [
          "Global Accessibility: Reach anyone, anywhere, at any time.",
          "Credibility and Trust: A professional website builds immediate authority.",
          "Cost-Effective Marketing: Reach your target audience more efficiently than traditional media.",
          "Customer Insights: Understand your audience through detailed analytics.",
          "24/7 Sales and Support: Your business remains active even while you sleep."
        ]
      },
      {
        title: "For Individuals",
        content: "A personal website allows you to showcase your portfolio, share your expertise through blogs, and build a professional identity that stands out in the job market."
      },
      {
        title: "For Organizations",
        content: "For businesses, a website is the cornerstone of digital transformation. It facilitates customer engagement, simplifies operations, and provides a platform for growth and innovation."
      }
    ],
    conclusion: {
      title: "Conclusion",
      content: "The strategic impact of a high-performance web presence cannot be overstated. It is the foundation upon which digital success is built."
    },
    relatedArticles: [
      {
        title: "The Importance of Having a Landing Page for Business",
        description: "Learn how landing pages can boost your conversion rates",
        href: "/articles/landing-page-importance"
      },
      {
        title: "Scaling E-Commerce: Technical Foundations for Global Growth",
        description: "A deep dive into the architecture of modern e-commerce platforms",
        href: "/articles/ecommerce-website"
      }
    ]
  },
  ar: {
    title: "أهمية الموقع الإلكتروني للمؤسسات والأفراد",
    subtitle: "اكتشف كيف يمكن للموقع الإلكتروني أن يحول عملك ويعزز حضورك الرقمي في العصر الحديث.",
    category: "أعمال",
    author: "فريق التطوير",
    publishDate: "15 يناير 2024",
    readTime: "5 دقائق قراءة",
    sections: [
      {
        title: "العصر الرقمي وتواجدك",
        content: "في المشهد الرقمي اليوم، لم يعد الموقع الإلكتروني رفاهية بل ضرورة أساسية. سواء كنت فرداً يبني علامة تجارية شخصية أو مؤسسة تسعى للوصول العالمي، فإن موقعك الإلكتروني يعمل كمنزلك الرقمي ونقطة الاتصال الأولى لجمهورك."
      },
      {
        title: "أسباب رئيسية تجعل الموقع الإلكتروني ضرورياً",
        items: [
          "الوصول العالمي: الوصول إلى أي شخص في أي مكان وفي أي وقت.",
          "المصداقية والثقة: الموقع الاحترافي يبني سلطة فورية.",
          "التسويق الفعال من حيث التكلفة: الوصول إلى جمهورك المستهدف بكفاءة أكبر من الوسائط التقليدية.",
          "رؤى العملاء: فهم جمهورك من خلال تحليلات مفصلة.",
          "المبيعات والدعم على مدار الساعة: يظل عملك نشطاً حتى أثناء نومك."
        ]
      },
      {
        title: "للأفراد",
        content: "يسمح الموقع الشخصي لك بعرض معرض أعمالك، ومشاركة خبراتك من خلال المدونات، وبناء هوية مهنية تبرز في سوق العمل."
      },
      {
        title: "للمؤسسات",
        content: "بالنسبة للشركات، يعد الموقع الإلكتروني حجر الزاوية للتحول الرقمي. فهو يسهل مشاركة العملاء، ويبسط العمليات، ويوفر منصة للنمو والابتكار."
      }
    ],
    conclusion: {
      title: "الخاتمة",
      content: "لا يمكن المبالغة في التأثير الاستراتيجي للتواجد الرقمي عالي الأداء. إنه الأساس الذي يبنى عليه النجاح الرقمي."
    },
    relatedArticles: [
      {
        title: "أهمية امتلاك موقع لاندنج بيدج للنشاط التجاري",
        description: "تعلم كيف يمكن لصفحات الهبوط تعزيز معدلات التحويل",
        href: "/articles/landing-page-importance"
      },
      {
        title: "توسيع التجارة الإلكترونية: الأسس التقنية للنمو العالمي",
        description: "تعمق في بنية منصات التجارة الإلكترونية الحديثة",
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
    title: content.title,
    description: content.subtitle,
    keywords: isArabic
      ? ["موقع إلكتروني", "أهمية المواقع", "حضور رقمي", "تطوير ويب"]
      : ["website", "importance of website", "digital presence", "web development"],
    openGraph: {
      title: content.title,
      description: content.subtitle,
      type: "article",
      images: ["/articles/website-importance.svg"],
      locale: isArabic ? "ar_EG" : "en_US",
    },
    alternates: {
      languages: {
        "en": "https://abdo-front-end.netlify.app/articles/website-importance-businesses-individuals",
        "ar": "https://abdo-front-end.netlify.app/ar/articles/website-importance-businesses-individuals"
      }
    }
  }
}

export default async function WebsiteImportancePage() {
  const locale = await getLocale()
  const t = await getTranslations("articles")
  const isArabic = locale === "ar"
  const content = articleContent[locale as "en" | "ar"] || articleContent.en
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight

  return (
    <main className="min-h-screen bg-background" dir={isArabic ? "rtl" : "ltr"}>
      <div className="bg-card shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link href="/articles" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
            <ArrowIcon className={`w-4 h-4 ${isArabic ? "ml-2" : "mr-2"}`} />
            {t("backToArticles")}
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{content.readTime}</span>
            </div>
            <Badge>{content.category}</Badge>
            <span>{content.publishDate}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {content.subtitle}
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-white/5">
            <div className="relative h-64 md:h-96 bg-gradient-to-br from-primary/10 to-accent/10">
              <Image
                src="/articles/website-importance.svg"
                alt={content.title}
                fill
                className="object-contain p-8"
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="prose prose-invert prose-lg max-w-none">
                {content.sections.map((section, index) => (
                  <div key={index} className="mb-12 last:mb-0">
                    <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <span className="w-8 h-1 bg-primary rounded-full" />
                      {section.title}
                    </h2>
                    {section.content && (
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {section.content}
                      </p>
                    )}
                    {section.items && (
                      <ul className="grid gap-4">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-muted-foreground">
                            <div className="mt-1.5 p-1 rounded-full bg-primary/20">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                <div className="mt-12 pt-12 border-t border-white/5">
                  <h2 className="text-3xl font-bold text-foreground mb-6">{content.conclusion.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.conclusion.content}
                  </p>
                </div>
              </div>

              <div className="mt-12 flex items-center justify-between py-6 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{t("shareArticle")}</span>
                  <Button variant="outline" size="sm" className="rounded-full gap-2">
                    <Share2 className="w-4 h-4" />
                    {t("share")}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">{t("relatedArticles")}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {content.relatedArticles.map((article, index) => (
                <Link key={index} href={article.href}>
                  <Card className="h-full group hover:border-primary/50 transition-all duration-300 bg-white/5 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {article.description}
                      </p>
                      <div className="mt-4 flex items-center text-primary text-sm font-bold">
                        {t("readMore")}
                        <ArrowIcon className={`w-4 h-4 ${isArabic ? "mr-2" : "ml-2"}`} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": content.title,
            "description": content.subtitle,
            "image": `https://abdo-front-end.netlify.app/articles/website-importance.svg`,
            "author": {
              "@type": "Person",
              "name": "Abdeltawab Sha`ban"
            },
            "datePublished": "2024-01-15",
            "inLanguage": isArabic ? "ar" : "en"
          })
        }}
      />
    </main>
  )
}
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p className="text-xl leading-relaxed mb-8">
              في عصر التكنولوجيا الرقمية، أصبح امتلاك موقع إلكتروني ضرورة حتمية وليس مجرد رفاهية. 
              سواء كنت تدير مؤسسة كبيرة أو صغيرة، أو حتى كنت فرداً يسعى لبناء علامته التجارية الشخصية، 
              فإن الموقع الإلكتروني يمثل نافذتك الأولى إلى العالم الرقمي.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">زيادة المبيعات والإيرادات</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  الموقع الإلكتروني يفتح أمامك أسواقاً جديدة ويمكنك من الوصول إلى عملاء من جميع أنحاء العالم، 
                  مما يؤدي إلى زيادة كبيرة في المبيعات والإيرادات.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">بناء الثقة والمصداقية</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  الموقع الإلكتروني الاحترافي يعزز من مصداقية عملك ويبني الثقة مع العملاء المحتملين، 
                  مما يجعلهم أكثر استعداداً للتعامل معك.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">الوصول العالمي</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  مع الموقع الإلكتروني، عملك متاح 24/7 لجميع العملاء حول العالم، 
                  مما يعني عدم فقدان أي فرصة تجارية بسبب قيود الوقت أو المكان.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">التحكم الكامل</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  على عكس منصات التواصل الاجتماعي، موقعك الإلكتروني يمنحك التحكم الكامل في المحتوى والتصميم 
                  وطريقة عرض علامتك التجارية.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              العناصر الأساسية لموقع إلكتروني ناجح
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">تصميم متجاوب وجذاب</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    يجب أن يكون موقعك متوافقاً مع جميع الأجهزة (الهواتف الذكية، الأجهزة اللوحية، أجهزة الكمبيوتر) 
                    مع تصميم جذاب يعكس هوية علامتك التجارية.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">محتوى عالي الجودة</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    المحتوى هو الملك في العالم الرقمي. يجب أن يكون محتوى موقعك مفيداً وقيماً ومحدثاً باستمرار 
                    لجذب الزوار والاحتفاظ بهم.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">تحسين محركات البحث (SEO)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    تحسين موقعك لمحركات البحث أمر بالغ الأهمية لضمان ظهوره في النتائج الأولى 
                    عندما يبحث العملاء عن خدماتك أو منتجاتك.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              إحصائيات مهمة
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">75%</div>
                <p className="text-muted-foreground">
                  من المستهلكين يحكمون على مصداقية الشركة بناءً على تصميم موقعها الإلكتروني
                </p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-primary mb-2">88%</div>
                <p className="text-muted-foreground">
                  من المستهلكين يبحثون عن المعلومات عبر الإنترنت قبل الشراء
                </p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50%</div>
                <p className="text-muted-foreground">
                  زيادة في المبيعات للشركات التي تمتلك مواقع إلكترونية احترافية
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <h2 className="text-3xl font-bold mb-6">الخلاصة</h2>
            <p className="text-lg leading-relaxed mb-6">
              الموقع الإلكتروني ليس مجرد أداة تسويقية، بل هو استثمار طويل المدى في مستقبل عملك. 
              في عالم يتجه بسرعة نحو الرقمنة، الشركات والأفراد الذين لا يمتلكون حضوراً رقمياً قوياً 
              سيجدون أنفسهم في موقف صعب أمام المنافسة.
            </p>
            
            <p className="text-lg leading-relaxed">
              لذلك، إذا كنت تفكر في إنشاء موقع إلكتروني لعملك أو لنفسك، فلا تتردد. 
              ابدأ اليوم واستثمر في مستقبلك الرقمي.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              هل تحتاج إلى موقع إلكتروني لعملك؟
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              دعني أساعدك في إنشاء موقع إلكتروني يحقق أهدافك ويعزز حضورك الرقمي
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                ابدأ مشروعك الآن
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}