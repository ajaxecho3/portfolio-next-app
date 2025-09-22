import { defineField, defineType } from "sanity";

export const workExperiences = defineType({
  name: "workExperiences",
  title: "Work Experiences",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "string",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "string",
    }),
    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
