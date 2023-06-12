import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      description: "Name of the person",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Description of the person",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    }),
    defineField({
      name: "image",
      title: "Image",
      description: "Image of the person",
      type: "image",
    }),
    defineField({
      name: "skills",
      title: "Skills",
      description: "Skills of the person",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    }),
    defineField({
      name: "github",
      title: "Github",
      description: "Github of the person",
      type: "string",
    }),
    defineField({
      name: "linkedin",
      title: "Linkedin",
      description: "Linkedin of the person",
      type: "string",
    }),
    defineField({
      name: "twitter",
      title: "Twitter",
      description: "Twitter of the person",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      description: "Email of the person",
      type: "string",
    }),

    defineField({
      name: "resume",
      title: "Resume",
      description: "Resume of the person",
      type: "file",
    }),

    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [{ type: "reference", to: { type: "education" } }],
    }),
    defineField({
      name: "experience",
      title: "Experience",
      type: "array",
      of: [{ type: "reference", to: { type: "experience" } }],
    }),
  ],
});
