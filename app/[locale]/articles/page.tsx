import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Articles | Web Development Insights",
  description: "Discover the importance of websites for businesses and individuals. Learn about landing pages, corporate websites, e-commerce solutions, and expert tips.",
  keywords: [
    "web development articles",
    "website importance",
    "landing page benefits",
    "corporate website",
    "e-commerce website",
    "business website",
    "web design tips",
    "digital presence",
    "online business",
    "website development"
  ],
  openGraph: {
    title: "Articles | Web Development Insights",
    description: "Expert insights on web development, website importance, and digital business solutions.",
    type: "website",
    images: [
      {
        url: "/articles-banner.webp",
        width: 1200,
        height: 630,
        alt: "Web Development Articles"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles | Web Development Insights",
    description: "Expert insights on web development, website importance, and digital business solutions.",
    images: ["/articles-banner.webp"]
  }
}

const articles = [
  {
    id: "website-importance-businesses-individuals",
    title: "أهمية الموقع الإلكتروني للمؤسسات والأفراد",
    excerpt: "اكتشف كيف يمكن للموقع الإلكتروني أن يحول عملك ويعزز حضورك الرقمي في العصر الحديث.",
    image: "/articles/website-importance.svg",
    category: "Business",
    readTime: "5 دقائق",
    publishDate: "2024-01-15",
    keywords: ["موقع إلكتروني", "أعمال", "حضور رقمي"]
  },
  {
    id: "landing-page-importance",
    title: "أهمية امتلاك موقع لاندنج بيدج للنشاط التجاري",
    excerpt: "تعرف على كيفية زيادة معدلات التحويل وتحسين النتائج التجارية من خلال صفحات الهبوط المحسنة.",
    image: "/articles/landing-page.svg",
    category: "Marketing",
    readTime: "4 دقائق",
    publishDate: "2024-01-20",
    keywords: ["لاندنج بيدج", "تسويق", "تحويلات"]
  },
  {
    id: "corporate-website-importance",
    title: "أهمية امتلاك موقع تعريفي للمؤسسات",
    excerpt: "بناء الثقة والمصداقية من خلال موقع تعريفي احترافي يعكس قيم وخدمات مؤسستك.",
    image: "/articles/corporate-website.svg",
    category: "Corporate",
    readTime: "6 دقائق",
    publishDate: "2024-01-25",
    keywords: ["موقع تعريفي", "مؤسسات", "مصداقية"]
  },
  {
    id: "ecommerce-website-importance",
    title: "أهمية امتلاك موقع تجارة إلكترونية",
    excerpt: "استكشف عالم التجارة الإلكترونية وكيف يمكن لمتجرك الإلكتروني أن يفتح آفاقاً جديدة للنمو.",
    image: "/articles/ecommerce-website.svg",
    category: "E-commerce",
    readTime: "7 دقائق",
    publishDate: "2024-02-01",
    keywords: ["تجارة إلكترونية", "متجر إلكتروني", "مبيعات"]
  },
  {
    id: "client-tips",
    title: "نصائح مهمة للعملاء في عالم التطوير",
    excerpt: "دليل شامل للعملاء يحتوي على أهم النصائح لضمان نجاح مشروعك الرقمي.",
    image: "/articles/client-tips.svg",
    category: "Tips",
    readTime: "8 دقائق",
    publishDate: "2024-02-05",
    keywords: ["نصائح", "عملاء", "تطوير مواقع"]
  }
]

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-background" dir="rtl">
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
              مقالات تطوير الويب
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              اكتشف عالم تطوير الويب
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              اكتشف أهمية المواقع الإلكترونية للأعمال والأفراد، وتعلم كيفية الاستفادة من التقنيات الحديثة لتحقيق أهدافك الرقمية
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
              مقالات مختارة
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              مجموعة من المقالات المتخصصة في تطوير الويب والتسويق الرقمي
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
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
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/90 text-foreground">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.publishDate).toLocaleDateString('ar-EG')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
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
                        اقرأ المقال
                        <ArrowRight className="ml-2 h-4 w-4" />
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