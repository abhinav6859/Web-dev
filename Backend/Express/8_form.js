const express = require("express");
const multer = require("multer");
const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + "." + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1000000 }, // 1 MB file size limit
}); // Initialize multer for parsing multipart/form-data

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
//app.use(upload.array()); // Middleware to parse multipart/form-data
app.use(upload.single("image")); // Middleware to parse multipart/form-data for single file upload

app.get("/", (req, res) => {
  res.send("Hello World! This is a form example.");
});

app.post("/submit-form", (req, res) => {
  console.log(req.body); // Log the form data to the console
  console.log(req.file); // Log the uploaded file information to the console
  res.send("Form submitted successfully!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
