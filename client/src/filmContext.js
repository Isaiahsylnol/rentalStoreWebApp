import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";

const FilmContext = createContext();

function FilmProvider({ children }) {
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/movies/list`)
      .then((response) => {
        setFilmData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <FilmContext.Provider value={filmData}>{children}</FilmContext.Provider>
  );
}

function useFilmContext() {
  const context = useContext(FilmContext);
  if (context === undefined) {
    throw new Error("useFilmContext must be used within a FilmProvider");
  }
  return context;
}

export { FilmProvider, useFilmContext };
