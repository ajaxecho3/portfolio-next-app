import { defineType, defineField } from "sanity";

export default defineType({
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Social name",
      description: "Name of the social media",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "URL",
      description: "URL of the social media",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      description:
        "Logo of the social media (SVG or PNG) or https://iconify.design/ ",
      type: "string",
    }),
  ],
});
