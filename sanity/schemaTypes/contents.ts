import { defineField, defineType } from "sanity";

export const intro = defineType({
  name: "intro",
  title: "Intro",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "highlightedText",
      title: "Highlighted Text",
      type: "string",
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph",
      type: "text",
    }),
  ],
});
