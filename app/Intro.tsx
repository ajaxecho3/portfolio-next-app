import React from "react";

import { client } from "@/sanity/lib/client";
import { type SanityDocument } from "next-sanity";

const IntroQuery = `*[_type == "intro"][0]{
  heading,
  highlightedText,
  paragraph
}`;

const Intro = async () => {
  const introData = await client.fetch<SanityDocument>(IntroQuery);

  return (
    <div className="px-8 mt-10 md:mt-20">
      <h1 className="font-bold text-3xl md:text-5xl leading-tight text-zinc-50 max-w-3xl">
        {introData?.heading}{" "}
        <span className="text-cyan-500">{introData?.highlightedText}</span>
      </h1>
      <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 leading-loose tracking-wide">
        {introData?.paragraph}
      </p>
    </div>
  );
};

export default Intro;
