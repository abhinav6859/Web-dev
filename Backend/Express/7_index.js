
const express = require("express");
const app = express();
const port = 3000;

// set Ejs as the view engine
app.set('view engine','ejs');

app.get("/", (req, res) => {
const username="Abhinav vats";
  res.render('index',{username});// rendering index.ejs file
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
