/* eslint-disable @next/next/no-img-element */
"use client";

import { About } from "@/types/About";
import { PortableText } from "@portabletext/react";
import React from "react";
import ParticlesComponent from "./ui/Particles";

type Props = {
  about: About;
};

function Hero({ about }: Props) {
  return (
    <section className="relative  overflow-hidden  pt-10 sm:pt-16 md:pt-0 2xl:pt-0 bg-blue-950  h-[100vh]">
      <ParticlesComponent />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 my-auto">
             {
            about.name
          }
          {/* <div>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Hey 👋 I am <br className="block sm:hidden" />
              {about.name}
            </h2>
            <div className="mt-3 max-w-lg text-xl leading-relaxed text-gray-600 md:mt-8">
              <PortableText value={about.description} />
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden">
              <svg
                className="scale-120 absolute inset-x-0 left-1/2 top-0 -mb-48 -translate-x-1/2"
                id="visual"
                viewBox="0 0 900 600"
                width="900"
                height="600"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <g transform="translate(446.61076855753436 312.7209673957761)">
                  <path
                    d="M167.1 -208C205.7 -166.8 218.6 -103.8 224.5 -43.5C230.5 16.8 229.6 74.4 207.5 126.6C185.5 178.8 142.3 225.7 92.8 235.2C43.2 244.6 -12.8 216.8 -51 183.8C-89.1 150.9 -109.5 113 -141.4 73.8C-173.3 34.7 -216.6 -5.6 -220.6 -48.6C-224.5 -91.6 -189.1 -137.3 -145.7 -177.7C-102.4 -218.1 -51.2 -253 6.5 -260.8C64.3 -268.6 128.6 -249.2 167.1 -208"
                    fill="#6600FF"
                  ></path>
                </g>
              </svg>
              <img
                className="relative w-full  xl:mx-auto xl:max-w-lg 2xl:origin-bottom 2xl:scale-110"
                src={about.image}
                alt=""
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
