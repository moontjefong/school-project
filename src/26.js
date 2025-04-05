const express = require('express');
const app = express();

app.use(express.json());

let data = [];

app.post('/add', (req, res) => {
  const { name, age } = req.body;
  data.push({ name, age: parseInt(age || 0) });
  res.send(data);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
