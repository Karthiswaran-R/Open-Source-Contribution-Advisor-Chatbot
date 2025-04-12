// pages/index.js

import Head from 'next/head';
import { useState } from 'react';
import ChatForm from '../components/ChatForm';
import ChatHistoryPane from '../components/ChatHistoryPane';  // Make sure this path is correct
import fetchChat from '../utils/fetchChat';

export default function Home() {
  const [messages, setMessages] = useState([]);  // Holds all chat messages (current + history)
  const [isLoading, setIsLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false); // State to toggle history view

  const handleSendMessage = async (newMessage) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, isUser: true, timestamp: new Date() }, // Add timestamp for history
    ]);
    setIsLoading(true);

    try {
      const response = await fetchChat(newMessage);

      // Ensure the response is a string
      const formattedResponse = typeof response === 'string' ? formatResponse(response) : JSON.stringify(response, null, 2);

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: formattedResponse, isUser: false, timestamp: new Date() }, // Add timestamp for history
      ]);
    } catch (error) {
      console.error("Error fetching chat response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Sorry, I encountered an error.", isUser: false, timestamp: new Date() },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatResponse = (response) => {
    // Format the response with proper alignment and separation of items
    const formatted = response.split('\n').map((line, index) => {
      return index === 0 ? line : `  - ${line}`;
    }).join('\n');

    return formatted;
  };

  const toggleHistory = () => {
    setShowHistory((prevState) => !prevState); // Toggle history visibility
  };

  return (
    <div>
      <Head>
        <title>Next.js Chatbot</title>
        <meta name="description" content="A simple chatbot UI built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Chat with me!</h1>

        {/* Button to toggle history visibility, positioned at the top-left */}
        <button onClick={toggleHistory} className="toggle-history-btn">
          {showHistory ? 'Hide History' : 'Show History'}
        </button>

        {/* Display chat history */}
        {showHistory && <ChatHistoryPane messages={messages} />}

        {/* Display current chat messages */}
        <div style={{ marginBottom: '20px' }}>
          {messages.map((message, index) => (
            <div key={index}>
              <div className={`message-container ${message.isUser ? 'user' : 'bot'}`}>
                <div className={`label ${message.isUser ? 'right' : 'left'}`}>
                  {message.isUser ? '👤 You' : '🤖 Bot'}
                </div>
                <div className={`message ${message.isUser ? 'user' : 'bot'}`}>{message.text}</div>
              </div>
            </div>
          ))}
          {isLoading && <div className="message-container bot">Thinking...</div>}
        </div>

        <ChatForm onSendMessage={handleSendMessage} disabled={isLoading} />
      </main>

      <style jsx>{`
        main {
          padding: 20px;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
        }
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }

        .toggle-history-btn {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: #66fcf1; /* Custom button color */
          color: #000; /* Button text color */
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: background 0.3s;
        }

        .toggle-history-btn:hover {
          background-color: #52d6cd; /* Custom button hover color */
        }

        .message-container {
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 8px;
        }

        .message-container.user {
          background-color: #66fcf1; /* Custom user message background */
          text-align: right;
        }

        .message-container.bot {
          background-color: #333; /* Custom bot message background */
          color: white; /* Custom bot message text color */
        }

        .message {
          padding: 10px;
          font-size: 16px;
          line-height: 1.5;
        }

        .label {
          font-weight: bold;
          margin-bottom: 5px;
        }

        .label.right {
          color: #66fcf1; /* User name color */
        }

        .label.left {
          color: #f0f0f0; /* Bot name color */
        }
      `}</style>
    </div>
  );
}

