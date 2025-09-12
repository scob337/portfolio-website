import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, User, ShoppingCart, TrendingUp, CreditCard } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'أهمية امتلاك متجر إلكتروني | دليل التجارة الإلكترونية 2024',
  description: 'اكتشف أهمية إنشاء متجر إلكتروني لنشاطك التجاري، وكيف يمكن أن يساعد في زيادة المبيعات والوصول لعملاء جدد وتوسيع نطاق العمل.',
  keywords: [
    'متجر إلكتروني',
    'التجارة الإلكترونية',
    'ecommerce',
    'البيع أونلاين',
    'متجر أونلاين',
    'التسوق الإلكتروني',
    'زيادة المبيعات',
    'التجارة الرقمية',
    'منصة البيع',
    'متاجر الإنترنت'
  ],
  openGraph: {
    title: 'أهمية امتلاك متجر إلكتروني للأعمال التجارية',
    description: 'دليل شامل حول فوائد التجارة الإلكترونية وكيفية بناء متجر إلكتروني ناجح',
    images: ['/articles/ecommerce-website.svg'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'أهمية امتلاك متجر إلكتروني للأعمال التجارية',
    description: 'دليل شامل حول فوائد التجارة الإلكترونية وكيفية بناء متجر إلكتروني ناجح',
    images: ['/articles/ecommerce-website.svg'],
  },
};

