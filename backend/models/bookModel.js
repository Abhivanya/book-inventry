const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String },
});

module.exports = mongoose.model("Book", bookSchema);
