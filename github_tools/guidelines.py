import requests
from langchain.agents import Tool

GITHUB_API_URL = "https://api.github.com"
HEADERS = {"Accept": "application/vnd.github.v3+json"}

def fetch_contributing_file(repo_full_name):
    """Fetches the contents of the CONTRIBUTING.md file from a GitHub repository."""
    url = f"{GITHUB_API_URL}/repos/{repo_full_name}/contents/CONTRIBUTING.md"
    response = requests.get(url, headers=HEADERS)
    
    if response.status_code == 200:
        data = response.json()
        return data.get("download_url", "No CONTRIBUTING.md found")
    else:
        return "CONTRIBUTING.md not found or inaccessible."

# Optional alias for readability
def get_contribution_guidelines(repo_full_name):
    return fetch_contributing_file(repo_full_name)

# ✅ Wrap it as a LangChain Tool
contributing_tool = Tool(
    name="GetContributionGuidelines",
    func=get_contribution_guidelines,
    description="Fetches the CONTRIBUTING.md file URL of a GitHub repository. Input should be the full repo name like 'owner/repo'."
)
def compare_contribution_guidelines(repo1, repo2):
    """Compare contributing guidelines of two repos by fetching their CONTRIBUTING.md URLs."""
    content1 = fetch_contributing_file(repo1)
    content2 = fetch_contributing_file(repo2)
    
    return {
        repo1: content1,
        repo2: content2
    }


