import { Montserrat } from "next/font/google";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import {
  getAbout,
  getFeaturedProjects,
  getSocials,
} from "@/sanity/sanity.utils";
import AboutPage from "@/components/About";

const montserrat = Montserrat({
  subsets: ["latin-ext"],
});

export default async function Home() {
  const featuredProjects = await getFeaturedProjects();
  const about = await getAbout();
  return (
    <main className={` h-full ${montserrat.className} `}>
      <Hero about={about} />
      <Projects featuredProject={featuredProjects} />
      <AboutPage about={about} />
    </main>
  );
}
