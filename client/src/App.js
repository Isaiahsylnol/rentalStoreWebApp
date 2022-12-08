 
import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

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
`;
 
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});
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
        <ApolloProvider client={client}>
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
    </ApolloProvider>
      </Wrapper> 
    );
  }
}

export default App;
