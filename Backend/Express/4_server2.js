 const express = require('express');
 const app = express();
 const port = 3000; 
  
  
  

    app.get('/', (req, res) => {
    res.send('Hello World!');
    })
   
  app.get('/things/:name/:id', (req, res) => {
  const { name, id } = req.params;
  // validate id is exactly 5 digits

    if (!/^\d{5,}$/.test(id)) {
    return res.status(400).json({ error: 'id must be exactly 5 digits' });
  }
  res.json({ id, name });
});


  app.get('*', (req, res) => {
    res.status(404).send('Page not found');
  });
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  
  
  
  