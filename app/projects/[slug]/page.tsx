import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/lib/projects-data";
import { ProjectGallery } from "@/components/project-gallery";
import { ChevronLeft, MapPin, Calendar } from "lucide-react";
import { Metadata } from "next";

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
    title: `${project.name} | Shrisha Engineers`,
    description: project.description || `Explore ${project.name} in ${project.location}`,
    openGraph: {
      title: project.name,
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

  const statusConfig = {
    completed: "Completed Project",
    ongoing: "Ongoing Project",
    upcoming: "Upcoming Project",
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-background px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="size-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Project Header */}
      <section className="border-b border-border bg-gradient-to-br from-background to-background/80 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Content */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {project.name}
              </h1>

              {/* Meta Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-lg text-muted-foreground">
                  <MapPin className="size-5 flex-shrink-0 text-accent" />
                  {project.location}
                </div>
                {project.year && (
                  <div className="flex items-center gap-3 text-lg text-muted-foreground">
                    <Calendar className="size-5 flex-shrink-0 text-accent" />
                    {project.year}
                  </div>
                )}
              </div>

              {/* Status Badge */}
              <div className="mt-6">
                <span
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                    project.status === "completed"
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                      : project.status === "ongoing"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                  }`}
                >
                  {statusConfig[project.status]}
                </span>
              </div>

              {/* Description */}
              {project.description && (
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              )}

              {/* Image Count */}
              <div className="mt-6 text-sm text-muted-foreground">
                {project.images.length} high-resolution images
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="text-3xl font-bold text-accent">
                  {project.images.length}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Images</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="text-3xl font-bold text-accent">
                  {project.status === "completed" ? "✓" : "◐"}
                </div>
                <p className="mt-2 text-sm text-muted-foreground capitalize">
                  {project.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
          <ProjectGallery images={project.images} projectName={project.name} />
        </div>
      </section>

      {/* More Projects CTA */}
      <section className="border-t border-border bg-background/50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold">Explore More Projects</h3>
          <p className="mt-2 text-muted-foreground">
            Discover our portfolio of completed, ongoing, and upcoming developments
          </p>
          <Link
            href="/projects"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/30"
          >
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
