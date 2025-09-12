# Reusable Hero Component

مكون Hero قابل لإعادة الاستخدام مع خلفية قابلة للتخصيص ومحتوى مرن.

## الاستخدام الأساسي

```tsx
import { ReusableHero } from "@/components/ui/reusable-hero"

export function MyPageHero() {
  return (
    <ReusableHero
      title="عنوان الصفحة"
      description="وصف الصفحة"
      backgroundImage="/hero-background.svg"
    />
  )
}
```

## الخصائص المتاحة

| الخاصية | النوع | الافتراضي | الوصف |
|---------|------|----------|-------|
| `title` | `string` | مطلوب | العنوان الرئيسي |
| `subtitle` | `string` | اختياري | العنوان الفرعي |
| `description` | `string` | اختياري | الوصف |
| `backgroundImage` | `string` | اختياري | مسار صورة الخلفية |
| `backgroundOverlay` | `string` | `"from-primary/10 via-background to-secondary/10"` | تدرج الخلفية |
| `contentAlignment` | `"left" \| "center" \| "right"` | `"center"` | محاذاة المحتوى |
| `minHeight` | `string` | `"min-h-[60vh]"` | الحد الأدنى للارتفاع |
| `showDivider` | `boolean` | `true` | إظهار الخط الفاصل |
| `children` | `ReactNode` | اختياري | محتوى إضافي |

## أمثلة متقدمة

### Hero مع محتوى مخصص

```tsx
<ReusableHero
  title="المشاريع"
  description="اكتشف مجموعة من المشاريع المتنوعة"
  backgroundImage="/projects-bg.svg"
  contentAlignment="left"
>
  <div className="flex gap-4 mt-8">
    <Button>عرض المشاريع</Button>
    <Button variant="outline">تواصل معي</Button>
  </div>
</ReusableHero>
```

### Hero بدون خلفية صورة

```tsx
<ReusableHero
  title="تواصل معي"
  subtitle="دعنا نتحدث"
  description="أرحب بالتواصل معك لمناقشة مشاريعك"
  backgroundOverlay="from-blue-500/10 via-background to-purple-500/10"
  minHeight="min-h-[50vh]"
/>
```

### Hero مع تخصيص كامل

```tsx
<ReusableHero
  title="نبذة عني"
  description="مطور واجهات أمامية متخصص في React و Next.js"
  backgroundImage="/about-bg.svg"
  contentAlignment="left"
  containerClassName="grid lg:grid-cols-2 gap-16 items-center"
  titleClassName="text-6xl font-black"
  descriptionClassName="text-2xl"
  showDivider={false}
>
  <div className="flex justify-center">
    <img src="/profile.jpg" alt="Profile" className="rounded-full" />
  </div>
</ReusableHero>
```

## ملاحظات

- يمكن استبدال صورة الخلفية `/hero-background.svg` بأي صورة أخرى
- المكون يدعم الرسوم المتحركة باستخدام Framer Motion
- جميع الخصائص قابلة للتخصيص حسب احتياجات كل صفحة
- يمكن إضافة محتوى مخصص باستخدام `children`