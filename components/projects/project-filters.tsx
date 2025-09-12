"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, X } from "lucide-react"

interface ProjectFiltersProps {
  filters: Array<{ value: string; label: string; count?: number }>
  activeFilter: string
  onFilterChange: (filter: string) => void
  projectCount: number
}

export function ProjectFilters({ filters, activeFilter, onFilterChange, projectCount }: ProjectFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      {/* Filter Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <Filter className="h-5 w-5 text-primary mr-2" />
          <h3 className="text-lg font-semibold text-foreground">Filter Projects</h3>
        </div>

        {/* Results Count */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground">
            {projectCount} project{projectCount !== 1 ? "s" : ""} found
          </span>

          {activeFilter !== "all" && (
            <Button size="sm" variant="outline" onClick={() => onFilterChange("all")} className="text-xs">
              <X className="h-3 w-3 mr-1" />
              Clear Filter
            </Button>
          )}
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter, index) => (
          <motion.div
            key={filter.value}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <Button
              variant={activeFilter === filter.value ? "default" : "outline"}
              size="sm"
              onClick={() => onFilterChange(filter.value)}
              className={`transition-all duration-200 ${
                activeFilter === filter.value ? "shadow-md scale-105" : "hover:scale-105 hover:shadow-sm"
              }`}
            >
              {filter.label}
              {filter.count !== undefined && (
                <Badge
                  variant="secondary"
                  className={`ml-2 text-xs ${activeFilter === filter.value ? "bg-primary-foreground/20" : ""}`}
                >
                  {filter.count}
                </Badge>
              )}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Active Filter Indicator */}
      {activeFilter !== "all" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-center space-x-2"
        >
          <span className="text-sm text-muted-foreground">Showing:</span>
          <Badge variant="outline" className="capitalize">
            {activeFilter}
          </Badge>
        </motion.div>
      )}
    </motion.div>
  )
}
