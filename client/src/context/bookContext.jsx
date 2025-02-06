import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const bookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  const baseUrl = "http://localhost:5000/api/books";

  const getBooks = async () => {
    try {
      const res = await axios.get(baseUrl);
      setBooks(res.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const getBookById = async (id) => {
    try {
      const res = await axios.get(`${baseUrl}/${id}`);
      return res.data;
    } catch (error) {
      console.error(`Error fetching book with ID ${id}:`, error);
    }
  };

  const addBook = async (
    title,
    author,
    publishedYear,
    description,
    imageFile
  ) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("publishedYear", publishedYear);
    formData.append("description", description);

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const res = await axios.post(baseUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Book added successfully:", res.data);
      toast.success("Book added successfully");
      getBooks();
    } catch (error) {
      toast.error("Error adding book");
      console.error("Error adding book:", error);
    }
  };

  const updateBook = async (
    id,
    title,
    author,
    description,
    imageFile,
    publishedYear
  ) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("publishedYear", publishedYear);
    formData.append("description", description);

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const res = await axios.put(`${baseUrl}/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Book updated successfully:", res.data);
      toast.success("Book updated successfully");
      getBooks();
    } catch (error) {
      toast.error("Error while Updating Book");
      console.error(`Error updating book with ID ${id}:`, error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
      console.log(`Book with ID ${id} deleted successfully`);
      toast.success("Book deleted successfully");
      getBooks();
    } catch (error) {
      console.error(`Error deleting book with ID ${id}:`, error);
      toast.success("Erorr while Deleteing Book");
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const value = {
    books,
    isModalOpen,
    setIsModalOpen,
    editingBook,
    setEditingBook,
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
  };

  return <bookContext.Provider value={value}>{children}</bookContext.Provider>;
};

export default BookContextProvider;
