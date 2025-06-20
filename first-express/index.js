const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>This is homepage on heading</h1>');
});

app.get('/cats', (req, res) => {
    res.send('This is cats page');
});

app.post('/cats', (req, res) => {
    res.send('Cats have been sent');
});

app.get('/about', (req, res) => {
    res.send('This is about page');
});

app.get('/blog/:title', (req, res) => {
    const { title } = req.params;
    res.send(`Ini halaman blog dengan judul:  ${title}`);
});

app.get('/blog/:title/:category/:author', (req, res) => {
    const { title, category, author } = req.params;
    res.send(
        `Ini blog dengan judul ${title} kategori ${category}, author ${author}`,
    );
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        return res.send('No search keyword');
    }
    res.send(`<h1>Search keyword: ${q}</h1>`);
});

app.get('/{*splat}', async (req, res) => {
    res.send('This is 404 page');
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
