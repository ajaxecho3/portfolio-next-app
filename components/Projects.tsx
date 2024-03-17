/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import Link from "next/link";
import { Project } from "../types/Project";
import Icon from "./Icons";
import { Button, CTAButton } from "./ui/button";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
type Props = {
  featuredProject: Project[];
};

//project card  component
export const ProjectCard = ({
  name,
  image,
  link,
  tags,
  github,
  description,
}: Project) => {
  return (
    <div className="w-full md:w-[450px]">
      <div className="flex w-full justify-between px-[2px] py-1">
        <h2 className="font-semibold  ">{name} </h2>
        <div className="flex justify-between space-x-2">
          {github && (
            <Link href={github}>
              <Icon icon={"devicon:github"} width={20} height={20} />
            </Link>
          )}
          <Link
            className="rounded-xl border border-gray-900  px-1 py-1 text-xs font-semibold"
            href={link}
          >
            Open
          </Link>
        </div>
      </div>
      <div className="relative h-56 rounded-xl bg-gray-100 shadow-xl">
        <Image
          className=" h-56 w-full rounded object-center "
          src={image}
          fill
          alt="content"
        />
      </div>
      <div className="w-full px-[2px] py-1">
        <div className="flex w-full justify-between space-x-2">
          <div className=" flex w-1/2 justify-start -space-x-2 overflow-hidden  font-semibold uppercase">
            {tags.map((tag) => (
              <div
                key={tag._id}
                className="rounded-full border-[1px] border-gray-200 bg-white p-1"
              >
                <Icon icon={tag.logo} width={20} height={20} name={tag.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
};

const Projects = ({ featuredProject }: Props) => {
  return (
    <section
      id="projects-section"
      className=" h-screen relative space-y-2 py-2 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-900 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="relative flex w-full flex-col max-w-4xl mx-auto space-y-2 ">
        <div className="w-full  ">
          <p className="text-1xl bg-gradient-to-r from-orange-500 via-purple-500 to-blue-700 bg-clip-text font-bold text-transparent lg:text-2xl">
            {" "}
            &lt;Component&gt;
          </p>
          <h1 className="text-3xl font-bold uppercase text-gray-400 lg:text-9xl">
            PROJECT<span className="gradiantText">.JSX</span>
          </h1>
          <p className="text-1xl text-right font-bold text-gray-400 lg:text-2xl">
            {" "}
            &lt;/Component&gt;
          </p>
        </div>
        <div className="w-full px-4  ">
          <p className=" text-sm tracking-tight">
            Welcome to my project page! Here, you&#39;ll find a collection of
            some of the exciting projects I&#39;ve worked on as a React
            developer. Each project represents a unique challenge and showcases
            my skills in creating dynamic and interactive web applications. From
            designing intuitive user interfaces to implementing complex
            functionality, I&#39;ve put my expertise to work to deliver
            exceptional results. With a strong focus on clean code, scalability,
            and performance, I strive to create applications that provide a
            seamless user experience. Feel free to explore the projects listed
            below and get a glimpse into my capabilities as a React developer.
          </p>
        </div>
      </div>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {featuredProject.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.name}
            description={project.description}
            header={
              <div className=" aspect-square relative">
                <Image
                  src={project.image}
                  alt={project.name}
                  className=" object-cover"
                  fill
                />
              </div>
            }
            icon={
              <div className="flex w-full justify-between space-x-2">
                <div className=" flex w-1/2 justify-start -space-x-2 overflow-hidden  font-semibold uppercase">
                  {project.tags.map((tag) => (
                    <div
                      key={tag._id}
                      className="rounded-full border-[1px] border-gray-200 bg-white p-1"
                    >
                      <Icon
                        icon={tag.logo}
                        width={20}
                        height={20}
                        name={tag.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
            }
            className={i === 3 || i === 6 ? "md:col-span-2" : "md:col-span-1"}
          />
        ))}
      </BentoGrid>
      <div className="flex w-full items-center justify-center ">
        <CTAButton className="bg-white !h-full p-2 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
          <Link href={"/projects"}>More Projects</Link>
        </CTAButton>
      </div>
    </section>
  );
};

export default Projects;
