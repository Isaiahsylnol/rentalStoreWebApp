import React from "react";
import Header from "../components/Header";
import { IKImage, IKContext } from "imagekitio-react";
import Footer from "../components/Footer";
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
  let news = movies.slice(0, 4);
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
          <div className="h-auto w-full sm:w-1/2 lg:mr-20 p-4 sm:p-0 mt-20">
            <h2 className="text-2xl uppercase font-bold text-white">
              Upcoming
            </h2>
            <ul className="text-left p-4">
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
        <div>
          {/* News articles */}
          <div className="flex justify-center p-12">
          <div className="w-4/5">
            <h1 className="text-white text-left font-semibold text-3xl mb-8">
              The latest in film news
            </h1>
            <ul className="text-left sm:grid sm:grid-cols-4 sm:gap-12">
              {news.map(function (movie, i) {
                return (
                  <li
                    key={i}
                    className="text-white text-left font-semibold p-8 sm:p-0"
                  >
                    <button>
                      <img src={avatar} alt="Logo" className="rounded-xl" />
                      <div className="mt-4 text-left">Lorem ipsum dolor sit amet.</div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          </div>
          <div className="h-auto w-full p-10 flex justify-center content-end">
            <div className="w-3/4 h-5/6 bg-zinc-800 p-14 items-end rounded-lg flex">
              <img src={hobbitHouse} alt="The " className="rounded-xl"/>
              <div className="absolute justify-center align-left flex flex-col">
              <h2 className="mb-52 font-bold text-white text-2xl ml-16 mt-10 sm:text-4xl uppercase">
              The hobbit
            </h2>
            <h2 className="absolute mb-32 w-full font-semibold text-white text-1xl ml-8 mt-10 sm:text-1xl uppercase">
              Adventure, Fantasy 
            </h2>
              <button className="absolute ml-16 mt-12 h-14 w-36 rounded-3xl text-white hover:opacity-70 font-semibold uppercase bg-cyan-600">
                Watch
              </button>
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
