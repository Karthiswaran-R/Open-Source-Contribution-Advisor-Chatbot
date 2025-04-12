export default async function fetchChat(message) {
  if (!message || typeof message !== 'string') {
    throw new Error('Invalid message input');
  }

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),  // Ensure the message is correctly passed
    });

    if (!response.ok) {
      // Log the response details if the request fails
      const errorText = await response.text();  // Get error details from response
      console.error('Response failed:', errorText);
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('API Response:', data);  // Log the API response for debugging

    return data.reply || "No response received.";
  } catch (error) {
    console.error('Fetch failed:', error);
    throw new Error('Failed to fetch chat data');
  }
}

