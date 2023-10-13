import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Button, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Search = () => {
  const {id} = useParams();
  const [] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

    const getMovies=async()=>{
      try{
    const response = await(fetch(`https://academics.newtonschool.co/api/v1/ott/show/${id}`,
    {
        method: 'GET',
        headers: {
            'projectId': "f104bi07c490",
        }
    }))
    if (response.ok) {
      const data = await response.json();
      console.log("API Response:", data.data);
      
      // Assuming the API response has 'title' and 'image' properties
      setSuggestionData(data.data);
      setLoading(false);
    }}catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, [id])

  if (!suggestionData) {
    return (
      <div style={{ marginTop: "10rem" }}>
        <h3 style={{ color: "white" }}>Loading...</h3>
      </div>
    );
  }
  return (
    <div style={{ marginTop: "7rem", marginLeft: "40px" }}>
      <h3 style={{ color: "Grey" }}>
        Showing results for "{suggestionData.title}"{" "}
      </h3>
      <hr style={{ marginLeft: "5px", marginRight: "45px" }}></hr>
      <Button
        sx={{
          padding: "0",
          border: "1px solid black",
          cursor: "pointer",
          background: "black",
          marginLeft: "5px",
          transition: "transform 550ms",
          ":hover": {
            border: "5px solid white",
            borderRadius: "10px",
          },
        }}
      >
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        <img
          src={suggestionData?.thumbnail}
          alt={suggestionData?.title}
          style={{
            height: "20rem",
            width: "15rem",
            borderRadius: "10px",
            border: "none",
          }}
        />
        {isHovered && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              right: "0",
              bottom: "0",
              background: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              marginTop: "80px",
            }}
          >
            <h5 style={{ color: "#505050", textAlign: "left" }}>
              {suggestionData?.title}
            </h5>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={`/watch/${suggestionData?._id}`}>
                <Button
                  sx={{
                    color: "gray",
                    height: "30px",
                    width: "90px",
                    background: "white",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginLeft: "0",
                    marginRight: "100px",
                    marginBottom: "10px",
                    padding: "0",
                  }}
                >
                  <img
                    src="https://www.pngitem.com/pimgs/m/52-520203_right-side-triangle-arrow-grey-color-pattern-hd.png"
                    style={{
                      width: "10px",
                      height: "10px",
                      marginRight: "8px",
                    }}
                  />
                  Watch
                </Button>
              </Link>
            </Box>
          </Box>
        )}
      </Button>
    </div>
  );
};

export default Search;
