import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { IKImage, IKContext } from 'imagekitio-react'
import { ButtonBase } from '@mui/material';

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

const Movie = (props) => (
  <ButtonBase style={{padding: "2em"}} href={`/detail/${props.movie.pic_sku}`}  >
    <Grid  item xs={12} sm={12} md={12} >
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

export default class ListMovies extends Component {
  
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

  movieList() {
    return this.state.movies.map((currentMovie) => {
      return <Movie movie={currentMovie} key={currentMovie._id} pic={currentMovie.pic_sku} /> 
    });
  }

  render() {
    return (
      <Wrapper>
         <h3>All Movies in Catalogue</h3>
        <Grid >
        {this.movieList()}
        </Grid>
      </Wrapper>
    );
  }
}
