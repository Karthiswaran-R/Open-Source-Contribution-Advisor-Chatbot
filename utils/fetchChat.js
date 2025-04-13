// utils/fetchChat.js

export default async function fetchChat(message) {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'Unknown error from API');
    }

    console.log("API Response:", data); // Debug log

    return data.response || data.reply || 'No response from server';

  } catch (error) {
    console.error("fetchChat Error:", error);
    throw error;
  }
}
