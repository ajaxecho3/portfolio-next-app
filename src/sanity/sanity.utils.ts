import { createClient, groq } from "next-sanity";
import { Social } from "../../types/Social";

export async function getSocials(): Promise<Social[]> {
  const client = createClient({
    projectId: "l49c6sck",
    dataset: "production",
    apiVersion: "2023-06-10",
  });

  return client.fetch(groq`*[_type == "social"]`);
}
