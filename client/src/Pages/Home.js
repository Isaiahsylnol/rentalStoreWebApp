import React, { useState } from "react";
import Header from "../components/Header";
import { IKImage, IKContext } from "imagekitio-react";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import { SimilarMoviesWidget } from "../components/SimilarMoviesWidget";
 
// Mock data
const movies = [
  { title: "Avatar", release_date: "2023-02-12" },
  { title: "SpideMan Long Way Home", release_date: "2023-02-17" },
  { title: "Kill Bill", release_date: "2023-02-26" },
  { title: "The Departed", release_date: "2023-02-26" },
  { title: "La La Land", release_date: "2023-03-03" },
  { title: "American X History", release_date: "2023-03-09" },
  { title: "Gone Girl", release_date: "2023-03-20" },
  { title: "Django", release_date: "2023-04-02" },
  { title: "SpideMan Long Way Home", release_date: "2023-04-04" },
];
 
function getFilmDate(film) {
  let date = new Date(film);
  console.log(date);
  return date;
}
 
const Home = () => {
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(4);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Records to be displayed on the current page
  const currentRecords = movies.slice(indexOfFirstRecord, indexOfLastRecord);
 
  const nPages = Math.ceil(movies.length / recordsPerPage);
  return (
    <div>
      <Header />
      {/* Container */}
      <div className="mt-24">
        <div className="sm:flex p-8">
          {/* left column - Feature Card */}
          <div className="w-full"> <h2 className="cursor-default font-bold w-1/3 absolute text-neutral-400 text-6xl sm:text-7xl md:text-8xl uppercase opacity-25">
                All the Latest Movies
              </h2>
      
          </div>
          {/* Right column - Upcoming movies */}
          <div className="h-fit rounded-2xl bg-slate-700 w-full sm:w-5/6 xl:w-2/5 lg:mr-20 p-5 mt-20">
            <h2 className="text-2xl uppercase font-bold text-white p-3 mb-4 cursor-default">
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
        <div className="lg:w-11/12 xl:w-5/6 mx-auto">
          <h1 className="text-2xl text-white font-semibold ml-6">
            LATEST NEWS
          </h1>
          <div className="flex justify-center mb-20">
            <ul className="text-left sm:grid p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <li className="text-white text-left font-semibold mb-8">
                <button>
                  <img
                  width={320}
                    src={require("../assets/godzilla.jpg")}
                    alt="Characters from Uncharted the film"
                    className="rounded-xl object-cover sm:h-36 h-44 sm:w-60"
                  />
                  <span className="float-left">
                    Lorem ipsum dolor sit amet.
                  </span>
                </button>
              </li>
              <li className="text-white text-left font-semibold mb-8">
                <button>
                  <img
                  width={320}
                    src={require("../assets/film-set-construction.png")}
                    alt="Film equipment staged in front of studio green screen"
                    className="rounded-xl object-fit sm:h-36 h-44 sm:w-60"
                  />
                  <span className="float-left">
                    Lorem ipsum dolor sit amet.
                  </span>
                </button>
              </li>
              <li className="text-white text-left font-semibold mb-8">
                <button>
                  <img
                  width={320}
                    src={require("../assets/glass-onion.jpg")}
                    alt="Characters from Glass Onion"
                    className="rounded-xl object-cover sm:h-36 h-44 sm:w-60"
                  />
                  <span className="float-left">
                    Lorem ipsum dolor sit amet.
                  </span>
                </button>
              </li>
              <li className="text-white text-left font-semibold mb-8">
                <button>
                  <img
                  width={320}
                    src={require("../assets/classic.jpg")}
                    alt="Candid of Steven Spielberg filming on set"
                    className="rounded-xl object-cover sm:h-36 h-44 sm:w-60"
                  />
                  <span className="float-left">
                    Lorem ipsum dolor sit amet.
                  </span>
                </button>
              </li>
              <li className="text-white text-left font-semibold mb-8">
                <button>
                  <img
                  width={320}
                    src={require("../assets/uncahrted.jpg")}
                    alt="Characters from Uncharted the film"
                    className="rounded-xl object-cover sm:h-36 h-44 sm:w-60"
                  />
                  <span className="float-left">
                    Lorem ipsum dolor sit amet.
                  </span>
                </button>
              </li>
              <li className="text-white text-left font-semibold mb-8">
                <button>
                  <img
                  width={320}
                    src={require("../assets/essentials.webp")}
                    alt="Collage of essential film characters"
                    className="rounded-xl object-cover sm:h-36 h-44 sm:w-60"
                  />
                  <span className="float-left">
                    Lorem ipsum dolor sit amet.
                  </span>
                </button>
              </li>
              <li className="text-white text-left font-semibold mb-8">
                <button>
                  <img
                  width={320}
                    src={require("../assets/handmaids-tale.jpg")}
                    alt="Game of Thrones film location"
                    className="rounded-xl object-cover sm:h-36 h-44 sm:w-60"
                  />
                  <span className="float-left">
                    Lorem ipsum dolor sit amet.
                  </span>
                </button>
              </li>
              <li className="text-white text-left font-semibold mb-8">
                <button>
                  <img
                  width={320}
                    src={require("../assets/oscar-1.webp")}
                    alt="Actors arriving at the Oscars"
                    className="rounded-xl object-cover sm:h-36 h-44 sm:w-60"
                  />
                  <span className="float-left">
                    Lorem ipsum dolor sit amet.
                  </span>
                </button>
              </li>
            </ul>
          </div>
          {/* Featured movie */}
        
            <div className="bg-zinc-800 sm:p-8 items-end sm:rounded-lg">
              <div className="lg:grid lg:grid-cols-4">
                <div className="flex p-4 flex-row col-span-3 justify-center">
                  <div className="text-left text-white">
                    <div className='rounded-xl bg-[url("https://ik.imagekit.io/bbwxfzjdl2zg/Hobbiton-Courtesy-of-Steve-Hall-_AJrSkjwcn.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671414852907")] bg-cover bg-center'>
                      <div className="p-8 uppercase font-bold">
                        <h2 className="text-2xl font-bold sm:text-4xl mt-72">
                          The hobbit
                        </h2>
                        <h2 className="pb-4 text-base font-semibold">
                          Action, Adventure
                        </h2>
                        <button className="h-14 w-full uppercase sm:w-36 rounded-3xl hover:bg-[#0783a0] bg-cyan-600">
                          Watch
                        </button>
                      </div>
                    </div>
                    <div className="m-8 sm:m-0 sm:mt-8">
                      Magna minim nisi ea veniam reprehenderit officia nulla
                      ullamco id duis laborum minim eu mollit. Ea irure Lorem
                      eiusmod tempor ea adipisicing velit nisi nostrud. Lorem
                      minim cupidatat officia qui. Est velit cupidatat magna
                      incididunt Lorem ut qui labore duis ex elit. Velit non
                      reprehenderit laborum reprehenderit est sit laborum minim
                      dolor exercitation est reprehenderit officia commodo. Nisi
                      ea fugiat aliqua aute elit elit eu enim. Tempor incididunt
                      ea mollit eu. Labore dolore do cillum laboris
                      exercitation. Magna eiusmod aliqua nostrud non nostrud
                      tempor sit aliqua. Quis cupidatat nostrud consectetur do
                      aliquip nisi aute velit aliqua laboris. Ea reprehenderit
                      fugiat incididunt nulla enim adipisicing id adipisicing
                      ea. Reprehenderit fugiat anim sunt eiusmod adipisicing
                      laborum dolor.
                    </div>
                  </div>
                </div>
                <div>
                  <SimilarMoviesWidget data={currentRecords} />
                  <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
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
 
 


