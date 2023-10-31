import { Box, Container, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  ChevronRightIcon,
} from "@chakra-ui/icons";

import ComponentCard from "../ComponentCard/ComponentCard";
import Footer from "../../Components/Footer/Footer";
import ImageSlider from "../ImageSlider/ImageSlider";
import FetchContext from "../../FetchContext";
import { useContext, useEffect, useState } from "react";

const TVSeries = () => {

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
  
  // const[smallerScreen, setSmallerScreen] = useState(window.innerWidth<500)
  // const [tvShowList, settvShowList] = useState([]);
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

  //       const tvData = parseData.filter((item) => item.type === "web series");
  //       const romanticData = parseData.filter(
  //         (item) =>
  //           (item.type === "web series" || item.type === "tv show") &&
  //           (item.keywords.includes("romance") ||
  //             item.keywords.includes("love") ||
  //             item.keywords.includes("fantasy"))
  //       );
  //       // console.log(romanticData);
  //       const actionData = parseData.filter(
  //         (item) =>
  //           (item.type === "web series" || item.type === "tv show") &&
  //           (item.keywords.includes("action") ||
  //             item.keywords.includes("thriller") ||
  //             item.keywords.includes("sci-fi"))
  //       );
  //       // console.log(actionData);
  //       const horrorData = parseData.filter(
  //         (item) =>
  //           (item.type === "web series" || item.type === "tv show") &&
  //           (item.keywords.includes("horror") ||
  //             item.keywords.includes("darkness") ||
  //             item.keywords.includes("betrayal"))
  //       );
  //       // console.log(horrorData);
  //       const comedyData = parseData.filter(
  //         (item) =>
  //           (item.type === "web series" || item.type === "tv show") &&
  //           (item.keywords.includes("drama") ||
  //             item.keywords.includes("comedy"))
  //       );
  //       // console.log(comedyData);

  //       settvShowList(tvData);
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
                Action Shows
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
                Comedy Shows
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
               Action Shows
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
                  Action Shows
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
                  Comedy Shows
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
                  Romantic Shows
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
                  Horror Shows
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
    // <div style={{backgroundColor: "black"}}>
    //   <Container style={{ marginTop: "8rem"}}>
    //     <Container style={{ marginLeft: "40px" }}>
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
    //         {tvShowList.map((exclusive, index) => (
    //           <ComponentCard
    //             key={exclusive._id}
    //             item={exclusive}
    //             isHovered={hoveredStates.exclusive[index]}
    //             handleHover={(isHovered) =>
    //               handleHover("exclusive", index, isHovered)
    //             }
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
    //         Action Shows
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
    //             isHovered={hoveredStates.action[index]}
    //             handleHover={(isHovered) =>
    //               handleHover("action", index, isHovered)
    //             }
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
    //         Comedy Shows
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
    //             isHovered={hoveredStates.comedy[index]}
    //             handleHover={(isHovered) =>
    //               handleHover("comedy", index, isHovered)
    //             }
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
    //         Romantic Shows
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
    //             isHovered={hoveredStates.romantic[index]}
    //             handleHover={(isHovered) =>
    //               handleHover("romantic", index, isHovered)
    //             }
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
    //         Horror Shows
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
    //             isHovered={hoveredStates.horror[index]}
    //             handleHover={(isHovered) =>
    //               handleHover("horror", index, isHovered)
    //             }
    //           />
    //         ))}
    //       </Flex>
    //     </Container>
    //   </Container>
    //   <Footer />
    // </div>
  );
};

export default TVSeries;
