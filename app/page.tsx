import { Montserrat } from "next/font/google";

import { getAbout, getFeaturedProjects } from "@/sanity/sanity.utils";

import dynamic from "next/dynamic";
import Loading from "@/components/ui/Loading";

const montserrat = Montserrat({
  subsets: ["latin-ext"],
});

const HeroComponent = dynamic(() => import("@/components/Hero"), {
  loading: () => <Loading />,
});
const ProjectsComponent = dynamic(() => import("@/components/Projects"), {
  loading: () => <Loading />,
});
const AboutPageComponent = dynamic(() => import("@/components/About"), {
  loading: () => <Loading />,
});

export default async function Home() {
  const featuredProjects = await getFeaturedProjects();
  const about = await getAbout();
  return (
    <main className={` h-full ${montserrat.className} `}>
      <HeroComponent about={about} />
      <ProjectsComponent featuredProject={featuredProjects} />
      <AboutPageComponent about={about} />
    </main>
  );
}
