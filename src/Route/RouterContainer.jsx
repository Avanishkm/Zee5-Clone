import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import Home from "../Container/Home/Home";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Movies from "../Container/Movies/Movies";
import TVSeries from "../Container/TVSeries/TVSeries";
import Login from "../Container/Login/Login";
import Documentries from "../Container/Documentries/Documentries";
import VideoSong from "../Container/VideoSong/VideoSong";
import ShortFilm from "../Container/ShortFilm/ShortFilm";
import Watch from "../Container/Watch/Watch";
import WatchList from "../Container/WatchList/WatchList";
// import SearchCard from "../Container/SearchCard/SearchCard";
import BuyPlan from "../Container/BuyPlan/BuyPlan";
import Registration from "../Container/Registration/Registration";
import ZeeExclusive from "../Container/ZeeExclusive/ZeeExclusive";
import AllDocumentries from "../Container/AllDocumentries/AllDocumentries";
import AllDrama from "../Container/AllDrama/AllDrama";
import AllMovies from "../Container/ZeeExclusive/ZeeExclusive";
import AllShows from "../Container/AllShows/AllShows";
import AllTrailer from "../Container/AllTrailer/AllTrailer";
import AllWebSeries from "../Container/AllWebSeries/AllWebSeries";
import NoResult from "../Container/NoResult/NoResult";
import Profile from "../Container/Profile/Profile";
import Subscription from "../Container/Subscription/Subscription";
import Retail from "../Container/Retail/Retail";
import Transaction from "../Container/Transaction/Transaction";
import TermOfUse from "../Container/TermOfUse/TermOfUse";
import { FetchProvider } from "../FetchContext";
import Search from "../Container/Search/Search";

const RouterContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [Email, setEMail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const setLoggedInStatus = (status) => {
    setIsLoggedIn(status);
  };

  const { pathname } = useLocation();
  const showHead =
    pathname.includes("Login") ||
    pathname.includes("Register") ||
    pathname.includes("BuyPlan");

  return (
    <>
    <FetchProvider>
      {!showHead && (
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          username={userName}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/TvShows" element={<TVSeries />} />
        <Route path="/Documentary" element={<Documentries />} />
        <Route path="/song" element={<VideoSong />} />
        <Route path="/shortfilm" element={<ShortFilm />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/WatchList" element={<WatchList />} />
        <Route path="/result/:id" element={<Search />} />
        <Route path="/ZeeExclusive" element={<ZeeExclusive />} />
        <Route path="/AllDocumentries" element={<AllDocumentries />} />
        <Route path="/AllDrama" element={<AllDrama />} />
        <Route path="/AllMovies" element={<AllMovies />} />
        <Route path="/AllShows" element={<AllShows />} />
        <Route path="/AllTrailer" element={<AllTrailer />} />
        <Route path="/AllWebSeries" element={<AllWebSeries />} />
        <Route path="/NoResult" element={<NoResult />} />
        <Route
          path="/Profile"
          element={isLoggedIn ? <Profile /> : <Navigate />}
          username={userName}
          email={Email}
        />
        <Route
          path="/Subscription"
          element={isLoggedIn ? <Subscription /> : <Navigate />}
        />
        <Route
          path="/Rental"
          element={isLoggedIn ? <Retail /> : <Navigate />}
        />
        <Route
          path="/Transaction"
          element={isLoggedIn ? <Transaction /> : <Navigate />}
        />
        {/* <Route path="/AboutUs" element={<AboutUs   />} /> */}
        <Route path="/TermOfUse" element={<TermOfUse />} />

        {/* protected routes */}

        <Route
          path="/Login"
          element={
            <Login
              setLoggedInStatus={setLoggedInStatus}
              setUserName={setUserName}
              setEMail={setEMail}
            />
          }
        />
        <Route
          path="/Register"
          element={
            <Registration
              setLoggedInStatus={setLoggedInStatus}
              setEMail={setEMail}
              setUserName={setUserName}
            />
          }
        />
        <Route path="/BuyPlan" element={<BuyPlan />} />
      </Routes>
      </FetchProvider>
    </>
  );
};

export default RouterContainer;