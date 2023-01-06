import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthService from "./services/auth.service";
import NotFound from "./components/NotFound";
import ListMovies from "./components/ListMovies";
import MovieDetail from "./components/MovieDetail";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import { GET_MOVIES } from "./queries/movieQueries";
import { useQuery } from "@apollo/client";

import "./App.css";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  height: screen;
`;

function App() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h2>Error fetching movie data!</h2>;

  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
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
    </Wrapper>
  );
}

export default App;
