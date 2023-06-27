/* eslint-disable @next/next/no-img-element */
import React from "react";
import GlowingBtn from "./GlowingBtn";
type Props = {};

function Hero({}: Props) {
  return (
    <section id="hero-section relative ">
      <div className="h-screen">
        <div className=" absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] ">
          <h1 className="text-4xl font-bold text-gray-700 lg:text-5xl">
            Hi, I&#39;m{" "}
          </h1>
          <h1 className="gradiantText text-7xl font-bold lg:text-8xl">
            Bernardino{" "}
          </h1>
          <h1 className="gradiantText text-7xl font-bold lg:text-8xl">
            Ochoa.{" "}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
