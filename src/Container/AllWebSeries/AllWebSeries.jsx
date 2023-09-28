import React from 'react'
import ComponentCard from '../ComponentCard/ComponentCard';
import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const AllWebSeries = () => {
    const[webSeries, setwebSeries] = useState([]);

    const getShows=async()=>{
        try{ const storedData = localStorage.getItem("videoData");
            if(storedData){
            const getData = JSON.parse(storedData);
            const parseData = getData.videoData;
            console.log(parseData);
            const webData = parseData.filter(item=>(item.type==="web series"));
            setwebSeries(webData);
            }

            }catch(error){console.error("error")}
        }
    useEffect(()=>{
        getShows();
    },[])

  return (
    <div style={{marginTop:"6rem", marginLeft:"40px"}}>
      <h1 style={{color:"white", letterSpacing:"1px"}}>Web Series</h1>
      <Flex style={{flexWrap:"wrap"}}>
        {webSeries.map((webSeries)=>(
            <ComponentCard
            key={webSeries._id}
            item={webSeries}/>
        ))}
      </Flex>
    </div>
  )
}

export default AllWebSeries
