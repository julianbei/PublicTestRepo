const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Array to hold questions
let questions = [];

// Endpoint to receive questions
app.post('/ask', (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).send('Please provide a question.');
  }
  questions.push(question);
  res.send('Question received!');
});

// Endpoint to randomly ask a previously received question
app.get('/random-question', (req, res) => {
  if (questions.length === 0) {
    return res.send('No questions have been asked yet.');
  }
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];
  res.send(`Randomly selected question: ${randomQuestion}`);
});

// Endpoint to get all questions
app.get('/questions', (req, res) => {
  res.json(questions);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
