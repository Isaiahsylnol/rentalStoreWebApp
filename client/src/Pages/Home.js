import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_MOVIES = gql`
    query getMovies{
        movies {
            title
            runtime
            rating
            year
            pic_sku
          }
    }`
const Home = () => {
    const {loading, error, data} = useQuery(GET_MOVIES)
    if(loading) return(<><h2>Loading...</h2></>)

    if (error) return(<><h2>Error fetching data!</h2></>)
    return (
        <div>
            <h2>Home Page</h2>
            <h2>{data.movies[0].title}</h2>
            {console.log(data.movies[0])}
        </div>
    );
};

export default Home;