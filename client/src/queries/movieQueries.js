import { gql } from "@apollo/client";

const GET_MOVIES = gql`
  query movies {
    movies {
      id
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
      id
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
  query searchMovieById($id: Int!) {
    searchMovieById(id: $id) {
      id
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
