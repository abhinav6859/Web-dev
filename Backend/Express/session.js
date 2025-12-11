const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const port = 3000;

app.use(cookieParser());

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
 
}));

app.get("/", (req, res) => {   
  res.send("Hello world!");
});

app.get('/visit', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`Number of visits: ${req.session.views} times`);
  } else {
    req.session.views = 1;
    res.send('Welcome! This is your first visit.');
  }
});

app.get('/remove visit ' , (req , res ) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Error removing visit data');
    }
    res.send('Visit data removed successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
