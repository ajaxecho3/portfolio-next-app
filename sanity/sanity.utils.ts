import { createClient, groq } from "next-sanity";
import { Social } from "../types/Social";
import { Project } from "../types/Project";
import { About } from "@/types/About";

const client = createClient({
  projectId: "l49c6sck",
  dataset: "production",
  apiVersion: "2023-06-10",
  useCdn: false,
});

export async function getSocials(): Promise<Social[]> {
  return client.fetch(groq`*[_type == "social"]`);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return client.fetch(groq`*[_type == "project" && featured == true]{
    _id,
    _createdAt,
    featured,
    github,
    "image": image.asset->url,
    name,
    link,
    "tags": tags[]->{
      logo,
      name,
      level,
      _id,
    },
  } `);
}

export async function getProjects(): Promise<Project[]> {
  return client.fetch(groq`*[_type == "project"]{
    _id,
    _createdAt,
    featured,
    github,
    "image": image.asset->url,
    name,
    link,
    description,
    "tags": tags[]->{
      logo,
      name,
      level,
      _id,
    },
  }`);
}

export async function getProject(id: string): Promise<Project> {
  return client.fetch(
    groq`*[_type == "project" && _id == $id][0]{
    _id,
    _createdAt,
    featured,
    github,
    "image": image.asset->url,
    name,
    link,
    description,
    "tags": tags[]->{
      logo,
      name,
      level,
      _id,
    },
  }`,
    { id }
  );
}

export async function getAbout(): Promise<About> {
  return client.fetch(groq`*[_type == "about"][0]{  
    _id,
    _createdAt,
    "image": image.asset->url,
    name,
    description,
    github,
    linkedin,
    twitter,
    email,
    "skills": skills[]->{
      logo,
      name,
      level,
      _id,
    },
    "experience": experience[]->{
      name,
      position,
      current,
      start,
      end,
      description,
      "image": image.asset->url,
    },
    "education": education[]->{
      name,
      degree,
      current,
      start,
      end,
      description,
      "image": image.asset->url,
    },
  }`);
}
