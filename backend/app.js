const express = require('express');
const app = express();
const port = 3000;  

// Define a route for Question 3
app.get('/question3', (req, res) => {
    res.send('Hello!');
});

// Start the server
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = {app,server}