from langchain.agents import Tool
import requests

def get_good_first_issues(repo_full_name):
    """
    Fetches 'good first issues' from the given GitHub repository.
    """
    import requests
    url = f"https://api.github.com/search/issues?q=repo:{repo_full_name}+label:good%20first%20issue+state:open"
    headers = {"Accept": "application/vnd.github.v3+json"}
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        data = response.json()
        return [
            f"{issue['title']} - {issue['html_url']}"
            for issue in data.get("items", [])
        ]
    else:
        return f"Error: {response.status_code} - {response.text}"


def get_open_issues(repo_full_name):
    """Fetch open issues from a given GitHub repo."""
    url = f"https://api.github.com/repos/{repo_full_name}/issues"
    headers = {"Accept": "application/vnd.github.v3+json"}
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        issues = response.json()
        return [f"{issue['title']} - {issue['html_url']}" for issue in issues]
    else:
        return f"Error: {response.status_code} - {response.text}"

# ✅ Exportable Tool
github_tool = Tool(
    name="GitHubOpenIssues",
    func=lambda repo: get_open_issues(repo),
    description="Fetch open issues from a GitHub repository. Input should be full repo name like 'owner/repo'."
)

github_tool = Tool(
    name="GoodFirstIssuesFinder",
    func=get_good_first_issues,
    description="Find good first issues from a GitHub repo. Input: full repo name (e.g., 'owner/repo')"
)
