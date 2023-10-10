import React, { useEffect } from "react";
import { useState, useRef } from "react";
import {
  Container,
  Flex,
  UnorderedList,
  ListItem,
  Spacer,
  Button,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  textDecoration,
  position,
} from "@chakra-ui/react";
import { SearchIcon, DragHandleIcon, HamburgerIcon } from "@chakra-ui/icons";
import { NavLink, Link } from "react-router-dom";

import Zee from "../../Assets/Zee.jpeg";
import AppsIcon from "@mui/icons-material/Apps";
import { AiOutlineUser, AiOutlineRight } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/react";
import { LuCrown } from "react-icons/lu";
import SearchCard from "../../Container/SearchCard/SearchCard";

export default function Header({ isLoggedIn, setIsLoggedIn, username }) {
  console.log(username);
  const searchStyle = {
    bg: "#0F0617",
    color: "white",
    width: "260px",
    height: "35px",
    pl: "40px",
    border: "1px solid grey",
    borderRadius: "8px",
    fontSize: "12px",
    
    
  };

  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const [option, setIsOption] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchData, setSearchData] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [smallerScreen, setSmallerScreen] = useState(window.innerWidth < 1000);

  const toogleRef = useRef(null);

  const navLinkStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "2px solid white" : "none",
    };
  };

  const toggleDropDown = () => {
    console.log("dropdown clicked");
    setIsDropDownOpen(!isDropdownOpen);
    console.log("isDropDown:", isDropdownOpen);
  };

  const handleOption = () => {
    setIsOption(!option);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    console.log("hamburger opened");
  };

  const handleLogout = () => {
    localStorage.removeItem("signupDeatils");
    setIsLoggedIn(false);
  };

  const clearSearchValue = () => {
    setSearchData("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toogleRef.current && !toogleRef.current.contains(event.target)) {
        
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toogleRef]);

  const handleSearchInputChange = (event) => {
    const userInput = event.target.value;
    setSearchData(userInput);
    setShowSuggestions(userInput.length > 0);
  };

  useEffect(() => {
    const handleResize = () => {
      setSmallerScreen(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {smallerScreen ? (
        <Container style={{ marginTop: "20px" }}>
          <Flex justifyContent="space-between">
            <Flex>
              <img
                src={Zee}
                alt="zee logo"
                style={{ width: "60px", marginLeft: "20px" }}
              />

              <NavLink to="/BuyPlan">
                <Button className="BuyPlanButton">
                  <LuCrown style={{ paddingRight: "5px", fontSize: "15px" }} />
                  BUY PLANS
                </Button>
              </NavLink>
            </Flex>
            <Flex>
              <NavLink
                to="/SearchCard"
                
                style={{ textDecoration: "none", color: "white" }}
              >
                <Box className="searchButton">
                  <SearchIcon />
                </Box>
              </NavLink>
            </Flex>
          </Flex>
          <Flex style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
            <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
              <Container className="navButton">Home</Container>
            </NavLink>
            <NavLink
              to="/TvShows"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">TV Shows</Container>
            </NavLink>
            <NavLink
              to="/Movies"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">Movies</Container>
            </NavLink>
            <NavLink
              to="/TvShows"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">Web Series</Container>
            </NavLink>
            <NavLink
              to="/NoResult"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">Premium</Container>
            </NavLink>
            <NavLink
              to="/NoResult"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">News</Container>
            </NavLink>
            <NavLink
              to="/NoResult"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">Music</Container>
            </NavLink>
            <NavLink
              to="/NoResult"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">Live</Container>
            </NavLink>
            <NavLink
              to="/NoResult"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">Channels</Container>
            </NavLink>
            <NavLink
              to="/NoResult"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">Kids</Container>
            </NavLink>
            <NavLink
              to="/NoResult"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">Eduaruaa</Container>
            </NavLink>
            <NavLink
              to="/WatchList"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">My List</Container>
            </NavLink>
          </Flex>
        </Container>
      ) : (
        <>
          <Container
            p="10px"
            bg="#0F0617"
            color="white"
            position="fixed"
            top="0"
            minWidth="98%"
            zIndex="1000"
          >
            <Flex
              as="nav"
              alignItems="center"
              color="white"
              justifyContent="space-between"
            >
              <Flex>
                <img
                  src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.40"
                  alt="zee logo"
                  style={{ width: "50px", marginLeft: "20px", height: "50px" }}
                />
                <UnorderedList
                  style={{ listStyleType: "none", display: "flex", p: "10px" }}
                >
                  <NavLink to="/" style={navLinkStyle} className="navLink">
                    <ListItem>Home</ListItem>
                  </NavLink>

                  <NavLink
                    to="/TvShows"
                    style={navLinkStyle}
                    className="navLink"
                  >
                    <ListItem style={{ width: "80px" }}>TV Shows</ListItem>
                  </NavLink>

                  <NavLink
                    to="/Movies"
                    style={navLinkStyle}
                    className="navLink"
                  >
                    <ListItem>Movies</ListItem>
                  </NavLink>

                  <ListItem
                    onClick={(e) => {
                      toggleDropDown();
                    }}
                  >
                    <div className="AppsIcon" ref={toogleRef}>
                      <AppsIcon />
                    </div>
                    {isDropdownOpen && (
                      <div
                        style={{
                          position: "absolute",
                          marginTop: "20px",
                          backgroundColor: "#0F0617",
                          width: "200px",
                        }}
                      >
                        <ul className="ul">
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li
                              className="listItem"
                              style={{ marginTop: "20px" }}
                            >
                              Premium
                            </li>
                          </NavLink>
                          <NavLink
                            to="/AllShows"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Web Series</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">News</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Eduaruaa</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Live TV</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Music</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Sports</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Rent</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Kids</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Songs</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Videos</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Channels</li>
                          </NavLink>

                          <br />
                        </ul>
                      </div>
                    )}
                  </ListItem>
                </UnorderedList>
              </Flex>

              <Flex style={{ maxWidth: "150%" }}>
                <Box
                  style={{
                    marginRight: "30px",
                    backgroundColor: "#0F0617",
                    marginTop: "2px",
                  }}
                >
                  <InputGroup>
                    <Input
                      value={searchData}
                      onChange={handleSearchInputChange}
                      type="text"
                      placeholder="Search for Movies, Shows, Channels etc"
                      sx={searchStyle}
                    />
                    {showSuggestions && (
                      <SearchCard
                        searchData={searchData}
                        clearSearchValue={clearSearchValue}
                      />
                    )}
                    <InputLeftElement>
                      {/* <Link to="/SearchResult"> */}
                      <SearchIcon 
                        sx={{
                          cursor: "pointer",
                          color: "white",
                          padding: "10px",
                        }}
                      />
                      {/* </ Link> */}
                    </InputLeftElement>
                  </InputGroup>
                </Box>
                {isLoggedIn ? (
                  <div style={{ marginTop: "2px" }}>
                    <div class="icon-container">
                      <AiOutlineUser
                        className="icon"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          marginRight: "40px",
                          marginTop: "5px",
                        }}
                        onClick={handleOption}
                      />{" "}
                      <div class="tooltip">My Profile</div>
                    </div>
                    {option && (
                      <>
                        <div className="overlay" onClick={handleOption}></div>
                        <div
                          style={{
                            position: "absolute",
                            zIndex: "1000",
                            paddingLeft: "0",
                            marginTop: "5px",
                            backgroundColor: "#0F0617",
                            ":hover": { backgroundColor: "#a361d6" },
                          }}
                        >
                          <ul
                            style={{
                              listStyleType: "none",
                              position: "fixed",
                              backgroundColor: "#0F0617",
                              width: "260px",
                              borderRadius: "5px",
                              transform: "translateX(-30%)",
                              paddingLeft: "30px",
                            }}
                          >
                            <li className="listItem listItem1">
                              <Link
                                to="/Profile"
                                style={{
                                  textDecoration: "none",
                                  color: "grey",
                                  display: "flex",
                                }}
                              >
                                <CiUser
                                  style={{
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    backgroundColor: "rgb(90, 90, 90)",
                                    width: "25px",
                                    height: "25px",
                                    borderRadius: "50%",
                                  }}
                                />
                                <div> {username} </div>
                                <AiOutlineRight
                                  style={{
                                    marginLeft: "40px",
                                    marginTop: "0px",
                                    color: "#8230c6",
                                    fontSize: "25px",
                                  }}
                                />
                              </Link>
                            </li>

                            <Accordion defaultIndex={[0]} allowMultiple>
                              <AccordionItem>
                                <h2>
                                  <AccordionButton
                                    style={{
                                      backgroundColor: "#0F0617",
                                      border: "none",
                                    }}
                                  >
                                    <Box
                                      flex="1"
                                      style={{
                                        backgroundColor: "#0F0617",
                                        marginLeft: "5px",
                                        color: "grey",
                                        fontSize: "15px",
                                        textAlign: "left",
                                        fontFamily: "Noto Sans, sans-serif",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      My Account
                                    </Box>
                                    <AccordionIcon style={{ color: "white" }} />
                                  </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                  <ul className="ProfileList">
                                    <NavLink
                                      to="/Watchlist"
                                      style={{
                                        textDecoration: "none",
                                        color: "white",
                                      }}
                                    >
                                      <li className="profileItem">
                                        My WatchList
                                      </li>
                                    </NavLink>
                                    <NavLink
                                      to="/Subscription"
                                      style={{
                                        textDecoration: "none",
                                        color: "white",
                                      }}
                                    >
                                      <li className="profileItem">
                                        My Subscription
                                      </li>
                                    </NavLink>
                                    <li className="profileItem">My Rentals</li>
                                    <li className="profileItem">
                                      My Transactions
                                    </li>
                                    <li className="profileItem">
                                      Manage your devices
                                    </li>
                                    <li
                                      onClick={() => handleLogout()}
                                      className="profileItem"
                                    >
                                      Logout
                                    </li>
                                    <hr
                                      style={{
                                        marginLeft: "0",
                                        width: "100%",
                                        color: "grey",
                                      }}
                                    />
                                    <li
                                      style={{
                                        fontSize: "11px",
                                        color: "grey",
                                        paddingLeft: "50px",
                                      }}
                                    >
                                      Version 3.14.4
                                    </li>
                                  </ul>
                                </AccordionPanel>
                              </AccordionItem>
                            </Accordion>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  // Conditionally render the login button
                  <NavLink to="/Login">
                    <Button
                      mr={30}
                      sx={{
                        bg: "#0F0617",
                        color: "white",
                        width: "70px",
                        border: "1px white solid",
                        height: "36px",
                        borderRadius: "5px",
                        fontSize: "Bold",
                        cursor: "pointer",
                        marginTop: "2px",
                        fontWeight: "bold",
                        ":hover": {
                          backgroundColor: "white",
                          color: "black",
                          fontWeight: "bold",
                        },
                      }}
                    >
                      Login
                    </Button>
                  </NavLink>
                )}
                <NavLink to="/BuyPlan">
                  <Button
                    mr={30}
                    sx={{
                      marginTop: "2px",
                      bg: "#8230c6",
                      color: "white",
                      border: "1px #8230c6 solid",
                      borderRadius: "5px",
                      width: "115px",
                      height: "36px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "12px",
                      ":hover": {
                        backgroundColor: "#4B0082",
                        border: "1px #4B0082 solid",
                      },
                    }}
                  >
                    <LuCrown
                      style={{
                        paddingRight: "10px",
                        fontSize: "14px",
                        
                      }}
                    />
                    BUY PLAN
                  </Button>
                </NavLink>

                <HamburgerIcon
                  ref={toogleRef}
                  onClick={handleMenuToggle}
                  fontSize={25}
                  cursor="pointer"
                  textDecoration="none"
                  color="white"
                  marginTop="5px"
                />
                {menuOpen && (
                  <div className="menu">
                    <NavLink
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <div
                        style={{
                          paddingLeft: "50px",
                          fontWeight: "bold",
                          paddingBottom: "20px",
                          paddingTop: "20px",
                          marginBottom: "20px",
                          backgroundColor: "rgba(41, 37, 45, 0.6)",
                          borderRadius: "10px",
                        }}
                      >
                        Home
                      </div>
                    </NavLink>
                    <hr className="divider" />
                    <Accordion defaultIndex={[0]} allowMultiple>
                      <AccordionItem>
                        <h2>
                          <AccordionButton
                            style={{
                              backgroundColor: "#0F0617",
                              border: "none",
                            }}
                          >
                            <Box
                              flex="1"
                              style={{
                                backgroundColor: "#0F0617",
                                marginLeft: "25px",
                                color: "grey",
                                fontSize: "15px",
                                textAlign: "left",
                                fontFamily: "Noto Sans, sans-serif",
                                fontWeight: "bold",
                              }}
                            >
                              Explore
                            </Box>
                            <AccordionIcon style={{ color: "white" }} />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <ul className="ProfileList">
                            <NavLink
                              to="/TvShows"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Tv Shows
                              </li>
                            </NavLink>
                            <NavLink
                              to="/Movies"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Movies
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Premium
                              </li>
                            </NavLink>
                            <NavLink
                              to="/AllShows"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Web Series
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                News
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Music
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Kids
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Songs
                              </li>
                            </NavLink>
                            <NavLink
                              to="/VideoSong"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Video
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Channels
                              </li>
                            </NavLink>
                          </ul>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                    <hr className="divider" />
                    <Accordion defaultIndex={[0]} allowMultiple>
                      <AccordionItem>
                        <h2>
                          <AccordionButton
                            style={{
                              backgroundColor: "#0F0617",
                              border: "none",
                            }}
                          >
                            <Box
                              flex="1"
                              style={{
                                backgroundColor: "#0F0617",
                                marginLeft: "25px",
                                color: "grey",
                                fontSize: "15px",
                                textAlign: "left",
                                fontFamily: "Noto Sans, sans-serif",
                                fontWeight: "bold",
                              }}
                            >
                              Settings
                            </Box>
                            <AccordionIcon style={{ color: "white" }} />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <ul className="ProfileList">
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Parental Control
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Activate TV
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Reset Settings to default
                              </li>
                            </NavLink>
                            <hr className="divider" />
                          </ul>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                    <NavLink
                      to="/NoResult"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <div
                        style={{
                          paddingLeft: "50px",
                          fontWeight: "bold",
                          paddingBottom: "20px",
                          paddingTop: "20px",
                          marginBottom: "20px",
                          ":hover": {
                            backgroundColor: "rgba(41, 37, 45, 0.6)",
                          },
                          borderRadius: "10px",
                        }}
                      >
                        Refer and earn Discount
                      </div>
                    </NavLink>
                    <hr className="divider" />
                    <Accordion defaultIndex={[0]} allowMultiple>
                      <AccordionItem>
                        <h2>
                          <AccordionButton
                            style={{
                              backgroundColor: "#0F0617",
                              border: "none",
                            }}
                          >
                            <Box
                              flex="1"
                              style={{
                                backgroundColor: "#0F0617",
                                marginLeft: "25px",
                                color: "grey",
                                fontSize: "15px",
                                textAlign: "left",
                                fontFamily: "Noto Sans, sans-serif",
                                fontWeight: "bold",
                              }}
                            >
                              Info
                            </Box>
                            <AccordionIcon style={{ color: "white" }} />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <ul className="ProfileList">
                            <NavLink
                              to="/AboutUs"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                About us
                              </li>
                            </NavLink>
                            <NavLink
                              to="/TermOfUse"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Term of Use
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Privacy Policy
                              </li>
                            </NavLink>
                            <hr className="divider" />
                          </ul>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "grey",
                        paddingLeft: "130px",
                        paddingBottom: "30px",
                      }}
                    >
                      Version 3.14.4
                    </div>
                  </div>
                )}
              </Flex>
            </Flex>
          </Container>
        </>
      )}
    </>
  );
}
