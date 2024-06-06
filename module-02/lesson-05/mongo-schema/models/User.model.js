const mongoose = require("mongoose");

Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  ownCat: { type: Schema.Types.ObjectId, ref: "Cat" },
});
const User = mongoose.model("User", {
  name: { type: String, required: true },
  age: Number,
  ownCat: { type: Schema.Types.ObjectId, ref: "Cat" },
});

module.exports = { User };
