import React from "react";
import { Link } from "react-router-dom";
 
const NotFound = () => (
  <div className="flex text-white h-screen">
    <div className="w-full flex items-center justify-center">
      <div className="inline-flex flex-col">
        <div className="p-4 m-2">
          <h1 className="sm:text-5xl text-4xl font-bold mb-9">
            404 - Page Not Found!
          </h1>
        </div>
        <div className="p-4 m-2 mx-auto">
          <button
            className="border border-white h-14 w-40"
            data-cy="return_home"
          >
            <Link to="/home">Return Home</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
);
 
export default NotFound;
 
 


