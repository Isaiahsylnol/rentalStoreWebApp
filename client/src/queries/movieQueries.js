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

const FIND_MOVIE = gql`
  query findMovieByName($title: String!) {
    findMovieByName(title: $title) {
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

const SEARCH_MOVIES = gql`
  query searchMovies($search: String!) {
    searchMovies(search: $search) {
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

export { GET_MOVIES, SEARCH_MOVIES, FIND_MOVIE, SEARCH_MOVIE_BY_ID };
