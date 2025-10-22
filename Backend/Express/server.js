const express = require('express');
const app = express();
const port = 3000; // You can change the port

  app.get('/', (req, res) => {
  res.send('Hello World!');
  });

  app.post('/data', express.json(), (req, res) => {
    const { name, age } = req.body;
    res.json({ message: `Received data for ${name}, age ${age}` });
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



