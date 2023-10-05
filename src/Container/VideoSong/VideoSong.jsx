import { Container, Box, Flex} from '@chakra-ui/react'
import {useEffect, useState} from 'react';
import React from "react";
import Footer from "../../Components/Footer/Footer";
import ComponentCard from "../ComponentCard/ComponentCard";

const VideoSong = () => {

  const[exclusive, setExclusive] = useState([]);


    const getMovies=async()=>{
        try{const storedData = localStorage.getItem("videoData");
                 
            if(storedData){
                const getData = JSON.parse(storedData);
                const parseData = getData.videoData;
                console.log(parseData);
        const songData = parseData.filter(item=>item.type==='video song');
        const limitedSongData = songData.slice(0, 4);
         setExclusive(limitedSongData);
        
        }
    }catch(error){console.error("error")}
}

useEffect(() => {
  getMovies();
}, []);
  

  // const [songList, setSongList] = useState([]);
  // const [romantic, setRomantic] = useState([]);
  // const [action, setAction] = useState([]);
  // const [comedy, setComedy] = useState([]);
  // const [horror, setHorror] = useState([]);

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
  //       const songData = parseData.filter((item) => item.type === "video song");
  //       const romanticData = parseData.filter(
  //         (item) =>
  //           item.type === "video song" &&
  //           (item.keywords.includes("romance") ||
  //             item.keywords.includes("fantasy"))
  //       );
  //       // console.log(romanticData);
  //       const actionData = parseData.filter(
  //         (item) =>
  //           item.type === "video song" &&
  //           (item.keywords.includes("action") ||
  //             item.keywords.includes("thriller") ||
  //             item.keywords.includes("adventure"))
  //       );
  //       // console.log(actionData);
  //       const comedyData = parseData.filter(
  //         (item) =>
  //           item.type === "video song" &&
  //           (item.keywords.includes("drama") ||
  //             item.keywords.includes("comedy") ||
  //             item.keywords.includes("magic"))
  //       );
  //       // console.log(comedyData);
  //       const horrorData = parseData.filter(
  //         (item) =>
  //           item.type === "video song" &&
  //           (item.keywords.includes("horror") ||
  //             item.keywords.includes("darkness") ||
  //             item.keywords.includes("betrayal"))
  //       );
  //       //  console.log(data.data);
  //       setSongList(songData);
  //       setRomantic(romanticData);
  //       setAction(actionData);
  //       setComedy(comedyData);
  //       setHorror(horrorData);
  //     }
  //   } catch (error) {
  //     console.error("error");
  //   }
  // };

  
  return (
    <>
      <Container style={{marginLeft:"10px"}}>
          <Box
            as="p"
            sx={{
              fontSize: "20px",
              fontWeight:"Bold",
              color: "white",
              fontFamily: "sans-serif",
              marginLeft: "20px",
              letterSpacing: "1px",
            }}
          >
            Recommendations For You
          </Box>
          <Flex  style={{flexWrap:"wrap"}}>
            {exclusive.map((exclusive) => (
              <ComponentCard
                key={exclusive._id}
                item={exclusive}
              />
            ))}
            </Flex>
        </Container>
      
    </>
  );
};

export default VideoSong;
