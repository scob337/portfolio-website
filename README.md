# 🌟 Portfolio Website

موقع بورتفوليو شخصي عصري ومتجاوب مبني بأحدث التقنيات لعرض المشاريع والخبرات المهنية.

## ✨ المميزات

- 🎨 **تصميم عصري ومتجاوب** - يعمل بشكل مثالي على جميع الأجهزة
- 🌐 **دعم متعدد اللغات** - العربية والإنجليزية مع next-intl
- 🌙 **وضع داكن/فاتح** - تبديل سلس بين الأوضاع
- 📧 **نظام اتصال متقدم** - إرسال الرسائل مباشرة عبر SMTP
- ⚡ **أداء عالي** - مُحسن للسرعة وتجربة المستخدم
- 🎯 **SEO محسن** - لظهور أفضل في محركات البحث
- 📱 **PWA جاهز** - يمكن تثبيته كتطبيق

## 🛠️ التقنيات المستخدمة

### Frontend
- **Next.js 14** - إطار عمل React مع App Router
- **TypeScript** - للكتابة الآمنة والمنظمة
- **Tailwind CSS** - للتصميم السريع والمرن
- **Shadcn/ui** - مكونات UI جاهزة وقابلة للتخصيص
- **Framer Motion** - للحركات والانتقالات السلسة
- **next-intl** - لدعم تعدد اللغات

### Backend & APIs
- **Next.js API Routes** - للـ backend endpoints
- **Nodemailer** - لإرسال الإيميلات
- **Zod** - للتحقق من صحة البيانات

### Tools & Development
- **ESLint & Prettier** - لجودة الكود
- **TypeScript** - للتطوير الآمن
- **Git** - لإدارة الإصدارات

## 🚀 التشغيل المحلي

### المتطلبات
- Node.js 18+ 
- npm أو yarn أو pnpm

### خطوات التشغيل

1. **استنساخ المشروع**
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. **تثبيت التبعيات**
```bash
npm install
# أو
yarn install
# أو
pnpm install
```

3. **إعداد متغيرات البيئة**
```bash
cp .env.example .env.local
```

ثم قم بتعديل ملف `.env.local` وإضافة:
```env
# إعدادات SMTP للإيميل
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_TO=recipient@gmail.com
```

4. **تشغيل الخادم المحلي**
```bash
npm run dev
# أو
yarn dev
# أو
pnpm dev
```

5. **فتح المتصفح**
انتقل إلى [http://localhost:3000](http://localhost:3000)

## 📁 هيكل المشروع

```
portfolio-website/
├── app/                    # Next.js App Router
│   ├── [locale]/          # صفحات متعددة اللغات
│   ├── api/               # API endpoints
│   └── globals.css        # الأنماط العامة
├── components/            # مكونات React
│   ├── ui/               # مكونات UI أساسية
│   ├── sections/         # أقسام الصفحات
│   └── layout/           # مكونات التخطيط
├── data/                 # بيانات JSON
├── hooks/                # React Hooks مخصصة
├── lib/                  # مكتبات مساعدة
├── messages/             # ملفات الترجمة
├── public/               # الملفات الثابتة
└── types/                # تعريفات TypeScript
```

## 🎨 التخصيص

### الألوان والثيم
يمكنك تخصيص الألوان في `tailwind.config.js` و `app/globals.css`

### المحتوى
- **البيانات الشخصية**: `data/personal.json`
- **المشاريع**: `data/projects.json`
- **المهارات**: `data/skills.json`
- **الخبرات**: `data/experience.json`

### الترجمات
- **الإنجليزية**: `messages/en.json`
- **العربية**: يمكن إضافة `messages/ar.json`

## 📧 إعداد الإيميل

1. **إنشاء App Password في Gmail**:
   - انتقل إلى إعدادات Google Account
   - Security → 2-Step Verification → App passwords
   - أنشئ كلمة مرور للتطبيق

2. **تحديث متغيرات البيئة**:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-digit-app-password
EMAIL_TO=where-to-receive@gmail.com
```

## 🚀 النشر

### Vercel (موصى به)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# ارفع مجلد .next إلى Netlify
```

### Docker
```bash
docker build -t portfolio-website .
docker run -p 3000:3000 portfolio-website
```

## 🤝 المساهمة

1. Fork المشروع
2. أنشئ branch جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push إلى Branch (`git push origin feature/amazing-feature`)
5. افتح Pull Request

## 📄 الرخصة

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## 📞 التواصل

- **الموقع**: [your-website.com](https://your-website.com)
- **الإيميل**: your-email@gmail.com
- **LinkedIn**: [your-linkedin](https://linkedin.com/in/your-profile)
- **GitHub**: [your-github](https://github.com/your-username)

---

<div align="center">
  <p>صُنع بـ ❤️ باستخدام Next.js و TypeScript</p>
  <p>⭐ لا تنس إعطاء المشروع نجمة إذا أعجبك!</p>
</div>