import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import ComponentCard from "../ComponentCard/ComponentCard";
import ImageSlider from "../ImageSlider/ImageSlider";
import FetchContext from "../../FetchContext";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useContext, useEffect, useState } from "react";

const Movies = () => {

  const [smallerScreen, setSmallerScreen] = useState(window.innerWidth < 500);

  const { apiData } = useContext(FetchContext);

  useEffect(() => {
    
    const handleResize = () => {
      setSmallerScreen(window.innerWidth < 500);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderComponentCards = (data) => {
    if (!Array.isArray(data)) {
      return null;
    }

    return (
      <Flex
        sx={{
          overflowX: "scroll",
          overflowY: "hidden",
          "&::-webkit-scrollbar": { width: "1px" },

          paddingLeft: window.innerWidth < 700 ? "0px" : "20px",
        }}
      >
        {data.slice(0, 10).map((item) => (
          <ComponentCard key={item._id} item={item} />
        ))}
      </Flex>
    );
        }
  

  // const [moviesList, setMoviesList] = useState([]);
  // const [romantic, setRomantic] = useState([]);
  // const [action, setAction] = useState([]);
  // const [horror, setHorror] = useState([]);
  // const [comedy, setComedy] = useState([]);

  // const [hoveredStates, setHoveredStates] = useState({
  //   exclusive: [],
  //   romantic: [],
  //   action: [],
  //   horror: [],
  //   comedy: [],
  // });

  // const handleHover = (rowName, index, isHovered) => {
  //   // Clone the current state object
  //   const updatedHoveredStates = { ...hoveredStates };
  //   // Update the hover state for the specified row and index
  //   updatedHoveredStates[rowName][index] = isHovered;
  //   // Set the updated state object
  //   setHoveredStates(updatedHoveredStates);
  // };

  // const getMovies = async () => {
  //   try {
  //     const storedData = localStorage.getItem("videoData");

  //     if (storedData) {
  //       const getData = JSON.parse(storedData);
  //       const parseData = getData.videoData;
  //       console.log(parseData);
  //       const moviesData = parseData.filter((item) => item.type === "movie");
  //       const romanticData = parseData.filter(
  //         (item) =>
  //           (item.type === "movie" || item.type === "trailer") &&
  //           (item.keywords.includes("romance") ||
  //             item.keywords.includes("love"))
  //       );
  //       // console.log(romanticData);
  //       const actionData = parseData.filter(
  //         (item) =>
  //           (item.type === "movie" || item.type === "trailer") &&
  //           (item.keywords.includes("action") ||
  //             item.keywords.includes("thriller"))
  //       );
  //       // console.log(actionData);
  //       const horrorData = parseData.filter(
  //         (item) =>
  //           (item.type === "movie" || item.type === "trailer") &&
  //           (item.keywords.includes("horror") ||
  //             item.keywords.includes("darkness"))
  //       );
  //       // console.log(horrorData);
  //       const comedyData = parseData.filter(
  //         (item) =>
  //           (item.type === "movie" || item.type === "trailer") &&
  //           (item.keywords.includes("drama") ||
  //             item.keywords.includes("comedy") ||
  //             item.keywords.includes("epic"))
  //       );
  //       // console.log(comedyData);

  //       //  console.log(data.data);
  //       setMoviesList(moviesData);
  //       setRomantic(romanticData);
  //       setAction(actionData);
  //       setHorror(horrorData);
  //       setComedy(comedyData);
  //     }
  //   } catch (error) {
  //     console.error("error");
  //   }
  // };

  // useEffect(() => {
  //   getMovies();
  // }, []);

  return (

    <>
      {smallerScreen ? (
        <>
          <Container>
            <ImageSlider />
          </Container>
          <Container
            style={{
              marginTop: "40px",
              marginLeft: window.innerWidth < 500 ? "10px" : "40px",
            }}
          >
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "20px",
                  letterSpacing: "1px",
                  marginBottom: "0",
                }}
              >
                ZEE5 Exclusives
              </Box>
              <Link
                to="/ZeeExclusive"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "15px",
                    paddingRight: "10px",
                    fontSize: "12px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter((item) => item.type === "short film")
            )}
          </Container>
          <Container
            style={{ marginLeft: window.innerWidth < 700 ? "10px" : "40px" }}
          >
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  marginBottom: "0",
                }}
              >
                Top Hollywood Movies
              </Box>
              <Link
                to="/AllMovies"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "15px",
                    paddingRight: "10px",
                    fontSize: "12px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter((item) => item.type === "movie")
            )}
          </Container>

          <Container
            style={{
              marginTop: "40px",
              marginLeft: window.innerWidth < 700 ? "10px" : "40px",
            }}
          >
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  marginBottom: "0",
                }}
              >
                Unmissable shows
              </Box>
              <Link
                to="/AllShows"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "15px",
                    paddingRight: "10px",
                    fontSize: "12px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter((item) => item.type === "tv show")
            )}
          </Container>

          <Container
            style={{
              marginTop: "40px",
              marginLeft: window.innerWidth < 700 ? "10px" : "40px",
            }}
          >
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  marginBottom: "0",
                }}
              >
                World Hits | Free Dubbed Movies
              </Box>
              <Link
                to="/AllTrailer"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "15px",
                    paddingRight: "10px",
                    fontSize: "12px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter((item) => item.type === "video song")
            )}
          </Container>

          <Container
            style={{
              marginTop: "40px",
              marginLeft: window.innerWidth < 700 ? "10px" : "40px",
            }}
          >
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  marginBottom: "0",
                }}
              >
                Cross Border Drama Shows
              </Box>
              <Link
                to="/AllDrama"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "15px",
                    paddingRight: "10px",
                    fontSize: "12px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter((item) => item.type === "trailer")
            )}
          </Container> 
          <Container
            style={{
              marginTop: "40px",
              marginLeft: window.innerWidth < 700 ? "10px" : "40px",
            }}
          >
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "10px",
                  letterSpacing: "1px",
                  marginBottom: "0",
                }}
              >
                Inspired From Real Life
              </Box>
              <Link
                to="/AllDocumentries"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "15px",
                    paddingRight: "10px",
                    fontSize: "12px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter((item) => item.type === "documentary")
            )}
          </Container>

          <Container
            style={{
              marginTop: "40px",
              marginLeft: window.innerWidth < 700 ? "10px" : "40px",
            }}
          >
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "15px",
                  marginBottom: "0",
                  letterSpacing: "1px",
                }}
              >
                Web Series
              </Box>
              <Link
                to="/AllWebSeries"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "15px",
                    paddingRight: "10px",
                    fontSize: "12px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter((item) => item.type === "web series")
            )}
          </Container>
          <Footer />
        </>
      ) : (
        <>
          <Container>
            <Container>
              <ImageSlider />
            </Container>
            <Container style={{ marginTop: "40px", marginLeft: "10px" }}>
              <Flex style={{ justifyContent: "space-between" }}>
                <Box
                  as="p"
                  sx={{
                    fontSize: "20px",
                    color: "white",
                    fontFamily: "Arial",
                    marginLeft: "20px",
                    letterSpacing: "1px",
                    marginBottom: "0",
                  }}
                >
                  ZEE5 Exclusives
                </Box>
                <Link
                  to="/ZeeExclusive"
                  style={{ textDecoration: "none", color: "#a785ff" }}
                >
                  <Box
                    style={{
                      color: "#a785ff",
                      paddingTop: "15px",
                      paddingRight: "10px",
                    }}
                  >
                    More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                  </Box>
                </Link>
              </Flex>
              {renderComponentCards(
                apiData.filter((item) => item.type === "short film")
              )}
            </Container>

            <Container style={{ marginLeft: "40px" }}>
              <Flex style={{ justifyContent: "space-between" }}>
                <Box
                  as="p"
                  sx={{
                    fontSize: "20px",
                    color: "white",
                    fontFamily: "Arial",
                    marginLeft: "20px",
                    letterSpacing: "1px",
                    marginBottom: "0",
                  }}
                >
                  Action Movies
                </Box>
                <Link
                  to="/AllMovies"
                  style={{ textDecoration: "none", color: "#a785ff" }}
                >
                  <Box
                    style={{
                      color: "#a785ff",
                      paddingTop: "15px",
                      paddingRight: "10px",
                    }}
                  >
                    More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                  </Box>
                </Link>
              </Flex>
              {renderComponentCards(
                apiData.filter((item) => item.type === "movie")
              )}
            </Container>

            <Container style={{ marginLeft: "40px" }}>
              <Flex style={{ justifyContent: "space-between" }}>
                <Box
                  as="p"
                  sx={{
                    fontSize: "20px",
                    color: "white",
                    fontFamily: "Arial",
                    marginLeft: "20px",
                    letterSpacing: "1px",
                    marginBottom: "0",
                  }}
                >
                  Comedy Movies
                </Box>
                <Link
                  to="/AllShows"
                  style={{ textDecoration: "none", color: "#a785ff" }}
                >
                  <Box
                    style={{
                      color: "#a785ff",
                      paddingTop: "15px",
                      paddingRight: "10px",
                    }}
                  >
                    More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                  </Box>
                </Link>
              </Flex>
              {renderComponentCards(
                apiData.filter((item) => item.type === "tv show")
              )}
            </Container>

            <Container style={{ marginLeft: "40px" }}>
              <Flex style={{ justifyContent: "space-between" }}>
                <Box
                  as="p"
                  sx={{
                    fontSize: "20px",
                    color: "white",
                    fontFamily: "Arial",
                    marginLeft: "20px",
                    letterSpacing: "1px",
                    marginBottom: "0",
                  }}
                >
                  Romantic Movies
                </Box>
                <Link
                  to="/AllTrailer"
                  style={{ textDecoration: "none", color: "#a785ff" }}
                >
                  <Box
                    style={{
                      color: "#a785ff",
                      paddingTop: "15px",
                      paddingRight: "10px",
                    }}
                  >
                    More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                  </Box>
                </Link>
              </Flex>
              {renderComponentCards(
                apiData.filter((item) => item.type === "trailer")
              )}
            </Container>

            <Container style={{ marginLeft: "40px" }}>
              <Flex style={{ justifyContent: "space-between" }}>
                <Box
                  as="p"
                  sx={{
                    fontSize: "20px",
                    color: "white",
                    fontFamily: "Arial",
                    marginLeft: "20px",
                    letterSpacing: "1px",
                    marginBottom: "0",
                  }}
                >
                  Horror Movies
                </Box>
                <Link
                  to="/AllDrama"
                  style={{ textDecoration: "none", color: "#a785ff" }}
                >
                  <Box
                    style={{
                      color: "#a785ff",
                      paddingTop: "15px",
                      paddingRight: "10px",
                    }}
                  >
                    More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                  </Box>
                </Link>
              </Flex>
              {renderComponentCards(
                apiData.filter((item) => item.type === "video song")
              )}
            </Container>

            {/* <Container style={{ marginLeft: "40px" }}>
              <Flex style={{ justifyContent: "space-between" }}>
                <Box
                  as="p"
                  sx={{
                    fontSize: "20px",
                    color: "white",
                    fontFamily: "Arial",
                    marginLeft: "20px",
                    letterSpacing: "1px",
                    marginBottom: "0",
                  }}
                >
                  Inspired From Real Life
                </Box>
                <Link
                  to="/AllDocumentries"
                  style={{ textDecoration: "none", color: "#a785ff" }}
                >
                  <Box
                    style={{
                      color: "#a785ff",
                      paddingTop: "15px",
                      paddingRight: "10px",
                    }}
                  >
                    More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                  </Box>
                </Link>
              </Flex>
              {renderComponentCards(
                apiData.filter((item) => item.type === "documentary")
              )}
            </Container> */}

            {/* <Container style={{ marginLeft: "40px" }}>
              <Flex style={{ justifyContent: "space-between" }}>
                <Box
                  as="p"
                  sx={{
                    fontSize: "20px",
                    color: "white",
                    fontFamily: "Arial",
                    marginLeft: "20px",
                    marginBottom: "0",
                    letterSpacing: "1px",
                  }}
                >
                  Web Series
                </Box>
                <Link
                  to="/AllWebSeries"
                  style={{ textDecoration: "none", color: "#a785ff" }}
                >
                  <Box
                    style={{
                      color: "#a785ff",
                      paddingTop: "15px",
                      paddingRight: "10px",
                    }}
                  >
                    More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                  </Box>
                </Link>
              </Flex>
              {renderComponentCards(
                apiData.filter((item) => item.type === "web series")
              )}
            </Container> */}
          </Container>
          <Footer />
        </>
      )}
    </>
    // <>
    
    //   <Container style={{ marginTop: "8rem" }}>
    //     <Container style={{ marginLeft: "40px", marginTop: "40px" }}>
    //       <Box
    //         as="p"
    //         sx={{
    //           fontSize: "25px",
    //           color: "white",
    //           fontFamily: "Arial",
    //           marginLeft: "20px",
    //           letterSpacing: "1px",
    //           marginBottom: "20px",
    //         }}
    //       >
    //         ZEE5 Exclusives
    //       </Box>
    //       <Flex
    //         sx={{
    //           overflowX: "scroll",
    //           overflowY: "scroll",
    //           "&::-webkit-scrollbar": { width: "1px" },
    //         }}
    //       >
    //         {moviesList.map((exclusive, index) => (
    //           <ComponentCard
    //             key={exclusive._id}
    //             item={exclusive}
    //             isHovered={hoveredStates.exclusive[index]}
    //             handleHover={(isHovered) => handleHover("exclusive", index, isHovered)}
    //           />
    //         ))}
    //       </Flex>
    //     </Container>

    //     <Container style={{ marginLeft: "40px", marginTop: "40px" }}>
    //       <Box
    //         as="p"
    //         sx={{
    //           fontSize: "25px",
    //           color: "white",
    //           fontFamily: "Arial",
    //           marginLeft: "20px",
    //           letterSpacing: "1px",
    //           marginBottom: "20px",
    //         }}
    //       >
    //         Action Movies
    //       </Box>
    //       <Flex
    //         sx={{
    //           overflowX: "scroll",
    //           overflowY: "scroll",
    //           "&::-webkit-scrollbar": { width: "1px" },
    //         }}
    //       >
    //         {action.map((action, index) => (
    //           <ComponentCard
    //             key={action._id}
    //             item={action}
                
    //           />
    //         ))}
    //       </Flex>
    //     </Container>

    //     <Container style={{ marginLeft: "40px", marginTop: "40px" }}>
    //       <Box
    //         as="p"
    //         sx={{
    //           fontSize: "25px",
    //           color: "white",
    //           fontFamily: "Arial",
    //           marginLeft: "20px",
    //           letterSpacing: "1px",
    //           marginBottom: "20px",
    //         }}
    //       >
    //         Comedy Movies
    //       </Box>
    //       <Flex
    //         sx={{
    //           overflowX: "scroll",
    //           overflowY: "scroll",
    //           "&::-webkit-scrollbar": { width: "1px" },
    //         }}
    //       >
    //         {comedy.map((comedy, index) => (
    //           <ComponentCard
    //             key={comedy._id}
    //             item={comedy}
                
    //           />
    //         ))}
    //       </Flex>
    //     </Container>

    //     <Container style={{ marginLeft: "40px", marginTop: "40px" }}>
    //       <Box
    //         as="p"
    //         sx={{
    //           fontSize: "25px",
    //           color: "white",
    //           fontFamily: "Arial",
    //           marginLeft: "20px",
    //           letterSpacing: "1px",
    //           marginBottom: "20px",
    //         }}
    //       >
    //         Romantic Movies
    //       </Box>
    //       <Flex
    //         sx={{
    //           overflowX: "scroll",
    //           overflowY: "scroll",
    //           "&::-webkit-scrollbar": { width: "1px" },
    //         }}
    //       >
    //         {romantic.map((romantic, index) => (
    //           <ComponentCard
    //             key={romantic._id}
    //             item={romantic}
                
    //           />
    //         ))}
    //       </Flex>
    //     </Container>

    //     <Container style={{ marginLeft: "40px", marginTop: "40px" }}>
    //       <Box
    //         as="p"
    //         sx={{
    //           fontSize: "25px",
    //           color: "white",
    //           fontFamily: "Arial",
    //           marginLeft: "20px",
    //           letterSpacing: "1px",
    //           marginBottom: "20px",
    //         }}
    //       >
    //         Horror Movies
    //       </Box>
    //       <Flex
    //         sx={{
    //           overflowX: "scroll",
    //           overflowY: "scroll",
    //           "&::-webkit-scrollbar": { width: "1px" },
    //         }}
    //       >
    //         {horror.map((horror, index) => (
    //           <ComponentCard
    //             key={horror._id}
    //             item={horror}
                
    //           />
    //         ))}
    //       </Flex>
    //     </Container>
    //   </Container>
    //   <Footer />
    // </>
  );
};

export default Movies;
