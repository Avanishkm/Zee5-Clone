import { Container, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchCard = ({searchData, clearSearchValue}) => {
  
  const navigate = useNavigate();
  const [result, setResult] = useState([]);
  const suggestionRef = useRef(null);

  useEffect(() => {
    const storedData = localStorage.getItem("videoData");
    const getData = JSON.parse(storedData);
    const parseData = getData ? getData.videoData : [];
    console.log("Parsed data:", parseData);

    const movieName = parseData.filter((item) => {
      return item.title?.toLowerCase().includes(searchData?.toLowerCase());
    });
    console.log("Filtered results:", movieName);

    setResult(movieName);
  }, [searchData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target)
      ) {
        setResult([]);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSuggestionClick = (selectedItem) => {
    console.log("Suggestion clicked:", selectedItem);
    navigate(`/result/${selectedItem._id}`);
    clearSearchValue();
    setResult([]);
  };
  return (
    <Container style={{ backgroundColor: "#0F0617" }}>
      {result.length > 0 && (
        <Container
          ref={suggestionRef}
          style={{
            position: "absolute",
            backgroundColor: "#0F0617",
            top: "110%",
            left: 0,
            width: "100%",
            maxHeight: "450px",
            overflowY: result.length > 5 ? "scroll" : "auto",
            zIndex: 2,
            cursor: "pointer",
          }}
        >
          <UnorderedList style={{ listStyle: "none" }}>
            {result.map((item) => (
              <ListItem className="cardStyle" key={item.id}>
                <Link
                  to={`/result/${item._id}`}
                  onClick={() => handleSuggestionClick(item)}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {item.title}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Container>
      )}
    </Container>
  );
};

export default SearchCard;
