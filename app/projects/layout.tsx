import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Projects Portfolio | Shrisha Engineers",
  description:
    "Explore completed and ongoing civil construction and structural engineering projects by Shrisha Engineers in Navi Mumbai, Mumbai, and Greater Noida.",
  openGraph: {
    title: "Projects Portfolio | Shrisha Engineers",
    description:
      "Explore completed and ongoing civil construction and structural engineering projects by Shrisha Engineers.",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">{children}</main>
      <Footer />
    </>
  );
}
