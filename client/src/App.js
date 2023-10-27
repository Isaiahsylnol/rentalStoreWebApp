import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginModal } from "./components/Modal/LoginModal";
import ListMovies from "./components/ListMovies";
import MovieDetail from "./components/MovieDetail";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Find from "./components/Find";

import Profile from "./pages/Profile";
import Home from "./pages/Home";

import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/movies/list`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Router>
      <Header films={data} />
      <Routes>
        <Route path="/" element={<Home films={data} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/find" element={<Find />} />
        <Route path="/movies" element={<ListMovies />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail/:slug" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
