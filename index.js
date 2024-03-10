const express = require('express');
const app = express();

// Middleware to handle all requests
app.use((req, res, next) => {
  // Respond with a fixed answer
  res.send('Hello! Thanks for your question. The answer is 42.');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
