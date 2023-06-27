import Icon from "@/components/Icons";
import { ProjectCard } from "@/components/Projects";
import { getProjects } from "@/sanity/sanity.utils";
import Link from "next/link";
import React from "react";

type Props = {};

const Projects = async (props: Props) => {
  const projects = await getProjects();
  return (
    <div className="mx-auto w-1/2">
      <Link href={"/"} replace>
        <Icon
          className=" rounded-full bg-white p-2 shadow-lg"
          icon={"ep:back"}
          width={40}
          height={40}
        />
      </Link>
      <div className="relative w-full ">
        <div className="w-full ">
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
        <div className="w-full">
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
      <div className="grid grid-cols-2 gap-4 ">
        {projects.map(({ _id, image, tags, name, github }) => (
          <ProjectCard
            key={_id}
            github={github}
            image={image}
            name={name}
            link={`/projects/${_id}`}
            tags={tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
