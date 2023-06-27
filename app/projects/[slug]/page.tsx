import { getProject } from "@/sanity/sanity.utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icons";
type Props = {
  params: {
    slug: string;
  };
};

const Project = async ({ params }: Props) => {
  const project = await getProject(params.slug);
  return (
    <div className="mx-auto w-1/2">
      <div className="flex flex-col space-y-4">
        <Link href={"/projects"} replace>
          <Icon
            className=" rounded-full bg-white p-2 shadow-lg"
            icon={"ep:back"}
            width={40}
            height={40}
          />
        </Link>
        <Image
          className=" rounded-xl shadow-2xl"
          priority
          src={project.image}
          alt={project.name}
          width={1600}
          height={1600}
        />
        <div className=" flex w-full justify-between px-1">
          <h1 className=" text-2xl font-bold">{project.name}</h1>
          <div className="flex items-center justify-between space-x-2">
            <Link href={project.github} replace>
              <Icon
                className=" rounded-full bg-white p-2 shadow-lg"
                icon={"devicon:github"}
                width={40}
                height={40}
              />
            </Link>
            <Link href={project.link} replace>
              <Icon
                className=" rounded-full bg-white p-2 shadow-lg"
                icon={"majesticons:open"}
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          {project.tags.map((tag) => (
            <Icon
              className=" rounded-full bg-white p-2 shadow-lg"
              key={tag._id}
              icon={tag.logo}
              width={40}
              height={40}
            />
          ))}
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
