const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const { runAgent } = require('./main_agent'); // assuming this is your core logic

const port = parseInt(process.env.PORT, 10) || 10000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  // Custom API route to handle chat requests
  server.post('/api/chat', async (req, res) => {
    const userInput = req.body.message;
    if (!userInput) {
      return res.status(400).json({ error: 'No message provided' });
    }

    try {
      const response = await runAgent(userInput); // run your agent logic
      res.status(200).json({ response });
    } catch (err) {
      console.error('Agent error:', err);
      res.status(500).json({ error: 'Agent failed to respond' });
    }
  });

  // Handle everything else (Next.js pages)
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
