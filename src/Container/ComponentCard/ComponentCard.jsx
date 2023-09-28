import { Button, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link, json } from "react-router-dom";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useState } from "react";
import shareIcon from '../../Assets/shareIcon.png'
import WatchIcon from '../../Assets/WatchIcon.jpg'

const ComponentCard = ({ item, isHovered, handleHover }) => {
  // const [isInWatchlist, setIsInWatchlist] = useState(false);

  // async function addRemoveWatchList(movieId){
  //   const userInfo = localStorage.getItem("signup");
  //   if(userInfo){
  //     const userDetail = JSON.parse(userInfo);
  //     const response = await(fetch("https://academics.newtonschool.co/api/v1/ott/watchlist/like",{
  //       method: 'PATCH',
  //       headers:{
  //         Accept:"application/json",
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${userDetail.sign.token}`,
  //         projectId: 'f104bi07c490'
  //       },
  //       body: JSON.stringify({showId: movieId})
  //     }))
  //     if(response.ok){
  //       console.log("Successfully added to watchList");
  //       setIsInWatchlist(!isInWatchlist);
  //     }else{
  //       console.error("Failed to add to watchList");
  //     }
  //   }
  // }
  // const userInfo = localStorage.getItem("signup");

  return (
    <>
      <div className="container">
        <div className="box">
          <Link to={`watch/${item._id}`}>
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
                      <button className="watch-button">
                        <img
                          src={WatchIcon}
                          style={{
                            width: "15px",
                            height: "15px",
                            marginRight: "5px",
                            marginTop: "2px",
                          }}
                        />
                        Watch
                      </button>
                      <div className="share-icon">
                        <img
                          src={shareIcon}
                          alt="Share"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </div>
                    </Flex>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
    // <Box
    //   style={{
    //     position: "relative",
    //     width: "15rem",
    //     height: "22rem",
    //     marginLeft: "20px",
    //   }}
    //   mr={5}
    //   ml={5}
    //   onMouseEnter={() => handleHover(true)}
    //   onMouseLeave={() => handleHover(false)}
    // >
    //   <Button
    //     sx={{
    //       zIndex: "100",
    //       padding: "0",
    //       border: "1px solid black",
    //       cursor: "pointer",
    //       background: "black",
    //       marginLeft: "5px",
    //       transition: "transform 550ms",
    //       ":hover": {
    //         border: "5px solid white",
    //         borderRadius: "10px",
    //       },
    //     }}
    //   >
    //     <Link to={`/watch/${item._id}`}>
    //       <img
    //         src={item.thumbnail}
    //         alt={item.title}
    //         style={{
    //           height: "20rem",
    //           width: "15rem",
    //           borderRadius: "5px",
    //           border: "none",
    //         }}
    //       />
    //     </Link>
    //     {isHovered && (
    //       <Box
    //         sx={{
    //           position: "absolute",
    //           top: "50%",
    //           left: "0",
    //           right: "0",
    //           bottom: "0",
    //           background: "white",
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           color: "white",
    //           marginTop: "80px",
    //         }}
    //       >
    //         <h5 style={{ color: "#505050", textAlign: "left" }}>
    //           {item.title}
    //         </h5>
    //         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
    //           <Link to={`/watch/${item._id}`}>
    //             <Button
    //               sx={{
    //                 color: "gray",
    //                 height: "30px",
    //                 width: "90px",
    //                 background: "white",
    //                 border: "1px solid grey",
    //                 borderRadius: "5px",
    //                 cursor: "pointer",
    //                 marginLeft: "0",
    //                 marginRight: "100px",
    //                 marginBottom: "30px",
    //                 padding: "0",
    //               }}
    //             >
    //               <img
    //                 src="https://www.pngitem.com/pimgs/m/52-520203_right-side-triangle-arrow-grey-color-pattern-hd.png"
    //                 style={{
    //                   width: "10px",
    //                   height: "10px",
    //                   marginRight: "8px",
    //                 }}
    //               />
    //               Watch
    //             </Button>
    //           </Link>
    //           {/* {userInfo && (
    //             <Button
    //               onClick={() => addRemoveWatchList(item._id)}
    //               style={{
    //                 border: "1px solid grey",
    //                 height: "30px",
    //                 borderRadius: "10px",
    //                 cursor: "pointer",
    //               }}
    //             >
    //               {" "}
    //               {isInWatchlist ? (
    //                 <MinusIcon sx={{ fontSize: "15px", color: "grey" }} />
    //               ) : (
    //                 <AddIcon sx={{ fontSize: "15px", color: "grey" }} />
    //               )}
    //             </Button>
    //           )} */}
    //         </Box>
    //       </Box>
    //     )}
    //   </Button>
    // </Box>
  );
};

export default ComponentCard;
