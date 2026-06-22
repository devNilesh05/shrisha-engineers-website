"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type ProjectStatus } from "@/lib/projects-data";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectStatus>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  const filters: { value: "all" | ProjectStatus; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "completed", label: "Completed" },
    { value: "ongoing", label: "Ongoing" },
    { value: "upcoming", label: "Upcoming" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-background/80 px-4 py-20 sm:px-6 md:py-32 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-balance">Our Projects</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Building landmarks, creating value
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`relative px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter.value
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/30"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
                {activeFilter === filter.value && (
                  <motion.div
                    layoutId="filter-underline"
                    className="absolute inset-0 rounded-full bg-accent opacity-0"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 text-center"
            >
              <p className="text-lg text-muted-foreground">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
