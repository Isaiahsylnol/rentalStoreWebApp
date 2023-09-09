import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "./components/NotFound";
import ListMovies from "./components/ListMovies";
import MovieDetail from "./components/MovieDetail";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Find from "./components/Find";
import { LoginModal } from "./components/Modal/LoginModal";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/movies" exact element={<ListMovies />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail/:slug" element={<MovieDetail />} />
        <Route path="/find" element={<Find />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
