import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-2">About Us</h2>
            <p className="text-sm">
              Book Inventory App is a modern platform to manage, organize, and
              keep track of your book collections effortlessly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="hover:underline">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p>Email: support@bookinventoryapp.com</p>
            <p>Phone: +123 456 7890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-400">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-400">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; 2025 Book Inventory App. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
