const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: String,
  publishedYear: Number,
  image: { type: String, default: "" },
});

module.exports = mongoose.model("Book", bookSchema);
