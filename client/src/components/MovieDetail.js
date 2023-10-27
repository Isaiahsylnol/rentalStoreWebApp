import React, { useEffect, useState } from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { BsBookmarkFill } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createRental } from "../queries/rentalApi";

const MovieDetail = () => {
  const { slug } = useParams();
  const [movie, setMovie] = useState();
  const [user, setUser] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  useEffect(() => {
    // Read user from localStorage
    const userData = JSON.parse(localStorage.getItem("User"));
    setUser(userData);
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/movies/${slug}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [slug]);

  function convertToTimeFormat(minutes) {
    if (!minutes || isNaN(minutes)) {
      return "N/A"; // Handle invalid input
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedTime = `${hours}:${remainingMinutes
      .toString()
      .padStart(2, "0")}`;

    return formattedTime;
  }

  function calculateDays(startDate, endDate) {
    const timeDifference = endDate - startDate;

    // Convert the time difference to days
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

    // Check if the duration is less than three days
    if (daysDifference < 3) {
      console.error("Date duration is less than two days");
      return;
    }
    return Math.floor(daysDifference);
  }

  const triggerRent = () => {
    const duration = calculateDays(startDate, endDate);
    createRental(user?.id, movie.id, movie.title, duration, endDate, startDate);
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const toggleDates = () => {
    setDatePickerVisible(!datePickerVisible);
  };

  return (
    <div>
      <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
        <div className="mt-8 min-h-screen flex items-center">
          {/* Container  */}
          <div className="bg-[#2c2a2a] lg:p-12 grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto rounded-xl">
            {/* Movie poster */}
            <div className="mx-auto lg:p-0 p-16">
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
            <div className="flex justify-center sm:-mt-6">
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
                    {convertToTimeFormat(movie?.runtime)}
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
                <div className="flex justify-center sm:justify-start">
                  <div className="flex flex-col items-center justify-center w-full sm:w-auto">
                    <div className="bg-blue-500 rounded-md mb-5 mt-8 w-full sm:w-60 font-bold text-center hover:transition hover:scale-105 hover:ease-in-out hover:delay-150">
                      <button
                        className="p-2 uppercase xl:text-base"
                        onClick={toggleDates}
                      >
                        View availability
                      </button>
                    </div>
                    {datePickerVisible && (
                      <div className="flex flex-col w-full items-center">
                        <DatePicker
                          selected={startDate}
                          onChange={onChange}
                          startDate={startDate}
                          endDate={endDate}
                          dateFormat="MM/yyyy/DD"
                          selectsRange
                          inline
                        />
                        <button
                          onClick={triggerRent}
                          className="sm:w-60 w-64 mt-5 p-4 text-base rounded-md bg-yellow-400 text-black transition duration-300 ease-in-out transform hover:scale-105 font-bold"
                        >
                          Rent from $7.00
                        </button>
                      </div>
                    )}
                  </div>
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
    </div>
  );
};

export default MovieDetail;
