"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Eye } from "lucide-react";
import { Project } from "@/lib/projects-data";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const statusConfig = {
  completed: {
    label: "Completed",
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  ongoing: {
    label: "Ongoing",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  upcoming: {
    label: "Upcoming",
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const status = statusConfig[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group h-full"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative h-80 overflow-hidden rounded-xl bg-muted ring-1 ring-border transition-all duration-300 hover:ring-accent/50">
          {/* Image */}
          <Image
            src={project.coverImage}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/0 transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/40" />

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${status.color}`}>
              {status.label}
            </span>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
              {project.name}
            </h3>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-white/80 mb-4">
              <MapPin className="size-4 flex-shrink-0" />
              <span>{project.location}</span>
            </div>

            {/* View Button */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">
                {project.images.length} images
              </span>
              <div className="flex items-center gap-2 text-white/60 transition-colors group-hover:text-accent">
                <span className="text-sm font-medium">View Project</span>
                <Eye className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
