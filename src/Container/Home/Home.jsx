import { Container, Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ComponentCard from "../ComponentCard/ComponentCard";
import ImageSlider from "../ImageSlider/ImageSlider";
import Footer from "../../Components/Footer/Footer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import "./home.css"

export default function Home() {
  
  const [exclusiveList, setExclusivesList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [tvShow, setTvList] = useState([]);
  const [video, setVideo] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [webSeries, setWebSeries] = useState([]);
  const [documentries, setDocumentries] = useState([]);
  const [smallerScreen, setIsSmallScreen] = useState(window.innerWidth < 500);

  const getMovies = async () => {
    try {
      const storedData = localStorage.getItem("videoData");

      if (storedData) {
        const getData = JSON.parse(storedData);
        const parseData = getData.videoData;
        const exclusiveList = parseData.filter(
          (item) => item.type === "short film"
        );
        const moviesData = parseData.filter((item) => item.type === "movie");
        const tvShowData = parseData.filter((item) => item.type === "tv show");
        const videoData = parseData.filter(
          (item) => item.type === "video song"
        );
        const trailerData = parseData.filter((item) => item.type === "trailer");
        const webSeriesData = parseData.filter(
          (item) => item.type === "web series"
        );
        const documentriesData = parseData.filter(
          (item) => item.type === "documentary"
        );

        
        setExclusivesList(exclusiveList);
        setMoviesList(moviesData);
        setTvList(tvShowData);
        setVideo(videoData);
        setTrailer(trailerData);
        setWebSeries(webSeriesData);
        setDocumentries(documentriesData);
      } else {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/ott/show?limit=100",
          {
            method: "GET",
            headers: {
              projectId: "f104bi07c490",
            },
          }
        );
        const data = await response.json();
        console.log(data);
        const result = data.data;
        const exclusiveList = result.filter(
          (item) => item.type === "short film"
        );
        const moviesData = result.filter((item) => item.type === "movie");
        const tvShowData = result.filter((item) => item.type === "tv show");
        const videoData = result.filter((item) => item.type === "video song");
        const trailerData = result.filter((item) => item.type === "trailer");
        const webSeriesData = result.filter(
          (item) => item.type === "web series"
        );
        const documentriesData = result.filter(
          (item) => item.type === "documentary"
        );

        //  console.log(data.data);
        setExclusivesList(exclusiveList);
        setMoviesList(moviesData);
        setTvList(tvShowData);
        setVideo(videoData);
        setTrailer(trailerData);
        setWebSeries(webSeriesData);
        setDocumentries(documentriesData);
        console.log("result", result);

        localStorage.setItem(
          "videoData",
          JSON.stringify({ videoData: result })
        );
      }
    } catch (error) {
      console.error("error");
    }
  };

  useEffect(() => {
    getMovies();
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <>
      {smallerScreen ? (
        <Container>
          <ImageSlider />
        </Container>
      ) : (
        <>
          <Container >
            <Container>
              <ImageSlider />
            </Container>
            <Container style={{ marginTop: "40px", marginLeft: "10px" }}>
              <Flex  style={{ justifyContent: "space-between" }}>
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
              <Flex
                sx={{
                  marginLeft: "20px",
                  overflowX: "scroll",
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": { width: "1px" },
                }}
              >
                {exclusiveList.map((exclusive, index) => (
                  <ComponentCard
                    key={exclusive._id}
                    item={exclusive}
                   
                  />
                ))}
              </Flex>
            </Container>

            <Container style={{ marginTop: "20px", marginLeft: "40px" }}>
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
                    More <ChevronRightIcon style={{ fontSize: "15px" }} />
                  </Box>
                </Link>
              </Flex>
              <Flex
                sx={{
                  overflowX: "scroll",
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": { width: "1px" },
                }}
              >
                {moviesList.map((movie, index) => (
                  <ComponentCard
                    key={movie._id}
                    item={movie}
                    
                  />
                ))}
              </Flex>
            </Container>

            <Container style={{ marginTop: "40px", marginLeft: "40px" }}>
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
              <Flex
                sx={{
                  overflowX: "scroll",
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": { width: "1px" },
                }}
              >
                {tvShow.map((tvShow, index) => (
                  <ComponentCard
                    key={tvShow._id}
                    item={tvShow}
                    
                  />
                ))}
              </Flex>
            </Container>

            <Container style={{ marginTop: "40px", marginLeft: "40px" }}>
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
              <Flex
                sx={{
                  overflowX: "scroll",
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": { width: "1px" },
                }}
              >
                {video.map((video, index) => (
                  <ComponentCard
                    key={video._id}
                    item={video}
                    
                  />
                ))}
              </Flex>
            </Container>

            <Container style={{ marginTop: "40px", marginLeft: "40px" }}>
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
              <Flex
                sx={{
                  overflowX: "scroll",
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": { width: "1px" },
                }}
              >
                {trailer.map((trailer, index) => (
                  <ComponentCard
                    key={trailer._id}
                    item={trailer}
                    
                  />
                ))}
              </Flex>
            </Container>
            <Container style={{ marginTop: "40px", marginLeft: "40px" }}>
              <Flex style={{ justifyContent: "space-between" }}>
                <Box
                  as="p"
                  sx={{
                    fontSize: "25px",
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
              <Flex
                sx={{
                  overflowX: "scroll",
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": { width: "1px" },
                }}
              >
                {documentries.map((documentary, index) => (
                  <ComponentCard
                    key={documentary._id}
                    item={documentary}
                    
                  />
                ))}
              </Flex>
            </Container>

            <Container style={{ marginTop: "40px", marginLeft: "40px" }}>
              <Flex style={{ justifyContent: "space-between" }}>
                <Box
                  as="p"
                  sx={{
                    fontSize: "25px",
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
              <Flex
                sx={{
                  overflowX: "scroll",
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": { width: "1px" },
                }}
              >
                {webSeries.map((webSeries, index) => (
                  <ComponentCard
                    key={webSeries._id}
                    item={webSeries}
                    
                  />
                ))}
              </Flex>
            </Container>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
}
