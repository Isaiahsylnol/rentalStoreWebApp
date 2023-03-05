import { IKImage, IKContext } from "imagekitio-react";
import { ButtonBase } from "@mui/material";
import { useQuery } from "@apollo/client";
import Header from "./Header";
import { GET_MOVIES } from "../queries/movieQueries";

const MovieCard = (props) => (
  <div className="max-w-xs">
    <ButtonBase href={`/detail/${props.movie._id}`}>
      <div>
        <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
          <div className="object-fit h-96 flex">
            <IKImage path={props.movie.thumbnail + ".jpg"} />
          </div>
          <div className="text-left w-60 text-white p-2 md:p-2">
            <h1 className="inline text-2xl">
              {props.movie.title}
            </h1>{" "}
            <br />
            Release: {props.movie.year} <br />
            Runtime:{" "}
            {props.movie.runtime[0] +
              "h" +
              " " +
              props.movie.runtime.slice(2, 4) +
              "m"}{" "}
            <br />
          </div>
        </IKContext>
      </div>
    </ButtonBase>
  </div>
);

export default function ListMovies() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading)
    return (
      <>
        <h2>Loading...</h2>
      </>
    );

  if (error)
    return (
      <>
        <h2>Error fetching Movies</h2>
      </>
    );

  return (
    <>
      <div className="flex justify-center pt-32">
        <Header />
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.movies.map((currentMovie) => {
            return (
              <MovieCard
                key={currentMovie._id}
                movie={currentMovie}
                thumbnail={currentMovie.thumbnail}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
