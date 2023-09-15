import React, { useEffect } from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { BsBookmarkFill } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_MOVIE_BY_ID } from "../queries/movieQueries";

const MovieDetail = () => {
  const { slug } = useParams();
  const [fetchMovie, { loading, error, data }] =
    useLazyQuery(SEARCH_MOVIE_BY_ID);

  useEffect(() => {
    fetchMovie({
      variables: {
        id: parseInt(slug, 10),
      },
    });
  }, [slug, fetchMovie]);

  const movie = data?.searchMovieById;
  if (loading)
    return (
      <>
        <h2>Loading...</h2>
      </>
    );

  if (error)
    return (
      <>
        <h2>Failed to load movie data</h2>
      </>
    );
  return (
    <div>
      <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
        <Header />
        <div className="mt-32 min-h-screen lg:p-8">
          {/* Container  */}
          <div className="bg-[#2c2a2a] p-8 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {/* Movie poster */}
            <div className="mx-auto">
              <IKImage
                path={movie?.thumbnail + ".jpg"}
                transformation={[
                  {
                    height: 600,
                    width: 400,
                  },
                ]}
              />
            </div>
            {/* Movie Details */}
            <div className="flex justify-center mt-10 sm:-mt-6">
              <div className="bg-[#221F1F] text-[#fbf7f5] p-8 rounded-lg">
                <div className="float-right inline-flex">
                  <a href="#bookmark" className="p-2 text-slate-500">
                    <BsBookmarkFill className="" />
                  </a>
                  <a href="#share" className="p-2 text-blue-500">
                    <FaShareAlt />
                  </a>
                  <a href="#report" className="p-2 text-red-500">
                    <MdReportProblem />
                  </a>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-semibold mb-3">
                    {movie?.title}
                  </h3>
                  <span className="font-normal">Producers:</span>{" "}
                  {movie?.producers.map(function (person, index) {
                    return (
                      <span key={index}>{(index ? ", " : "") + person}</span>
                    );
                  })}{" "}
                  <br />
                  <span>
                    <span className="font-normal">Release Date:</span>{" "}
                    {movie?.year}
                  </span>
                  <br />
                  <span>
                    <span className="font-normal">Duration:</span>{" "}
                    {movie?.runtime[0] +
                      "h" +
                      " " +
                      movie?.runtime.slice(1) +
                      "m"}
                  </span>
                  <br />
                  <span>
                    <span className="font-normal">Genre:</span>{" "}
                    {movie?.genre.map(function (item, index) {
                      return (
                        <span key={index}>{(index ? ", " : "") + item}</span>
                      );
                    })}{" "}
                  </span>
                </div>
                <div className="border-4 border-blue-700 hover:border-yellow-400 hover:text-yellow-400 mt-8 w-2/4 lg:w-2/5 xl:w-2/6  font-medium flex justify-center">
                  <button className="p-2 uppercase xl:text-base">
                    Rent from $7.00
                  </button>
                </div>
                <div className="pt-6 text-sm xl:text-base">
                  <p>
                    Walt Disney Animation Studios’ “Encanto” tells the tale of
                    an extraordinary family, the Madrigals, who live hidden in
                    the mountains of Colombia, in a magical house, in a vibrant
                    town, in a wondrous, charmed place called an Encanto. The
                    magic of the Encanto has blessed every child in the family
                    with a unique gift from super strength to the power to
                    heal—every child except one, Mirabel (voice of Stephanie
                    Beatriz). But when she discovers that the magic surrounding
                    the Encanto is in danger, Mirabel decides that she, the only
                    ordinary Madrigal, might just be her exceptional family’s
                    last hope. Releasing on Nov. 24, 2021, the film features
                    all-new songs by Emmy®, GRAMMY® and Tony Award® winner
                    Lin-Manuel Miranda (“Hamilton,” “Moana”) and is directed by
                    Byron Howard (“Zootopia,” “Tangled”) and Jared Bush
                    (co-director “Zootopia”), co-directed by Charise Castro
                    Smith (writer “The Death of Eva Sofia Valdez”), and produced
                    by Clark Spencer and Yvett Merino; Bush and Castro Smith are
                    screenwriters on the film.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IKContext>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MovieDetail;
