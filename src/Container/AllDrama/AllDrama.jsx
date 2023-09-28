import React from 'react'
import ComponentCard from '../ComponentCard/ComponentCard';
import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const AllDrama = () => {
    const[drama, setDrama] = useState([]);

    const getShows=async()=>{
        try{ const storedData = localStorage.getItem("videoData");
            if(storedData){
            const getData = JSON.parse(storedData);
            const parseData = getData.videoData;
            console.log(parseData);
            const dramaData = parseData.filter(item=>(item.type==="video song"));
            setDrama(dramaData);
            }

            }catch(error){console.error("error")}
        }
    useEffect(()=>{
        getShows();
    },[])

  return (
    <div style={{marginTop:"6rem", marginLeft:"40px"}}>
      <h1 style={{color:"white", letterSpacing:"1px"}}>Drama You Can't Miss</h1>
      <Flex style={{flexWrap:"wrap"}}>
        {drama.map((drama)=>(
            <ComponentCard
            key={drama._id}
            item={drama}/>
        ))}
      </Flex>
    </div>
  )
}

export default AllDrama
