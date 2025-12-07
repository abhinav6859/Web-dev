// 5_Middleware.js (CommonJS)
const express = require("express");
const app = express();
const port = 3000;



app.get("/", (req, res) => {
  console.log("Middle");
  res.send("Hello World!");
});
app.get('/error',()=>{
  throw new Error('Something went wrong!');
});// Error-handling middleware

app.use((err, req, res, next) => {
  console.error(err.message);
  res.send('Internal Server Error');
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
