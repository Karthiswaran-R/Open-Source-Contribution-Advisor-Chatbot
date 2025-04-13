// utils/fetchChat.js

export default async function fetchChat(message) {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || 'Unknown error');
  }

  const data = await res.json();
  return data.response;
}
