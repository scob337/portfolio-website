import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'أهمية الموقع الإلكتروني للمؤسسات والأفراد | دليل شامل 2024',
  description: 'اكتشف أهمية امتلاك موقع إلكتروني احترافي للمؤسسات والأفراد، وكيف يمكن أن يساعد في بناء الهوية الرقمية وزيادة المبيعات والوصول لعملاء جدد.',
  keywords: [
    'أهمية الموقع الإلكتروني',
    'موقع للمؤسسات',
    'موقع للأفراد',
    'تصميم مواقع',
    'الهوية الرقمية',
    'التسويق الإلكتروني',
    'مواقع احترافية',
    'تطوير مواقع',
    'حضور رقمي',
    'مواقع تجارية'
  ],
  openGraph: {
    title: 'أهمية الموقع الإلكتروني للمؤسسات والأفراد',
    description: 'دليل شامل حول أهمية امتلاك موقع إلكتروني احترافي وتأثيره على نجاح الأعمال',
    images: ['/articles/website-importance.svg'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'أهمية الموقع الإلكتروني للمؤسسات والأفراد',
    description: 'دليل شامل حول أهمية امتلاك موقع إلكتروني احترافي وتأثيره على نجاح الأعمال',
    images: ['/articles/website-importance.svg'],
  },
};

export default function WebsiteImportancePage() {
  return (
    <main className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/articles" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            العودة للمقالات
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>15 يناير 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>8 دقائق قراءة</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>فريق التطوير</span>
            </div>
          </div>
          
          <Badge className="mb-4">تطوير المواقع</Badge>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            أهمية الموقع الإلكتروني للمؤسسات والأفراد
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            في عصر التكنولوجيا الرقمية، أصبح امتلاك موقع إلكتروني احترافي ضرورة حتمية وليس مجرد رفاهية
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-96 bg-gradient-to-r from-blue-500 to-purple-600">
            <Image
              src="/articles/website-importance.svg"
              alt="أهمية الموقع الإلكتروني"
              fill
              className="object-contain p-8"
            />
          </div>
          
          {/* Article Body */}
          <div className="p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">مقدمة</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                في عالم اليوم المتصل رقمياً، لم يعد امتلاك موقع إلكتروني مجرد خيار إضافي، بل أصبح ضرورة أساسية لأي مؤسسة أو فرد يسعى للنجاح والتميز. سواء كنت تدير شركة كبيرة أو مشروعاً صغيراً أو حتى تعمل كمستقل، فإن وجودك الرقمي يلعب دوراً محورياً في تحديد مدى نجاحك وانتشارك.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">أهمية الموقع الإلكتروني للمؤسسات</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. بناء الهوية والمصداقية</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                الموقع الإلكتروني هو واجهتك الرقمية الأولى أمام العملاء. يساعد في بناء صورة احترافية للمؤسسة ويعزز من مصداقيتها في السوق. العملاء اليوم يبحثون عن الشركات عبر الإنترنت قبل اتخاذ قرار الشراء.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. الوصول لعملاء جدد</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                يتيح الموقع الإلكتروني للمؤسسات الوصول إلى شريحة أوسع من العملاء المحتملين، ليس فقط محلياً بل عالمياً أيضاً. هذا يفتح آفاقاً جديدة للنمو والتوسع.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. تحسين خدمة العملاء</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                من خلال الموقع، يمكن تقديم معلومات شاملة عن المنتجات والخدمات، والإجابة على الأسئلة الشائعة، وتوفير قنوات تواصل متعددة مع العملاء على مدار الساعة.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">4. زيادة المبيعات والإيرادات</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                الموقع الإلكتروني يعمل كمندوب مبيعات يعمل 24/7، مما يساعد في زيادة الطلبات والمبيعات حتى خارج ساعات العمل الرسمية.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">أهمية الموقع الإلكتروني للأفراد</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. بناء العلامة الشخصية</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                للمستقلين والمهنيين، الموقع الشخصي هو أداة قوية لعرض المهارات والخبرات والإنجازات بطريقة احترافية ومنظمة.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. عرض الأعمال والمشاريع</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                يمكن للأفراد استخدام مواقعهم لعرض معرض أعمالهم (Portfolio) بطريقة جذابة ومنظمة، مما يساعد في جذب عملاء جدد وفرص عمل أفضل.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. التواصل المهني</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                الموقع الشخصي يوفر منصة للتواصل مع العملاء المحتملين وأصحاب العمل، ويسهل عملية التواصل والتعاقد.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">الفوائد الاقتصادية</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">إحصائيات مهمة:</h3>
                <ul className="list-disc list-inside text-blue-700 space-y-2">
                  <li>97% من المستهلكين يبحثون عن الشركات عبر الإنترنت</li>
                  <li>75% من المستخدمين يحكمون على مصداقية الشركة من خلال تصميم موقعها</li>
                  <li>الشركات التي لديها مواقع إلكترونية تحقق نمواً أسرع بـ 40%</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">التحديات والحلول</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">التحديات الشائعة:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>التكلفة المبدئية لتطوير الموقع</li>
                <li>الحاجة لصيانة وتحديث مستمر</li>
                <li>ضرورة تحسين محركات البحث (SEO)</li>
                <li>الحاجة لمحتوى عالي الجودة</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">الحلول المقترحة:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>البدء بموقع بسيط وتطويره تدريجياً</li>
                <li>الاستعانة بخبراء متخصصين</li>
                <li>الاستثمار في التسويق الرقمي</li>
                <li>التركيز على تجربة المستخدم</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">خاتمة</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                في الختام، امتلاك موقع إلكتروني احترافي ليس مجرد استثمار في التكنولوجيا، بل استثمار في مستقبل عملك أو مهنتك. إنه الجسر الذي يربطك بعملائك ويفتح لك آفاقاً جديدة للنمو والتطور. لا تتردد في اتخاذ هذه الخطوة المهمة نحو النجاح الرقمي.
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
                اكتشف كيف يمكن لصفحة الهبوط المصممة بعناية أن تحول الزوار إلى عملاء فعليين
              </p>
              <Link href="/articles/landing-page" className="text-blue-600 hover:text-blue-700 font-medium">
                اقرأ المزيد ←
              </Link>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                أهمية امتلاك موقع تعريفي للمؤسسات
              </h3>
              <p className="text-gray-600 mb-4">
                تعرف على كيفية بناء هوية رقمية قوية للمؤسسات من خلال المواقع التعريفية
              </p>
              <Link href="/articles/corporate-website" className="text-blue-600 hover:text-blue-700 font-medium">
                اقرأ المزيد ←
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}