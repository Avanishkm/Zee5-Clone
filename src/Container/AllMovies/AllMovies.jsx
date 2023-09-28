import { Container, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import ComponentCard from '../ComponentCard/ComponentCard';

const AllMovies = ({handleShown}) => {
    handleShown();
 const [movies, SetMovies] = useState([]);

 const getMovies = async()=>{
    try{
        const storedData = localStorage.getItem("videoData");

        if(storedData){
            const getData = JSON.parse(storedData);
            const parseData = getData.videoData;
            // console.log(parseData);

            const moviesData = parseData.filter(item=>item.type==='movie'); 
            console.log("moviesData", moviesData)
            SetMovies(moviesData)
        }
    } catch (error){console.error("error")}
 }
 useEffect(()=>{
    getMovies();
 }, [])

  return (
    <div style={{marginTop:"5rem", marginLeft:"40px"}}>
        <h1 style={{color: "white", marginLeft:"30px"}}>MOVIES</h1>
        <Flex style={{flexWrap:"wrap"}}>
            {movies.map((movie)=>(
                <ComponentCard
                key={movie._id}
                item={movie} />
            ))}
        </Flex>

    </div>
  )
}

export default AllMovies
