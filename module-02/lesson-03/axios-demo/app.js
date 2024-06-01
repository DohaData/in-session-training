const axios = require('axios');
const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    axios.get('https://catfact.ninja/facts')
        .then((response) => {
            res.render('index', {
                facts: response.data.data
            });
        })
        .catch((error) => {
            console.log(error);
        });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
