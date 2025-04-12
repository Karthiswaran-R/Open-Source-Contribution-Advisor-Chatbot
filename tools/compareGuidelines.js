import { DynamicStructuredTool } from 'some-tool-library'; // Import your tool library

export const compare_guidelines = new DynamicStructuredTool({
  name: "compare_guidelines",
  description: "Compares contribution guidelines of two repositories.",
  func: async ({ repo1, repo2 }) => {
    const guidelinesRepo1 = await fetchContributingGuidelines(repo1);
    const guidelinesRepo2 = await fetchContributingGuidelines(repo2);
    
    return `Repo1 Contribution Guidelines: ${guidelinesRepo1}\n\nRepo2 Contribution Guidelines: ${guidelinesRepo2}`;
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

