const express = require('express');

const app = express();

const port = 3000;

console.log(__dirname)

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`)
})

app.get('/contact', (req, res) => {
    res.send('Contact Page')
})


app.listen(port, () => console.log('app is running'))