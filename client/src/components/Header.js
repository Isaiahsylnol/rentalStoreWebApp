import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBarAutoComplete from "./SearchBarAutoComplete";

import Dropdown from "./Dropdown";

// Small screen x Mobile menu
function menuToggle() {
  document.getElementById("nav-content").classList.toggle("hidden");
}

const Header = ({ films }) => {
  const [movieTitles, setMovieTitles] = useState([]);

  useEffect(() => {
    const titles = films?.map((movie) => movie?.title);
    setMovieTitles(titles);
  }, [films]);

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between lg:flex-wrap bg-gray-800 fixed w-full z-10 top-0 sm:pt-4">
      <div className="flex flex-col sm:flex-row items-center lg:flex-wrap bg-gray-800 justify-center mx-auto lg:w-4/5 xl:w-[800px] w-full">
        <div className="block sm:hidden ml-5 mt-5 w-full">
          <button
            id="nav-toggle"
            onClick={menuToggle}
            className="flex items-center px-3 py-2 sm:-mt-5 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex justify-center items-center mx-auto h-auto text-white">
          <a href="/" data-cy="btn-logo">
            <img
              src={require("../assets/logo-2.png")}
              alt="Site logo"
              className="object-cover w-16 scale-75 -mt-12 sm:-mt-4"
            />
          </a>
        </div>
        <div
          className="w-full flex-grow sm:flex sm:items-center lg:w-auto hidden"
          id="nav-content"
        >
          {/* Movie search bar */}
          <div className="flex mx-auto p-3 rounded-xl sm:-mt-5 bg-gray-800 justify-center">
            <SearchBarAutoComplete titles={movieTitles} />
          </div>
          <ul className="sm:flex justify-end text-base sm:space-x-8 space-y-6 sm:space-y-0 p-4 sm:p-0">
            <li>
              <Link
                className="text-gray-200 font-normal no-underline hover:text-white"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-200 font-normal no-underline hover:text-white"
                to="/movies"
              >
                Movies
              </Link>
            </li>
            <li>
              <Dropdown />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
