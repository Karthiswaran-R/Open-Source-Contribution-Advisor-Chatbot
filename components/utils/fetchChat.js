export async function fetchChat(message, onStreamChunk) {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  const contentType = res.headers.get('content-type');

  if (contentType && contentType.includes('application/json')) {
    const data = await res.json();
    return { reply: data.reply };
  }

  if (res.body) {
    const reader = res.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let fullText = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      fullText += chunk;
      if (onStreamChunk) onStreamChunk(chunk);
    }

    return { reply: fullText };
  }

  return { reply: '' };
}

