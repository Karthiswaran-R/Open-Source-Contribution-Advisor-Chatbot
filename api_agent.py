# backend/main.py
from fastapi import FastAPI
import os
from dotenv import load_dotenv
from langchain.agents import initialize_agent, AgentType
from langchain.chat_models import ChatOpenAI
from langchain.agents import Tool
from fastapi.middleware.cors import CORSMiddleware

# Load environment variables
load_dotenv()

# Get the Groq API Key
groq_api_key = os.getenv("GROQ_API_KEY")
if not groq_api_key:
    raise ValueError("GROQ_API_KEY not found. Set it in your environment or .env file.")

# Import your tools
from github_tools.issues import get_good_first_issues
from github_tools.guidelines import (
    get_contribution_guidelines,
    compare_contribution_guidelines
)

# Define LangChain Tools
github_tool = Tool(
    name="GoodFirstIssuesFinder",
    func=get_good_first_issues,
    description="Find good first issues from a GitHub repo."
)

contributing_tool = Tool(
    name="GetContributingGuidelines",
    func=get_contribution_guidelines,
    description="Fetch CONTRIBUTING.md file URL from a GitHub repo."
)

compare_tool = Tool(
    name="CompareContributingGuidelines",
    func=lambda input: compare_contribution_guidelines(*input.split(",")),
    description="Compare CONTRIBUTING.md files of two GitHub repos. Input format: 'owner1/repo1,owner2/repo2'"
)

tools = [github_tool, contributing_tool, compare_tool]

# Initialize Groq LLM
llm = ChatOpenAI(
    model_name="llama3-70b-8192",  # Or llama3-8b-8192, etc.
    base_url="https://api.groq.com/openai/v1",
    api_key=groq_api_key,
    temperature=0
)

# Initialize the agent
agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent=AgentType.STRUCTURED_CHAT_ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True
)

# Create FastAPI app
app = FastAPI()

# Enable CORS (cross-origin requests)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://open-source-contribution-advisor-chatbot.vercel.app/"],  # You can restrict this to your frontend's domain for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Chatbot backend (Groq) is running 🚀"}

@app.get("/ask")
async def ask_agent(query: str):
    try:
        response = agent.invoke({"input": query})
        return {"response": response.get("output", "No output returned.")}
    except Exception as e:
        return {"error": str(e)}
