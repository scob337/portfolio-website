import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, TrendingUp, Users, Shield, Clock, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "أهمية الموقع الإلكتروني للمؤسسات والأفراد | دليل شامل",
  description: "اكتشف كيف يمكن للموقع الإلكتروني أن يحول عملك ويعزز حضورك الرقمي. دليل شامل لأهمية المواقع الإلكترونية للمؤسسات والأفراد.",
  keywords: [
    "موقع إلكتروني",
    "أهمية المواقع الإلكترونية",
    "حضور رقمي",
    "مؤسسات",
    "أفراد",
    "تطوير مواقع",
    "أعمال إلكترونية",
    "تسويق رقمي"
  ],
  openGraph: {
    title: "أهمية الموقع الإلكتروني للمؤسسات والأفراد",
    description: "اكتشف كيف يمكن للموقع الإلكتروني أن يحول عملك ويعزز حضورك الرقمي في العصر الحديث.",
    type: "article",
    images: [
      {
        url: "/articles/website-importance.svg",
        width: 1200,
        height: 630,
        alt: "أهمية الموقع الإلكتروني للمؤسسات والأفراد"
      }
    ]
  }
}

export default function WebsiteImportancePage() {
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
              <Globe className="w-4 h-4" />
              دليل شامل
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              أهمية الموقع الإلكتروني
              <span className="block text-primary">للمؤسسات والأفراد</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              اكتشف كيف يمكن للموقع الإلكتروني أن يحول عملك ويعزز حضورك الرقمي في العصر الحديث
            </p>
            
            {/* Meta Info */}
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 دقائق قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Business</Badge>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Article Image */}
          <div className="mb-12 text-center">
            <Image
              src="/articles/website-importance.svg"
              alt="أهمية الموقع الإلكتروني"
              width={600}
              height={400}
              className="mx-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Introduction */}
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