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
    year: 2023,
  },
  {
    id: "2",
    slug: "rbi",
    name: "RBI Staff Quarter",
    location: "Kharghar, Mumbai",
    status: "completed",
    coverImage: "/rbistaff/image1.png",
    description: "Multi-tower luxury residential complex with premium finishing",
    images: [
      "/rbistaff/image1.png",
      "/rbistaff/image2.png",
      "/rbistaff/image3.png",
      "/rbistaff/image4.png",
      "/rbistaff/image5.png",
      "/rbistaff/image6.jpeg",
    ],
    year: 2026,
  }, {
    id: "3",
    slug: "iit",
    name: "Residential Building",
    location: "IIT Bombay, Powai, Mumbai",
    status: "ongoing",
    coverImage: "/iit/iit-3.jpeg",
    description: "Construction of Residential Buildings consisting of Type-II",
    images: [
      "/iit/iit-4.jpeg",
      "/iit/iit-3.jpeg",
      "/iit/iit-1.jpeg",
      "/iit/iit-2.jpeg",
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
