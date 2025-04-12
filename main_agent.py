import os
from dotenv import load_dotenv

# LangChain imports
from langchain.agents import initialize_agent, AgentType
from langchain_groq import ChatGroq  # Groq LLM

# Custom tools (update these paths to match your repo structure)
from tools.langchain_tools import (
    fetch_top_repositories,
    fetch_good_first_issues,
    compare_guidelines
)

# --- Environment Setup ---
if not os.path.exists(".env"):
    print("⚠️  .env file not found! Create one and add: GROQ_API_KEY=your_key_here")

load_dotenv()
groq_api_key = os.getenv("GROQ_API_KEY")

if not groq_api_key:
    print("❌ GROQ_API_KEY not found in environment variables.")
    groq_api_key = input("🔐 Please enter your Groq API Key: ")
    if not groq_api_key:
        raise ValueError("Groq API Key is required to run this script.")

# --- Load Tools ---
tools = [fetch_top_repositories, fetch_good_first_issues, compare_guidelines]

# --- Initialize Groq LLM ---
try:
    llm = ChatGroq(
        temperature=0,
        groq_api_key=groq_api_key,
        model_name="llama3-70b-8192"
        )
except Exception as e:
    print(f"❌ Error initializing Groq LLM: {e}")
    print("🔑 Please ensure your GROQ_API_KEY is correct and not expired.")
    exit()

# --- Initialize LangChain Agent ---
try:
    agent = initialize_agent(
        tools=tools,
        llm=llm,
        agent=AgentType.STRUCTURED_CHAT_ZERO_SHOT_REACT_DESCRIPTION,
        verbose=True,
        handle_parsing_errors=True
    )
    print("✅ Agent initialized successfully with STRUCTURED_CHAT_ZERO_SHOT_REACT_DESCRIPTION.")
except Exception as e:
    print(f"❌ Error initializing Agent: {e}")
    exit()

# --- First Query (optional standalone use) ---
query = input("Ask something about open-source repos: ")
try:
    response_dict = agent.invoke({"input": query})
    response = response_dict.get('output', 'Agent did not return a standard output.')
except Exception as e:
    print(f"\n⚠️ An error occurred during agent execution: {e}")
    response = "Error processing request."

print("\n🤖 Response:\n", response)

# --- CLI Loop ---
if __name__ == "__main__":
    print("\n🤖 Open-Source Advisor Chatbot")
    print("Type 'exit' to quit\n")

    while True:
        user_input = input("You: ")
        if user_input.lower() in ["exit", "quit"]:
            print("👋 Goodbye!")
            break
        try:
            result = agent.invoke({"input": user_input})
            print("Bot:", result.get("output", "Agent did not return a standard output."))
        except Exception as e:
            print("⚠️ Error:", str(e))

