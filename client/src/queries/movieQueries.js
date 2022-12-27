import { gql } from "@apollo/client";

const GET_MOVIES = gql`
  query getMovies {
    movies {
      _id
      title
      director
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
      director
      runtime
      rating
      genre
      year
      thumbnail
    }
  }
`;

export { GET_MOVIES, SEARCH_MOVIE };
