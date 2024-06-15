const { Router } = require("express");
const router = Router();

const Book = require("../models/Book.model");
const Character = require("../models/Character.model");

router.get("/all-books", async (req, res) => {
  try {
    const books = await Book.find().populate("cast");
    res.render("books/all-books", { books });
  } catch (error) {
    console.error(error);
  }
});

router.get("/book-details/:bookId", async (req, res) => {
  const { bookId } = req.params;

  try {
    const book = await Book.findById(bookId).populate("cast");
    res.render("books/book-details", book);
  } catch (error) {
    console.error(error);
  }
});

router.get("/create-a-book", async (req, res) => {
  const characters = await Character.find();
  res.render("books/create-a-book", { characters });
});

router.get("/update-book/:bookId", async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId).populate("cast");
    const characters = await Character.find();
    res.render("books/update-book", { book, characters });
  } catch (error) {
    console.error(error);
  }
});

router.post("/update-book/:bookId", async (req, res) => {
  try {
    await Book.findByIdAndUpdate(req.params.bookId, req.body, { new: true });
    res.redirect("/books/all-books");
  } catch (error) {
    console.error(error);
  }
});

router.post("/create-a-book", async (req, res) => {
  try {
    await Book.create(req.body);
  } catch (error) {
    console.error(error);
  }

  res.redirect("/books/all-books");
});

module.exports = router;
