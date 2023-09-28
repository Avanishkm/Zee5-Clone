import React from 'react'
import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import ComponentCard from '../ComponentCard/ComponentCard';

const AllShows = () => {
    const[shows, setShows] = useState([]);

    const getShows=async()=>{
        try{ const storedData = localStorage.getItem("videoData");
            if(storedData){
            const getData = JSON.parse(storedData);
            const parseData = getData.videoData;
            console.log(parseData);
            const ShowsData = parseData.filter(item=>(item.type==="tv show"));
            setShows(ShowsData);
            }

            }catch(error){console.error("error")}
        }
    useEffect(()=>{
        getShows();
    },[])

  return (
    <div style={{marginTop:"6rem", marginLeft:"40px"}}>
      <h1 style={{color:"white"}}>Top Shows</h1>
      <Flex style={{flexWrap:"wrap"}}>
        {shows.map((show)=>(
            <ComponentCard 
            key={show._id}
            item={show}/>
        ))}
      </Flex>
    </div>
  )
}

export default AllShows
