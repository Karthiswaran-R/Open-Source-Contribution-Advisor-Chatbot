// components/MessageBubble.jsx
const MessageBubble = ({ message, type }) => {
  return (
    <div className={`bubble ${type}`}>
      {message}
      <style jsx>{`
        .bubble {
          max-width: 75%;
          padding: 12px 18px;
          margin: 10px 0;
          border-radius: 18px;
          font-size: 1rem;
          line-height: 1.5;
          word-wrap: break-word;
          transition: all 0.3s ease;
        }
        .user {
          background-color: #1f2833;
          color: #66fcf1;
          align-self: flex-end;
          border: 1px solid #66fcf1;
        }
        .bot {
          background-color: #45a29e;
          color: #0b0c10;
          align-self: flex-start;
        }
      `}</style>
    </div>
  );
};

export default MessageBubble;

