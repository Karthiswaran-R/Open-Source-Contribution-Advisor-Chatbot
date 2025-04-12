import sys
import os

# Add current directory to sys.path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from github_tools import (
    search_repositories,
    get_good_first_issues,
    compare_contribution_guidelines
)

# 1. Search for Python + machine learning repos
print("🔍 Top Repositories for Python + ML:")
repos = search_repositories("Python", "machine-learning")
for r in repos:
    print(f"- {r['name']} ({r['stargazers_count']}⭐): {r['html_url']}")

# 2. Get 'good first issues' from a repo
print("\n🐣 Good First Issues in scikit-learn:")
issues = get_good_first_issues("scikit-learn/scikit-learn")
for issue in issues:
    print(f"- [{issue['title']}]({issue['html_url']})")

# 3. Compare CONTRIBUTING.md of two repos
print("\n📄 Comparing Contribution Guidelines:")
comparison = compare_contribution_guidelines("scikit-learn/scikit-learn", "keras-team/keras")
print(comparison)

