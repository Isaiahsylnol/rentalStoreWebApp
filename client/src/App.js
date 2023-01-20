import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "./components/NotFound";
import ListMovies from "./components/ListMovies";
import MovieDetail from "./components/MovieDetail";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import { GET_MOVIES } from "./queries/movieQueries";
import { useQuery } from "@apollo/client";

import "./App.css";
import { LoginModal } from "./components/Modal/LoginModal";

function App() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h2>Error fetching movie data!</h2>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/movies" exact element={<ListMovies />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {data?.movies.map((movie, i) => (
          <Route
            exact
            key={`route${i}`}
            path={`/detail/${movie._id}`}
            element={<MovieDetail movie={movie} />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
