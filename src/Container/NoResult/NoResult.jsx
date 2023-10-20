import React, { useState, useEffect } from "react";
// import sorryIcon from "../../Assets/sorryIcon.jpg";
import { Link } from "react-router-dom";

const NoResult = () => {
  const [smallerScreen, setSmallerScreen] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setSmallerScreen(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      {smallerScreen ? (
        <div style={{ marginTop: "5rem" }}>
          <div
            style={{
              marginLeft: "2rem",
              marginTop: "5%",
              backgroundColor: "rgba(41, 37, 45, 0.6)",
              height: "400px",
              width: "85%",
              borderRadius: "10px",
            }}
          >
            <h1
              style={{
                display:"flex",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
                paddingTop: "40px",
                letterSpacing: "2px",
                
              }}
            >
              {" "}
              {/* SO SORRY .... */}
              Hi, Hope You Are Doing Well. This Feature Is Coming Soon, Stay
              Tuned!
              {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyh6PG3NIaOgTmORMljRNYvDstju826WgHkQ&usqp=CAU"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              /> */}
            </h1>
            <h2
              style={{
                color: "white",
                marginBottom: "10px",
                textAlign: "center",
                paddingTop: "50px",
              }}
            >
              {" "}
              {/* This feature is currently unavailable. */}
            </h2>
            <Link to="/">
              <h2 style={{ textAlign: "center", paddingTop: "40px" }}>
                Back To Home
              </h2>
            </Link>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: "8rem" }}>
          <div
            style={{
              marginLeft: "5rem",
              marginTop: "5%",
              backgroundColor: "rgba(41, 37, 45, 0.6)",
              height: "400px",
              width: "85%",
              borderRadius: "10px",
            }}
          >
            <h1
              style={{
                color: "white",
                marginBottom: "30px",
                marginLeft: "8rem",
                paddingTop: "100px",
              
              }}
            >
              {" "}
              {/* SO SORRY .... */}
              Hi, Hope You Are Doing Well. This Feature Is Coming Soon, Stay
              Tuned!
              {/* <img
                src={sorryIcon}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              /> */}
            </h1>
            <h2
              style={{
                color: "white",
                marginBottom: "30px",
                marginLeft: "23rem",
                paddingTop: "50px",
              }}
            >
              {" "}
              {/* This feature is currently unavailable. */}
            </h2>
            <Link to="/">
              <h2
                style={{
                  marginLeft: "10%",
                  marginLeft: "30rem",
                  // paddingTop: "1px",
                }}
              >
                Back To Home
              </h2>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NoResult;
