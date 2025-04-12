import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import requests
from langchain.agents import Tool

HEADERS = {
    "Accept": "application/vnd.github+json",
    "User-Agent": "langchain-tool"
}

def search_repositories(query: str):
    """
    Search for top GitHub repositories matching a keyword.
    """
    if "language:" not in query and "stars:" not in query:
        query = f"{query} in:name,description"

    url = "https://api.github.com/search/repositories"
    params = {
        "q": query,
        "sort": "stars",
        "order": "desc",
        "per_page": 5
    }

    response = requests.get(url, headers=HEADERS, params=params)
    response.raise_for_status()
    return response.json()["items"]

def search_issues(repo_full_name, query="is:issue is:open"):
    """
    Search for issues in a given GitHub repository using a query.
    """
    url = f"https://api.github.com/search/issues?q=repo:{repo_full_name}+{query}"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
        data = response.json()
        return data.get("items", [])
    else:
        return f"Error: {response.status_code} - {response.text}"

# ✅ Optional: Tool wrapper for LLM integration
search_tool = Tool(
    name="SearchGitHubRepositories",
    func=lambda query: search_repositories(query),
    description="Search top GitHub repositories matching a keyword. Input should be a string query."
)

__all__ = ["search_repositories", "search_issues", "search_tool"]

