const express = require("express");
const router = express.Router();
const upload = require("./multerConfig");
const {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

router.get("/", getAllBooks);
router.post("/", upload.single("image"), createBook);
router.get("/:id", getBookById);
router.put("/:id", upload.single("image"), updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
