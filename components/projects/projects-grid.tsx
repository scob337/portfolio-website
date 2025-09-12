"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter } from "lucide-react"
import { getAllProjects, getProjectCategories } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export function ProjectsGrid() {
  const t = useTranslations("projects")

  const allProjects = getAllProjects()
  const categories = getProjectCategories()
  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(allProjects)

  const filterOptions = [
    { value: "all", label: t("filter.all") },
    { value: "react", label: t("filter.react") },
    { value: "nextjs", label: t("filter.nextjs") },
    { value: "ecommerce", label: t("filter.ecommerce") },
    { value: "landing", label: t("filter.landing") },
  ]

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    if (filter === "all") {
      setFilteredProjects(allProjects)
    } else {
      setFilteredProjects(allProjects.filter((project) => project.category === filter))
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
            <Filter className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              variant={activeFilter === option.value ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterChange(option.value)}
              className="transition-all duration-200"
            >
              {option.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> project
            {filteredProjects.length !== 1 ? "s" : ""}
            {activeFilter !== "all" && (
              <>
                {" "}
                in <span className="font-semibold text-primary">{activeFilter}</span>
              </>
            )}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                layout
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} - ${project.description.slice(0, 80)}... Built with ${project.technologies.slice(0, 3).join(', ')}`}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Project Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="capitalize">
                          {project.category}
                        </Badge>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-yellow-500 text-yellow-900">Featured</Badge>
                        </div>
                      )}

                      {/* Overlay Links */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-4">
                          <Button size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>

                    {/* Completion Date */}
                    <p className="text-xs text-muted-foreground">
                      Completed:{" "}
                      {new Date(project.completedAt).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </CardContent>

                  <CardFooter className="p-6 pt-0 flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-6">
              No projects match the current filter. Try selecting a different category.
            </p>
            <Button onClick={() => handleFilterChange("all")}>Show All Projects</Button>
          </motion.div>
        )}

        {/* Call to Action */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Interested in working together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create amazing web experiences. Let's discuss your next
              project!
            </p>
            <Button size="lg" asChild>
              <Link href={`/contact`}>Get In Touch</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
