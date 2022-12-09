import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { IKImage, IKContext } from 'imagekitio-react'
import { ButtonBase } from '@mui/material';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

const getMovies = loader('../queries/queries.graphql');

const Wrapper = styled.div`
  font-size: 21px;
  height: 100%; 
  padding: 1em;
`;

const Details = styled.div`
  font-size: 1em;
  text-align: center;
  color: white;
  margin-top: 20px;
`; 

const MovieCard = (props) => (
  <ButtonBase style={{padding: "2em"}} href={`/detail/${props.movie.pic_sku}`}  >
    <Grid item xs={12} sm={12} md={12} >
  <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
  <IKImage path={props.movie.pic_sku + ".jpg"} transformation={[{
    "height": "300",
    "width": "230"
  }]} />
      <Details>
        <h4 style={{display: "inline"}}>{props.movie.title}</h4> <br />
        Release: {props.movie.year} <br />
        Duration: {props.movie.runtime} <br />
      </Details>
  </IKContext>
  </Grid>
  </ButtonBase>
); 

export default function ListMovies()  { 
  const {loading, error, data} = useQuery(getMovies);
  
  if(loading) return(<><h2>Loading...</h2></>)

  if(error) return(<><h2>Error fetching Movies</h2></>)

  return (
    <Wrapper>
       <h1 style={{textAlign: "left", marginLeft: "3%", color: "white"}}>Library</h1>
      <Grid >
     {data.movies.map((currentMovie) => {
       return <MovieCard key={currentMovie._id} movie={currentMovie}  pic={currentMovie.pic_sku} /> 
     })}
      </Grid>
    </Wrapper>
  );
}

  

