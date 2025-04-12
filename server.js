// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use body-parser middleware to parse incoming JSON data
app.use(bodyParser.json());

// Define the /api/chat endpoint
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }

  try {
    // Generate a bot response (this is a placeholder)
    const reply = `You said: ${message}`;  // Simple echo response

    res.json({ reply });
  } catch (error) {
    console.error('Error generating reply:', error);
    res.status(500).json({ error: 'Failed to generate reply' });
  }
});

// Start the Express server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

