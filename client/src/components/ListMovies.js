import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { IKImage, IKContext } from 'imagekitio-react'
import { ButtonBase } from '@mui/material';
import { gql, useQuery } from '@apollo/client';

const Wrapper = styled.div`
  font-size: 21px;
  text-align: center;
  color: palevioletred;
  height: 100%; 
  padding: 1em;
  background-color: #c6dfcd;
`;

const Details = styled.div`
  font-size: 1em;
  text-align: center;
  color: palevioletred; 
  background-color: #e6d5c3;
  border: solid black 2px;
`; 

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

const MovieCard = (props) => (
  <ButtonBase style={{padding: "2em"}} href={`/detail/${props.movie.pic_sku}`}  >
    <Grid item xs={12} sm={12} md={12} >
  <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
  <IKImage path={props.movie.pic_sku + ".jpg"} transformation={[{
    "height": "300",
    "width": "230"
  }]} />
      <Details>
        {props.movie.title} <br />
        Producer: {props.movie.producer} <br />
        Release: {props.movie.year} <br />
        Duration: {props.movie.runtime} <br />
        sku: {props.movie.pic_sku}
      </Details>
  </IKContext>
  </Grid>
  </ButtonBase>
); 

export default function ListMovies()  { 
  const {loading, error, data} = useQuery(GET_MOVIES);
  
  if(loading) return(<><h2>Loading...</h2></>)

  if(error) return(<><h2>Error fetching Movies</h2></>)

  return (
    <Wrapper>
       <h3>All Movies in Catalogue</h3>
      <Grid >
     {data.movies.map((currentMovie) => {
       return <MovieCard key={currentMovie._id} movie={currentMovie}  pic={currentMovie.pic_sku} /> 
     })}
      </Grid>
    </Wrapper>
  );
}

  

