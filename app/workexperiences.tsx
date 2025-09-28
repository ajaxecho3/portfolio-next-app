import { client } from "@/sanity/lib/client";
import React from "react";
import { type SanityDocument } from "next-sanity";

const WorkExperiencesQuery = `*[_type == "workExperiences"] {
  _id,
  companyName,
  role,
  startDate,
  endDate,
  responsibilities
} | order(startDate desc)
`;

const WorkExperiences = async () => {
  const workExperiences =
    await client.fetch<SanityDocument[]>(WorkExperiencesQuery);

  const groupedExperiences = workExperiences.reduce(
    (acc, experience) => {
      const company = experience.companyName;
      if (!acc[company]) {
        acc[company] = [];
      }
      acc[company].push(experience);
      return acc;
    },
    {} as Record<string, SanityDocument[]>
  );

  return (
    <div className=" max-w-5xl mx-auto px-8">
      <h1 className="text-2xl md:text-3xl dark:text-white font-bold max-w-5xl mx-auto mt-20 md:mt-40">
        Work Experience
      </h1>
      <p className=" text-zinc-600  dark:text-zinc-400 text-sm md:text-base max-w-2xl mt-4 leading-loose tracking-wide ">
        It&apos;s mostly about the culture.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mt-20 max-w-2xl mx-auto">
        {Object.entries(groupedExperiences).map(
          ([companyName, experiences]) => (
            <div key={companyName} className="space-y-4">
              <h2 className="text-xl md:text-2xl text-zinc-600  dark:text-white font-semibold">
                {companyName}
              </h2>
              {experiences.map((experience) => (
                <div
                  key={experience._id}
                  className="border-l-2 border-cyan-500 pl-4 space-y-2"
                >
                  <h3 className="text-lg text-cyan-400 font-medium">
                    {experience.role}
                  </h3>
                  <p className="text-zinc-600  dark:text-zinc-400 text-sm">
                    {experience.startDate} - {experience.endDate || "Present"}
                  </p>
                  {experience.responsibilities && (
                    <ul className="text-zinc-500  dark:text-zinc-300 text-sm space-y-1">
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
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default WorkExperiences;
