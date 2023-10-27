import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="w-full flex flex-col h-screen items-center justify-center text-white">
    <h1 className="sm:text-5xl text-4xl font-bold mb-9 p-4 m-2">
      404 - Page Not Found!
    </h1>
    <button
      className="border border-white h-14 w-40 mt-8 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-black hover:text-white"
      data-cy="return_home"
    >
      <Link to="/home">Return Home</Link>
    </button>
  </div>
);

export default NotFound;
