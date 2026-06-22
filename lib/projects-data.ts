export type ProjectStatus = "completed" | "ongoing" | "upcoming";

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  status: ProjectStatus;
  coverImage: string;
  description?: string;
  images: string[];
  year?: number;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "ats-rhapsody",
    name: "ATS Rhapsody",
    location: "Greater Noida West",
    status: "completed",
    coverImage: "/ats-rhapsody/1-completed.png",
    description: "Premium residential tower with architectural excellence and modern amenities",
    images: [
      "/ats-rhapsody/1-completed.png",
      "/ats-rhapsody/2-aerial-construction.png",
      "/ats-rhapsody/3-facade-detail.png",
      "/ats-rhapsody/4-night-view.png",
      "/ats-rhapsody/5-lit-evening.png",
      "/ats-rhapsody/6-vertical-facade.png",
      "/ats-rhapsody/7-close-facade.png",
      "/ats-rhapsody/8-construction-phase.png",
    ],
    year: 2024,
  },
  {
    id: "2",
    slug: "grandeur-towers",
    name: "Grandeur Towers",
    location: "Greater Noida West",
    status: "ongoing",
    coverImage: "/projects/ongoing-1.png",
    description: "Multi-tower luxury residential complex with premium finishing",
    images: [
      "/projects/ongoing-1.png",
      "/projects/ongoing-2.png",
      "/projects/ongoing-3.png",
      "/projects/ongoing-4.png",
    ],
    year: 2025,
  },
  {
    id: "3",
    slug: "serenity-heights",
    name: "Serenity Heights",
    location: "Greater Noida",
    status: "upcoming",
    coverImage: "/projects/upcoming-1.png",
    description: "Ultra-modern residential community with smart home features",
    images: [
      "/projects/upcoming-1.png",
      "/projects/upcoming-2.png",
      "/projects/upcoming-3.png",
    ],
    year: 2026,
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getProjectsByStatus = (status: ProjectStatus): Project[] => {
  return projects.filter((p) => p.status === status);
};
