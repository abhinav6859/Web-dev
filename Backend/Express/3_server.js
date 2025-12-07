const express = require('express');
const app = express();
const port = 3000; 

  app.use(express.json());

  app.get('/', (req, res) => {
  res.send('Hello World!');
  });

  app.post('/data', (req, res) => {
    const { name, age } = req.body
    res.json({ message: `Received data for ${name}, age ${age}` })
  });

 app.put('/data/:id', (req, res) => {
  const dataid = req.params.id
    const { name, age } = req.body
    res.json({ message: `Updated data with id ${dataid} for ${name}, age ${age}` })
  });

  app.delete('/data/:id', (req, res) => {
    const dataid = req.params.id
    res.json({ message: `Deleted data with id ${dataid}` })
  });

 

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



