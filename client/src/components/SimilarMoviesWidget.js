import React from "react";
import { ButtonBase } from "@mui/material";
import { IKImage, IKContext } from "imagekitio-react";

export const SimilarMoviesWidget = ({ data }) => {
  return (
    <div className="items-center">
      <h1 className="text-white text-lg mt-3 mb-3 font-semibold">
        Similar Movies
      </h1>

      <ul className="md:flex grid grid-cols-2">
        {data.map(function (movie, i) {
          return (
            <li key={i}>
              <div className="w-min">
                <ButtonBase href={`/detail/${movie.id}`}>
                  <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
                    <div className="w-60 flex">
                      <IKImage path={movie.thumbnail + ".jpg"} />
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
