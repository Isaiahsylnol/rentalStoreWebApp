import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import ListMovies from "./components/ListMovies";
import MovieDetail from "./components/MovieDetail";
import Home from "./Pages/Home";

import { useQuery } from "@apollo/client";
import { loader } from 'graphql.macro';

import "./App.css";

const Wrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
`; 

function App() {

  const getMovies = loader('./queries/queries.graphql');
  const { loading, error, data } = useQuery(getMovies);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h2>Error fetching movie data!</h2>;

  return (
    <Wrapper>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/movies" exact element={<ListMovies />} />
          <Route path="/home" element={<Home />} />
          {data.movies.map((movie, i) => (
            <Route
              exact
              key={`route${i}`}
              path={`/detail/${movie.pic_sku}`}
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
