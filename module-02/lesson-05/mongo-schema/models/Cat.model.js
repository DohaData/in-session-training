const mongoose = require('mongoose');

const Cat = mongoose.model('Cat', { name: String , race: String});

module.exports = { Cat };