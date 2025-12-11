const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.use(cookieParser());


app.get("/", (req, res) => {
    res.cookie('name','value123', { httpOnly: true, maxAge: 3600000 }); // 1 hour
  res.send("Hello world!");
});

app.get("/show-cookies", (req, res) => {
    console.log(req.cookies);
    res.send('Cookies displayed in console');
});


// Remove a specific cookie
app.get("/clear-cookie", (req, res) => {
    res.clearCookie('name');
    res.send('Cookie cleared');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
