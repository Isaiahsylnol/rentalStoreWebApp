import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ModalService from "./Modal/services/ModalService";
import { LoginModal } from "./Modal/LoginModal";

import SearchBarAutoComplete from "./SearchBarAutoComplete";

// Small screen x Mobile menu
function menuToggle() {
  document.getElementById("nav-content").classList.toggle("hidden");
}

const Header = () => {
  const [currentUser, setCurrentUser] = useState();
  function addModal(modal) {
    ModalService.open(modal);
  }

  // Sign user out
  function handleSignOut() {
    localStorage.removeItem("User");
    setCurrentUser();
  }

  let navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    setCurrentUser(user);
  }, []);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 fixed w-full z-10 top-0 p-2">
      {/* Mobile menu */}
      <div className="block md:hidden p-2">
        <button
          id="nav-toggle"
          onClick={menuToggle}
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
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
      {/* Desktop menu */}
      <div
        className="w-full flex-grow md:flex items-center hidden"
        id="nav-content"
      >
        <a href="/" data-cy="btn-logo">
          <img
            src={require("../assets/logo-1.png")}
            alt="Site logo"
            className="object-cover w-20"
          />
        </a>
        {/* Movie search bar */}
        <div className="flex mx-auto p-3 rounded-xl bg-gray-800">
          <SearchBarAutoComplete />
        </div>

        <ul className="flex flex-col md:flex-row items-start text-xl gap-2 p-4 sm:pr-10">
          <li className="mr-3 text-center">
            <Link
              className="text-gray-200 font-normal no-underline hover:text-white"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="mr-3 text-center">
            <Link
              className="text-gray-200 font-normal no-underline hover:text-white"
              to="/movies"
            >
              Movies
            </Link>
          </li>
          <li
            className="text-gray-200 text-center mr-2 font-normal hover:text-white cursor-pointer"
            onClick={
              currentUser
                ? () => navigate(`/profile`)
                : () => addModal(LoginModal)
            }
          >
            Profile
          </li>
        </ul>
      </div>
      <div data-cy="current-user">
        {currentUser ? (
          <div>
            <div className="text-right p-4 cursor-default flex flex-col">
              {currentUser.email}
              <button
                onClick={handleSignOut}
                className="text-left sm:text-right"
              >
                Sign out
              </button>
            </div>
          </div>
        ) : (
          <div className="pt-4"></div>
        )}
      </div>
    </nav>
  );
};
export default Header;
