import { Button, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link, json } from "react-router-dom";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
// import shareIcon from "../../Assets/shareIcon.png";
// import WatchIcon from "../../Assets/WatchIcon.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ShareButton from "../ShareButton/ShareButton";

const ComponentCard = ({ item }) => {
  const [smallerScreen, setSmallerScreen] = useState(window.innerWidth < 500);
  useEffect(() => {
    const handleResize = () => {
      setSmallerScreen(window.innerWidth < 500);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const share = () => {};

  return (
    <>
      {smallerScreen ? (
        <div
          style={{ display: "flex", flexDirection: "center", height: "200px" }}
        >
          <div
            style={{
              width: "150px",
              transition: "0.2s",
              height: "200px",
              marginTop: "25px",
            }}
          >
            <div className="image-container">
              <div className="image-overlay">
                <Link
                  to={`/watch/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={item.thumbnail}
                    alt="image.title"
                    style={{
                      width: "8rem",
                      height: "10rem",
                      display: "block",
                      width: "100%",
                      borderRadius: "8px",
                      zIndex: "1000",
                      backgroundColor: "black",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="box">
            <div className="image-container">
              <div className="image-overlay">
                <img
                  src={item.thumbnail}
                  alt="image.title"
                  className="dataImage"
                />
                <div className="card-content">
                  <div className="image-title">
                    {item.title}
                    <br />
                    <Flex>
                      <Link
                        to={`/watch/${item._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="watch-button">
                          <PlayArrowIcon className="arrowIcon" />
                          <div
                            style={{
                              marginLeft: "2px",
                              paddingTop: "2px",
                              fontSize: "15px",
                              fontWeight: "normal",
                              textDecoration: "none",
                            }}
                          >
                            {" "}
                            Watch
                          </div>
                        </div>
                      </Link>
                      <div className="share-icon" style={{ border: "none" }}>
                        <ShareButton />
                      </div>
                    </Flex>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ComponentCard;
