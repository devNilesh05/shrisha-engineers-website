import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/lib/projects-data";
import { ProjectGallery } from "@/components/project-gallery";
import {
  ChevronLeft,
  MapPin,
  Calendar,
  Building2,
  CheckCircle2,
  Clock,
  Layers,
  ArrowRight,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { QuoteDialog } from "@/components/quote-dialog";
import { COMPANY_INFO } from "@/lib/data/company-info";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: ProjectDetailPageProps
): Promise<Metadata> {
  const slug = (await params).slug;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.name} | Shrisha Engineers Projects`,
    description:
      project.description ||
      `Construction details, specifications, and gallery for ${project.name} in ${project.location}.`,
    openGraph: {
      title: `${project.name} - Shrisha Engineers`,
      description: project.description,
      images: [project.coverImage],
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const slug = (await params).slug;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Strip */}
      <div className="border-b border-border/60 bg-muted/30 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-accent"
          >
            <ChevronLeft className="size-3.5" />
            Back to All Projects
          </Link>
        </div>
      </div>

      {/* Project Hero Header */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-muted/30 via-background to-background px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Info */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  {project.category}
                </span>
                <span>•</span>
                {project.status === "completed" ? (
                  <Badge variant="success" className="gap-1 shadow-sm">
                    <CheckCircle2 className="size-3" />
                    Completed Project
                  </Badge>
                ) : (
                  <Badge variant="info" className="gap-1 shadow-sm">
                    <Clock className="size-3" />
                    Ongoing Execution
                  </Badge>
                )}
                {project.year && (
                  <>
                    <span>•</span>
                    <span className="text-xs text-muted-foreground font-medium">
                      Year: {project.year}
                    </span>
                  </>
                )}
              </div>

              <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {project.name}
              </h1>

              {/* Location & Client meta */}
              <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-accent shrink-0" />
                  <span className="text-foreground font-medium">{project.location}</span>
                </div>
                {project.client && (
                  <div className="flex items-center gap-2">
                    <Building2 className="size-4 text-accent shrink-0" />
                    <span>
                      Client: <strong className="text-foreground">{project.client}</strong>
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-3xl">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <QuoteDialog
                  triggerLabel={`Inquire about ${project.name}`}
                  defaultService={project.category}
                />
                <a
                  href={`https://wa.me/919136195719?text=Hello%20Shrisha%20Engineers,%20I%20am%20interested%20in%20learning%20more%20about%20your%20project:%20${encodeURIComponent(
                    project.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                >
                  <MessageSquare className="size-3.5" />
                  WhatsApp Inquiries
                </a>
              </div>
            </div>

            {/* Right Meta Card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-md">
                <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Project Technical Summary
                </h3>
                <dl className="mt-4 divide-y divide-border/60 text-xs">
                  <div className="py-2.5 flex justify-between">
                    <dt className="text-muted-foreground">Status</dt>
                    <dd className="font-semibold capitalize text-foreground">{project.status}</dd>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <dt className="text-muted-foreground">Location</dt>
                    <dd className="font-semibold text-foreground text-right">{project.location}</dd>
                  </div>
                  {project.builtUpArea && (
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-muted-foreground">Built-up Area</dt>
                      <dd className="font-semibold text-foreground">{project.builtUpArea}</dd>
                    </div>
                  )}
                  {project.scope && (
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-muted-foreground">Scope</dt>
                      <dd className="font-semibold text-foreground text-right max-w-[60%]">
                        {project.scope}
                      </dd>
                    </div>
                  )}
                  <div className="py-2.5 flex justify-between">
                    <dt className="text-muted-foreground">Site Photography</dt>
                    <dd className="font-semibold text-accent">{project.images.length} High-Res Images</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Checklist if available */}
      {project.features && project.features.length > 0 && (
        <section className="border-b border-border/60 bg-muted/20 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
              Engineering Highlights &amp; Scope
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent mt-0.5">
                    <CheckCircle2 className="size-4" />
                  </span>
                  <span className="text-xs font-medium text-foreground leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                Visual Documentation
              </span>
              <h2 className="mt-1 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                On-Site Construction Gallery
              </h2>
            </div>
            <span className="text-xs text-muted-foreground">
              Click on any photograph to view in full resolution
            </span>
          </div>

          <ProjectGallery images={project.images} projectName={project.name} />
        </div>
      </section>

      {/* More Projects Section */}
      {otherProjects.length > 0 && (
        <section className="border-t border-border/80 bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                  Explore Other Landmark Projects
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Discover more residential, institutional, and commercial executions
                </p>
              </div>
              <Link
                href="/projects"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline"
              >
                <span>View All</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="group block rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-lg"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-accent">
                    {p.category}
                  </div>
                  <h4 className="mt-2 font-heading text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {p.name}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {p.location} • {p.status}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent">
                    <span>View project</span>
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
