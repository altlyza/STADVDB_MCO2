const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for serving the index.html file
app.get('/', (req, res) => {
    res.sendFile('public/html/index.html', { root: __dirname });
});

// Route for serving the create.html file
app.get('/create', (req, res) => {
    res.sendFile('public/html/create.html', { root: __dirname });
});

// Route for serving the edit.html file
app.get('/edit', (req, res) => {
    res.sendFile('public/html/edit.html', { root: __dirname });
});

// Route for serving the show.html file
app.get('/show', (req, res) => {
    res.sendFile('public/html/show.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
