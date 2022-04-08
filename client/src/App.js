import { Container } from "@mui/material";
import React, { Component } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Gallery from './Pages/Gallery';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Login from './components/Login';
import ListMovies from "./components/ListMovies";
import MovieDetail from "./components/MovieDetail";
import Home from "./Pages/Home";

import "./App.css";

const Wrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  
  background-color: #c6dfcd;
`;

const Item = styled.div`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
  height: 55px;
  width: 499px;
  background-color: #e6d5c3;
`;

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/movies")
      .then((response) => {
        this.setState({ movies: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return ( 
      <Wrapper>
  <Router>
  <Header />
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/movies" exact element={<ListMovies movies={this.state.movies}/>} />
      <Route path="/home" element={<Home />} />
      <Route path="gallery" element={<Gallery />} />
      {this.state.movies.map((movie, i) => (
                      <Route
                        exact
                        key={`route${i}`}
                        path={`/detail/${movie.pic_sku}`}
                        element={<MovieDetail  movie={movie} /> }
                      />
                    ))}
      <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
      </Wrapper> 
    );
  }
}

export default App;
