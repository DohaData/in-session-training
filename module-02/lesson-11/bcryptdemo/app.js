const bcrypt = require('bcrypt');

const saltRounds = 10;

const myPlaintextPassword = 'HelloWorld!';

const salt = bcrypt.genSaltSync(saltRounds);

console.log(salt.length);

const hash = bcrypt.hashSync(myPlaintextPassword, salt);

console.log(hash);
