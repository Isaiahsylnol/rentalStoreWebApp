import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import ModalService from "./Modal/services/ModalService";
import { LoginModal } from "./Modal/LoginModal";

import { useLazyQuery, useQuery } from "@apollo/client";
import { SEARCH_MOVIE } from "../queries/movieQueries";
import { GET_MOVIES } from "../queries/movieQueries";

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
  function signOut() {
    localStorage.removeItem("User");
    setCurrentUser();
  }

  let navigate = useNavigate();

  const [movieSearched, setMovieSearched] = useState("");
  const [fetchMovie, { data: movieSearchedData, error: movieError }] =
    useLazyQuery(SEARCH_MOVIE);
  const { loading, error, data } = useQuery(GET_MOVIES);
  const [movieTitles, setMovies] = useState([]);

  useEffect(() => {
    for (var i = 0; i < data?.movies?.length; i++) {
      movieTitles.push(data?.movies[i].title);
    }
    setMovies(movieTitles);
  }, []);
  useEffect(() => {
    if (movieSearchedData != "" && movieSearchedData != undefined) {
      navigate(`/detail/${movieSearchedData?.searchMovie._id}`);
    }
  }, [movieSearchedData]);
  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("User")));
  }, []);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 fixed w-full z-10 top-0">
      <div className="block lg:hidden ml-4">
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
      <div className="flex justify-center items-center mx-auto h-auto text-white">
        <a href="/">
          <img
            src={require("../assets/logo-1.png")}
            alt="Site logo"
            className="object-cover w-20"
          />
        </a>
      </div>

      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden"
        id="nav-content"
      >
        {/* Movie search bar */}
        <div className="flex flex-grow justify-center ml-12 mt-12 sm:mt-0">
          <Autocomplete
            style={{ width: 400 }}
            freeSolo
            autoComplete
            autoHighlight
            options={movieTitles}
            onChange={(event, value) => {
              setMovieSearched(value);
            }}
            renderInput={(params) => (
              <div className="w-full inline-flex md:w-2/1">
                <TextField
                  {...params}
                  onChange={(e) => {
                    setMovieSearched(e.target.value);
                  }}
                  variant="outlined"
                  size="small"
                  className="bg-white rounded-xl"
                />
              </div>
            )}
          />
          <SearchIcon
            className="text-white m-2"
            onClick={() => {
              fetchMovie({
                variables: {
                  title: movieSearched,
                },
              });
            }}
          />
        </div>
        <ul className="lg:flex justify-end items-center m-6 text-lg lg:space-x-8">
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
      <div className="text-gray-200 bg-slate-700 w-full flex md:w-auto md:flex-none">
        {currentUser ? (
          <div>
            <div className="text-right p-4 cursor-default flex flex-col">
              {currentUser.email}
              <button onClick={signOut} className="text-left sm:text-right">
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
