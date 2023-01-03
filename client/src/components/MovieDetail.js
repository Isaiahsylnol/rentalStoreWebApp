import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { BsBookmarkFill } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import Header from "./Header";
import Footer from "./Footer";

function MovieDetail(props) {
  return (
    <div>
      <div className="h-screen h-4/6">
        <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
          <Header />
          <div className="mt-32 sm:mt-15 md:mt-24 lg:mt-52 flex justify-center">
            {/* Container  */}
            <div className="xl:w-4/6 bg-[#353232] p-12 justify-center rounded-xl grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
              {/* Movie poster */}
              <div className="flex justify-center sm:col-span-2 md:col-span-1">
                <IKImage
                  path={props.movie.thumbnail + ".jpg"}
                  transformation={[
                    {
                      height: "700",
                      width: "430",
                    },
                  ]}
                />
              </div>
              {/* Movie Details */}
              <div className="flex justify-center mt-10">
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
                      {props.movie.title}
                    </h3>
                    <span className="font-normal">Producer:</span>{" "}
                    {props.movie.director[0]} <br />
                    <span>
                      <span className="font-normal">Release Date:</span>{" "}
                      {props.movie.year}
                    </span>
                    <br />
                    <span>
                      <span className="font-normal">Duration:</span>{" "}
                      {props.movie.runtime}
                    </span>
                    <br />
                    <span>
                      <span className="font-normal">Genre:</span>{" "}
                      {props.movie.genre[0]}
                    </span>
                  </div>
                  <div className="border-4 border-blue-700 hover:border-yellow-400 hover:text-yellow-400 mt-12 w-52  font-medium flex justify-center">
                    <button className="p-4 uppercase">Rent from $7.00</button>
                  </div>
                  <div className="h-auto pt-7">
                    <p className="mt-8 text-left">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum
                      comes from sections 1.10.32 and 1.10.33 of "de Finibus
                      Bonorum et Malorum" (The Extremes of Good and Evil) by
                      Cicero, written in 45 BC. This book is a treatise on the
                      theory of ethics, very popular during the Renaissance. The
                      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                      comes from a line in section 1.10.32.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IKContext>
      </div>
      <div className="mt-20   xl:mt-40">
        <Footer />
      </div>
    </div>
  );
}

export default MovieDetail;
