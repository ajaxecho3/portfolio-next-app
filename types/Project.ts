export type Project = {
  _id?: string;
  _createdAt?: string;
  featured?: boolean;
  github: string;
  image: string;
  name: string;
  description?: string;
  link: string;
  tags: {
    logo: string;
    name: string;
    level: string;
    _id: string;
  }[];
};
