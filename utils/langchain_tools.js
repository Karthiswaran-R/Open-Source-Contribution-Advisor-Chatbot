// tools/langchain_tools.js

import { z } from "zod";
import { DynamicStructuredTool } from "langchain/tools";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const headers = {
  Accept: "application/vnd.github+json",
  ...(GITHUB_TOKEN && { Authorization: `Bearer ${GITHUB_TOKEN}` }),
};

export const fetch_top_repositories = new DynamicStructuredTool({
  name: "fetch_top_repositories",
  description: "Fetches top 5 repositories for a given GitHub topic.",
  schema: z.object({
    topic: z.string().describe("The GitHub topic (e.g., 'react', 'ai')"),
  }),
  func: async ({ topic }) => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=topic:${topic}&sort=stars&order=desc&per_page=5`,
      { headers }
    );
    const data = await response.json();

    if (!data.items) return `No repositories found for topic "${topic}".`;

    return data.items
      .map((repo, i) => `${i + 1}. ${repo.full_name} - ⭐ ${repo.stargazers_count}`)
      .join("\n");
  },
});

export const fetch_good_first_issues = new DynamicStructuredTool({
  name: "fetch_good_first_issues",
  description: "Fetches good first issues from a GitHub repository.",
  schema: z.object({
    repo: z.string().describe("Repository in 'owner/repo' format"),
  }),
  func: async ({ repo }) => {
    const response = await fetch(
      `https://api.github.com/repos/${repo}/issues?labels=good%20first%20issue&state=open&per_page=5`,
      { headers }
    );
    const data = await response.json();

    if (!Array.isArray(data)) return `No good first issues found for "${repo}".`;

    return data
      .map((issue, i) => `${i + 1}. ${issue.title} - ${issue.html_url}`)
      .join("\n");
  },
});

export const compare_guidelines = new DynamicStructuredTool({
  name: "compare_guidelines",
  description: "Compares contribution guidelines of two repositories.",
  schema: z.object({
    repo1: z.string().describe("First GitHub repo (owner/repo)"),
    repo2: z.string().describe("Second GitHub repo (owner/repo)"),
  }),
  func: async ({ repo1, repo2 }) => {
    const fetchGuidelines = async (repo) => {
      const response = await fetch(
        `https://raw.githubusercontent.com/${repo}/main/CONTRIBUTING.md`
      );
      return response.ok ? await response.text() : `No CONTRIBUTING.md found in ${repo}`;
    };

    const [guideline1, guideline2] = await Promise.all([
      fetchGuidelines(repo1),
      fetchGuidelines(repo2),
    ]);

    return `🔹 Guidelines for ${repo1}:\n${guideline1.slice(0, 500)}...\n\n` +
           `🔸 Guidelines for ${repo2}:\n${guideline2.slice(0, 500)}...`;
  },
});

