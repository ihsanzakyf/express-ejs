const express = require('express');
const path = require('path');
const app = express();

const tagsData = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { random: num });
});

app.get('/t/:tag', (req, res) => {
    const { tag } = req.params;
    const data = tagsData[tag];
    const formattedTag = tag.charAt(0).toUpperCase() + tag.slice(1);
    if (data) {
        res.render('tag', { data, formattedTag });
    } else {
        res.render('notfound', { tag: formattedTag });
    }
});

app.get('/cats', (req, res) => {
    const cats = ['embul', 'felix', 'mio', 'timi'];
    res.render('cats', { cats });
});

app.listen(8080, () => {
    console.log('Listening on host http://localhost:8080');
});
