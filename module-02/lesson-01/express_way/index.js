const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1>');
});
app.get('/about', (req, res) => {
  res.send('<h1>About page</h1>');
});
app.get('/contact', (req, res) => {
  res.send('<h1>Contact page</h1>');
});
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:3000');
    }
);
