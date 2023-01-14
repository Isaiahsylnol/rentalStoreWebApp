import React from "react";
import { ButtonBase } from "@mui/material";
 
export const SimilarMoviesWidget = ({ data }) => {
  return (
    <div>
      <h3 className="text-xl flex mx-auto justify-center font-bold text-white p-5">Similar Movies</h3>
      <div>
        <ul className="text-left flex flex-col justify-center">
          {data.map(function (movie, i) {
            return (
              <li key={i} className="justify-center mx-auto m-6">
                <ButtonBase href={`/detail/${movie._id}`}>
                  <img
                    src={require("../assets/uncahrted.jpg")}
                    alt="similar movie thumbnails"
                    className="object-cover sm:h-36 h-60 w-96 rounded-lg"
                  />
                </ButtonBase>
                <h1 className="text-white text-lg mt-3">{movie.title}</h1>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
 
 


