import { Timeline } from "@/components/Timeline";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityDocument } from "next-sanity";
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

const WorkExperiencesQuery = `*[_type == "workExperiences"] {
  _id,
  companyName,
  role,
  startDate,
  endDate,
  responsibilities
} | order(startDate desc)
`;

async function Page() {
  const profileData = await client.fetch<SanityDocument>(profileQuery);
  const workExperiences =
    await client.fetch<SanityDocument[]>(WorkExperiencesQuery);
  const secondaryImageUrl = profileData?.secondaryImage
    ? urlFor(profileData.secondaryImage).url()
    : null;

  const data: Array<{ title: string; content: React.ReactNode }> =
    workExperiences.map((experience) => ({
      title: `${experience.startDate} - ${experience.endDate || "Present"}`,
      content: (
        <div className=" mb-20 " key={experience._id}>
          <h3 className="text-lg font-semibold text-zinc-50">
            {experience.role}
          </h3>
          <p className="text-zinc-400 text-sm">
            {experience.startDate} - {experience.endDate}
          </p>
          {experience.responsibilities && (
            <ul className="text-zinc-300 text-sm space-y-1">
              {experience.responsibilities.map(
                (responsibility: string, index: number) => (
                  <li key={index} className="list-disc list-inside">
                    {responsibility}
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      ),
    }));
  return (
    <div>
      <div className="max-w-5xl mx-auto px-8 md:mt-20 relative flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-between">
        <div>
          <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
            Hey! I&apos;m
            <span className="text-cyan-500"> Bernardino Ochoa</span> and
            I&apos;m a frontend-focused developer with backend expertise.
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
            I&apos;ve been obsessed with technology ever since I was a kid. When
            I wasn&rsquo;t taking apart my family&apos;s computer (sorry, mom),
            I was teaching myself how to code. Fast forward a few years, and now
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
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
}

export default Page;
