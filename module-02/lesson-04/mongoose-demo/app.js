const mongoose = require('mongoose');

const Cat = mongoose.model('Cat', { name: String , race: String});
const User = mongoose.model('User', { name: String , age: Number, ownCat: { type: mongoose.Schema.Types.ObjectId, ref: 'Cat' }});

mongoose.connect('mongodb://127.0.0.1:27017/playground')
    .then((x) => console.log(`Connected to MongoDB...${x.connection.host}`))
    .then(() => Cat.create({ name: 'X' , race: 'Persian'}))
    .then((x) => User.create({ name: 'Y' , age: 25, ownCat: x._id}))
    .then((x) => User.findById(x._id).populate('ownCat'))
    .then(() => mongoose.disconnect())
    .catch(err => console.error('Could not connect to MongoDB...', err));

const kitty = new Cat({ name: 'Z', race: 'Siamese' });
kitty.save().then((x) => console.log(`meow ${x._id}`));