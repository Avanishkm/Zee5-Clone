import { useState, useEffect } from "react";

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
import SearchCard from "../../Container/SearchCard/SearchCard";

export default function Header({ isLoggedIn, setIsLoggedIn, username }) {
  console.log(username);

  const searchStyle = {
    bg: "#0F0617",
    color: "white",
    width: "300px",
    height: "35px",
    pl: "40px",
    border: "1px solid white",
    borderRadius: "5px",
  };

  const listItem = {
    marginTop: "5px",
    paddingLeft: "20px",
    marginLeft: "-30px",
    marginRight: "12px",
    cursor: "pointer",
    height: "40px",
    marginBottom: "0",
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "#301934";
    e.target.style.border = "1px solid #301934";
    e.target.style.borderRadius = "5px";
    e.target.style.paddingRight = "40px";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#0F0617";
    e.target.style.border = "2px solid #0F0617";
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [option, setOption] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [smallerScreen, setSmallerScreen] = useState(window.innerHeight < 600);

  const toggleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOption = () => {
    setOption(!option);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const clearSearchValue = () => {
    setSearchData("");
  };

  const handleSearchInputChange = (e) => {
    const userInput = e.target.value;
    setSearchData(userInput);
    setShowSuggestions(userInput.length > 0);
  };

  useEffect(() => {
    const handleResize = () => {
      setSmallerScreen(window.innerHeight < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {smallerScreen ? (
        <Container style={{ marginTop: "20px" }}>
          <Flex>
            <img
              src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.40"
              alt="zee logo"
              style={{ width: "40px", marginLeft: "20px" }}
            />
            <NavLink to="/BuyPlan">
              <Button
                mr={30}
                ml={30}
                sx={{
                  bg: "#4B0082",
                  color: "white",
                  border: "1px #4B0082 solid",
                  borderRadius: "5px",
                  width: "90px",
                  height: "25px",
                }}
              >
                BUY PLANS
              </Button>
            </NavLink>
            <Box
              style={{
                marginRight: "30px",
                backgroundColor: "#0F0617",
                marginLeft: "150px",
              }}
            >
              <InputGroup>
                <Input
                  value={searchData}
                  onChange={handleSearchInputChange}
                  type="text"
                  placeholder="Search...."
                  sx={{
                    bg: "#0F0617",
                    color: "white",
                    width: "150px",
                    height: "25px",
                    pl: "40px",
                    border: "1px solid white",
                    borderRadius: "5px",
                  }}
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
                    sx={{ cursor: "pointer", color: "white", padding: "10px" }}
                  />
                  {/* </ Link> */}
                </InputLeftElement>
              </InputGroup>
            </Box>
            {isLoggedIn ? (
              <div style={{ marginTop: "10px" }}>
                <img
                  src="https://t3.ftcdn.net/jpg/06/04/79/52/360_F_604795233_5zIpEvhWizTN7bUxSADUdrQQFGj315G3.jpg"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    marginRight: "50px",
                  }}
                  onClick={handleOption}
                />
                {option && (
                  <div
                    style={{
                      position: "absolute",
                      border: "1px solid gray",
                      marginTop: "20px",
                      backgroundColor: "#0F0617",
                      ":hover": { backgroundColor: "purple" },
                    }}
                  >
                    <ul
                      style={{
                        listStyleType: "none",
                        position: "fixed",
                        backgroundColor: "#0F0617",
                        width: "170px",
                        border: "0.5px solid grey",
                        borderRadius: "5px",
                      }}
                    >
                      <li
                        style={{
                          marginTop: "10px",
                          float: "left",
                          marginLeft: "0px",
                          marginRight: "20px",
                          display: "flex",
                          marginBottom: "20px",
                          wordWrap: "break-word",
                        }}
                      >
                        Welcome, {username}
                      </li>
                      <NavLink
                        to="/Watchlist"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        <li
                          style={{
                            marginTop: "10px",
                            marginLeft: "0px",
                            marginRight: "20px",
                            marginBottom: "5px",
                            fontSize: "15px",
                            cursor: "pointer",
                          }}
                        >
                          My Watchlist
                        </li>
                      </NavLink>
                      <br />
                      <Button
                        onClick={handleLogout}
                        style={{
                          border: "1px solid #0F0617",
                          backgroundColor: "#0F0617",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        <li
                          style={{
                            cursor: "pointer",
                            fontSize: "15px",
                            marginBottom: "20px",
                          }}
                        >
                          Logout
                        </li>
                      </Button>
                    </ul>
                  </div>
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
                    width: "40px",
                    border: "1px white solid",
                    height: "20px",
                    borderRadius: "5px",
                    fontSize: "Bold",
                    cursor: "pointer",
                    marginTop: "5px",
                    marginLeft: "5px",
                  }}
                >
                  Login
                </Button>
              </NavLink>
            )}
          </Flex>
          <Flex sx={{ marginBottom: "0", marginTop: "10px" }}>
            <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
              <Container
                mr={20}
                ml={70}
                mb={5}
                fontSize={15}
                _hover={{ textDecoration: "underline" }}
              >
                Home
              </Container>
            </NavLink>
            <NavLink
              to="/TvShows"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container
                mr={20}
                ml={20}
                fontSize={15}
                _hover={{ textDecoration: "underline" }}
              >
                TV Shows
              </Container>
            </NavLink>
            <NavLink
              to="/Movies"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container
                mr={20}
                ml={20}
                fontSize={15}
                _hover={{ textDecoration: "underline" }}
              >
                Movies
              </Container>
            </NavLink>
            <NavLink
              to="/Documentary"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container
                mr={20}
                ml={20}
                fontSize={15}
                _hover={{ textDecoration: "underline" }}
              >
                Documentries
              </Container>
            </NavLink>
            <NavLink
              to="/Song"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container
                mr={20}
                ml={20}
                fontSize={18}
                _hover={{ textDecoration: "underline" }}
              >
                Video Song
              </Container>
            </NavLink>
            <NavLink
              to="/ShortFilm"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container
                mr={20}
                ml={20}
                fontSize={18}
                _hover={{ textDecoration: "underline" }}
              >
                Short Film
              </Container>
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
            width="99%"
            zIndex="1000"
          >
            <Flex as="nav" alignItems="center" color="white">
              <img
                src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.40"
                alt="zee logo"
                style={{ width: "50px", marginLeft:"30px" }}
              />
              <Flex>
                <UnorderedList
                  style={{ listStyleType: "none", display: "flex", p: "10px" }}
                >
                  <NavLink
                    to="/"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <ListItem
                      mr={30}
                      ml={20}
                      fontSize={18}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Home
                    </ListItem>
                  </NavLink>
                  <NavLink
                    to="/TVSeries"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <ListItem
                      mr={20}
                      ml={20}
                      width="100px"
                      fontSize={18}
                      _hover={{ textDecoration: "underline" }}
                    >
                      TV Shows
                    </ListItem>
                  </NavLink>
                  <NavLink
                    to="/Movies"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <ListItem
                      mr={20}
                      ml={20}
                      fontSize={18}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Movies
                    </ListItem>
                  </NavLink>
                  <ListItem onClick={toggleDropDown}>
                    <DragHandleIcon
                      fontSize={22}
                      ml={30}
                      width={50}
                      _hover={{ color: "purple" }}
                    />
                    {isDropdownOpen && (
                      <div
                        style={{
                          position: "absolute",
                          border: "1px solid gray",
                          marginTop: "20px",
                          backgroundColor: "#0F0617",
                          width: "20px",
                        }}
                      >
                        <ul
                          style={{
                            listStyleType: "none",
                            position: "fixed",
                            backgroundColor: "#0F0617",
                            width: "120px",
                            border: "0.5px solid grey",
                            borderRadius: "5px",
                          }}
                        >
                          <NavLink
                            to="/Documentary"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li
                              className="listItem"
                              style={{ marginTop: "20px" }}
                            >
                              Documentary
                            </li>
                          </NavLink>
                          <br />

                          <NavLink
                            to="/Song"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Video Songs</li>
                          </NavLink>
                          <br />

                          <NavLink
                            to="/shortFilm"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Short Film</li>
                          </NavLink>
                          <br />
                        </ul>
                      </div>
                    )}
                  </ListItem>
                </UnorderedList>
                <Spacer />

                <Box
                  style={{
                    marginRight: "50px",
                    backgroundColor: "#0F0617",
                    marginLeft: "270px",
                    marginTop: "10px",
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
                  <div style={{ marginTop: "10px" }}>
                    <img
                      src="https://t3.ftcdn.net/jpg/06/04/79/52/360_F_604795233_5zIpEvhWizTN7bUxSADUdrQQFGj315G3.jpg"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        marginRight: "40px",
                        marginTop: "5px",
                      }}
                      onClick={handleOption}
                    />
                    {option && (
                      <div
                        style={{
                          position: "absolute",
                          border: "1px solid gray",
                          marginTop: "5px",
                          backgroundColor: "#0F0617",
                          ":hover": { backgroundColor: "purple" },
                        }}
                      >
                        <ul
                          style={{
                            listStyleType: "none",
                            position: "fixed",
                            backgroundColor: "#0F0617",
                            width: "170px",
                            border: "0.5px solid grey",
                            borderRadius: "5px",
                          }}
                        >
                          <li className="listItem listItem1">
                            Welcome, {username}
                          </li>
                          <NavLink
                            to="/Watchlist"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li
                              className="listItem"
                              style={{ marginTop: "10px" }}
                            >
                              My Watchlist
                            </li>
                          </NavLink>
                          <br />
                          <li
                            className="listItem"
                            style={{ marginBottom: "10px", marginTop: "0" }}
                            onClick={handleLogout}
                          >
                            Logout
                          </li>
                        </ul>
                      </div>
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
                        marginTop: "10px",
                        "&:hover": {
                          backgroundColor: "white",
                          color: "black",
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
                      marginTop: "10px",
                      bg: "#4B0082",
                      color: "white",
                      border: "1px #4B0082 solid",
                      borderRadius: "5px",
                      width: "90px",
                      height: "36px",
                    }}
                  >
                    BUY PLANS
                  </Button>
                </NavLink>
                <NavLink to="/BuyPlan">
                  <HamburgerIcon
                    fontSize={25}
                    textDecoration="none"
                    color="white"
                    marginTop="10px"
                  />
                </NavLink>
              </Flex>
            </Flex>
          </Container>
        </>
      )}
    </>
  );
}
