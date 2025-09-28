import { HoverEffect } from "@/components/ui/hover-effect-card";
import React from "react";

const gitHubProjects = async () => {
  try {
    const response = await fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      return [];
    }

    const repos = await response.json();

    const reposWithLanguages = await Promise.all(
      repos.map(async (repo: Record<string, string>) => {
        const langRes = await fetch(repo.languages_url, {
          headers: {
            Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          },
        });
        const languages = await langRes.json();

        return {
          id: repo.id,
          name: repo.name,
          url: repo.html_url,
          description: repo.description,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          watchers: repo.watchers_count,
          issues: repo.open_issues_count,
          topics: repo.topics,
          mainLanguage: repo.language,
          languages, // full breakdown
          updatedAt: repo.updated_at,
        };
      })
    );
    return reposWithLanguages;
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return [];
  }
};

async function Page() {
  const projects = await gitHubProjects();

  return (
    <div className="relative w-full overflow-clip px-8">
      <h1 className="font-bold text-3xl md:text-5xl leading-tight dark:text-zinc-50 max-w-3xl">
        I&apos;ve been building a{" "}
        <span className="text-cyan-500">variety of projects</span>
      </h1>
      <p className="dark:text-zinc-400 text-sm md:text-base max-w-2xl mt-8 leading-loose tracking-wide">
        Come explore the fruits of my labor, from small experiments to
        full-blown web applications, each project showcases my love for coding
        and design.
      </p>
      <HoverEffect items={projects} />
    </div>
  );
}

export default Page;
