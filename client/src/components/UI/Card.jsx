import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { bookContext } from "../../context/bookContext";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Card = ({ title, author, publishedYear, description, image, id }) => {
  const { deleteBook, setEditingBook, setIsModalOpen } =
    useContext(bookContext);

  const handleDelete = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (confirm("Are you sure you want to delete")) deleteBook(id);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsModalOpen(true);
    setEditingBook({
      title,
      author,
      publishedYear,
      description,
      image,
      id,
    });
  };

  return (
    <Link to={`/book/${id}`} className="rounded-md p-4">
      <div className="relative max-w-sm rounded-2xl shadow-lg p-2 overflow-hidden hover:scale-105">
        <div className="absolute -top-1 -right-1 flex justify-between gap-4 bg-yellow-600 px-2 py-2 rounded-md">
          <BiEdit
            size={25}
            className="bg-black px- py-1 rounded-full text-white hover:text-gray-300 hover:scale-110 cursor-pointer"
            onClick={handleEdit}
          />
          <MdDelete
            size={25}
            className="bg-black px- py-1 rounded-full text-white hover:text-gray-300 hover:scale-110 cursor-pointer"
            onClick={handleDelete}
            click
          />
        </div>
        <img
          className="w-full h-48 object-cover"
          src={`http://localhost:5000${image}`}
          alt="Book Image"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-sm text-gray-600">{author}</p>
          <p className="text-sm text-gray-500">Published on {publishedYear}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
