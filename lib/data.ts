import personalData from "@/data/personal.json"
import skillsData from "@/data/skills.json"
import projectsData from "@/data/projects.json"
import experienceData from "@/data/experience.json"
import factsData from "@/data/facts.json"

// Personal Information
export const getPersonalInfo = () => personalData

// Skills
export const getSkills = () => skillsData
export const getTechnicalSkills = () => skillsData.technical
export const getSoftSkills = () => skillsData.soft

// Projects
export const getAllProjects = () => projectsData.all
export const getFeaturedProjects = () => projectsData.featured
export const getProjectsByCategory = (category: string) => {
  if (category === "all") return projectsData.all
  return projectsData.all.filter((project) => project.category === category)
}

// Experience
export const getWorkExperience = () => experienceData.work
export const getEducation = () => experienceData.education

// Facts and Stats
export const getStats = () => factsData.stats
export const getTestimonials = () => factsData.testimonials

// Utility functions
export const getProjectCategories = () => {
  const categories = new Set(projectsData.all.map((project) => project.category))
  return Array.from(categories)
}

export const getSkillsByCategory = (category: string) => {
  return skillsData.technical.filter((skill) => skill.category === category)
}
