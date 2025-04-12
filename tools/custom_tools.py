from langchain.agents import initialize_agent, AgentType
from langchain.chat_models import ChatOpenAI
from tools.langchain_tools import custom_tools

llm = ChatOpenAI(temperature=0)
agent = initialize_agent(
    tools=custom_tools,
    llm=llm,
    agent_type=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True
)

