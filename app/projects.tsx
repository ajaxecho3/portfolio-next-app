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

const Projects = async () => {
  const gitHubProjectsData = await gitHubProjects();
  return (
    <div className=" max-w-5xl mx-auto px-8">
      <h1 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto mt-20 md:mt-40">
        I&apos;ve been building a lot of things
      </h1>
      <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-4 leading-loose tracking-wide ">
        Here are some of my public GitHub repositories. I&apos;m passionate
        about
      </p>
      <HoverEffect items={gitHubProjectsData} />
    </div>
  );
};

export default Projects;
