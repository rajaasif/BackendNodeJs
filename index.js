const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/asif', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
