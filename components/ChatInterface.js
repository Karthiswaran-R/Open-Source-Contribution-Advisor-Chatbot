'use client';
import { useState } from 'react';
import ChatForm from './ChatForm'; // Make sure this component exists and handles input correctly

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Send message to the server (for bot response)
  const handleSendMessage = async (message) => {
    setMessages((prev) => [...prev, { from: 'user', text: message }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: message }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: data.output || 'No response generated.' },
      ]);
    } catch (err) {
      console.error('Error:', err);
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: '⚠️ Failed to reach the server.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 20 }}>
      <h2 style={{ textAlign: 'center' }}>Open Source Advisor</h2>
      <div
        style={{
          height: 400,
          overflowY: 'auto',
          backgroundColor: '#eee',
          padding: 10,
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.from === 'user' ? 'right' : 'left',
              margin: '10px 0',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                backgroundColor: msg.from === 'user' ? '#d1f7ff' : '#fff',
                padding: 10,
                borderRadius: 10,
                maxWidth: '80%',
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <ChatForm onSendMessage={handleSendMessage} disabled={loading} />
    </div>
  );
}

