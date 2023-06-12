import { PortableTextBlock } from "sanity";

export type Skill = {
  _id: string;
  _createdAt: string;
  logo: string;
  name: string;
  level: string;
};

export type Experience = {
  _id: string;
  position: string;
  name: string;
  current: boolean;
  start: string;
  end: string;
  description: string;
  image: string;
};

export type About = {
  _id: string;
  _createdAt: string;
  name: string;
  position: string;
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
  description: PortableTextBlock;
  image: string;
  skills: Skill[];
  experience: Experience[];
};
