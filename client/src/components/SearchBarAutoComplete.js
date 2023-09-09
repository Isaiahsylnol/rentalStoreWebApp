import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useLazyQuery, useQuery } from "@apollo/client";
import { FIND_MOVIE, GET_MOVIES } from "../queries/movieQueries";
import { useNavigate } from "react-router-dom";

function SearchBarAutoComplete() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [itemClicked, setItemClicked] = useState(false);
  const [fetchMovie] = useLazyQuery(FIND_MOVIE);
  const { data } = useQuery(GET_MOVIES);
  const [movieTitles, setMovies] = useState([]);
  let navigate = useNavigate();

  const getSuggestions = (input) => {
    return movieTitles.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
  };

  const clearSuggestions = () => {
    setSuggestions([]);
  };

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
    const newSuggestions = getSuggestions(value);
    setSuggestions(newSuggestions);
  };

  useEffect(() => {
    if (inputValue === "") {
      setItemClicked(false);
    }
  }, [inputValue]);

  useEffect(() => {
    if (data?.movies) {
      const titles = data.movies.map((movie) => movie.title);
      setMovies(titles);
    }
  }, [data]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".suggestions-container")) {
        clearSuggestions();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const searchMovie = async (item) => {
    const { data } = await fetchMovie({
      variables: {
        title: item || inputValue,
      },
    });

    if (data.findMovieByName) {
      const { id } = data?.findMovieByName;
      navigate(`/detail/${id}`);
    } else {
      navigate(`/find`, { state: inputValue });
    }
  };

  return (
    <div className="w-72">
      <div className="relative h-8 w-full min-w-[200px]">
        <div className="flex bg-white items-center p-1 rounded-xl">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="peer text-black h-full w-full rounded-[7px] bg-white px-3 py-2.5 !pr-9 text-sm font-normal focus:border-0 focus:border-blue-400 focus:outline-0 disabled:border-0"
            placeholder="Search..."
          />
          <SearchIcon
            className="text-black cursor-pointer"
            onClick={() => searchMovie()}
          />
        </div>
        {suggestions.length > 0 && !itemClicked ? (
          <ul className="bg-white rounded-[7px] p-3 text-black">
            {suggestions.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setInputValue(item);
                  searchMovie(item);
                  clearSuggestions();
                  setItemClicked(true);
                }}
                className="cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default SearchBarAutoComplete;
