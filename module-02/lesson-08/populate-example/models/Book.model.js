const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: { type: String, required: true },
  description : { type: String },
  cast: [{ type: Schema.Types.ObjectId, ref: "Character" }],
});

const Book = model("Book", bookSchema);

module.exports = Book;
