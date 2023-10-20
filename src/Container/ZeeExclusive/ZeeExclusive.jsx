import {Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import ComponentCard from "../ComponentCard/ComponentCard";

export default function AllMovies() {
  
  const [exclusive, SetExclusive] = useState([]);

  const getMovies = async () => {
    try {
      const storedData = localStorage.getItem("videoData");

      if (storedData) {
        const getData = JSON.parse(storedData);
        const parseData = getData.videoData;
        // console.log(parseData);

        const ExclusiveData = parseData.filter((item) => item.type === "movie");
        // console.log("moviesData", moviesData)
        SetExclusive(ExclusiveData);
      }
    } catch (error) {
      console.error("error");
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div style={{ marginTop: "5rem", marginLeft: "40px" }}>
      <h1 style={{ color: "white", marginLeft: "30px", letterSpacing: "1px" }}>
        ZEE Exclusive
      </h1>
      <Flex style={{ flexWrap: "wrap" }}>
        {exclusive.map((exclusive) => (
          <ComponentCard key={exclusive._id} item={exclusive} />
        ))}
      </Flex>
    </div>
  );
}
