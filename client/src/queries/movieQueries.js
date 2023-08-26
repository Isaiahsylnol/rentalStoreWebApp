import { gql } from "@apollo/client";

const GET_MOVIES = gql`
  query getMovies {
    movies {
      _id
      title
      directors
      producers
      runtime
      rating
      genre
      year
      thumbnail
    }
  }
`;

const SEARCH_MOVIE = gql`
  query searchMovie($title: String!) {
    searchMovie(title: $title) {
      _id
      title
      directors
      producers
      runtime
      rating
      genre
      year
      thumbnail
    }
  }
`;

const SEARCH_MOVIE_BY_ID = gql`
  query searchMovieById($_id: String!) {
    searchMovieById(_id: $_id) {
      _id
      title
      directors
      producers
      runtime
      rating
      genre
      year
      thumbnail
    }
  }
`;

export { GET_MOVIES, SEARCH_MOVIE, SEARCH_MOVIE_BY_ID };
