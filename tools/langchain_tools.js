// tools/getRepoInfo.js
import axios from 'axios';
import { DynamicStructuredTool } from 'langchain/tools';
import { z } from 'zod';

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Add your personal access token to the environment

// Fetch top repositories for a given GitHub topic
export const fetch_top_repositories = new DynamicStructuredTool({
  name: 'fetch_top_repositories',
  description: 'Fetches top repositories for a given GitHub topic.',
  schema: z.object({
    topic: z.string().describe('The GitHub topic'),
  }),
  func: async ({ topic }) => {
    try {
      const response = await axios.get(
        `${GITHUB_API_URL}/search/repositories?q=topic:${topic}&sort=stars&order=desc`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
        }
      );

      const repositories = response.data.items.slice(0, 5); // Get top 5 repositories
      return repositories.map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count,
      }));
    } catch (error) {
      console.error('Error fetching top repositories:', error.message);
      return `Failed to fetch repositories for topic "${topic}"`;
    }
  },
});

// Fetch good first issues for a repository
export const fetch_good_first_issues = new DynamicStructuredTool({
  name: 'fetch_good_first_issues',
  description: 'Fetches good first issues from a repository.',
  schema: z.object({
    repo: z.string().describe('The GitHub repository name, in the format owner/repo'),
  }),
  func: async ({ repo }) => {
    try {
      const response = await axios.get(
        `${GITHUB_API_URL}/repos/${repo}/issues`,
        {
          params: {
            labels: 'good first issue',
            state: 'open',
          },
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
        }
      );

      const issues = response.data.slice(0, 5); // Get top 5 good first issues
      return issues.map((issue) => ({
        title: issue.title,
        url: issue.html_url,
        body: issue.body,
      }));
    } catch (error) {
      console.error('Error fetching good first issues:', error.message);
      return `Failed to fetch good first issues for repository "${repo}"`;
    }
  },
});

// Compare contribution guidelines of two repositories
export const compare_guidelines = new DynamicStructuredTool({
  name: 'compare_guidelines',
  description: 'Compares contribution guidelines of two repositories.',
  schema: z.object({
    repo1: z.string().describe('First GitHub repo in the format owner/repo'),
    repo2: z.string().describe('Second GitHub repo in the format owner/repo'),
  }),
  func: async ({ repo1, repo2 }) => {
    try {
      const [repo1Response, repo2Response] = await Promise.all([
        axios.get(`${GITHUB_API_URL}/repos/${repo1}/contents/.github/CONTRIBUTING.md`, {
          headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
        }),
        axios.get(`${GITHUB_API_URL}/repos/${repo2}/contents/.github/CONTRIBUTING.md`, {
          headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
        }),
      ]);

      const repo1Guidelines = Buffer.from(repo1Response.data.content, 'base64').toString('utf-8');
      const repo2Guidelines = Buffer.from(repo2Response.data.content, 'base64').toString('utf-8');

      return {
        repo1Guidelines,
        repo2Guidelines,
      };
    } catch (error) {
      console.error('Error comparing contribution guidelines:', error.message);
      return `Failed to compare contribution guidelines for "${repo1}" and "${repo2}"`;
    }
  },
});

