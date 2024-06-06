const { User } = require('./models/User.model');
const { Cat } = require('./models/Cat.model');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/playground')
    .then((x) => console.log(`Connected to MongoDB...${x.connection.host}`))
    .then(() => Cat.create({ name: 'X' , race: 'Persian'}))
    .then((x) => User.create({ name: 'Y' , age: 25, ownCat: x._id}))
    .then((x) => User.findById(x._id).populate('ownCat'))
    .then((x) => console.log(x))
    .then(() => User.find().populate('ownCat'))
    .then((x) => console.log(x))
    .then(() => Cat.insertMany([{ name: 'A' , race: 'Siamese'}, { name: 'B', race: 'Sphynx'}]))
    .then((x) => Cat.insertMany([{ name: 'C' , age: 2, ownCat: x[0]._id}, { name: 'D', age: 3, ownCat: x[1]._id}]))
    .then(() => mongoose.disconnect())
    .catch(err => console.error('Could not connect to MongoDB...', err));

const kitty = new Cat({ name: 'Z', race: 'Siamese' });
kitty.save().then((x) => console.log(`meow ${x._id}`));


mongoose.connect('mongodb://127.0.0.1:27017/playground')
.then((x) => console.log(`Connected to MongoDB...${x.connection.host}`))
.then(() => Cat.updateOne({ name: 'X' }, { $set: { name: 'W' }}))
.then(() => Cat.find({name: 'W'}))
.then((x) => console.log(x))