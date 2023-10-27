import React from "react";
import { ButtonBase } from "@mui/material";
import { IKImage, IKContext } from "imagekitio-react";

export const SimilarMoviesWidget = ({ movies }) => {
  return (
    <div>
      <h1 className="text-white text-lg mt-3 mb-3 font-semibold">
        Similar Movies
      </h1>
      <ul className="lg:flex grid md:grid-cols-3 grid-cols-2">
        {movies?.map(function (movie, i) {
          return (
            <li key={i}>
              <div>
                <ButtonBase href={`/detail/${movie?.id}`}>
                  <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
                    <div className="w-full sm:h-96 flex p-2">
                      <IKImage path={movie?.thumbnail + ".jpg"} />
                    </div>
                  </IKContext>
                </ButtonBase>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
