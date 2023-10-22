import React from "react";
import { Flex } from "@chakra-ui/react";
import ProfileItem from "../ProfileItem/ProfileItem";
import Footer from '../../Components/Footer/Footer';



const Profile = ({ username, email }) => {
  
  console.log(username);
  console.log(email);
  
  return (
    <div style={{ marginTop: "7rem" }}>
      <div
        style={{
          border: "0.5px solid grey",
          height: "40rem",
          width: "72rem",
          marginLeft: "70px",
        }}
      >
        <Flex>
          <ProfileItem />
          <h1 style={{ color: "white", marginLeft: "20px", height: "40px" }}>
            My Profile
          </h1>

          <div
            style={{
              marginTop: "130px",
              position: "relative",
              transform: "translateX(-40%)",
              width: "50%",
              marginLeft: "100px",
            }}
          >
            <Flex>
              <div
                key="initials"
                style={{
                  color: "white",
                  position: "fixed",
                  marginTop: "20px",
                  transform: "translateX(-2%)",
                  height: "60px",
                  width: "60px",
                  fontWeight: "bold",
                  fontSize: "30px",
                  letterSpacing: "2px",
                  paddingLeft: "20px",
                  paddingTop: "15px",
                  borderRadius: "50%",
                  textTransform: "Uppercase",
                  backgroundColor: "#8230c6",
                }}
              >
                {username?.slice(0, 2)}
              </div>
              <h2
                key="username"
                style={{
                  color: "white",
                  paddingTop: "10px",
                  position: "fixed",
                  marginLeft: "100px",
                  textTransform: "capitalize",
                }}
              >
                {username}
              </h2>
            </Flex>
            <div
              style={{
                color: "white",
                marginTop: "80px",
                position: "fixed",
                marginLeft: "100px",
              }}
            >
              {email}
            </div>
          </div>
        </Flex>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
