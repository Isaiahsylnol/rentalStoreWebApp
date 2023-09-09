import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_MOVIES } from "../queries/movieQueries";
import { ButtonBase } from "@mui/material";
import { IKContext, IKImage } from "imagekitio-react";

export default function Find() {
  const [fetchMovies] = useLazyQuery(SEARCH_MOVIES);
  const [movies, setMovies] = useState([]);
  const { state } = useLocation();
  const search = state;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetchMovies({
        variables: {
          search,
        },
      });
      if (data.searchMovies) {
        setMovies(data.searchMovies);
      }
    };

    fetchData();
  }, []);

  const MovieCard = (props) => (
    <div>
      <ButtonBase href={`/detail/${props.movie.id}`}>
        <div>
          <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
            <div className="object-fit h-56 flex">
              <IKImage path={props.movie.thumbnail + ".jpg"} />
            </div>
            <div className="text-left w-60 text-white p-2 md:p-2">
              <h1 className="inline text-2xl">{props.movie.title}</h1> <br />
              Release: {props.movie.year} <br />
              Runtime:{" "}
              {props.movie.runtime[1] +
                "h" +
                " " +
                props.movie.runtime.slice(3, 5) +
                "m"}{" "}
            </div>
          </IKContext>
        </div>
      </ButtonBase>
    </div>
  );

  return (
    <div className="flex text-white pt-28">
      <Header />
      <div className="w-full xl:w-9/12 grid grid-cols-1 lg:grid-cols-4 mx-auto h-full items-center p-6">
        {/* Column 1 */}
        <div className="bg-slate-700 p-5 rounded-xl col-span-3 mb-10 lg:mb-0">
          <h1 className="m-2 text-2xl sm:text-4xl font-bold mb-9">
            Search "{search}"
          </h1>
          <div className="w-full">
            <div className="inline-flex flex-col w-full">
              <div className="m-2 flex flex-col">
                <h1 className="sm:text-3xl text-4xl font-bold mb-5">Movies</h1>
                {movies ? (
                  <div className="border border-gray-600 p-5">
                    <div className="flex mb-28">
                      {movies.map((currentMovie) => {
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
                ) : (
                  <div className="pt-4">
                    <h2 className="text-center p-6 border border-gray-600 w-full max-w-xl mx-auto">
                      No results found
                    </h2>
                  </div>
                )}
              </div>
              <div className="m-2 flex flex-col">
                <h1 className="sm:text-3xl text-4xl font-bold mb-5">
                  TV Series
                </h1>
                <h2 className="text-center p-6 border border-gray-600 w-full max-w-xl mx-auto">
                  No results found
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* Column 2 */}
        <div className="flex flex-row w-full justify-center">
          <h2>Sidebar</h2>
        </div>
      </div>
    </div>
  );
}
