const { Schema, model } = require("mongoose");

const characterSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: String,
});

const Character = model("Character", characterSchema);

module.exports = Character;
