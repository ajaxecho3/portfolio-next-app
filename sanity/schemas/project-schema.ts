import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Project name",
      description: "Name of the project",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Description of the project",
      type: "text",
    }),
    defineField({
      name: "link",
      title: "Link",
      description: "Link to the project",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      description: "Image of the project",
      type: "image",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      description: "Tags of the project",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    }),
    defineField({
      name: "featured",
      title: "Featured",
      description: "Is this project featured?",
      type: "boolean",
    }),
    defineField({
      name: "github",
      title: "Github",
      description: "Github of the project",
      type: "string",
    }),
  ],
});
