import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

const profileQuery = `*[_type == "profile"][0]{
  secondaryImage{
    asset->{
      url
    }
  }
}
`;

async function Page() {
  const profileData = await client.fetch(profileQuery);
  const secondaryImageUrl = profileData?.secondaryImage
    ? urlFor(profileData.secondaryImage).url()
    : null;

  return (
    <div className="max-w-5xl mx-auto px-8 md:mt-20 relative flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-between">
      <div>
        <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
          Hey! I&apos;m<span className="text-cyan-500"> Tyler Durden</span> and
          I&apos;m a full stack soap engineer.
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
          I&apos;ve been obsessed with technology ever since I was a kid. When I
          wasn&rsquo;t taking apart my family&apos;s computer (sorry, mom), I
          was teaching myself how to code. Fast forward a few years, and now
          I&apos;m a full-fledged code ninja with an insatiable thirst for
          creating beautiful websites and functional applications.
        </p>
      </div>
      <div className="order-frst md:order-last">
        {secondaryImageUrl && (
          <Image
            width={256}
            height={256}
            src={secondaryImageUrl}
            alt="Profile Image"
            className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default Page;
