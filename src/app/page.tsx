import { Montserrat } from "next/font/google"
import Hero from "@/components/Hero"
import Header from "@/components/Header"
import Projects from "@/components/Projects"
import { getSocials } from "@/sanity/sanity.utils"

const montserrat = Montserrat({
  subsets: ['latin-ext'],
})

export default async function Home() {
  const socials = await getSocials()


  return (
    <main className={` h-full ${montserrat.className} bg-[#E4E4DE]`}>
      <Header socials={socials} />
      <Hero />
      <Projects />
    </main>
  )
}
