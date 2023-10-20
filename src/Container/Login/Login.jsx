import { Container, Button } from "@chakra-ui/react";
import React from "react";
import { CloseIcon } from '@chakra-ui/icons';
import { useState } from "react";
import { NavLink, Link, useLocation, json } from "react-router-dom";

const Login = ({  setLoggedInStatus, setUserName }) => {
  
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [color, setColor] = useState("");
  const [login, setLogin] = useState("");

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("All Field must be filled");
      setColor("red");
    } else if (!email.includes("@")) {
      setError("Email is invalid");
      setColor("red");
    } else {
      try {
        (async function () {
          const response = await fetch(
            "https://academics.newtonschool.co/api/v1/user/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                projectId: "f104bi07c490",
              },
              body: JSON.stringify({
                "email": `${email}`,
                "password": `${password}`,
                "appType": "ott",
              }),
            }
          );
          const data = await response.json();
          if (response.ok && data.status === "success") {
            localStorage.setItem("token", data.token)
            localStorage.setItem("user",JSON.stringify(data.data))
            console.log("registration successfully");
            setError("Login successfully");
            setColor("green");
            setLogin(true);
            setUserName(email);
            setLoggedInStatus(true);
          } else {
            console.error("Registration Failed");
            setError("Incorrect Email or password");
            setColor("red");
          }
        })();
      } catch (error) {
        console.error("An error occurred: ", error);
        setError("An error occurred while registering");
        setColor("red");
      }
    }
  };
  return (
    <Container
      sx={{
        bg: "white",
        width: "24%",
        marginLeft: "38%",
        marginTop: "100px",
        borderRadius: "10px",
        height: "450px",
      }}
    >
      <NavLink  to="/">
        <CloseIcon
          style={{
            color: "red",
            borderRadius: "50%",
            marginLeft: "95%",
            height: "20px",
            width: "20px",
          }}
        />
      </NavLink>
      <form style={{ border: "2px solid white", borderRadius: "10px" }}>
        <h2 style={{ marginLeft: "25%" }}> Login to ZEE5</h2>

        <h4 style={{ color: "#363636", marginLeft: "8%", marginRight: "5%" }}>
          Login to continue enjoying uninterrupted video and personalised
          experience.
        </h4>

        <input
          style={{
            marginLeft: "8%",
            height: "40px",
            width: "80%",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
          type="text"
          placeholder="Enter Your Email ID"
          value={email}
          onChange={handleEmail}
        />
        <br />

        <input
          style={{
            marginLeft: "8%",
            height: "40px",
            width: "80%",
            borderRadius: "5px",
            border: "1px solid gray",
            marginTop: "20px",
          }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <div
          style={{ color: color, marginLeft: "8%", marginTop: "2%" }}
          className="error"
        >
          {error}
        </div>
        {login ? ( 
          <>
            <Link to="/">
              <Button
                style={{
                  marginLeft: "40%",
                  backgroundColor: "purple",
                  color: "White",
                  marginTop: "40px",
                  height: "40px",
                  width: "100px",
                  border: "2px solid purple",
                  borderRadius: "8px",
                }}
              >
                Go to Home
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Button
              type="button"
              style={{
                cursor: "pointer",
                marginLeft: "8%",
                height: "45px",
                width: "82%",
                fontSize: "Bolder",
                borderRadius: "5px",
                border: "2px solid plum",
                marginTop: "25px",
                color: "white",
                background: "#8230c6",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#bd79f4";
                e.target.style.border = "1px solid #bd79f4";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#8230c6";
                e.target.style.border = "2px solid #bd79f4";
              }}
              onClick={handleLogin}
            >
              LOGIN
            </Button>
            <br />
            <Link to="/Register" style={{ textDecoration: "none" }}>
              <div
                style={{ marginLeft: "25%", marginTop: "35px", color: "black" }}
              >
                New to ZEE5? <span style={{ color: "#8230c6" }}>Register</span>
              </div>
            </Link>
          </>
        )}
      </form>
    </Container>
  );
};

export default Login;
