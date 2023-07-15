/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import Link from "next/link";
import { Project } from "../types/Project";
import Icon from "./Icons";
import { Button } from "./ui/button";
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
    <div className="w-[450px]">
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
      <div className="relative rounded-xl bg-gray-100 shadow-xl">
        <img
          className=" h-56 w-full rounded object-fill "
          src={image}
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
      className=" relative h-full w-full items-center px-4 lg:mx-auto lg:h-screen lg:w-3/4"
    >
      <div className="relative flex w-full flex-col lg:absolute lg:left-[50%] lg:top-[50%] lg:-translate-x-[50%] lg:-translate-y-[50%] lg:flex-row-reverse ">
        <div className="w-full lg:w-1/2 ">
          <p className="text-1xl bg-gradient-to-r from-orange-500 via-purple-500 to-blue-700 bg-clip-text font-bold text-transparent lg:text-2xl">
            {" "}
            &lt;Component&gt;
          </p>
          <h1 className="text-3xl font-bold uppercase text-gray-400 lg:text-9xl">
            PRO<span className="gradiantText">.JSX</span>
          </h1>
          <p className="text-1xl text-right font-bold text-gray-400 lg:text-2xl">
            {" "}
            &lt;/Component&gt;
          </p>
        </div>
        <div className="w-full px-4  lg:w-1/2">
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
      <div className="relative flex w-full flex-col justify-center lg:absolute lg:top-5 lg:flex-row lg:justify-start lg:space-x-4 lg:py-2  ">
        {featuredProject
          .filter((_, index) => index % 2)
          .map((project) => (
            <ProjectCard
              key={project._id}
              name={project.name}
              image={project.image}
              tags={project.tags}
              link={project.link}
              github={project.github}
            />
          ))}
      </div>

      <div className="relative flex w-full flex-col justify-center lg:absolute lg:bottom-8 lg:flex-row lg:justify-end lg:space-x-4 lg:py-2  ">
        {featuredProject
          .filter((_, index) => !(index % 2))
          .map((project) => (
            <ProjectCard
              key={project._id}
              name={project.name}
              image={project.image}
              tags={project.tags}
              link={project.link}
              github={project.github}
            />
          ))}
      </div>
      <div className="flex w-full items-center justify-center lg:absolute lg:bottom-0 ">
        <Button
          variant={"outline"}
          className="h-15 rounded-full border border-gray-900 px-4 font-bold tracking-tighter"
          asChild
        >
          <Link href={"/projects"}>More Projects</Link>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
