import { useState } from 'react';

export default function ChatForm({ onSendMessage, disabled }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    onSendMessage(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="chat-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your message..."
        disabled={disabled}
      />
      <button type="submit" disabled={disabled}>Send</button>

      <style jsx>{`
        .chat-form {
          display: flex;
          margin-top: 10px;
          background-color: #1f1f1f;
          border-radius: 12px;
          padding: 10px;
        }

        input {
          flex: 1;
          padding: 10px 14px;
          font-size: 1rem;
          background-color: #2c2c2c;
          border: none;
          border-radius: 8px;
          color: #ffffff;
          outline: none;
        }

        input::placeholder {
          color: #aaaaaa;
        }

        button {
          background-color: #66fcf1;
          color: #000;
          border: none;
          padding: 10px 18px;
          margin-left: 10px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: background 0.3s;
        }

        button:hover {
          background-color: #52d6cd;
        }

        button:disabled {
          background-color: #444;
          color: #888;
          cursor: not-allowed;
        }
      `}</style>
    </form>
  );
}

