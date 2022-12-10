import { IKImage, IKContext } from 'imagekitio-react'
import { ButtonBase } from '@mui/material';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import Header from "./Header";

const getMovies = loader('../queries/queries.graphql');

const MovieCard = (props) => (
  <ButtonBase style={{padding: "2em"}} href={`/detail/${props.movie.pic_sku}`}  >
    <div className="grid-cols-4" >
  <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
  <IKImage path={props.movie.pic_sku + ".jpg"} transformation={[{
    "height": "300",
    "width": "230"
  }]} />
      <div className="text-center text-white mt-6">
        <h1 className="inline text-2xl font-semibold">{props.movie.title}</h1> <br />
        Release: {props.movie.year} <br />
        Runtime: {props.movie.runtime[0] + "h" + " " +  props.movie.runtime.slice(2,4) + "m"} <br />
      </div>
  </IKContext>
  </div>
  </ButtonBase>
); 

export default function ListMovies()  { 
  const {loading, error, data} = useQuery(getMovies);
  
  if(loading) return(<><h2>Loading...</h2></>)

  if(error) return(<><h2>Error fetching Movies</h2></>)

  return (
    <>
    <div className="flex mt-64 mb-8"><h1 className="w-full  text-5xl font-semibold text-white">Library</h1></div>
    <div className="flex justify-center">
      <Header active={"active"} />     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
     {data.movies.map((currentMovie) => {
       return <MovieCard key={currentMovie._id} movie={currentMovie} pic={currentMovie.pic_sku} /> 
     })}
      </div>
    </div>
    </>
  );
}

  

