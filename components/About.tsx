/* eslint-disable @next/next/no-img-element */
import React from "react";
import Icon from "./Icons";
import Image from "next/image";
import Link from "next/link";
import { About } from "@/types/About";
import { Meteors } from "./ui/Meteors";
import { BackgroundGradientCard } from "./ui/BackgroundGradientCard";

type Props = { about: About };

const AboutPage = ({ about }: Props) => {
  const {
    name,
    description,
    experience,
    skills,
    image,
    github,
    linkedin,
    twitter,
  } = about;
  return (
    <section className="relative h-screen max-w-2xl pt-20 md:container md:mx-auto flex flex-col items-center ">
      <div className=" mx-auto rounded-xl px-5  py-5 md:w-3/4">
        <div className=" flex w-full flex-col justify-between md:flex-row md:space-x-5">
          <div className=" relative md:w-1/3">
            <div className=" py-2 ">
              <h1 className="gradiantText text-start text-3xl font-bold">
                Technical Skills
              </h1>
              <div className="mt-2 flex flex-col items-start justify-start space-y-2 ">
                <div className="grid grid-cols-12 gap-2 lg:grid-cols-7">
                  {skills.map((skill) => (
                    <div
                      key={skill._id}
                      className="flex w-full items-center space-x-3 "
                    >
                      <Icon
                        className=" h-8 w-8 rounded-xl bg-white p-1 shadow-xl hover:scale-150"
                        icon={skill.logo}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <div className=" flex flex-col space-y-3">
              <div className="max-w-screen-lg rounded-xl   p-2 px-4  md:px-2">
                <h1 className="gradiantText text-start text-3xl font-bold">
                  Experiences
                </h1>

                <div className="mt-2  space-y-4  ">
                  {experience.map(
                    ({
                      name,
                      _id,
                      position,
                      start,
                      current,
                      end,
                      description,
                      image,
                    }) => (
                      <BackgroundGradientCard
                        key={_id}
                        className=" rounded-3xl w-full p-2 sm:p-4 relative overflow-hidden bg-white flex flex-col md:flex-row md:gap-8 dark:bg-zinc-900"
                      >
                        <div className=" aspect-square relative h-24 w-24  ">
                          <Image
                            fill
                            src={image}
                            alt={name}
                            className="rounded-lg"
                          />
                        </div>
                        <div className=" flex flex-col  ">
                          <h3 className=" text-lg font-bold">
                            {name}{" "}
                            <span className=" text-sm font-medium ">
                              {start} - {current ? "Current" : end}
                            </span>
                          </h3>
                          <h2 className="text-md">{position}</h2>

                          <p className=" text-sm">{description}</p>
                        </div>

                        <Meteors number={20} />
                      </BackgroundGradientCard>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto mt-auto flex w-3/4 items-center justify-between">
        <div className="flex items-center space-x-1">
          <Link
            href={github}
            className="mt-2 flex  items-center hover:scale-110 hover:underline"
            replace
          >
            <Icon className=" h-8 w-8 p-1 " icon="ri:github-fill" />
          </Link>
          <Link
            href={linkedin}
            className="mt-2 flex  items-center hover:scale-110 hover:underline"
            replace
          >
            <Icon className=" h-8 w-8 p-1 " icon="ri:linkedin-fill" />
          </Link>
          <Link
            href={twitter}
            className="mt-2 flex  items-center hover:scale-110 hover:underline"
            replace
          >
            <Icon className=" h-8 w-8 p-1 " icon="ri:twitter-fill" />
          </Link>
        </div>
        <div className="flex items-center space-x-1">
          <Link
            href={"https://www.fiverr.com/s/qwoqo9"}
            className="mt-2 flex  items-center hover:scale-110 hover:underline"
            replace
          >
            <Icon className=" h-12 w-12 p-1 " icon="simple-icons:fiverr" />
          </Link>
          <Link
            href={"https://www.upwork.com/freelancers/bernardinoo"}
            className="mt-2 flex  items-center hover:scale-110 hover:underline"
            replace
          >
            <Icon className=" h-12 w-12 p-1 " icon="logos:upwork" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
