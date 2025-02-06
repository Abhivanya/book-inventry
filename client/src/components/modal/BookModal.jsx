import React, { useContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { bookContext } from "../../context/bookContext";

const BookModal = ({ book, onClose }) => {
  const { addBook, updateBook } = useContext(bookContext);
  const [title, setTitle] = useState(book?.title || "");
  const [author, setAuthor] = useState(book?.author || "");
  const [description, setDescription] = useState(book?.description || "");
  const [date, setDate] = useState(book?.publishedYear || "");
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (book && book.image) {
      setImage(book.imagePath);
    }
  }, [book]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const publishedYear = date;
    if (book) {
      updateBook(book.id, title, author, description, imageFile, publishedYear);
    } else {
      addBook(title, author, publishedYear, description, imageFile);
    }
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-x-auto">
      <div className="bg-white p-6 rounded-md w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-xl font-bold mb-4">
          {book ? "Update Book" : "Add Book"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded-md"
              rows="3"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Publish Date</label>
            <input
              type="number"
              minLength={4}
              maxLength={4}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">
              Upload Book Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2"
            />
            {image && !book && (
              <img
                src={image}
                alt="Uploaded book"
                className="mt-2 w-full max-h-48 object-cover rounded-md"
              />
            )}
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default BookModal;
