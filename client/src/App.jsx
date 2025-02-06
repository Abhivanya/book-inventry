import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BookModal from "./components/modal/BookModal";
import { bookContext } from "./context/bookContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { isModalOpen, setIsModalOpen, editingBook, setEditingBook } =
    useContext(bookContext);
  return (
    <Router>
      <div>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/book/:bookId" element={<BookDetail />} />
        </Routes>
        <Footer />
        {isModalOpen && (
          <BookModal
            book={editingBook}
            onClose={() => {
              setIsModalOpen(false);
              setEditingBook(null);
            }}
            onSave={() => {}}
          />
        )}
      </div>
    </Router>
  );
};

export default App;
