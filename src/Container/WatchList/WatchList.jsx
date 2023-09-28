import React from 'react'
import { useEffect, useState, useParams } from "react";
import { Container, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MinusIcon } from "@chakra-ui/icons";


const WatchList = () => {

  const[watchlist, setWatchList] = useState({});
  const [loading, setLoading] = useState(true);
  const[hover, setHover] = useState([]);

  const handleHover = (index, isHovered)=>{
    const updatedHoveredStates = { ...hover };
        updatedHoveredStates[index] = isHovered;
        setHover(updatedHoveredStates);
      };

      const addRemoveWatchList=(itemId)=>{
        const updatedWatchList = watchlist.filter((item)=>item._id !== itemId);
        setWatchList(updatedWatchList)
      }
      
      async function getWatchList (){
        const userInfo = localStorage.getItem("signup")
        if (userInfo){
          const userDetail = JSON.parse(userInfo);
          console.log(userDetail);
          const response = await(fetch("https://academics.newtonschool.co/api/v1/ott/watchlist/like",
              {
                  method: 'GET',
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userDetail.sign.token}`,
                      projectId: "f104bi07c490",
                  }
              }))
              
        console.log(response);
        const data = await response.json();
        console.log("data i need:", data.data);
        if (Array.isArray(data.data?.shows)){
        setWatchList(data.data?.shows);
        setLoading(false)
        } else {
          console.error("Data is not an array:", data.data.shows);
        }
      }
    }
  
    useEffect(() => {
      getWatchList();
    }, []);

  return (
    <div style={{ marginTop: "7rem" }}>
      <h1 style={{ color: "white", marginLeft: "40px" }}>Watchlist</h1>
      {loading ? (
        <div>loading..</div>
      ) : (
        <Container sx={{ display: "flex", marginLeft: "20px" }}>
          {watchlist.map((item, index) => (
            <div
              key={item._id}
              style={{ position: "relative", marginRight: "20px" }}
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
            >
               <Button sx={{
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
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{
                  height: "15rem",
                  width: "13rem",
                  borderRadius: "10px",
                  border:"none"
                }}
              />
              {hover[index] && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "40%",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    marginTop: "70px",
                  }}
                >
                  <h5 style={{ color: "#505050", textAlign: "left" }}>
                    {item.title}
                  </h5>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Link to={`/watch/${item._id}`}>
                      <Button
                        sx={{
                          color: "gray",
                          height: "30px",
                          width: "90px",
                          background: "white",
                          border: "1px solid gray",
                          borderRadius: "5px",
                          cursor: "pointer",
                          marginLeft: "5px",
                          marginRight: "70px",
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
                    <Button onClick={()=>addRemoveWatchList(item._id)}
                    style={{ border: "1px solid grey", height: "30px", borderRadius: "10px", cursor: "pointer" }}>
                    <MinusIcon sx={{ fontSize: "15px", color: "grey" }} />
              </Button>
                  </Box>
                </Box>
              )}
              </Button>
            </div>
          ))}
        </Container>
      )}
    </div>
  )
}

export default WatchList
