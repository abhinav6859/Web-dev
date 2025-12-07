// 5_Middleware.js (CommonJS)
const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("start");

  res.on("finish", () => {
    console.log("end");
  });

  next();
});

app.get("/", (req, res) => {
  console.log("Middle");
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
