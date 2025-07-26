const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// POST /signup endpoint
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  console.log('✅ Signup Request Received:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', password);

  res.status(201).json({ message: 'Signup successful!' });
});

// Start server
app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
