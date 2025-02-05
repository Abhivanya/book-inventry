const Book = require("../models/bookModel");

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new book with an image
const createBook = async (req, res) => {
  try {
    const { title, author, genre, publishedYear } = req.body;
    const image = req.file ? `/images/${req.file.filename}` : "";
    const newBook = new Book({
      title,
      author,
      genre,
      publishedYear,
      image,
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a book by ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a book, including the image
const updateBook = async (req, res) => {
  try {
    const updatedData = req.body;
    if (req.file) updatedData.image = `/images/${req.file.filename}`;

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );
    if (!updatedBook)
      return res.status(404).json({ message: "Book not found" });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook)
      return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
};
