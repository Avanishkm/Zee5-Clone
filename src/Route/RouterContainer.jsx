import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Container/Home/Home";
import Movies from "../Container/Movies/Movies";
import TVSeries from "../Container/TVSeries/TVSeries";
import Login from "../Container/Login/Login";
import Documentries from "../Container/Documentries/Documentries";
import VideoSong from "../Container/VideoSong/VideoSong";
import ShortFilm from "../Container/ShortFilm/ShortFilm";
import Watch from "../Container/Watch/Watch";
import WatchList from "../Container/WatchList/WatchList";
import SearchCard from "../Container/SearchCard/SearchCard";
import BuyPlan from "../Container/BuyPlan/BuyPlan";
import Registration from "../Container/Registration/Registration"
import Header from "../Components/Header/Header";
import ZeeExclusive from "../Container/ZeeExclusive/ZeeExclusive"
import AllDocumentries from "../Container/AllDocumentries/AllDocumentries";
import AllDrama from "../Container/AllDrama/AllDrama";
import AllMovies from "../Container/ZeeExclusive/ZeeExclusive";
import AllShows from "../Container/AllShows/AllShows";
import AllTrailer from "../Container/AllTrailer/AllTrailer";
import AllWebSeries from "../Container/AllWebSeries/AllWebSeries";

const RouterContainer = () => {
  const [showHaed, setShowHead] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const setLoggedInStatus  = (status) =>{
    setIsLoggedIn(status)
  }

  const handleShown = () =>{
      setShowHead(true)
  }

  

  const handleNotShown  = () =>{
    setShowHead(false)
  }


  return (
    <>
      <Router>
        {showHaed && <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={userName}/>}
        <Routes>
          <Route path="/" element={<Home handleShown={handleShown}/>} />
          <Route path="/movies" element={<Movies handleShown={handleShown}/>} />
          <Route path="/TVSeries" element={<TVSeries handleShown={handleShown}/>} />
          <Route path="/Documentary" element={<Documentries handleShown={handleShown}/>} />
          <Route path="/song" element={<VideoSong handleShown={handleShown}/>} />
          <Route path="/shortfilm" element={<ShortFilm handleShown={handleShown}/>} />
          <Route path="/watch/:id" element={<Watch handleShown={handleShown}/>} />
          <Route path="/WatchList" element={<WatchList handleShown={handleShown}/>} />
          <Route path="/result/:id" element={<SearchCard />} />
          <Route path="/ZeeExclusive" element={<ZeeExclusive handleShown={handleShown} />} />
          <Route path="/AllDocumentries" element={<AllDocumentries handleShown={handleShown} />} />
          <Route path="/AllDrama" element={<AllDrama handleShown={handleShown} />} />
          <Route path="/AllMovies" element={<AllMovies handleShown={handleShown} />} />
          <Route path="/AllShows" element={<AllShows handleShown={handleShown} />} />
          <Route path="/AllTrailer" element={<AllTrailer handleShown={handleShown} />} />
          <Route path="/AllWebSeries" element={<AllWebSeries handleShown={handleShown} />} />
          
          <Route path="/Login" element={<Login handleNotShown={handleNotShown} setLoggedInStatus={setLoggedInStatus} setUserName={setUserName}/>} />
          <Route path="/Register" element={<Registration handleNotShown={handleNotShown} setLoggedInStatus={setLoggedInStatus} setUserName={setUserName}/>} />
          <Route path="/BuyPlan" element={<BuyPlan handleNotShown={handleNotShown}/>} /> 
        </Routes>
      </Router>
    </>
  );
};

export default RouterContainer;
