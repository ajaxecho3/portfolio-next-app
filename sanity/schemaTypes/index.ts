import { type SchemaTypeDefinition } from "sanity";
import { intro } from "./contents";
import { workExperiences } from "./work-experiences";
import { profileImage } from "./profile";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [intro, workExperiences, profileImage],
};
