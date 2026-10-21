"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects, type ProjectStatus } from "@/lib/projects-data";
import { ProjectCard } from "@/components/project-card";
import { ArrowLeft, Building2, CheckCircle2, Clock, Phone, MessageSquare } from "lucide-react";
import { QuoteDialog } from "@/components/quote-dialog";
import { COMPANY_INFO } from "@/lib/data/company-info";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectStatus>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  const filters: { value: "all" | ProjectStatus; label: string; count: number }[] = [
    { value: "all", label: "All Projects", count: projects.length },
    {
      value: "completed",
      label: "Completed",
      count: projects.filter((p) => p.status === "completed").length,
    },
    {
      value: "ongoing",
      label: "Ongoing",
      count: projects.filter((p) => p.status === "ongoing").length,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb strip */}
      <div className="border-b border-border/60 bg-muted/30 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-3.5" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-muted/40 via-background to-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 size-96 rounded-full bg-accent/5 blur-3xl pointer-events-none"
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              Engineering Landmark Developments
            </span>

            <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
              Our Construction &amp; Structural Portfolio
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore our landmark projects executed for government institutions,
              premier universities (IIT Bombay), Reserve Bank of India (RBI), and luxury high-rise residential developers.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-500" />
                ISO Quality Certified
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Building2 className="size-4 text-accent" />
                50+ Executed Structures
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4 text-sky-500" />
                On-Time Handover
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs Sticky Bar */}
      <section className="sticky top-16 z-30 border-b border-border/80 bg-background/85 backdrop-blur-md px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 ${
                  activeFilter === filter.value
                    ? "bg-accent text-accent-foreground shadow-md shadow-accent/20"
                    : "border border-border/80 bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    activeFilter === filter.value
                      ? "bg-black/15 text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="border-t border-border/80 bg-muted/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Have a Similar Project in Navi Mumbai or Pan-India?
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
            Contact our engineering desk at <span className="text-foreground font-semibold">Devdrishti CHS, Navade Phase-2</span> for structural blueprints and turnkey cost estimates.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <QuoteDialog triggerLabel="Inquire About a Project" />
            <a
              href={COMPANY_INFO.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors"
            >
              <MessageSquare className="size-4" />
              WhatsApp: {COMPANY_INFO.phone.display}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
