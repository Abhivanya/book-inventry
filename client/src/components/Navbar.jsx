import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import BookLogo from "../assets/bookLogo.png";
import { bookContext } from "../context/bookContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsModalOpen, setEditingBook } = useContext(bookContext);

  const setNavStyle = ({ isActive }) => {
    return isActive
      ? "flex flex-col items-center  gap-1 border-b-gray-400 border-b-2 text-xl hover:text-yellow-600 "
      : "flex flex-col items-center gap-1 text-xl hover:text-yellow-600 ";
  };

  return (
    <div className="w-full bg-black text-white border-b">
      <div className="flex items-center justify-between p-5 md:px-0 font-medium md:w-[80%] md:mx-auto ">
        <Link to={"/"} className="w-40 text-xl font-bold text-yellow-600">
          <div className="flex  gap-3 items-center ">
            <div>
              <img
                src={BookLogo}
                className="h-full object-cover"
                alt="book image"
              />
            </div>
            <div className="leading-tight">Book Inventry</div>
          </div>
        </Link>

        <div className="flex justify-between gap-8 items-center">
          <ul className="hidden md:flex gap-8 text-sm font-semibold ">
            <NavLink to="/" className={setNavStyle}>
              Home
            </NavLink>

            <NavLink to="/aboutus" className={setNavStyle}>
              About
            </NavLink>
            <NavLink to="/contactus" className={setNavStyle}>
              Contact
            </NavLink>
          </ul>

          <button
            className="px-4 py-2 bg-yellow-800 rounded-md text-normal font-bold hover:bg-yellow-600"
            onClick={() => {
              setIsModalOpen(true);
              setEditingBook(null);
            }}
          >
            Add Book
          </button>

          <div className="block md:hidden ">
            <FiMenu
              size={20}
              className="block md:hidden"
              onClick={() => setIsMenuOpen(true)}
            />
          </div>

          <div
            className={`absolute top-0 right-0 bottom-0 overflow-hidden z-20   transition-all ${
              isMenuOpen ? "w-full" : "w-0"
            }`}
          >
            <div className="flex flex-col bg-gray-50 h-full text-white">
              <div
                className="flex items-center gap-2 p-3 cursor-pointer bg-black shadow border-b font-bold py-8 text-xl hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                <p>{"<"} Back</p>
              </div>
              <div className="flex flex-col gap-3 my-3 ">
                <NavLink
                  to="/"
                  className={(acitve) =>
                    `px-auto py-3 text-center text-xl ${
                      acitve ? "bg-gray-400" : "bg-yellow-700"
                    } hover:bg-yellow-700 hover:text-2xl`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/aboutus"
                  className={(acitve) =>
                    `px-auto py-3 text-center text-xl ${
                      acitve ? "bg-gray-400" : "bg-yellow-700"
                    } hover:bg-yellow-700 hover:text-2xl`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </NavLink>
                <NavLink
                  to="/contactus"
                  className={(acitve) =>
                    `px-auto py-3 text-center text-xl ${
                      acitve ? "bg-gray-400" : "bg-yellow-700"
                    } hover:bg-yellow-700 hover:text-2xl`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
