import React, { useContext } from "react";
import Card from "../UI/Card";
import { bookContext } from "../../context/bookContext";

const BestPicks = () => {
  const { books } = useContext(bookContext);
  return (
    <div className=" mx-auto flex justify-center items-center pt-4 flex-col gap-3">
      <h1 className="text-3xl font-bold border-b border-black my-10">
        Latest Collection
      </h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-4 gap-y-6 border-2 rounded-md border-gray-600 py-4 px-2">
        {books.length > 0 ? (
          books.map((book) => (
            <Card
              key={book._id}
              id={book._id}
              title={book.title}
              description={book.description}
              publishedYear={book.publishedYear}
              author={book.author}
              image={book.image}
            />
          ))
        ) : (
          <div>No book in the inventry</div>
        )}
      </div>
    </div>
  );
};

export default BestPicks;
