export interface PersonalInfo {
  name: string
  title: string
  age: number
  city: string
  birthday: string
  email: string
  phone: string
  degree: string
  freelance: string
  bio: string
  heroKeywords: string[]
  socialLinks: {
    github: string
    linkedin: string
    twitter: string
    email: string
  }
}

export interface Skill {
  name: string
  level: number
  category: string
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  featured: boolean
  liveUrl: string
  githubUrl: string
  completedAt: string
}

export interface WorkExperience {
  id: number
  company: string
  position: string
  startDate: string
  endDate: string
  current: boolean
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Education {
  id: number
  institution: string
  degree: string
  startDate: string
  endDate: string
  location: string
  description: string
}

export interface Certification {
  id: number
  name: string
  issuer: string
  date: string
  credentialUrl: string
}

export interface Stat {
  id: number
  label: string
  value: number
  icon: string
  suffix: string
}

export interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  content: string
  rating: number
  image: string
}
