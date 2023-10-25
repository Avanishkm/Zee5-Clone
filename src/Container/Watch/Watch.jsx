import React, { useEffect, useState, useRef } from "react";
import { Container, Flex, Button } from "@chakra-ui/react";
import { useParams } from "react-router";
import Footer from "../../Components/Footer/Footer";
import ShortFilm from "../ShortFilm/ShortFilm";
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";
import VideoSong from "../VideoSong/VideoSong";
import { PiShareFat } from "react-icons/pi";

export default function Watch(){
  const [itemId, setShowItemId] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  const [smallerScreen, setSmallerScreen] = useState(window.innerWidth < 1000);

  const videoRef = useRef(null);
  console.log(videoRef);

  const { id } = useParams();
  console.log(id, "id data");

  const getMovies = async () => {
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/ott/show/${id}`,
      {
        method: "GET",
        headers: {
          projectId: "f104bi07c490",
        },
      }
    );
    const data = await response.json();
    console.log("data:", data);
    console.log("data video: ", data.data.video_url);
    setShowItemId(data.data);

    if (!response.ok) {
      console.error("Failed to fetch data.");
      return;
    }
  };

  useEffect(() => {
    getMovies();
  }, [id]);

  async function addRemoveWatchList(showId) {
    const token = localStorage.getItem("token");
    console.log("userData", token);
    if (token) {
       
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ott/watchlist/like`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            projectId: "f104bi07c490",
          },
          body: JSON.stringify({ showId: showId }),
        }
      );
      if (response.ok) {
        setIsAdded(!isAdded);
      }
    }
  }

  //


  useEffect(() => {
    const handleResize = () => {
      setSmallerScreen(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    
    <>
      {smallerScreen ? (
        <>
          {itemId.video_url ? (
            <Flex marginTop="8rem" marginLeft="0px">
              <video
                ref={videoRef}
                width="100%"
                height="200%"
                controls
              >
                <source src={itemId.video_url} type="video/mp4" />
              </video>
            </Flex>
          ) : (
            <p>Loading...</p>
          )}
          <Container sx={{ color: "white", marginLeft: "10px" }}>
            <h2>{itemId.title}</h2>
            <ul>
              <Flex>
                <li style={{ marginRight: "40px" }}>
                  U/A 16+
                </li>
                <li style={{ color: "white", marginRight: "40px" }}>
                  {itemId.createdAt ? itemId.createdAt.substring(0, 4) : "N/A"}
                </li>
                <li style={{ color: "white" }}>{itemId.type?.toUpperCase()}</li>
              </Flex>
            </ul>
            <Button
              sx={{
                width: "150px",
                height: "100px",
                color: "white",
                display: "flex",
                backgroundColor: "rgba(41, 37, 45, 0.6)",
                marginTop: "0",
                border: "none",
                fontSize: "20px",
                borderRadius: "8px",
                
                ":hover": {
                  backgroundColor: "#8230c6",
                  border: "2px solid #8230c6",
                },
              }}
              onClick={() => addRemoveWatchList(itemId._id)}
            >
              {!isAdded ? (
                <MdPlaylistAdd
                  style={{ color: "white", width: "20px", height: "20px" }}
                />
              ) : (
                <MdPlaylistAddCheck
                  style={{ color: "white", width: "20px", height: "20px" }}
                />
              )}
              Watchlist
            </Button>
            <Flex>
              <p>Genre : </p>
              <p style={{ marginLeft: "5px", color: "#A785FF" }}>
                {itemId.keywords?.length > 0
                  ? itemId.keywords.map((keyword, index) => (
                      <span key={index}>
                        {keyword.toUpperCase()}
                        {index < itemId.keywords.length - 1 ? ", " : ""}
                      </span>
                    ))
                  : "N/A"}
              </p>
            </Flex>
            <Flex></Flex>
          </Container>
          <Container>
            <div
              style={{ color: "white", fontSize: "15px", marginLeft: "10px" }}
            >
              {itemId.description}
            </div>
          </Container>
          <Flex>
            <p
              style={{
                color: "#A785FF",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Cast:
            </p>
            <p style={{ color: "white", marginRight: "10px" }}>
              {itemId.cast ? itemId.cast.join(" , ") : "N/A"}
            </p>
            <p
              style={{
                color: "#A785FF",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Director:
            </p>
            <p style={{ color: "white",marginLeft: "10px" }}>{itemId.director}</p>
          </Flex>
          <ShortFilm />
        </>
      ) : (
        <>
          {itemId.video_url ? (
            <Flex marginTop="8rem" marginLeft="40px">
              <video
                ref={videoRef}
                width="60%"
                height="120%"
                
                controls
              >
                <source src={itemId.video_url} type="video/mp4" />
              </video>
              <Container style={{ height: "20px", top: "0" }}>
                <VideoSong />
              </Container>
            </Flex>
          ) : (
            <p>Loading...</p>
          )}
          <Container sx={{ color: "white" }}>
            <h2 style={{ marginLeft: "50px" }}>{itemId.title}</h2>
            <ul>
              <Flex>
                <li style={{ marginLeft: "30px", marginRight: "40px" }}>
                  U/A 16+
                </li>
                <li style={{ color: "white", marginRight: "40px" }}>
                  {itemId.createdAt ? itemId.createdAt.substring(0, 4) : "N/A"}
                </li>
                <li style={{ color: "white" }}>{itemId.type?.toUpperCase()}</li>
              </Flex>
            </ul>
            <Flex style={{gap:"20px"}}>
              <Button
                sx={{
                  width: "150px",
                  height: "80px",
                  color: "white",
                  display: "flex",
                  backgroundColor: "rgba(41, 37, 45, 0.6)",
                  marginTop: "0",
                  border: "none",
                  fontSize: "20px",
                  borderRadius: "8px",
                  marginLeft: "50px",
                  ":hover": {
                    backgroundColor: "#8230c6",
                    border: "2px solid #8230c6",
                  },
                  
                }}
              >
                <PiShareFat style={{ marginRight: "10px", }} /> Share
              </Button>
              <Button
                sx={{
                  width: "150px",
                  height: "80px",
                  color: "white",
                  display: "flex",
                  backgroundColor: "rgba(41, 37, 45, 0.6)",
                  marginTop: "0",
                  border: "none",
                  fontSize: "20px",
                  borderRadius: "8px",
                  cursor:"pointer",
                  ":hover": {
                    backgroundColor: "#8230c6",
                    border: "2px solid #8230c6",
                  },
                  
                }}
                onClick={() => addRemoveWatchList(itemId._id)}
              >
                {!isAdded ? (
                  <MdPlaylistAdd
                    style={{ color: "white", width: "20px", height: "20px" }}
                  />
                ) : (
                  <MdPlaylistAddCheck
                    style={{ color: "white", width: "20px", height: "20px" }}
                  />
                )}
                Watchlist
              </Button>
            </Flex>
            <Flex>
              <p style={{ marginLeft: "50px", marginTop: "40px" }}>Genre : </p>
              <p
                style={{
                  marginLeft: "5px",
                  color: "#A785FF",
                  marginTop: "40px",
                }}
              >
                {itemId.keywords?.length > 0
                  ? itemId.keywords.map((keyword, index) => (
                      <span key={index}>
                        {keyword.toUpperCase()}
                        {index < itemId.keywords.length - 1 ? ", " : ""}
                      </span>
                    ))
                  : "N/A"}
              </p>
            </Flex>
            <Flex></Flex>
          </Container>
          <Container>
            <div
              style={{
                color: "white",
                fontSize: "15px",
                marginLeft: "50px",
                marginTop: "20px",
              }}
            >
              {itemId.description}
            </div>
          </Container>
          <Flex>
            <p
              style={{
                color: "#A785FF",
                marginLeft: "50px",
                marginRight: "10px",
                marginTop: "30px",
              }}
            >
              Cast:
            </p>
            <p style={{ color: "white", marginTop: "30px",marginLeft: "50px" }}>
              {itemId.cast ? itemId.cast.join(" , ") : "N/A"}
            </p>
            <p
              style={{
                color: "#A785FF",
                marginLeft: "50px",
                marginRight: "10px",
                marginTop: "30px",
              }}
            >
              Director:
            </p>
            <p style={{ color: "white", marginTop: "30px", marginLeft: "50px" }}>
              {itemId.director}
            </p>
          </Flex>
          <ShortFilm />
          <Footer />
        </>
      )}
    </>
  );
};



