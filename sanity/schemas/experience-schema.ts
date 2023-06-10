import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Company name",
      description: "Name of the company",
      type: "string",
    }),
    defineField({
      name: "position",
      title: "Position",
      description: "Position of the company",
      type: "string",
    }),
    defineField({
      name: "current",
      title: "Current",
      description: "Is this company current?",
      type: "boolean",
    }),
    defineField({
      name: "start",
      title: "Start",
      description: "Start date of the company",
      type: "date",
    }),
    defineField({
      name: "end",
      title: "End",
      description: "End date of the company",
      type: "date",
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Description of the company",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      description: "Image of the company",
      type: "image",
    }),
  ],
});
