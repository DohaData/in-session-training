const mongoose = require("mongoose");
const Book = require("../models/Book.model");

// Import necessary modules

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/your-database-name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define your seed data
const seedData = [
  {
    title: "The Great Gatsby",
    author : "F. Scott Fitzgerald",
    publicationYear: 1925,
    genre: "Fiction",
  },
  {
    title: "To Kill a Mockingbird",
    author : "Harper Lee",
    publicationYear: 1960,
    genre: "Fiction",
  },
];

// Function to seed the database
async function seedDatabase() {
  try {
    // Clear existing data
    await Book.deleteMany();

    // Insert seed data
    await Book.insertMany(seedData);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
}

// Call the seedDatabase function to start seeding
seedDatabase();
