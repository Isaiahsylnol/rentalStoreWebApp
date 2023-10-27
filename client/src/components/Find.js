import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ButtonBase } from "@mui/material";
import { IKContext, IKImage } from "imagekitio-react";
import axios from "axios";

export default function Find() {
  const [movies, setMovies] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/movies/find/${state}`)
      .then((response) => {
        console.log("RESPONSE: ", response.data.search);
        setMovies(response.data.search);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    if (movies) {
      console.log("MOVIES: ", movies);
    } else {
    }
  }, [state]);

  return (
    <div className="text-white h-screen">
      {/* Grid container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 p-3 sm:p-6 sm:gap-16">
        {/* Column 1 */}
        <div className="col-span-3 mx-auto w-full xl:w-4/5">
          <h1 className="text-2xl sm:text-5xl font-normal mb-9 pt-24">
            Search "{state}"
          </h1>
          {/* Render movies dynamically */}
          <h1 className="sm:text-3xl text-4xl font-semibold mb-5">Movies</h1>
          {movies.length > 0 ? (
            <ul className="rounded border-[1px] border-zinc-700 p-3">
              {movies.map((movie) => (
                <li
                  key={movie.id}
                  className="hover:text-gray-300 hover:opacity-80"
                >
                  <ButtonBase href={`/detail/${movie?.id}`} className="w-full">
                    <div className="border-b border-zinc-700 flex p-2 w-full">
                      <IKContext
                        publicKey="your_public_key"
                        urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg"
                      >
                        <div className="flex flex-row">
                          <IKImage
                            path={movie?.thumbnail + ".jpg"}
                            transformation={[
                              {
                                height: 230,
                                width: 160,
                                quality: "auto",
                              },
                            ]}
                          />
                        </div>
                      </IKContext>

                      <div className="p-6 rounded-xl w-full">
                        <h2 className="text-lg font-bold mt-3">
                          {movie.title}
                        </h2>
                        <div className="flex flex-wrap items-center w-full mt-3">
                          <h2 className="text-sm">{movie.year} •</h2>
                          {movie.genre.map((genre, index) => (
                            <h2
                              key={index}
                              className="text-sm ml-2 border-[1px] rounded p-[1px] w-16 text-center"
                            >
                              {genre}
                            </h2>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ButtonBase>
                </li>
              ))}
            </ul>
          ) : (
            <div className="m-2 flex flex-col">
              <h2 className="text-center p-6 border border-zinc-700 w-full max-w-xl mx-auto">
                No results found
              </h2>
            </div>
          )}
          <div className="inline-flex flex-col w-full">
            <div className="m-2 flex flex-col">
              <h1 className="sm:text-3xl text-4xl font-semibold mb-5 mt-10">
                TV Series
              </h1>
              <h2 className="text-center p-6 border border-zinc-700 w-full max-w-xl mx-auto">
                No results found
              </h2>
            </div>
          </div>
        </div>
        {/* Column 2 */}
        <div className="w-full sm:pt-32 col-span-2">
          <div>
            <h2 className="text-2xl font-bold mb-4 sm:mb-4">More Results</h2>
          </div>
          <ul className="flex gap-3 w-full pb-20">
            <li className="text-sm border-[1px] rounded-xl p-1 w-16 text-center cursor-pointer hover:text-gray-300 hover:opacity-80">
              Movies
            </li>
            <li className="text-sm border-[1px] rounded-xl p-1 w-16 text-center cursor-pointer hover:text-gray-300 hover:opacity-80">
              TV
            </li>
            <li className="text-sm border-[1px] rounded-xl p-1 w-20 text-center cursor-pointer hover:text-gray-300 hover:opacity-80">
              Podcasts
            </li>
            <li className="text-sm border-[1px] rounded-xl p-1 w-28 text-center cursor-pointer hover:text-gray-300 hover:opacity-80">
              Music Videos
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
