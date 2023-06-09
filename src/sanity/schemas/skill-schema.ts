import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Techonology name",
      description: "Name of the language, Framework, or library",
      type: "string",
    }),
    defineField({
      name: "level",
      title: "Level",
      description: "Level of proficiency",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
        ],
      },
    }),
    defineField({
      name: "logo",
      title: "Logo",
      description:
        "Logo of the technology (SVG or PNG) or https://iconify.design/ ",
      type: "string",
    }),
  ],
});
