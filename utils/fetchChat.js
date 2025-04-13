// utils/fetchChat.js

export default async function fetchChat(message) {
  try {
    // Send the message to the backend API
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || 'Unknown error from API');
    }

    const data = await res.json();

    console.log("API Response:", data); // Debug log

    // Return the chatbot response
    return data.response || data.reply || 'No response from server';

  } catch (error) {
    console.error("fetchChat Error:", error);
    throw error;
  }
}
