
const express = require('express');
const userController = require('./content/controller');
const app = express();

// Simple routing
// Home page
app.get('/', (req, res) => {
    res.send('<h1>home page</h1>');
});
sa
// About page
app.get('/about', (req, res) => {
    res.send('<h1>about page</h1>');
});

// Use params route
app.get('/user/:id', userController);

// Dynamic routing - will match any path and show the URL (this should be last)
app.use((req, res) => {
    res.send(`<h1>You have reached ${req.url} page</h1>`);
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
