import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto text-center ">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Welcome to the Book Inventory App — your go-to solution for managing,
          organizing, and tracking your book collections effortlessly. Our
          platform is designed to help book enthusiasts, librarians, and readers
          stay on top of their collections.
        </p>

        <div className="mt-8 border-2 rounded-md shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            We strive to provide a seamless and user-friendly platform for
            managing books so that you can focus more on reading and less on
            organization.
          </p>
        </div>

        <div className="mt-8 border-2 rounded-md shadow-md  p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Why Choose Us?
          </h2>
          <ul className="text-gray-600 list-disc list-inside text-left mx-auto max-w-3xl">
            <li>Easy-to-use and intuitive interface.</li>
            <li>Secure and reliable storage for your book data.</li>
            <li>Seamless book inventory management features.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
