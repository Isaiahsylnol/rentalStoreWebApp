import React, {useState} from "react";
import Header from "../components/Header";
import { IKImage, IKContext } from "imagekitio-react";
import Footer from "../components/Footer";
import { ButtonBase } from '@mui/material';
import avatar from "../assets/avatar.jpg";
import hobbitHouse from "../assets/Hobbiton-Courtesy-of-Steve-Hall-.webp";

const movies = [
  { title: "Avatar", release_date: "022223" },
  { title: "SpideMan Long Way Home", release_date: "021123" },
  { title: "Kill Bill", release_date: "020423" },
  { title: "The Departed", release_date: "021221" },
  { title: "La La Land", release_date: "012223" },
  { title: "American X History", release_date: "020623" },
  { title: "Gone Girl", release_date: "042421" },
  { title: "Django", release_date: "121522" },
];

const Home = () => {

  return (
    <div>
      <Header />
      {/* Container */}
      <div className="mt-24">
        <div className="sm:flex">
          {/* left column - Feature Card */}
          <div className="w-full">
            <div className="p-10 sm:p-20">
              <h2 className="font-bold w-1/3 absolute text-neutral-400 text-6xl sm:text-7xl md:text-8xl uppercase opacity-25">
                Latest Movies
              </h2>
              <div className="flex justify-center items-center">
                <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
                  <IKImage
                    path={"avatar_Xyir72Pqa.jpg"}
                    transformation={[
                      {
                        height: "450",
                      },
                    ]}
                    className="rounded-xl"
                  />
                </IKContext>
              </div>
            </div>
          </div>
          {/* Right column - Upcoming movies */}
          <div className="h-auto  sm:w-full md:w-2/6 lg:mr-20 p-4 sm:p-0 mt-20">
            <h2 className="text-2xl uppercase font-bold text-white bg-cyan-900 p-3 mb-4">
              Upcoming
            </h2>
            <ul className="text-left">
              {movies.map(function (movie, i) {
                return (
                  <li
                    key={i}
                    className="p-1 border-b-2 border-white text-white font-semibold"
                  >
                    <span>{movie.title}</span>
                    <span className="float-right">{movie.release_date}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* News articles */}
        <div>
          <div className="lg:w-1/3">
            <h1 className="pt-14 text-3xl sm:p-3 round text-white font-semibold sm:text-2xl md:text-3xl sm:mt-16 sm:w-2/3 md:w-5/12 mb-4 border-b-4 border-cyan-700 ml-8 text-left">
              LATEST NEWS
            </h1>
          </div>
          <div className="w-auto flex justify-center mb-20">
            <ul className="text-left sm:grid p-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-3/3">
              <li className="text-white text-left font-semibold sm:p-0">
                <button>
                  <img
                    src={require("../assets/uncahrted.jpg")}
                    alt="Characters from Uncharted the film"
                    className="rounded-xl h-48 w-full object-contain"
                  />
                  <div className="text-left">Lorem ipsum dolor sit amet.</div>
                </button>
              </li>
              <li className="text-white text-left font-semiboldsm:p-0">
                <button>
                  <img
                    src={require("../assets/essentials.webp")}
                    alt="Collage of essential film characters"
                    className="rounded-xl h-48 w-full object-contain"
                  />
                  <div className="text-left">Lorem ipsum dolor sit amet.</div>
                </button>
              </li>
              <li className="text-white text-left font-semibold sm:p-0">
                <button>
                  <img
                    src={require("../assets/handmaids-tale.jpg")}
                    alt="Game of Thrones film location"
                    className="rounded-xl h-48 w-full object-contain"
                  />
                  <div className="text-left">Lorem ipsum dolor sit amet.</div>
                </button>
              </li>
              <li className="text-white text-left font-semibold sm:p-0">
                <button>
                  <img
                    src={require("../assets/oscar-1.webp")}
                    alt="Actors arriving at the Oscars"
                    className="rounded-xl h-48 w-full object-contain"
                  />
                  <div className="text-left">Lorem ipsum dolor sit amet.</div>
                </button>
              </li>
              <li className="text-white text-left font-semibold sm:p-0">
                <button>
                  <img
                    src={require("../assets/uncahrted.jpg")}
                    alt="Characters from Uncharted the film"
                    className="rounded-xl h-48 w-full object-contain"
                  />
                  <div className="text-left">Lorem ipsum dolor sit amet.</div>
                </button>
              </li>
              <li className="text-white text-left font-semiboldsm:p-0">
                <button>
                  <img
                    src={require("../assets/essentials.webp")}
                    alt="Collage of essential film characters"
                    className="rounded-xl h-48 w-full object-contain"
                  />
                  <div className="text-left">Lorem ipsum dolor sit amet.</div>
                </button>
              </li>
              <li className="text-white text-left font-semibold sm:p-0">
                <button>
                  <img
                    src={require("../assets/handmaids-tale.jpg")}
                    alt="Game of Thrones film location"
                    className="rounded-xl h-48 w-full object-contain"
                  />
                  <div className="text-left">Lorem ipsum dolor sit amet.</div>
                </button>
              </li>
              <li className="text-white text-left font-semibold sm:p-0">
                <button>
                  <img
                    src={require("../assets/oscar-1.webp")}
                    alt="Actors arriving at the Oscars"
                    className="rounded-xl h-48 w-full object-contain"
                  />
                  <div className="text-left">Lorem ipsum dolor sit amet.</div>
                </button>
              </li>
            </ul>
          </div>
          <div className="h-auto p-10 flex justify-center content-end">
            <div className="bg-zinc-800 p-14 items-end rounded-lg flex">
              <div className="lg:grid lg:grid-cols-4 gap-3">
                <div className='col-span-3 text-left h-fit rounded-xl bg-[url("https://ik.imagekit.io/bbwxfzjdl2zg/Hobbiton-Courtesy-of-Steve-Hall-_AJrSkjwcn.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671414852907")] bg-cover bg-center'>
                  <div className="p-8">
                    <h2 className="text-white text-2xl font-bold sm:text-4xl mt-72 flex uppercase">
                      The hobbit
                    </h2>
                    <h2 className="text-white pb-4 font-semibold text-base uppercase">
                      Action, Adventure
                    </h2>
                    <button className="h-14 w-36 rounded-3xl text-white hover:opacity-70 font-semibold uppercase bg-cyan-600">
                      Watch
                    </button>
                  </div>
                </div>
                <div className="bg-blue-100 p-8">
                  <h3 className="text-2xl font-bold">Similar Movies</h3>
                  <div className="mt-10">
                    <ul className="text-left">
                      {movies.map(function (movie, i) {
                        return (
                          <li
                            key={i}
                            className="p-1 border-2 h-auto border-white text-white font-semibold"
                          ><ButtonBase href={`/detail/${movie._id}`}>
                          <div className="">
                        <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
                        <IKImage 
                        path={"default.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671234276238"}  className="h-60"/>
                            <div className="flex justify-center">
                            <div className="text-left text-white">
                              <h1 className="inline text-2xl font-semibold">{movie.title}</h1> <br />
                              Release: {movie.year} <br/>
                            </div>
                            </div>
                        </IKContext>
                        </div>
                        </ButtonBase>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
