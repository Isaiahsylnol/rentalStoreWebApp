import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const NavHeader = styled.div`
  font-size: 1em;
  padding: 1em;
  display: flex;
  background-color: #e6d5c3;
  text-align: right;
`;

function menuToggle() {
  document.getElementById("nav-content").classList.toggle("hidden");
}

function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a
          className="text-white no-underline hover:text-white hover:no-underline"
          href="/"
        >
          <p className="text-2xl pl-2">
            Movie Rentals
          </p>
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          id="nav-toggle"
          onClick={menuToggle}
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden"
        id="nav-content"
      >
        {/* Movie search bar */}
            <div className="flex flex-grow justify-center ml-12">
            <form action="#" className="justify-center border border-solid m-8 rounded-lg bg-white">
              <input
                type="text"
                placeholder="Search.."
                name="search"
                size="60"
                className="rounded-lg p-1 w-5/6 sm:w-11/12 float-left"
              />
              <button type="submit" className="text-black p-2 rounded-lg">
                <FaSearch>Search</FaSearch>
              </button>
            </form>
            </div>
        <ul className="lg:flex justify-end items-center">
          <li className="mr-3">
          <Link className='navigation-links py-2 px-4 text-white no-underline' to="/">Home</Link>
          </li>
          <li className="mr-3">
          <Link className='navigation-links text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4' to="/movies">Movies</Link>
          </li>
          <li className="mr-3">
          <Link className='navigation-links text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4' to="/shop">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
