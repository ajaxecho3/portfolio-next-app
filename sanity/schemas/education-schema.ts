import { defineField, defineType } from "sanity";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "School name",
      description: "Name of the school",
      type: "string",
    }),
    defineField({
      name: "degree",
      title: "Degree",
      description: "Degree of the school",
      type: "string",
    }),
    defineField({
      name: "start",
      title: "Start",
      description: "Start date of the school",
      type: "date",
    }),
    defineField({
      name: "end",
      title: "End",
      description: "End date of the school",
      type: "date",
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Description of the school",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      description: "Image of the school",
      type: "image",
    }),
  ],
});
