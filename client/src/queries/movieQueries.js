import { gql } from '@apollo/client';

const GET_MOVIES = gql`
query getMovies {
    movies {
        title
        producer
        runtime
        rating
        genre
        year
        pic_sku
      }
}
`;

const SEARCH_MOVIE = gql`
query searchMovie($title: String!) {
    searchMovie(title: $title) {
        title
        producer
        runtime
        rating
        genre
        year
        pic_sku
      }
}
`;

export { GET_MOVIES, SEARCH_MOVIE};