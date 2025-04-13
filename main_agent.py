import os
from dotenv import load_dotenv

# LangChain & LLM
from langchain.agents import initialize_agent, AgentType
from langchain_groq import ChatGroq

# Custom Tools (ensure correct relative import)
from tools.langchain_tools import (
    fetch_top_repositories,
    fetch_good_first_issues,
    compare_guidelines
)

# ========== ENVIRONMENT SETUP ==========
load_dotenv()

groq_api_key = os.getenv("GROQ_API_KEY")
if not groq_api_key:
    print("❌ GROQ_API_KEY not found in environment variables.")
    groq_api_key = input("🔐 Enter your Groq API Key: ").strip()
    if not groq_api_key:
        raise EnvironmentError("Groq API Key is required to run this script.")

# ========== INITIALIZE LLM ==========
try:
    llm = ChatGroq(
        temperature=0,
        groq_api_key=groq_api_key,
        model_name="llama3-70b-8192"
    )
    print("✅ Groq LLM initialized.")
except Exception as e:
    raise RuntimeError(f"❌ Error initializing Groq LLM: {e}")

# ========== TOOLS ==========
tools = [fetch_top_repositories, fetch_good_first_issues, compare_guidelines]

# ========== INITIALIZE AGENT ==========
try:
    agent = initialize_agent(
        tools=tools,
        llm=llm,
        agent=AgentType.STRUCTURED_CHAT_ZERO_SHOT_REACT_DESCRIPTION,
        verbose=True,
        handle_parsing_errors=True
    )
    print("✅ Agent initialized using STRUCTURED_CHAT_ZERO_SHOT_REACT_DESCRIPTION.\n")
except Exception as e:
    raise RuntimeError(f"❌ Agent initialization failed: {e}")

# ========== FUNCTIONAL QUERY HANDLER ==========
def query_agent(input_text: str):
    try:
        result = agent.invoke({"input": input_text})
        return result.get("output", "⚠️ Agent did not return standard output.")
    except Exception as e:
        return f"⚠️ Error during agent execution: {e}"

# ========== CLI LOOP ==========
def main():
    print("\n🤖 Open-Source Contribution Advisor Chatbot")
    print("Type 'exit' or 'quit' to stop\n")

    while True:
        user_input = input("You: ").strip()
        if user_input.lower() in ("exit", "quit"):
            print("👋 Goodbye!")
            break
        response = query_agent(user_input)
        print("Bot:", response)

# ========== MAIN ==========
if __name__ == "__main__":
    main()
