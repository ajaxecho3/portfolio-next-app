import { Montserrat } from "next/font/google"

import Hero from "@/components/Hero"
import Header from "@/components/Header"
import Projects from "@/components/Projects"

const montserrat = Montserrat({
  subsets: ['latin-ext'],
})
export default function Home() {


  return (
    <main className={` h-full ${montserrat.className} bg-[#E4E4DE]`}>
      <Header />
      <Hero />
      <Projects />
    </main>
  )
}
