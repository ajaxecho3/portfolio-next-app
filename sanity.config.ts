import schemas from "@/sanity/schemas";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
export default defineConfig({
  name: "default",
  title: "portfolio-sanity-app",
  projectId: "l49c6sck",
  dataset: "production",
  apiVersion: "2023-06-10",
  useCdn: false,
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
});
