import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, User, Building, Shield, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'أهمية امتلاك موقع تعريفي للمؤسسات | بناء الهوية الرقمية 2024',
  description: 'اكتشف أهمية المواقع التعريفية للمؤسسات في بناء الثقة والمصداقية وتعزيز الحضور الرقمي والوصول للعملاء المحتملين.',
  keywords: [
    'موقع تعريفي',
    'مواقع المؤسسات',
    'الهوية الرقمية',
    'مصداقية الشركات',
    'مواقع الشركات',
    'التسويق المؤسسي',
    'بناء الثقة',
    'الحضور الرقمي',
    'مواقع احترافية',
    'تصميم مؤسسي'
  ],
  openGraph: {
    title: 'أهمية امتلاك موقع تعريفي للمؤسسات',
    description: 'دليل شامل حول كيفية استخدام المواقع التعريفية لبناء هوية رقمية قوية وتعزيز مصداقية المؤسسات',
    images: ['/articles/corporate-website.svg'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'أهمية امتلاك موقع تعريفي للمؤسسات',
    description: 'دليل شامل حول كيفية استخدام المواقع التعريفية لبناء هوية رقمية قوية وتعزيز مصداقية المؤسسات',
    images: ['/articles/corporate-website.svg'],
  },
};

export default function CorporateWebsiteArticle() {
  return (
    <main className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/articles" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            العودة للمقالات
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>20 يناير 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>9 دقائق قراءة</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>استشاري الأعمال الرقمية</span>
            </div>
          </div>
          
          <Badge className="mb-4 bg-indigo-100 text-indigo-800">المواقع المؤسسية</Badge>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            أهمية امتلاك موقع تعريفي للمؤسسات
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            الموقع التعريفي هو بوابة المؤسسة الرقمية وأول انطباع يتكون لدى العملاء والشركاء المحتملين
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-96 bg-gradient-to-r from-indigo-500 to-purple-600">
            <Image
              src="/articles/corporate-website.svg"
              alt="الموقع التعريفي للمؤسسات"
              fill
              className="object-contain p-8"
            />
          </div>
          
          {/* Article Body */}
          <div className="p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ما هو الموقع التعريفي للمؤسسات؟</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                الموقع التعريفي للمؤسسات هو منصة رقمية شاملة تعرض هوية المؤسسة وخدماتها وقيمها ورؤيتها بطريقة احترافية ومنظمة. يهدف هذا النوع من المواقع إلى بناء الثقة مع العملاء والشركاء، وتعزيز المصداقية، وإظهار الخبرة والكفاءة في المجال.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">لماذا تحتاج المؤسسات لموقع تعريفي؟</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 text-center">
                  <Building className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">الهوية المؤسسية</h3>
                  <p className="text-gray-600 text-sm">عرض قيم ورؤية المؤسسة بشكل احترافي</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">بناء الثقة</h3>
                  <p className="text-gray-600 text-sm">تعزيز المصداقية والثقة مع العملاء</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">الوصول العالمي</h3>
                  <p className="text-gray-600 text-sm">إمكانية الوصول لعملاء من جميع أنحاء العالم</p>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">الفوائد الأساسية للمواقع التعريفية</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. بناء الهوية الرقمية القوية</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                الموقع التعريفي يساعد في إنشاء هوية رقمية متماسكة ومتسقة عبر جميع المنصات الرقمية. يعكس قيم المؤسسة ورؤيتها ورسالتها بطريقة بصرية جذابة ومحتوى مدروس.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. تعزيز المصداقية والثقة</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                في عصر المعلومات، يبحث العملاء عن الشركات عبر الإنترنت قبل اتخاذ قرارات التعامل. الموقع الاحترافي يعطي انطباعاً إيجابياً ويبني الثقة من اللحظة الأولى.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. عرض الخدمات والمنتجات</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                يوفر منصة شاملة لعرض جميع الخدمات والمنتجات بتفاصيل واضحة، مما يساعد العملاء على فهم ما تقدمه المؤسسة واتخاذ قرارات مدروسة.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">4. تحسين التواصل مع العملاء</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                يوفر قنوات تواصل متعددة ومعلومات الاتصال الواضحة، مما يسهل على العملاء التواصل مع المؤسسة والحصول على المساعدة المطلوبة.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">العناصر الأساسية للموقع التعريفي</h2>
              
              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">الصفحات الأساسية:</h3>
                <ul className="list-disc list-inside text-indigo-700 space-y-2">
                  <li><strong>الصفحة الرئيسية:</strong> نظرة عامة جذابة عن المؤسسة</li>
                  <li><strong>من نحن:</strong> تاريخ المؤسسة ورؤيتها ورسالتها</li>
                  <li><strong>خدماتنا/منتجاتنا:</strong> عرض تفصيلي للخدمات</li>
                  <li><strong>فريق العمل:</strong> التعريف بالخبراء والمتخصصين</li>
                  <li><strong>أعمالنا:</strong> معرض للمشاريع والإنجازات</li>
                  <li><strong>اتصل بنا:</strong> معلومات التواصل ونموذج الاستفسار</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">أنواع المؤسسات التي تحتاج مواقع تعريفية</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. الشركات الاستشارية</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                تحتاج لعرض خبراتها وتخصصاتها وقصص نجاح العملاء لبناء الثقة وجذب عملاء جدد.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. المؤسسات التعليمية</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                لعرض البرامج التعليمية والمناهج وأعضاء هيئة التدريس والمرافق المتاحة.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. المؤسسات الطبية</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                لعرض التخصصات الطبية والأطباء والخدمات المتاحة ومواعيد العمل.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">4. شركات الخدمات المهنية</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                مثل شركات المحاماة والمحاسبة والهندسة التي تحتاج لإظهار خبراتها ومؤهلاتها.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">معايير التصميم الاحترافي</h2>
              
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">أسس التصميم:</h3>
                <ul className="list-disc list-inside text-green-700 space-y-2">
                  <li>تصميم نظيف ومهني يعكس طبيعة المؤسسة</li>
                  <li>استخدام ألوان متناسقة مع الهوية البصرية</li>
                  <li>تنظيم المحتوى بطريقة منطقية وسهلة التصفح</li>
                  <li>استخدام صور عالية الجودة ومهنية</li>
                  <li>تحسين سرعة التحميل وتجربة المستخدم</li>
                  <li>التوافق مع جميع الأجهزة والمتصفحات</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">تحسين محركات البحث (SEO)</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">الاستراتيجيات الأساسية:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>الكلمات المفتاحية:</strong> استهداف كلمات مرتبطة بمجال المؤسسة</li>
                <li><strong>المحتوى المحلي:</strong> تحسين الظهور في البحث المحلي</li>
                <li><strong>البيانات المنظمة:</strong> استخدام Schema Markup</li>
                <li><strong>سرعة الموقع:</strong> تحسين أداء الموقع وسرعة التحميل</li>
                <li><strong>الروابط الداخلية:</strong> ربط الصفحات ببعضها البعض</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">قياس الأداء والنجاح</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">المؤشرات الرئيسية:</h3>
                <ul className="list-disc list-inside text-blue-700 space-y-2">
                  <li><strong>عدد الزوار:</strong> قياس حركة المرور على الموقع</li>
                  <li><strong>مصادر الزيارات:</strong> معرفة كيف يصل الزوار للموقع</li>
                  <li><strong>معدل الارتداد:</strong> نسبة الزوار الذين يغادرون فوراً</li>
                  <li><strong>الوقت المقضي:</strong> مدة تفاعل الزوار مع المحتوى</li>
                  <li><strong>الاستفسارات:</strong> عدد طلبات التواصل والاستفسار</li>
                  <li><strong>التحويلات:</strong> تحويل الزوار إلى عملاء محتملين</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">التحديات والحلول</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">التحديات الشائعة:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>صعوبة إنشاء محتوى جذاب ومفيد</li>
                <li>الحاجة لتحديث المحتوى بانتظام</li>
                <li>ضمان الأمان وحماية البيانات</li>
                <li>التنافس في محركات البحث</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">الحلول المقترحة:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>وضع استراتيجية محتوى واضحة</li>
                <li>الاستعانة بكتاب محتوى متخصصين</li>
                <li>تطبيق أفضل ممارسات الأمان</li>
                <li>الاستثمار في التسويق الرقمي</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">خاتمة</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                الموقع التعريفي للمؤسسات ليس مجرد وجود رقمي، بل هو استثمار استراتيجي في مستقبل المؤسسة. يساعد في بناء الثقة، وتعزيز المصداقية، والوصول لعملاء جدد، وتحسين التواصل مع الجمهور المستهدف.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                في عالم يزداد رقمية يوماً بعد يوم، المؤسسات التي لا تملك حضوراً رقمياً قوياً ستجد نفسها في موقف صعب أمام المنافسين. ابدأ اليوم في بناء موقعك التعريفي واجعله نافذتك للعالم الرقمي.
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
              <Link href="/articles/landing-page" className="text-indigo-600 hover:text-indigo-700 font-medium">
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
              <Link href="/articles/client-tips" className="text-indigo-600 hover:text-indigo-700 font-medium">
                اقرأ المزيد ←
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}