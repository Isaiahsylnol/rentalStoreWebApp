import { IKImage, IKContext } from "imagekitio-react";
import { ButtonBase } from "@mui/material";
import { useEffect, useState } from "react";
import { useFilmContext } from "../filmContext";

const MovieCard = (props) => (
  <div className="max-w-xs">
    <ButtonBase href={`/detail/${props.movie.id}`}>
      <div>
        <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
          <div className="object-fit h-96 flex">
            <IKImage path={props.movie.thumbnail + ".jpg"} />
          </div>
          <div className="text-left w-60 text-white p-2 md:p-2">
            <h1 className="inline text-2xl">{props.movie.title}</h1> <br />
            Release: {props.movie.year} <br />
            {/* Runtime:{" "}
            {props.movie.runtime[1] +
              "h" +
              " " +
              props.movie.runtime.slice(3, 5) +
              "m"}{" "} */}
            <br />
          </div>
        </IKContext>
      </div>
    </ButtonBase>
  </div>
);

export default function ListMovies() {
  const [movies, setMovies] = useState([]);
  const filmData = useFilmContext();

  useEffect(() => {
    setMovies(filmData);
  }, [filmData]);
  return (
    <div className="flex justify-center pt-20 h-screen">
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies?.map((currentMovie) => {
          return (
            <MovieCard
              key={currentMovie.id}
              movie={currentMovie}
              thumbnail={currentMovie.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}
