import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, User, TrendingUp, Target, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'أهمية امتلاك موقع لاندنج بيدج للنشاط التجاري | دليل التحويل 2024',
  description: 'تعرف على أهمية صفحات الهبوط (Landing Pages) في زيادة معدلات التحويل وتحسين ROI للحملات الإعلانية والتسويقية الرقمية.',
  keywords: [
    'لاندنج بيدج',
    'صفحة هبوط',
    'معدل التحويل',
    'التسويق الرقمي',
    'الحملات الإعلانية',
    'تحسين التحويل',
    'ROI',
    'تصميم صفحات الهبوط',
    'التجارة الإلكترونية',
    'زيادة المبيعات'
  ],
  openGraph: {
    title: 'أهمية امتلاك موقع لاندنج بيدج للنشاط التجاري',
    description: 'دليل شامل حول كيفية استخدام صفحات الهبوط لزيادة معدلات التحويل وتحسين نتائج الحملات التسويقية',
    images: ['/articles/landing-page.svg'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'أهمية امتلاك موقع لاندنج بيدج للنشاط التجاري',
    description: 'دليل شامل حول كيفية استخدام صفحات الهبوط لزيادة معدلات التحويل وتحسين نتائج الحملات التسويقية',
    images: ['/articles/landing-page.svg'],
  },
};

