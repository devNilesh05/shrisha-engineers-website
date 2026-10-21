'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, Eye, Building2, CheckCircle2, Clock } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { projects, type ProjectStatus } from '@/lib/projects-data'
import { Badge } from '@/components/ui/badge'

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectStatus>('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.status === activeFilter)

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-2xl text-center md:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              Portfolio &amp; Landmarks
            </span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Featured Engineering Projects
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore our landmark developments across Navi Mumbai, Mumbai, and Greater Noida,
              demonstrating our structural rigor and high-caliber execution.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex items-center gap-2 rounded-full border border-border bg-card/80 p-1.5 shadow-sm backdrop-blur"
          >
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'completed', label: 'Completed' },
              { id: 'ongoing', label: 'Ongoing' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as 'all' | ProjectStatus)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-accent text-accent-foreground shadow-sm shadow-accent/20'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10"
              >
                {/* Image Cover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={project.coverImage}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    {project.status === 'completed' ? (
                      <Badge variant="success" className="gap-1 shadow-md backdrop-blur-md">
                        <CheckCircle2 className="size-3" />
                        Completed ({project.year})
                      </Badge>
                    ) : (
                      <Badge variant="info" className="gap-1 shadow-md backdrop-blur-md">
                        <Clock className="size-3" />
                        Ongoing Work
                      </Badge>
                    )}
                  </div>

                  {/* Images Count */}
                  <div className="absolute top-4 right-4 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md">
                    {project.images.length} Photos
                  </div>

                  {/* Overlay Title & Category */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                      {project.category}
                    </span>
                    <h3 className="mt-1 font-heading text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Body Details */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    {/* Location */}
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <MapPin className="size-3.5 text-accent shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>

                    {/* Client if exists */}
                    {project.client && (
                      <div className="mt-2 text-xs text-muted-foreground/85">
                        <span className="font-semibold text-foreground/80">Client:</span> {project.client}
                      </div>
                    )}

                    {/* Description snippet */}
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-muted-foreground">
                      Built-up: {project.builtUpArea || 'Extensive'}
                    </span>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent transition-colors group-hover:text-foreground"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Explore All CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-8 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:border-accent hover:bg-muted/80 hover:shadow-lg"
          >
            <span>Explore Complete Projects Portfolio</span>
            <ArrowRight className="size-4 text-accent" />
          </Link>
        </div>
      </div>
    </section>
  )
}
