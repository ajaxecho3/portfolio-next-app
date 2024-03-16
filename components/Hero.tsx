/* eslint-disable @next/next/no-img-element */
"use client";

import { About } from "@/types/About";
import React from "react";
import ParticlesComponent from "./ui/Particles";
import TextGenerateEffect from "./ui/TextGenerateEffect";

type Props = {
  about: About;
};

function Hero({ about }: Props) {

  const introduction = `Hi! ${about.name} `
  return (
    <section className="relative  overflow-hidden  pt-10 sm:pt-16 md:pt-0 2xl:pt-0  h-screen">
      <div className="relative mx-auto my-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 my-auto">
          <TextGenerateEffect className="text-white" words={introduction} />

        </div>
      </div>
    </section>
  );
}

export default Hero;
