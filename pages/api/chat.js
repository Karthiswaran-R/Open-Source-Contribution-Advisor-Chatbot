// pages/api/chat.js

import { ChatOpenAI } from '@langchain/openai';
import { initializeAgentExecutorWithOptions } from 'langchain/agents';
import {
  fetch_top_repositories,
  fetch_good_first_issues,
  compare_guidelines,
} from '../../utils/langchain_tools';
import dotenv from 'dotenv';

dotenv.config();

const groq_api_key = process.env.GROQ_API_KEY;

if (!groq_api_key) {
  throw new Error('GROQ_API_KEY is missing. Set it in .env');
}

const tools = [fetch_top_repositories, fetch_good_first_issues, compare_guidelines];
let agentPromise = null;

const skillMap = {
  js: 'JavaScript',
  javascript: 'JavaScript',
  py: 'Python',
  python: 'Python',
  cpp: 'C++',
  cplusplus: 'C++',
  c: 'C',
  csharp: 'C#',
  ts: 'TypeScript',
  typescript: 'TypeScript',
  go: 'Go',
  rust: 'Rust',
  java: 'Java',
  html: 'HTML',
  verilog: 'Verilog',
  hdl: 'HDL',
  dart: 'Dart',
  zig: 'Zig',
  elixir: 'Elixir',
};

function extractSkills(message) {
  const matches = message.match(/\b[A-Za-z\+\#]+\b/g);
  if (!matches) return ['general'];
  const filtered = matches.filter((word) => word.length > 1 && /^[A-Za-z\+\#]+$/.test(word));
  const normalized = filtered.map(skill => {
    const key = skill.toLowerCase();
    return skillMap[key] || skill;
  });
  return [...new Set(normalized)];
}

function getAgent() {
  if (!agentPromise) {
    const llm = new ChatOpenAI({
      temperature: 0,
      modelName: 'llama3-70b-8192',
      openAIApiKey: groq_api_key,
      streaming: true,
      callbacks: [],
      configuration: {
        baseURL: 'https://api.groq.com/openai/v1',
      },
    });

    agentPromise = initializeAgentExecutorWithOptions(tools, llm, {
      agentType: 'structured-chat-zero-shot-react-description',
      verbose: true,
    });
  }

  return agentPromise;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { message } = req.body;

  if (!message || typeof message !== 'string' || message.trim() === '') {
    return res.status(400).json({ error: 'Input query is required.' });
  }

  try {
    console.log('🔍 Input:', message);
    const skills = extractSkills(message);
    console.log('🧠 Extracted Skills:', skills);

    const agent = await getAgent();
    let fullResponse = '';

    const result = await agent.invoke({ input: message, skills });

    console.log('✅ Agent result:', result);

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ reply: result.output || 'No response generated.' });
  } catch (error) {
    console.error('❌ Agent error:', error.message);
    res.status(500).json({ error: 'Agent failed to respond.', details: error.message });
  }
}

