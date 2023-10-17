import { Container, Box, Flex } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ComponentCard from "../ComponentCard/ComponentCard";
import ImageSlider from "../ImageSlider/ImageSlider";
import Footer from "../../Components/Footer/Footer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FetchContext from "../../FetchContext";


export default function Home() {

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
  };
  
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
            </Container>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
}
