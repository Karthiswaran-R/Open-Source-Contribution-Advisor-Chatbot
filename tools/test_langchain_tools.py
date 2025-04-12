import sys
import os

# Add root to path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from github_tools.search import search_repositories
from github_tools.issues import get_good_first_issues
from github_tools.guidelines import compare_contribution_guidelines
from langchain_tools import (
    fetch_top_repositories,
    fetch_good_first_issues,
    get_repo_contribution_guidelines,
    compare_guidelines,
)

# Test fetch_top_repositories
print("🔍 Top Repos:")
print(fetch_top_repositories.invoke("transformers"))

print("\n🐣 Good First Issues in scikit-learn:")
issues = get_good_first_issues("scikit-learn/scikit-learn")
for issue in issues:
    print(f"- [{issue['title']}]({issue['html_url']})")

# Test get_repo_contribution_guidelines
print("\n📄 CONTRIBUTING.md of keras:")
print(get_repo_contribution_guidelines.invoke("keras-team/keras")[:300])

# Test compare_guidelines
print("\n📊 Comparing Guidelines: keras vs pytorch")
print(compare_guidelines.invoke({"repo1": "keras-team/keras", "repo2": "pytorch/pytorch"}))

