import { Montserrat } from "next/font/google";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import {
  getAbout,
  getFeaturedProjects,
  getSocials,
} from "@/sanity/sanity.utils";
import { Skeleton } from "@/components/ui/skeleton";
import About from "@/components/About";
import AboutPage from "@/components/About";

const montserrat = Montserrat({
  subsets: ["latin-ext"],
});

export default async function Home() {
  const socials = await getSocials();
  const featuredProjects = await getFeaturedProjects();
  const about = await getAbout();
  return (
    <main className={` h-full ${montserrat.className} bg-[#E4E4DE]`}>
      <Skeleton />
      <Header socials={socials} />
      <Hero />
      <Projects featuredProject={featuredProjects} />
      <AboutPage about={about} />
    </main>
  );
}
