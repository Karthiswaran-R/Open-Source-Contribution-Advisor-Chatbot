export async function fetchContributingGuidelines(repoUrl) {
  try {
    // Attempt to fetch the CONTRIBUTING.md file
    const response = await fetch(`https://api.github.com/repos/${repoUrl}/contents/CONTRIBUTING.md`);
    
    if (response.ok) {
      const data = await response.json();
      return atob(data.content); // Decode base64 content of CONTRIBUTING.md
    } else {
      // If no CONTRIBUTING.md file found, check for other documentation
      return await fetchOtherDocs(repoUrl);
    }
  } catch (error) {
    console.error("Error fetching contributing guidelines:", error);
    return "⚠️ Failed to fetch contribution guidelines.";
  }
}

// Fetch README.md or issue templates if CONTRIBUTING.md is not found
async function fetchOtherDocs(repoUrl) {
  try {
    const readmeResponse = await fetch(`https://api.github.com/repos/${repoUrl}/contents/README.md`);
    if (readmeResponse.ok) {
      const data = await readmeResponse.json();
      return atob(data.content); // Decode base64 content of README.md
    }

    const issueTemplateResponse = await fetch(`https://api.github.com/repos/${repoUrl}/contents/.github/ISSUE_TEMPLATE`);
    if (issueTemplateResponse.ok) {
      return "Found issue templates; they may include contribution guidelines.";
    }

    return "No specific contribution guidelines found, but check the repository's README or open issues for contribution info.";
  } catch (error) {
    console.error("Error fetching alternative documentation:", error);
    return "⚠️ No contribution documentation found.";
  }
}

