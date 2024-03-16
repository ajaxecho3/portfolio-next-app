"use client";

import { About } from "@/types/About";
import React from "react";
import TextGenerateEffect from "./ui/TextGenerateEffect";
import { Boxes } from '@/components/ui/BackgroundBoxes'
type Props = {
  about: About;
};

function Hero({ about }: Props) {

  const introduction = `Hi! My name is  ${about.name} welcome my portfolio `
  return (
    <section className="relative  overflow-hidden  pt-10 sm:pt-16 md:pt-0 2xl:pt-0  h-screen">
      <Boxes />
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <TextGenerateEffect words={introduction} textClassName="text-7xl" className="bg-clip-text text-xl text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20" />
      </div>

    </section>
  );
}

export default Hero;
