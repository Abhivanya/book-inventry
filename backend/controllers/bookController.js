const Book = require("../models/bookModel");
const fs = require("fs");
const path = require("path");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, publishedYear, description } = req.body;

    if (!title || !author) {
      return res
        .status(400)
        .json({ message: "Title and Author are required." });
    }

    let image = "";
    if (req.file) {
      if (!req.file.mimetype.startsWith("image/")) {
        return res
          .status(400)
          .json({ message: "Please upload a valid image file." });
      }

      const sanitizedFileName = req.file.originalname.split(" ").join("_");
      const fileExtension = path.extname(sanitizedFileName);
      const sanitizedFilePath = `${Date.now()}${fileExtension}`;
      const uploadPath = path.join(
        __dirname,
        "../public/images",
        sanitizedFilePath
      );

      fs.renameSync(req.file.path, uploadPath);

      image = `/images/${sanitizedFilePath}`;
    }

    const newBook = new Book({
      title,
      author,
      publishedYear,
      description,
      image,
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, publishedYear, description } = req.body;

    if (!title || !author) {
      return res
        .status(400)
        .json({ message: "Title and Author are required." });
    }

    const updatedData = { title, author, publishedYear, description };
    if (req.file) {
      if (!req.file.mimetype.startsWith("image/")) {
        return res
          .status(400)
          .json({ message: "Please upload a valid image file." });
      }

      const sanitizedFileName = req.file.originalname.split(" ").join("_");
      const fileExtension = path.extname(sanitizedFileName);
      const sanitizedFilePath = `${Date.now()}${fileExtension}`;
      const uploadPath = path.join(
        __dirname,
        "../public/images",
        sanitizedFilePath
      );

      fs.renameSync(req.file.path, uploadPath);
      updatedData.image = `/images/${sanitizedFilePath}`;

      const existingBook = await Book.findById(req.params.id);
      if (existingBook?.image) {
        const oldImagePath = path.join(
          __dirname,
          "../public",
          existingBook.image
        );
        if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
      }
    }

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
      }
    );

    if (!updatedBook)
      return res.status(404).json({ message: "Book not found" });

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook)
      return res.status(404).json({ message: "Book not found" });

    if (deletedBook.image) {
      const imagePath = path.join(__dirname, "../public", deletedBook.image);
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    }

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
