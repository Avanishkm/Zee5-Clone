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
        <Footer/>
      
    </>
  );
};

export default VideoSong;
