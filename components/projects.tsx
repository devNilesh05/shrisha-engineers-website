'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'

const projects = [
  {
    img: '/projects/highrise.png',
    title: 'Hillside Residential Towers',
    category: 'Civil Construction',
    className: 'lg:col-span-2 lg:row-span-2',
  },
  {
    img: '/projects/gateway.png',
    title: 'Grand Entrance Gateway',
    category: 'Architectural Works',
    className: '',
  },
  {
    img: '/projects/clubhouse.png',
    title: 'Community Clubhouse',
    category: 'Commercial Build',
    className: '',
  },
  {
    img: '/projects/courtyard.png',
    title: 'Landscaped Central Courtyard',
    category: 'Infrastructure',
    className: 'lg:col-span-2',
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our Work
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Projects Built to Stand the Test of Time
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A glimpse of the developments we have proudly delivered.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[260px]"
        >
          {projects.map((project) => (
            <motion.figure
              key={project.title}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl border border-border ${project.className}`}
            >
              <img
                src={project.img || '/placeholder.svg'}
                alt={project.title}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/20 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {project.category}
                </span>
                <h3 className="mt-1 font-heading text-lg font-bold text-white">
                  {project.title}
                </h3>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
