export type ProjectStatus = "completed" | "ongoing" | "upcoming";

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  client?: string;
  category: string;
  scope?: string;
  builtUpArea?: string;
  status: ProjectStatus;
  coverImage: string;
  description: string;
  features?: string[];
  images: string[];
  year: number;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "ats-rhapsody",
    name: "ATS Rhapsody",
    location: "Greater Noida West, NCR",
    client: "ATS Infrastructure Ltd.",
    category: "High-Rise Residential",
    scope: "Civil Structural Works, Post-Tensioned Slabs, Architectural Facade",
    builtUpArea: "650,000+ sq. ft.",
    status: "completed",
    coverImage: "/ats-rhapsody/1-completed.png",
    description:
      "A flagship luxury residential high-rise complex featuring multiple soaring towers, seismic-resistant RCC frame engineering, signature architectural facades, and modern residential amenities.",
    features: [
      "Seismic Zone IV earthquake-resistant RCC frame",
      "Modern monolithic formwork with high-early strength concrete",
      "Architectural exterior facade lighting and weather-proof textured finishing",
      "Landscaped podium and multi-level basement parking integration",
    ],
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
    name: "RBI Staff Quarters",
    location: "Sector 10, Kharghar, Navi Mumbai",
    client: "Reserve Bank of India (RBI)",
    category: "Institutional Residential Complex",
    scope: "Complete Civil, Structural Construction & Interior Finishing",
    builtUpArea: "380,000+ sq. ft.",
    status: "completed",
    coverImage: "/rbistaff/image1.png",
    description:
      "Comprehensive multi-tower government staff residential quarter complex executed for the Reserve Bank of India in Kharghar, Navi Mumbai, adhering to rigorous CPWD and institutional specifications.",
    features: [
      "Stringent institutional QA/QC standards and third-party material testing",
      "Multi-tower residential cluster with integrated community facilities",
      "Extensive rainwater harvesting and centralized sewage treatment integration",
      "Durable exterior coatings and thermal-insulated roofing systems",
    ],
    images: [
      "/rbistaff/image1.png",
      "/rbistaff/image2.png",
      "/rbistaff/image3.png",
      "/rbistaff/image4.png",
      "/rbistaff/image5.png",
      "/rbistaff/image6.jpeg",
    ],
    year: 2026,
  },
  {
    id: "3",
    slug: "iit",
    name: "IIT Bombay Residential Building",
    location: "IIT Bombay Campus, Powai, Mumbai",
    client: "Indian Institute of Technology Bombay",
    category: "Institutional Housing (Type-II)",
    scope: "Turnkey Civil Construction of Type-II Residential Towers",
    builtUpArea: "210,000+ sq. ft.",
    status: "ongoing",
    coverImage: "/iit/iit-3.jpeg",
    description:
      "Ongoing major construction of modern Type-II faculty and staff residential towers inside the premier IIT Bombay campus in Powai, featuring advanced RCC engineering and sustainable green-building practices.",
    features: [
      "Rigid zero-disruption campus construction protocols",
      "High-grade M35/M40 concrete mix designs with fly-ash blending",
      "Engineered aluminium formwork for rapid floor cycle turnaround",
      "On-site real-time safety supervision and environmental dust containment",
    ],
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
