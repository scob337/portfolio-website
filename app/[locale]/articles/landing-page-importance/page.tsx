import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, TrendingUp, Users, Zap, CheckCircle, Star, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "أهمية صفحات الهبوط في زيادة التحويلات | محمد عبدالله",
  description: "اكتشف كيف تساعد صفحات الهبوط المصممة بعناية في زيادة معدلات التحويل وتحقيق أهداف التسويق الرقمي بفعالية أكبر.",
  keywords: "صفحات الهبوط, التحويلات, التسويق الرقمي, تصميم المواقع, UX, تجربة المستخدم",
  openGraph: {
    title: "أهمية صفحات الهبوط في زيادة التحويلات",
    description: "اكتشف كيف تساعد صفحات الهبوط المصممة بعناية في زيادة معدلات التحويل وتحقيق أهداف التسويق الرقمي بفعالية أكبر.",
    type: "article",
    images: [
      {
        url: "/articles/landing-page.svg",
        width: 1200,
        height: 630,
        alt: "أهمية صفحات الهبوط"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "أهمية صفحات الهبوط في زيادة التحويلات",
    description: "اكتشف كيف تساعد صفحات الهبوط المصممة بعناية في زيادة معدلات التحويل وتحقيق أهداف التسويق الرقمي بفعالية أكبر.",
    images: ["/articles/landing-page.svg"]
  }
}

const benefits = [
  {
    icon: Target,
    title: "تركيز واضح على الهدف",
    description: "صفحة واحدة مخصصة لهدف محدد دون تشتيت"
  },
  {
    icon: TrendingUp,
    title: "زيادة معدلات التحويل",
    description: "تصميم محسن لتحويل الزوار إلى عملاء"
  },
  {
    icon: Users,
    title: "استهداف دقيق للجمهور",
    description: "محتوى مخصص لشريحة معينة من العملاء"
  },
  {
    icon: Zap,
    title: "سرعة في اتخاذ القرار",
    description: "معلومات واضحة تساعد على اتخاذ قرار سريع"
  }
]

const features = [
  "عنوان جذاب ومقنع",
  "وصف واضح للمنتج أو الخدمة",
  "نموذج تواصل بسيط",
  "شهادات العملاء",
  "ضمانات وعروض خاصة",
  "دعوة واضحة للعمل (CTA)"
]

export default function LandingPageImportancePage() {
  return (
    <main className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-pink-500/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Target className="h-12 w-12 text-orange-500 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                أهمية صفحات الهبوط
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              اكتشف كيف تساعد صفحات الهبوط المصممة بعناية في زيادة معدلات التحويل وتحقيق أهداف التسويق الرقمي بفعالية أكبر
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                <BarChart3 className="h-4 w-4 mr-2" />
                تحسين التحويلات
              </Badge>
              <Badge variant="secondary" className="bg-red-100 text-red-700">
                <Star className="h-4 w-4 mr-2" />
                تجربة مستخدم محسنة
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/articles/landing-page.svg"
              alt="أهمية صفحات الهبوط"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">ما هي صفحة الهبوط؟</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              صفحة الهبوط هي صفحة ويب مستقلة تم إنشاؤها خصيصاً لحملة تسويقية معينة. إنها المكان الذي "يهبط" فيه الزائر بعد النقر على رابط في إعلان أو بريد إلكتروني أو أي مصدر رقمي آخر. على عكس صفحات الويب العادية، تم تصميم صفحات الهبوط بهدف واحد محدد - وهو التحويل.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">لماذا صفحات الهبوط مهمة؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <IconComponent className="h-6 w-6 text-orange-600" />
                        </div>
                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <h2 className="text-3xl font-bold mb-6 text-foreground">عناصر صفحة الهبوط الناجحة</h2>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-foreground">إحصائيات مهمة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center p-6 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
                <div className="text-3xl font-bold text-orange-600 mb-2">160%</div>
                <p className="text-sm text-muted-foreground">زيادة في معدل التحويل مع صفحات الهبوط المحسنة</p>
              </Card>
              <Card className="text-center p-6 border-0 shadow-lg bg-gradient-to-br from-red-50 to-pink-50">
                <div className="text-3xl font-bold text-red-600 mb-2">68%</div>
                <p className="text-sm text-muted-foreground">من الشركات تستخدم صفحات الهبوط لجمع العملاء المحتملين</p>
              </Card>
              <Card className="text-center p-6 border-0 shadow-lg bg-gradient-to-br from-pink-50 to-orange-50">
                <div className="text-3xl font-bold text-pink-600 mb-2">3 ثواني</div>
                <p className="text-sm text-muted-foreground">الوقت المتاح لجذب انتباه الزائر</p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-foreground">أفضل الممارسات</h2>
            <div className="space-y-6 mb-12">
              <div className="border-r-4 border-orange-500 pr-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">البساطة هي المفتاح</h3>
                <p className="text-muted-foreground">تجنب التشتيت والتركيز على رسالة واحدة واضحة.</p>
              </div>
              <div className="border-r-4 border-red-500 pr-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">اختبار A/B المستمر</h3>
                <p className="text-muted-foreground">اختبر عناصر مختلفة لتحسين الأداء باستمرار.</p>
              </div>
              <div className="border-r-4 border-pink-500 pr-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">التحسين للهواتف المحمولة</h3>
                <p className="text-muted-foreground">تأكد من أن صفحتك تعمل بشكل مثالي على جميع الأجهزة.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              هل تحتاج إلى صفحة هبوط احترافية؟
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              دعني أساعدك في إنشاء صفحة هبوط تحقق أهدافك التسويقية
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