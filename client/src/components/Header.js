import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { useLazyQuery, useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

import { SEARCH_MOVIE } from "../queries/movieQueries";

const getMovies = loader("../queries/queries.graphql");

function menuToggle() {
  document.getElementById("nav-content").classList.toggle("hidden");
}

const Header = () => {
  let navigate = useNavigate();
  const [movieSearched, setMovieSearched] = useState("");
  const [fetchMovie, { data: movieSearchedData, error: movieError }] =
    useLazyQuery(SEARCH_MOVIE);
  const { loading, error, data } = useQuery(getMovies);

  const [movieTitles, setMovies] = useState([]);

  useEffect(() => {
    for (var i = 0; i < data?.movies?.length; i++) {
      movieTitles.push(data?.movies[i].title);
    }
    setMovies(movieTitles);
  }, []);

  useEffect(() => {
    console.log(movieSearchedData);
    if(movieSearchedData != "" && movieSearchedData != undefined){
      navigate(`/detail/${movieSearchedData?.searchMovie._id}`);
    }
 
  }, [movieSearchedData]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a
          className="text-white no-underline hover:text-white hover:no-underline"
          href="/"
        >
          <p className="text-2xl pl-2">Movie Rentals</p>
        </a>
      </div>
      <div className="block lg:hidden">
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
      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden"
        id="nav-content"
      >
        {/* Movie search bar */}
        <div className="flex flex-grow justify-center ml-12">
          <Autocomplete
            style={{ width: 500 }}
            freeSolo
            autoComplete
            autoHighlight
            options={movieTitles}
            onChange={(event, value) => {
              setMovieSearched(value);
            }}
            renderInput={(params) => (
              <div className="w-full inline-flex">
                <TextField
                  {...params}
                  onChange={(e) => {
                    setMovieSearched(e.target.value);
                  }}
                  variant="outlined"
                  className="p-1 w-5/6 sm:w-11/12 float-left bg-white rounded-xl"
                />
                <IconButton
                  type="button"
                  aria-label="search"
                  onClick={() => {
                    fetchMovie({
                      variables: {
                        title: movieSearched,
                      },
                    });
                  }}
                >
                  <SearchIcon className="text-white" />
                </IconButton>
              </div>
            )}
          />
        </div>
        <ul className="lg:flex justify-end items-center">
          <li className="mr-3">
            <Link
              className="navigation-links py-2 px-4 text-white no-underline"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="mr-3">
            <Link
              className="navigation-links text-white  no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              to="/movies"
            >
              Movies
            </Link>
          </li>
          <li className="mr-3">
            <Link
              className="navigation-links text-white  no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              to="/shop"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
