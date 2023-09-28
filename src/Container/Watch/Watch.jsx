
import React, { useEffect, useState, useRef } from "react";
import { Container, Flex, Button } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useParams } from "react-router";

const Watch = (addRemoveWatchList) => {
  const [itemId, setShowItemId] = useState([]);
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
  }, []);

  return (
    <d>
      {itemId.video_url ? (
        <video ref={videoRef} width="70%" height="auto" controls>
          <source src={itemId.video_url} type="video/mp4" />
        </video>
      ) : (
        <p>Loading...</p>
      )}
      <Container sx={{ color: "white" }}>
        <h2 style={{ marginLeft: "50px" }}>{itemId.title}</h2>
        <ul>
          <Flex>
            <li style={{ marginLeft: "30px", marginRight: "40px" }}>U/A 16+</li>
            <li style={{ color: "white", marginRight: "40px" }}>
              {itemId.createdAt ? itemId.createdAt.substring(0, 4) : "N/A"}
            </li>
            <li style={{ color: "white" }}>{itemId.type?.toUpperCase()}</li>
          </Flex>
        </ul>

        {/* <Button sx={{width:"100px", 
        height:"40px", 
        color:"white", 
        display:"flex",
        background:"#0F0617", 
        marginTop:"0", 
        border:"2px solid white", 
        borderRadius:"8px", 
        marginLeft:"50px" }}  onClick={()=>addRemoveWatchList(itemId._id)}>
        <img src="https://cdn-icons-png.flaticon.com/512/2543/2543240.png" alt="image" style={{color:"white", width:"20px", height:"20px"}}/>
        Watchlist</Button> */}

        {/* new added */}
        <Flex>
          <p style={{ marginLeft: "50px" }}>Genre : </p>
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
        <Flex>
          {/* <Button sx={{width:"30", height:"50", color:"white", background:"purple", border:"1px solid purple", borderRadius:"5px", marginLeft:"20px" }}>
    Continue Watching <ArrowRightIcon style={{fontSize:"25"}}/></Button> */}
        </Flex>
      </Container>
      <Container>
        <div style={{ color: "white", fontSize: "15px", marginLeft: "50px" }}>
          {itemId.description}
        </div>
      </Container>
      <Flex>
        <p
          style={{ color: "#A785FF", marginLeft: "50px", marginRight: "10px" }}
        >
          Cast:
        </p>
        <p style={{ color: "white" }}>
          {itemId.cast ? itemId.cast.join(" , ") : "N/A"}
        </p>
        <p
          style={{ color: "#A785FF", marginLeft: "50px", marginRight: "10px" }}
        >
          Director:
        </p>
        <p style={{ color: "white" }}>{itemId.director}</p>
      </Flex>
    </d>
  );
};

export default Watch;
