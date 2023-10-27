import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ClickOutsideHandler from "../utils/clickOutside";

function SearchBarAutoComplete({ titles }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const getSuggestions = (input) => {
    return titles.filter((title) =>
      title.toLowerCase().includes(input.toLowerCase())
    );
  };

  const clearSuggestions = () => {
    setSuggestions([]);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setSuggestions(getSuggestions(value));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchMovie(inputValue);
    }
  };

  const handleClick = (title) => {
    setInputValue("");
    searchMovie(title);
  };

  const searchMovie = async (title) => {
    try {
      if (!title.trim()) {
        return;
      }

      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}/movies/find/${title}`
      );

      const matchingFilms = data.search.filter(
        (film) => film.title.toLowerCase() === title.toLowerCase()
      );

      if (matchingFilms.length > 0) {
        const { id } = data.search[0];
        navigate(`/detail/${id}`);
      } else {
        console.log("SEND TO FIND: ", title);
        navigate("/find", { state: title });
      }
    } catch (error) {
      console.error("Error searching for movie:", error);
    }
  };

  return (
    <div className="w-72 relative h-8">
      <div className="flex bg-white items-center p-1 rounded-md">
        <ClickOutsideHandler
          containerClass=".suggestions-container"
          action={clearSuggestions}
        />
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="peer text-black w-full rounded-[7px] bg-white p-1 text-sm font-normal focus:outline-0 disabled:border-0"
          placeholder="Search..."
        />
        <SearchIcon
          className="text-black cursor-pointer"
          onClick={() => searchMovie(inputValue)}
        />
      </div>
      {suggestions.length > 0 && (
        <ul className="bg-white rounded-md text-black">
          {suggestions.map((title, index) => (
            <li
              key={index}
              onClick={() => handleClick(title)}
              className="mt-[1px] cursor-pointer border-b-[1px] border-stone-300 hover:bg-gray-100 hover:rounded-md p-2 w-full"
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBarAutoComplete;
