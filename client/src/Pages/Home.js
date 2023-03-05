import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel, { CarouselItem } from "../components/Carousel/Carousel";
import Pagination from "../components/Pagination";
import { SimilarMoviesWidget } from "../components/SimilarMoviesWidget";
import { GET_MOVIES } from "../queries/movieQueries";
import { useQuery } from "@apollo/client";
// Mock data
const movies = [
  { title: "Snow Angel", release_date: "2023-01-20" },
  { title: "Everything Under Control", release_date: "2023-01-21" },
  { title: "Pathan", release_date: "2023-01-25" },
  { title: "Infinity Pool", release_date: "2023-01-27" },
  { title: "My Teacher", release_date: "2023-01-27" },
  { title: "Blood", release_date: "2023-01-27" },
  { title: "Close", release_date: "2023-01-27" },
  { title: "Condor's Nest", release_date: "2023-01-27" },
  { title: "Harold and the Purple Crayon", release_date: "2023-01-27" },
];

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(4);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Records to be displayed on the current page
  const currentRecords = data.movies.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(data.movies.length / recordsPerPage);
  return (
    <div>
      <Header />
      {/* Container */}
      <div className="p-4 mt-40 md:mt-24">
        <div>
          <div className="md:flex mx-auto items-center justify-center max-w-7xl">
            {/* left column - Feature Card */}
            <div className="w-full md:w-3/5">
              <Carousel>
                <CarouselItem>
                  <div className='rounded-xl w-11/12 h-96 bg-[url("https://ik.imagekit.io/bbwxfzjdl2zg/totoro_TWjcO4fVo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673915010114")] bg-cover bg-center'>
                    <div className="p-8 uppercase font-bold mb-32 text-white cursor-pointer">
                      <div className="backdrop-blur-[2px] w-min">
                        <h2 className="text-2xl md:text-2xl mt-36">
                        My Neighbor Totoro
                        </h2>
                        <h2 className="pb-4 text-base font-semibold">
                          Fantasy, Anime
                        </h2>
                        <button className="h-10 uppercase w-36 hover:bg-[#2b4d55] bg-cyan-800 opacity-90">
                          Trailer
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className='rounded-xl w-11/12 h-96 bg-[url("https://ik.imagekit.io/bbwxfzjdl2zg/pussinbootslastwish_7mNNEMBBX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673916134278")] bg-cover bg-center'>
                    <div className="p-8 uppercase font-bold mb-32 text-white cursor-pointer">
                      <div className="backdrop-blur-[2px] w-min">
                        <h2 className="text-xl md:text-lg lg:text-2xl mt-36">
                          Puss in Boots: The Last Wish
                        </h2>
                        <h2 className="pb-4 text-base font-semibold">
                          Fantasy, Animation
                        </h2>
                        <button className="h-10 uppercase w-36 hover:bg-[#2b4d55] bg-cyan-800 opacity-90">
                          Trailer
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className='rounded-xl w-11/12 h-96 bg-[url("https://ik.imagekit.io/bbwxfzjdl2zg/197617_hwLA-JJBc.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1673928989073")] bg-cover bg-center'>
                    <div className="p-8 uppercase font-bold mb-32 text-white cursor-pointer">
                      <div className="backdrop-blur-[2px] w-min">
                        <p className="text-lg lg:text-2xl mt-36 break-words">
                          Black Panther: Wakanda Forever
                        </p>
                        <h2 className="pb-4 text-sm font-semibold">
                          Action, Adventure
                        </h2>
                        <button className="h-10 uppercase w-36 hover:bg-[#2b4d55] bg-cyan-800 opacity-90">
                          Trailer
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </Carousel>
            </div>
            {/* Right column - Upcoming movies */}
            <div className="h-fit rounded-2xl bg-slate-700 w-full max-w-5xl justify-center mx-auto mt-12 sm:mt-0 p-5">
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
        </div>
        {/* News articles */}
        <div className="flex-col mx-auto max-w-7xl pt-8 sm:p-5">
          <div className="bg-zinc-800 text-white rounded-xl p-6">
            <h1 className="h-16 text-2xl font-semibold">LATEST NEWS</h1>
            <ul className="font-normal sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-8">
              <li className="mb-8">
                <button>
                  <img
                    width={420}
                    src={require("../assets/godzilla.jpg")}
                    alt="Characters from Uncharted the film"
                    className="object-cover xl:w-96 sm:h-40 rounded-md"
                  />
                  <span className="float-left text-left text-lg mt-3">
                    Godzilla and Kong keep growing. But they’re no match for
                    physics
                  </span>
                </button>
              </li>
              <li className="mb-8">
                <button>
                  <img
                    width={420}
                    src={require("../assets/film-set-construction.png")}
                    alt="Film equipment staged in front of studio green screen"
                    className="object-cover xl:w-96 sm:h-40 rounded-md"
                  />
                  <span className="float-left text-left text-lg mt-3">
                    The Art of Illusion: The Design of Film Set Construction
                  </span>
                </button>
              </li>
              <li className="mb-8">
                <button>
                  <img
                    width={420}
                    src={require("../assets/glass-onion.jpg")}
                    alt="Characters from Glass Onion"
                    className="object-cover xl:w-96 sm:h-40 rounded-md"
                  />
                  <span className="float-left text-left text-lg mt-3">
                    Glass Onion: Daniel Craig's Knives Out sequel continues
                    Whodunit craze
                  </span>
                </button>
              </li>
              <li className="mb-8">
                <button>
                  <img
                    width={420}
                    src={require("../assets/classic.jpg")}
                    alt="Candid of Steven Spielberg filming on set"
                    className="object-cover xl:w-96 sm:h-40 rounded-md"
                  />
                  <span className="float-left text-left text-lg mt-3">
                    The Untold Truth Of Steven Spielberg
                  </span>
                </button>
              </li>
              <li className="mb-8">
                <button>
                  <img
                    width={420}
                    src={require("../assets/uncahrted.jpg")}
                    alt="Characters from Uncharted the film"
                    className="object-cover xl:w-96 sm:h-40 rounded-md"
                  />
                  <span className="float-left text-left text-lg mt-3">
                    Uncharted movie Easter eggs: every major reference to the
                    games
                  </span>
                </button>
              </li>
              <li className="mb-8">
                <button>
                  <img
                    width={420}
                    src={require("../assets/essentials.webp")}
                    alt="Collage of essential film characters"
                    className="object-cover xl:w-96 sm:h-40 rounded-md"
                  />
                  <span className="float-left text-left text-lg mt-3">
                    The 89 Best Movies of All Time: The Ultimate Must-Watch
                    Films
                  </span>
                </button>
              </li>
              <li className="mb-8">
                <button>
                  <img
                    width={420}
                    src={require("../assets/handmaids-tale.jpg")}
                    alt="Game of Thrones film location"
                    className="object-cover xl:w-96 sm:h-40 rounded-md"
                  />
                  <span className="float-left text-lg mt-3">
                    Review: The Handmaid’s Tale
                  </span>
                </button>
              </li>
              <li className="mb-8">
                <button>
                  <img
                    width={420}
                    src={require("../assets/oscar-1.webp")}
                    alt="Actors arriving at the Oscars"
                    className="object-cover xl:w-96 sm:h-40 rounded-md"
                  />
                  <span className="float-left text-left text-lg">
                    Oscars 2022: The 25 Best Red Carpet Looks
                  </span>
                </button>
              </li>
            </ul>
          </div>
          {/* Featured movie */}
          <section className="bg-zinc-800 mt-16 flex flex-col  items-center  sm:rounded-lg">
            <div className="sm:grid sm:grid-cols-3 space-x-6 justify-center mx-auto">
                <div className="text-left text-white pb-6 col-span-2">
                  <div className='sm:rounded-xl bg-[url("https://ik.imagekit.io/bbwxfzjdl2zg/Hobbiton-Courtesy-of-Steve-Hall-_AJrSkjwcn.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671414852907")] bg-cover bg-center'>
                    <div className="p-8 uppercase font-bold">
                      <h2 className="text-2xl font-bold sm:text-4xl mt-72">
                        The hobbit
                      </h2>
                      <h2 className="pb-4 text-base font-semibold">
                        Action, Adventure
                      </h2>
                      <button className="h-10 w-24 uppercase md:w-36 rounded-3xl hover:bg-[#0783a0] bg-cyan-600">
                        Watch
                      </button>
                    </div>
                  </div>
                </div>
              <p className="text-white">
                Magna minim nisi ea veniam reprehenderit officia nulla
                    ullamco id duis laborum minim eu mollit. Ea irure Lorem
                    eiusmod tempor ea adipisicing velit nisi nostrud. Lorem
                    minim cupidatat officia qui. Est velit cupidatat magna
                    incididunt Lorem ut qui labore duis ex elit. Velit non
                    reprehenderit laborum reprehenderit est sit laborum minim
                    dolor exercitation est reprehenderit officia commodo. Nisi
                    ea fugiat aliqua aute elit elit eu enim. Tempor incididunt
                    ea mollit eu. Labore dolore do cillum laboris exercitation.
                    Magna eiusmod aliqua nostrud non nostrud tempor sit aliqua.
                    Quis cupidatat nostrud consectetur do aliquip nisi aute
                    velit aliqua laboris. Ea reprehenderit fugiat incididunt
                    nulla enim adipisicing id adipisicing ea. Reprehenderit
                    fugiat anim sunt eiusmod adipisicing laborum dolor.
              </p>
            </div>
            <div className="mt-4 ">
                  <SimilarMoviesWidget data={currentRecords} />
                <Pagination
                  nPages={nPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
                  </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
