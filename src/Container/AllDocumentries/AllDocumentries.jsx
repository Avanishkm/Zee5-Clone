import React from "react";
import ComponentCard from "../ComponentCard/ComponentCard";
import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';


const AllDocumentries = () => {
  const [documentry, setDocumentry] = useState([]);

  const getShows = async () => {
    try {
      const storedData = localStorage.getItem("videoData");
      if (storedData) {
        const getData = JSON.parse(storedData);
        const parseData = getData.videoData;
        console.log(parseData);
        const DocumentaryData = parseData.filter(
          (item) => item.type === "documentary"
        );
        setDocumentry(DocumentaryData);
      }
    } catch (error) {
      console.error("error");
    }
  };
  useEffect(() => {
    getShows();
  }, []);
  return (
    <div style={{ marginTop: "6rem", marginLeft: "40px" }}>
      <h1 style={{ color: "white", letterSpacing: "1px" }}>Documentaries</h1>
      <Flex style={{ flexWrap: "wrap" }}>
        {documentry.map((documentary) => (
          <ComponentCard key={documentary._id} item={documentary} />
        ))}
      </Flex>
    </div>
  );
};

export default AllDocumentries;
