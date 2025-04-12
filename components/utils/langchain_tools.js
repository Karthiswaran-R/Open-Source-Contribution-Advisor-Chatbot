// tools/langchain_tools.js

import { DynamicStructuredTool } from "langchain/tools";

export const fetch_top_repositories = new DynamicStructuredTool({
  name: "fetch_top_repositories",
  description: "Fetches top repositories for a given GitHub topic.",
  func: async ({ topic }) => {
    // You can replace this with actual GitHub API logic
    return `Mocked: Top repositories for topic "${topic}"`;
  },
  schema: {
    type: "object",
    properties: {
      topic: { type: "string", description: "The GitHub topic" }
    },
    required: ["topic"]
  }
});

export const fetch_good_first_issues = new DynamicStructuredTool({
  name: "fetch_good_first_issues",
  description: "Fetches good first issues from a repository.",
  func: async ({ repo }) => {
    return `Mocked: Good first issues for repository "${repo}"`;
  },
  schema: {
    type: "object",
    properties: {
      repo: { type: "string", description: "The GitHub repository name" }
    },
    required: ["repo"]
  }
});

export const compare_guidelines = new DynamicStructuredTool({
  name: "compare_guidelines",
  description: "Compares contribution guidelines of two repositories.",
  func: async ({ repo1, repo2 }) => {
    return `Mocked: Comparing guidelines of "${repo1}" and "${repo2}"`;
  },
  schema: {
    type: "object",
    properties: {
      repo1: { type: "string", description: "First GitHub repo" },
      repo2: { type: "string", description: "Second GitHub repo" }
    },
    required: ["repo1", "repo2"]
  }
});