export default function LandingPageArticle() {
  return (
    <main className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/articles" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            العودة للمقالات
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>18 يناير 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>7 دقائق قراءة</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>خبير التسويق الرقمي</span>
            </div>
          </div>
          
          <Badge className="mb-4 bg-green-100 text-green-800">التسويق الرقمي</Badge>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            أهمية امتلاك موقع لاندنج بيدج للنشاط التجاري
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            صفحات الهبوط هي السر وراء نجاح الحملات التسويقية الرقمية وزيادة معدلات التحويل بشكل كبير
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-96 bg-gradient-to-r from-green-500 to-blue-600">
            <Image
              src="/articles/landing-page.svg"
              alt="صفحة الهبوط للنشاط التجاري"
              fill
              className="object-contain p-8"
            />
          </div>
          
          {/* Article Body */}
          <div className="p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ما هي صفحة الهبوط (Landing Page)؟</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                صفحة الهبوط هي صفحة ويب مصممة خصيصاً لاستقبال الزوار القادمين من حملة تسويقية معينة، سواء كانت إعلانات مدفوعة أو حملات بريد إلكتروني أو وسائل التواصل الاجتماعي. الهدف الأساسي من هذه الصفحة هو تحويل الزائر إلى عميل أو تحقيق هدف محدد مثل التسجيل أو الشراء.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">لماذا تحتاج لصفحة هبوط منفصلة؟</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 text-center">
                  <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">التركيز على هدف واحد</h3>
                  <p className="text-gray-600 text-sm">تركز على عمل واحد محدد دون تشتيت</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">معدل تحويل أعلى</h3>
                  <p className="text-gray-600 text-sm">تحقق معدلات تحويل أفضل من الصفحات العامة</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">تجربة مخصصة</h3>
                  <p className="text-gray-600 text-sm">محتوى مصمم خصيصاً للجمهور المستهدف</p>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">الفوائد الأساسية لصفحات الهبوط</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. زيادة معدلات التحويل</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                صفحات الهبوط المصممة بعناية يمكن أن تحقق معدلات تحويل تصل إلى 25% مقارنة بـ 2-3% للصفحات العامة. هذا لأنها مصممة خصيصاً لتحقيق هدف واحد محدد.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. تحسين عائد الاستثمار (ROI)</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                عندما تزيد معدلات التحويل، ينخفض تكلفة اكتساب العميل الواحد، مما يعني عائد استثمار أفضل للحملات الإعلانية والتسويقية.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. جمع بيانات العملاء</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                تساعد في جمع معلومات قيمة عن العملاء المحتملين مثل البريد الإلكتروني ورقم الهاتف والاهتمامات، مما يساعد في بناء قاعدة بيانات عملاء قوية.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">4. قياس الأداء بدقة</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                توفر بيانات دقيقة حول أداء الحملات التسويقية، مما يساعد في تحسين الاستراتيجيات المستقبلية.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">عناصر صفحة الهبوط الناجحة</h2>
              
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">العناصر الأساسية:</h3>
                <ul className="list-disc list-inside text-green-700 space-y-2">
                  <li><strong>عنوان جذاب:</strong> يوضح القيمة المقدمة بوضوح</li>
                  <li><strong>وصف مقنع:</strong> يشرح الفوائد للعميل</li>
                  <li><strong>دعوة واضحة للعمل (CTA):</strong> زر بارز وواضح</li>
                  <li><strong>صور أو فيديو:</strong> محتوى بصري جذاب</li>
                  <li><strong>شهادات العملاء:</strong> لبناء الثقة والمصداقية</li>
                  <li><strong>نموذج بسيط:</strong> سهل الملء وغير معقد</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">أنواع صفحات الهبوط</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. صفحات جمع العملاء المحتملين (Lead Generation)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                تهدف لجمع معلومات الاتصال مقابل محتوى قيم مثل كتاب إلكتروني أو دورة مجانية.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. صفحات النقر (Click-through)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                تهدف لإقناع الزائر بالنقر لصفحة أخرى، عادة صفحة الشراء أو التسجيل.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. صفحات المبيعات</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                تركز على بيع منتج أو خدمة معينة بشكل مباشر.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">نصائح لتحسين الأداء</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">أفضل الممارسات:</h3>
                <ul className="list-disc list-inside text-blue-700 space-y-2">
                  <li>اجعل التصميم بسيطاً ونظيفاً</li>
                  <li>استخدم ألوان متناسقة مع هوية العلامة التجارية</li>
                  <li>اختبر عناصر مختلفة (A/B Testing)</li>
                  <li>تأكد من سرعة تحميل الصفحة</li>
                  <li>اجعل الصفحة متجاوبة مع الهواتف المحمولة</li>
                  <li>استخدم كلمات مفتاحية مناسبة للـ SEO</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">قياس النجاح</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">المؤشرات الرئيسية:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>معدل التحويل:</strong> نسبة الزوار الذين أكملوا الهدف المطلوب</li>
                <li><strong>تكلفة اكتساب العميل:</strong> التكلفة لكل عميل جديد</li>
                <li><strong>معدل الارتداد:</strong> نسبة الزوار الذين غادروا فوراً</li>
                <li><strong>الوقت المقضي في الصفحة:</strong> مدى تفاعل الزوار مع المحتوى</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">الأخطاء الشائعة</h2>
              
              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-red-800 mb-4">تجنب هذه الأخطاء:</h3>
                <ul className="list-disc list-inside text-red-700 space-y-2">
                  <li>وضع أهداف متعددة في صفحة واحدة</li>
                  <li>استخدام نماذج طويلة ومعقدة</li>
                  <li>عدم وضوح دعوة العمل (CTA)</li>
                  <li>تجاهل تحسين الصفحة للهواتف المحمولة</li>
                  <li>عدم اختبار الصفحة قبل الإطلاق</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">خاتمة</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                صفحات الهبوط ليست مجرد صفحات ويب عادية، بل هي أدوات تسويقية قوية يمكنها تحويل استثماراتك التسويقية إلى نتائج ملموسة. الاستثمار في تصميم وتطوير صفحات هبوط احترافية هو استثمار في نجاح أعمالك ونموها المستدام.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                ابدأ اليوم في إنشاء صفحة هبوط لحملتك التسويقية القادمة، وستلاحظ الفرق في معدلات التحويل والعائد على الاستثمار.
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
                أهمية الموقع الإلكتروني للمؤسسات والأفراد
              </h3>
              <p className="text-gray-600 mb-4">
                دليل شامل حول أهمية امتلاك موقع إلكتروني احترافي وتأثيره على نجاح الأعمال
              </p>
              <Link href="/articles/website-importance" className="text-green-600 hover:text-green-700 font-medium">
                اقرأ المزيد ←
              </Link>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                أهمية امتلاك ecommerce website
              </h3>
              <p className="text-gray-600 mb-4">
                تعرف على كيفية بناء متجر إلكتروني ناجح وزيادة المبيعات عبر الإنترنت
              </p>
              <Link href="/articles/ecommerce-website" className="text-green-600 hover:text-green-700 font-medium">
                اقرأ المزيد ←
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}