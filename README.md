# 🌟 Portfolio Website

A modern, responsive personal portfolio website built with cutting-edge technologies to showcase projects and professional experience.

## ✨ Features

- 🎨 **Modern & Responsive Design** - Works perfectly on all devices
- 🌐 **Multi-language Support** - Arabic and English with next-intl
- 🌙 **Dark/Light Mode** - Smooth theme switching
- 📧 **Advanced Contact System** - Direct email sending via SMTP
- ⚡ **High Performance** - Optimized for speed and user experience
- 🎯 **SEO Optimized** - Better visibility in search engines
- 📱 **PWA Ready** - Can be installed as an app

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - For type-safe and organized development
- **Tailwind CSS** - For rapid and flexible styling
- **Shadcn/ui** - Ready-to-use and customizable UI components
- **Framer Motion** - For smooth animations and transitions
- **next-intl** - For internationalization support

### Backend & APIs
- **Next.js API Routes** - For backend endpoints
- **Nodemailer** - For email sending
- **Zod** - For data validation

### Tools & Development
- **ESLint & Prettier** - For code quality
- **TypeScript** - For safe development
- **Git** - For version control

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Setup environment variables**
```bash
cp .env.example .env.local
```

Then edit `.env.local` file and add:
```env
# SMTP settings for email
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-digit-app-password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_TO=recipient@gmail.com
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Multi-language pages
│   ├── api/               # API endpoints
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Basic UI components
│   ├── sections/         # Page sections
│   └── layout/           # Layout components
├── data/                 # JSON data
├── hooks/                # Custom React Hooks
├── lib/                  # Helper libraries
├── messages/             # Translation files
├── public/               # Static files
└── types/                # TypeScript definitions
```

## 🎨 Customization

### Colors and Theme
You can customize colors in `tailwind.config.js` and `app/globals.css`

### Content
- **Personal Data**: `data/personal.json`
- **Projects**: `data/projects.json`
- **Skills**: `data/skills.json`
- **Experience**: `data/experience.json`

### Translations
- **English**: `messages/en.json`
- **Arabic**: You can add `messages/ar.json`

## 📧 Email Setup

1. **Create App Password in Gmail**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate an app password

2. **Update environment variables**:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-digit-app-password
EMAIL_TO=where-to-receive@gmail.com
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload .next folder to Netlify
```

### Docker
```bash
docker build -t portfolio-website .
docker run -p 3000:3000 portfolio-website
```

## 🤝 Contributing

1. Fork the project
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [your-website.com](https://your-website.com)
- **Email**: your-email@gmail.com
- **LinkedIn**: [your-linkedin](https://linkedin.com/in/your-profile)
- **GitHub**: [your-github](https://github.com/your-username)

---

<div align="center">
  <p>Made with ❤️ using Next.js & TypeScript</p>
  <p>⭐ Don't forget to give the project a star if you liked it!</p>
</div>