import { defineField, defineType } from "sanity";

export const profileImage = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "primaryImage",
      title: "Primary Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "altText",
      title: "Alt Text",
      type: "string",
      description: "A short description of the image for accessibility.",
    }),

    defineField({
      name: "secondaryImage",
      title: "Secondary Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "altTextSecondary",
      title: "Alt Text Secondary",
      type: "string",
      description:
        "A short description of the secondary image for accessibility.",
    }),
    defineField({
      name: "cv",
      title: "CV",
      type: "file",
      description: "Upload your CV or resume file here.",
      options: {
        accept: ".pdf,.doc,.docx",
      },
    }),
  ],
});
