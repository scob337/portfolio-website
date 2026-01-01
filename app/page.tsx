"use client"

import { useState, useEffect } from "react"
import { ChevronUp, Menu, X, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFigma,
} from "react-icons/si"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [currentLang, setCurrentLang] = useState<"ar" | "en">("ar")

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === "ar" ? "en" : "ar"))
  }

  const translations = {
    ar: {
      nav: {
        home: "الرئيسية",
        about: "نبذة عني",
        projects: "المشاريع",
        contact: "تواصل معي",
      },
      hero: {
        greeting: "مرحباً، أنا",
        name: "عبد التواب شعبان",
        title: "مطور واجهات أمامية",
        description:
          "أقوم بتطوير تطبيقات ويب حديثة وتفاعلية باستخدام React و Next.js مع التركيز على تجربة المستخدم والأداء العالي",
        downloadCV: "تحميل السيرة الذاتية",
        contactMe: "تواصل معي",
      },
      about: {
        title: "نبذة عني",
        description: "مطور واجهات أمامية متخصص في بناء تطبيقات ويب حديثة وسريعة الاستجابة",
        experience: "سنوات الخبرة",
        projects: "مشروع مكتمل",
        clients: "عميل راضي",
        skills: "المهارات التقنية",
        allSkills: "جميع المهارات التقنية",
        quality: "جودة عالية",
      },
      projects: {
        title: "أحدث المشاريع",
        viewAll: "عرض جميع المشاريع",
        liveDemo: "معاينة مباشرة",
        sourceCode: "الكود المصدري",
        ecommerce: "متجر إلكتروني متكامل مع نظام دفع آمن",
        taskApp: "تطبيق إدارة المهام مع واجهة سهلة الاستخدام",
        portfolio: "موقع شخصي احترافي مع تصميم عصري",
      },
      contact: {
        title: "تواصل معي",
        subtitle: "دعنا نعمل معاً على مشروعك القادم",
        name: "الاسم",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        send: "إرسال الرسالة",
        info: {
          email: "البريد الإلكتروني",
          phone: "رقم الهاتف",
          location: "الموقع",
          emailValue: "abdeltawab.shaban@example.com",
          phoneValue: "+20 123 456 7890",
          locationValue: "القاهرة، مصر",
        },
      },
      footer: {
        rights: "جميع الحقوق محفوظة",
      },
    },
    en: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        greeting: "Hello, I'm",
        name: "Abdeltawab Sha`ban",
        title: "Front-End Developer",
        description:
          "I develop modern and interactive web applications using React and Next.js with focus on user experience and high performance",
        downloadCV: "Download CV",
        contactMe: "Contact Me",
      },
      about: {
        title: "About Me",
        description: "Front-end developer specialized in building modern and responsive web applications",
        experience: "Years Experience",
        projects: "Completed Projects",
        clients: "Happy Clients",
        skills: "Technical Skills",
        allSkills: "All Technical Skills",
        quality: "High Quality",
      },
      projects: {
        title: "Latest Projects",
        viewAll: "View All Projects",
        liveDemo: "Live Demo",
        sourceCode: "Source Code",
        ecommerce: "Complete e-commerce platform with secure payment system",
        taskApp: "Task management application with user-friendly interface",
        portfolio: "Professional personal website with modern design",
      },
      contact: {
        title: "Contact Me",
        subtitle: "Let's work together on your next project",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        info: {
          email: "Email",
          phone: "Phone",
          location: "Location",
          emailValue: "abdeltawab.shaban@example.com",
          phoneValue: "+20 123 456 7890",
          locationValue: "Cairo, Egypt",
        },
      },
      footer: {
        rights: "All rights reserved",
      },
    },
  }

  const t = translations[currentLang]

  const skills = [
    { name: "React", level: 95, icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", level: 90, icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", level: 90, icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", level: 95, icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", level: 85, icon: SiNodedotjs, color: "#339933" },
    { name: "JavaScript", level: 92, icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML5", level: 98, icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", level: 95, icon: SiCss3, color: "#1572B6" },
    { name: "Git", level: 88, icon: SiGit, color: "#F05032" },
    { name: "Figma", level: 80, icon: SiFigma, color: "#F24E1E" },
  ]

  return (
    <div className={`min-h-screen ${currentLang === "ar" ? "rtl" : "ltr"}`} dir={currentLang === "ar" ? "rtl" : "ltr"}>
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* خلفية متحركة */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <p className="text-lg text-muted-foreground mb-4 animate-slide-in-left">{t.hero.greeting}</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse-slow hover:scale-105 transform transition-all duration-500">
              {t.hero.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-accent mb-8 animate-slide-in-right hover:scale-105 transform transition-all duration-300">
              {t.hero.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
              <Button
                size="lg"
                className="hover:scale-105 hover:-translate-y-1 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2 h-4 w-4" />
                {t.hero.downloadCV}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="hover:scale-105 hover:-translate-y-1 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="mr-2 h-4 w-4" />
                {t.hero.contactMe}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-card/50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 hover:scale-105 transform transition-all duration-300">
              {t.about.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.about.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <Card className="text-center hover:scale-105 hover:-translate-y-2 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2 animate-pulse">3+</div>
                    <div className="text-sm text-muted-foreground">{t.about.experience}</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover:scale-105 hover:-translate-y-2 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2 animate-pulse delay-200">50+</div>
                    <div className="text-sm text-muted-foreground">{t.about.projects}</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover:scale-105 hover:-translate-y-2 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2 animate-pulse delay-500">30+</div>
                    <div className="text-sm text-muted-foreground">{t.about.clients}</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover:scale-105 hover:-translate-y-2 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2 animate-pulse delay-700">100%</div>
                    <div className="text-sm text-muted-foreground">{t.about.quality}</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-6 hover:scale-105 transform transition-all duration-300">
                {t.about.skills}
              </h3>
              <div className="space-y-4">
                {skills.slice(0, 4).map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <div key={skill.name} className="space-y-2 group">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                          <IconComponent
                            className="h-6 w-6 group-hover:scale-125 transform transition-all duration-300"
                            style={{ color: skill.color }}
                          />
                          <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-center mb-8">{t.about.allSkills}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <Card
                    key={skill.name}
                    className="text-center hover:scale-110 hover:-translate-y-2 transform transition-all duration-300 shadow-lg hover:shadow-2xl group cursor-pointer"
                  >
                    <CardContent className="pt-6 pb-4">
                      <IconComponent
                        className="h-12 w-12 mx-auto mb-3 group-hover:rotate-12 transform transition-all duration-300"
                        style={{ color: skill.color }}
                      />
                      <div className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{skill.level}%</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 hover:scale-105 transform transition-all duration-300">
              {t.projects.title}
            </h2>
            <p className="text-xl text-muted-foreground">{t.projects.viewAll}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: t.projects.ecommerce,
                image: "/modern-ecommerce-website.png",
                tech: ["React", "Next.js", "Stripe"],
                demo: "#",
                code: "#",
              },
              {
                title: "Task Management App",
                description: t.projects.taskApp,
                image: "/task-management-dashboard.png",
                tech: ["React", "TypeScript", "Tailwind"],
                demo: "#",
                code: "#",
              },
              {
                title: "Portfolio Website",
                description: t.projects.portfolio,
                image: "/modern-portfolio-website.png",
                tech: ["Next.js", "Framer Motion", "CSS"],
                demo: "#",
                code: "#",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group hover:scale-105 hover:-translate-y-2 transform transition-all duration-300 animate-fade-in-up shadow-lg hover:shadow-2xl"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4 rtl:space-x-reverse">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="hover:scale-110 transform transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t.projects.liveDemo}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:scale-110 transform transition-all duration-300 bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {t.projects.sourceCode}
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="hover:scale-105 transform transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 hover:scale-105 transform transition-all duration-300">
              {t.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground">{t.contact.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <div className="space-y-6">
                <Card className="hover:scale-105 hover:-translate-y-1 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardContent className="flex items-center space-x-4 rtl:space-x-reverse p-6">
                    <Mail className="h-8 w-8 text-primary animate-pulse" />
                    <div>
                      <h3 className="font-semibold">{t.contact.info.email}</h3>
                      <p className="text-muted-foreground">{t.contact.info.emailValue}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:scale-105 hover:-translate-y-1 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardContent className="flex items-center space-x-4 rtl:space-x-reverse p-6">
                    <Phone className="h-8 w-8 text-primary animate-pulse delay-200" />
                    <div>
                      <h3 className="font-semibold">{t.contact.info.phone}</h3>
                      <p className="text-muted-foreground">{t.contact.info.phoneValue}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:scale-105 hover:-translate-y-1 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardContent className="flex items-center space-x-4 rtl:space-x-reverse p-6">
                    <MapPin className="h-8 w-8 text-primary animate-pulse delay-500" />
                    <div>
                      <h3 className="font-semibold">{t.contact.info.location}</h3>
                      <p className="text-muted-foreground">{t.contact.info.locationValue}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="animate-slide-in-right shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.contact.name}</Label>
                      <Input
                        id="name"
                        placeholder={t.contact.name}
                        className="hover:scale-105 focus:scale-105 transform transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.contact.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t.contact.email}
                        className="hover:scale-105 focus:scale-105 transform transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t.contact.subject}</Label>
                    <Input
                      id="subject"
                      placeholder={t.contact.subject}
                      className="hover:scale-105 focus:scale-105 transform transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t.contact.message}</Label>
                    <Textarea
                      id="message"
                      placeholder={t.contact.message}
                      rows={5}
                      className="hover:scale-105 focus:scale-105 transform transition-all duration-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full hover:scale-105 hover:-translate-y-1 transform transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {t.contact.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rtl:right-auto rtl:left-8 z-50 rounded-full p-3 hover:scale-110 hover:-translate-y-2 transform transition-all duration-300 animate-fade-in-up shadow-lg hover:shadow-xl bg-primary hover:bg-primary/90"
          size="icon"
        >
          <ChevronUp className="h-4 w-4 animate-bounce" />
        </Button>
      )}
    </div>
  )
}
