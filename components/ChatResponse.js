export default function ChatResponse({ message, isUser }) {
  return (
    <div className={`message-container ${isUser ? 'user' : 'bot'}`}>
      <div className={`label ${isUser ? 'right' : 'left'}`}>
        {isUser ? '👤 You' : '🤖 Bot'}
      </div>
      <div className={`message ${isUser ? 'user' : 'bot'}`}>
        {message}
      </div>

      <style jsx>{`
        .message-container {
          display: flex;
          flex-direction: column;
          align-items: ${isUser ? 'flex-end' : 'flex-start'};
          margin: 12px;
        }

        .label {
          font-size: 0.95rem;
          margin-bottom: 4px;
          color: #66fcf1;
        }

        .label.right {
          align-self: flex-end;
          text-align: right;
        }

        .label.left {
          align-self: flex-start;
          text-align: left;
        }

        .message {
          padding: 12px 16px;
          border-radius: 16px;
          max-width: 70%;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.4;
          word-break: break-word;
        }

        .user {
          background-color: #1e1e1e;
          color: #66fcf1;
          border-bottom-right-radius: 0;
        }

        .bot {
          background-color: #1e1e1e;
          color: #66fcf1;
          border-bottom-left-radius: 0;
        }
      `}</style>
    </div>
  );
}