export default function EcommerceWebsiteArticle() {
  return (
    <main className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/articles" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            العودة للمقالات
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>22 يناير 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>10 دقائق قراءة</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>خبير التجارة الإلكترونية</span>
            </div>
          </div>
          
          <Badge className="mb-4 bg-emerald-100 text-emerald-800">التجارة الإلكترونية</Badge>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            أهمية امتلاك متجر إلكتروني للأعمال التجارية
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            في عصر التكنولوجيا الرقمية، أصبح المتجر الإلكتروني ضرورة حتمية لأي نشاط تجاري يسعى للنمو والتوسع
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-96 bg-gradient-to-r from-emerald-500 to-teal-600">
            <Image
              src="/articles/ecommerce-website.svg"
              alt="متجر إلكتروني للأعمال التجارية"
              fill
              className="object-contain p-8"
            />
          </div>
          
          {/* Article Body */}
          <div className="p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ما هو المتجر الإلكتروني؟</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                المتجر الإلكتروني هو منصة رقمية تتيح للشركات والأفراد بيع منتجاتهم أو خدماتهم عبر الإنترنت. يوفر تجربة تسوق شاملة للعملاء تشمل تصفح المنتجات، إضافتها لسلة التسوق، إتمام عملية الدفع، وتتبع الطلبات.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">لماذا تحتاج لمتجر إلكتروني؟</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 text-center">
                  <ShoppingCart className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">البيع على مدار الساعة</h3>
                  <p className="text-gray-600 text-sm">متجرك مفتوح 24/7 دون توقف</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">زيادة المبيعات</h3>
                  <p className="text-gray-600 text-sm">وصول أوسع وفرص بيع أكثر</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <CreditCard className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">دفع آمن</h3>
                  <p className="text-gray-600 text-sm">طرق دفع متعددة وآمنة</p>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">الفوائد الأساسية للمتاجر الإلكترونية</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. توسيع نطاق العمل جغرافياً</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                المتجر الإلكتروني يكسر الحواجز الجغرافية ويتيح لك الوصول إلى عملاء من جميع أنحاء العالم. لا تعود مقيداً بالموقع الجغرافي لمتجرك التقليدي، بل يمكنك البيع لأي مكان تصله خدمات الشحن.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. تقليل التكاليف التشغيلية</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                مقارنة بالمتاجر التقليدية، المتاجر الإلكترونية تتطلب تكاليف تشغيلية أقل. لا حاجة لاستئجار مساحات كبيرة، أو توظيف عدد كبير من الموظفين، أو دفع فواتير كهرباء ومياه مرتفعة.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. تحليل سلوك العملاء</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                المتاجر الإلكترونية توفر بيانات تفصيلية عن سلوك العملاء، مثل المنتجات الأكثر مشاهدة، أوقات الذروة للزيارات، ومعدلات التحويل. هذه البيانات تساعد في اتخاذ قرارات تجارية مدروسة.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">4. سهولة إدارة المخزون</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                أنظمة إدارة المخزون المتقدمة تساعد في تتبع المنتجات، إدارة الكميات، وإرسال تنبيهات عند انخفاض المخزون. هذا يقلل من مخاطر نفاد المنتجات أو تراكم المخزون الزائد.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">إحصائيات مهمة عن التجارة الإلكترونية</h2>
              
              <div className="bg-emerald-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">أرقام مذهلة:</h3>
                <ul className="list-disc list-inside text-emerald-700 space-y-2">
                  <li>نمو التجارة الإلكترونية العالمية بنسبة 15% سنوياً</li>
                  <li>87% من المتسوقين يبدأون رحلة التسوق عبر الإنترنت</li>
                  <li>متوسط قيمة الطلب الإلكتروني أعلى بـ 30% من المتاجر التقليدية</li>
                  <li>70% من المستهلكين يفضلون التسوق عبر الهاتف المحمول</li>
                  <li>الشركات التي تبيع أونلاين تنمو أسرع بـ 3 مرات</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">أنواع المتاجر الإلكترونية</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. متاجر B2C (Business to Consumer)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                البيع المباشر للمستهلكين النهائيين، مثل متاجر الملابس والإلكترونيات والكتب.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. متاجر B2B (Business to Business)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                البيع للشركات والمؤسسات، مثل بيع المواد الخام أو المعدات المكتبية.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. متاجر C2C (Consumer to Consumer)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                منصات تتيح للأفراد بيع منتجاتهم لأفراد آخرين، مثل المنتجات المستعملة.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">4. متاجر الاشتراكات</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                نموذج الاشتراك الشهري أو السنوي للحصول على منتجات أو خدمات بانتظام.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">الميزات الأساسية للمتجر الإلكتروني الناجح</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">الميزات الضرورية:</h3>
                <ul className="list-disc list-inside text-blue-700 space-y-2">
                  <li><strong>تصميم متجاوب:</strong> يعمل بسلاسة على جميع الأجهزة</li>
                  <li><strong>بحث متقدم:</strong> تصفية وترتيب المنتجات بسهولة</li>
                  <li><strong>سلة تسوق ذكية:</strong> حفظ المنتجات وحساب التكاليف</li>
                  <li><strong>طرق دفع متعددة:</strong> فيزا، ماستركارد، محافظ رقمية</li>
                  <li><strong>تتبع الطلبات:</strong> معرفة حالة الطلب في الوقت الفعلي</li>
                  <li><strong>نظام تقييمات:</strong> آراء العملاء والتقييمات</li>
                  <li><strong>دعم العملاء:</strong> شات مباشر أو نظام تذاكر</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">استراتيجيات التسويق للمتاجر الإلكترونية</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. تحسين محركات البحث (SEO)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                تحسين صفحات المنتجات للظهور في نتائج البحث الأولى عند البحث عن منتجات مشابهة.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. الإعلانات المدفوعة</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                استخدام إعلانات جوجل وفيسبوك وإنستغرام للوصول لعملاء مستهدفين بدقة.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. التسويق عبر البريد الإلكتروني</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                إرسال عروض خاصة ونشرات إخبارية للعملاء المسجلين لزيادة معدل العودة للشراء.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">4. التسويق بالمحتوى</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                إنشاء مدونة ومحتوى قيم يساعد العملاء ويبني الثقة في العلامة التجارية.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">التحديات والحلول</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">التحديات الشائعة:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>المنافسة الشديدة في السوق الرقمي</li>
                <li>ضمان أمان المعاملات والبيانات</li>
                <li>إدارة الشحن والتوصيل</li>
                <li>التعامل مع المرتجعات والاستبدالات</li>
                <li>بناء الثقة مع العملاء الجدد</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">الحلول المقترحة:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>التركيز على التميز في المنتج أو الخدمة</li>
                <li>استخدام شهادات الأمان المعتمدة (SSL)</li>
                <li>الشراكة مع شركات شحن موثوقة</li>
                <li>وضع سياسات واضحة للإرجاع والاستبدال</li>
                <li>عرض شهادات العملاء وضمانات الجودة</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">نصائح للنجاح</h2>
              
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">مفاتيح النجاح:</h3>
                <ul className="list-disc list-inside text-yellow-700 space-y-2">
                  <li>ابدأ بمنتجات قليلة وعالية الجودة</li>
                  <li>اهتم بتجربة المستخدم وسهولة التصفح</li>
                  <li>وفر خدمة عملاء ممتازة ومتجاوبة</li>
                  <li>استثمر في التسويق الرقمي المدروس</li>
                  <li>راقب المنافسين وتعلم من تجاربهم</li>
                  <li>اطلب آراء العملاء وطور باستمرار</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">خاتمة</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                المتجر الإلكتروني ليس مجرد قناة بيع إضافية، بل هو استثمار استراتيجي في مستقبل عملك التجاري. في عالم يتجه بسرعة نحو الرقمنة، الشركات التي لا تواكب هذا التطور ستجد نفسها خارج المنافسة.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                ابدأ رحلتك في التجارة الإلكترونية اليوم، واستفد من الفرص اللامحدودة التي يوفرها العالم الرقمي. النجاح في التجارة الإلكترونية يتطلب صبراً واستمرارية، لكن العوائد تستحق الاستثمار.
              </p>
            </div>
            
            {/* Share Section */}
            <div className="border-t pt-8 mt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">شارك المقال</h3>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  مشاركة
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">مقالات ذات صلة</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                أهمية امتلاك موقع لاندنج بيدج للنشاط التجاري
              </h3>
              <p className="text-gray-600 mb-4">
                تعرف على كيفية استخدام صفحات الهبوط لزيادة معدلات التحويل وتحسين نتائج الحملات التسويقية
              </p>
              <Link href="/articles/landing-page" className="text-emerald-600 hover:text-emerald-700 font-medium">
                اقرأ المزيد ←
              </Link>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                بعض النصائح للعملاء
              </h3>
              <p className="text-gray-600 mb-4">
                نصائح عملية ومفيدة للعملاء لاختيار أفضل الحلول الرقمية لأعمالهم
              </p>
              <Link href="/articles/client-tips" className="text-emerald-600 hover:text-emerald-700 font-medium">
                اقرأ المزيد ←
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}