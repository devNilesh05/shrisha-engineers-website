"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Eye, CheckCircle2, Clock, Calendar } from "lucide-react";
import { Project } from "@/lib/projects-data";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group h-full"
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="relative flex flex-col h-full overflow-hidden rounded-2xl border border-border/80 bg-card shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10">
          {/* Cover Image Container */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
            <Image
              src={project.coverImage}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

            {/* Status Badge */}
            <div className="absolute top-4 left-4">
              {project.status === "completed" ? (
                <Badge variant="success" className="gap-1 shadow-md backdrop-blur-md">
                  <CheckCircle2 className="size-3" />
                  Completed ({project.year})
                </Badge>
              ) : (
                <Badge variant="info" className="gap-1 shadow-md backdrop-blur-md">
                  <Clock className="size-3" />
                  Ongoing
                </Badge>
              )}
            </div>

            {/* Images count pill */}
            <div className="absolute top-4 right-4 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md">
              {project.images.length} Photos
            </div>

            {/* Title & Category over image */}
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                {project.category}
              </span>
              <h3 className="mt-1 font-heading text-xl font-bold text-white group-hover:text-accent transition-colors line-clamp-1">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-1 flex-col justify-between p-6">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <MapPin className="size-3.5 text-accent shrink-0" />
                <span className="truncate">{project.location}</span>
              </div>

              {project.client && (
                <div className="text-xs text-muted-foreground/90">
                  <span className="font-semibold text-foreground/80">Client:</span>{" "}
                  {project.client}
                </div>
              )}

              <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* Bottom Row */}
            <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between text-xs">
              <span className="text-[11px] font-medium text-muted-foreground">
                Built-up: {project.builtUpArea || "Turnkey"}
              </span>
              <div className="flex items-center gap-1.5 font-bold text-accent transition-colors group-hover:text-foreground">
                <span>View Gallery</span>
                <Eye className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
