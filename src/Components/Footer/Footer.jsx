import React from "react";
import { Container, Flex, Spacer } from "@chakra-ui/react";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { BiLogoInstagram } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  const [smallerScreen, setSmallerScreen] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setSmallerScreen(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (

    <>
    {smallerScreen ? (
      <>
        <Container style={{ marginTop: "4%" }}>
          <hr className="divider" />
          <Container
            style={{
              marginTop: "3%",
              marginLeft: "10%",
              alignItems: "center",
            }}
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="googleplaystore"
              style={{
                width: "120px",
                height: "60px",
                marginTop: "10px",
                marginLeft: "5px",
              }}
            />
          </Container>

          <Flex style={{ color: "white" }}>
            <h3
              style={{ marginLeft: window.innerWidth < 700 ? "20px" : "20%" }}
            >
              Connect with us
            </h3>
            <div>
              <Link to="https://m.facebook.com/ZEE5/events/">
                <CiFacebook
                  style={{
                    width: "30px",
                    height: "30px",
                    marginTop: "15px",
                    marginLeft: window.innerWidth < 700 ? "10px" : "30px",
                    borderRadius: "50%",
                    color: "white",
                  }}
                />
              </Link>
            </div>
            <div>
              <Link to="https://www.instagram.com/zee5/">
                <BiLogoInstagram
                  style={{
                    width: "30px",
                    height: "30px",
                    marginTop: "15px",
                    marginLeft: window.innerWidth < 700 ? "10px" : "30px",
                    borderRadius: "50%",
                    color: "white",
                  }}
                />
              </Link>
            </div>
            <div>
              <Link to="https://twitter.com/ZEE5India?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <CiTwitter
                  style={{
                    width: "30px",
                    height: "30px",
                    marginTop: "15px",
                    marginLeft: window.innerWidth < 700 ? "10px" : "30px",
                    borderRadius: "50%",
                    color: "white",
                  }}
                />
              </Link>
            </div>
            <div>
              <Link to="https://www.youtube.com/channel/UCXOgAl4w-FQero1ERbGHpXQ">
                <AiOutlineYoutube
                  style={{
                    width: "30px",
                    height: "30px",
                    marginTop: "15px",
                    marginLeft: window.innerWidth < 700 ? "10px" : "30px",
                    borderRadius: "50%",
                    color: "white",
                  }}
                />
              </Link>
            </div>
          </Flex>

          <Flex
            style={{ color: "grey", marginTop: "40px", marginLeft: "5%" }}
          >
            <div>About Us</div>
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>|</div>
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>
              Help Center
            </div>
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>|</div>
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>
              Privacy Policy
            </div>
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>|</div>
          </Flex>
          <Flex
            style={{ color: "grey", marginTop: "40px", marginLeft: "5%" }}
          >
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>
              Terms of Use
            </div>
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>|</div>
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>
              Preference
            </div>
          </Flex>
          <div style={{ marginTop: "40px", color: "grey", fontSize: "14px" }}>
            Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla
            Firefox 75+, Safari 5.1.5+
          </div>
          <div
            style={{ color: "grey", marginBottom: "20px", fontSize: "14px" }}
          >
            Copyright © 2023 Zee Entertainment Enterprises Ltd. All rights
            reserved.
          </div>
        </Container>
      </>
    ) : (
      <Container style={{ marginTop: "4%" }}>
        <hr
          style={{
            borderColor: "gray",
            borderWidth: "1px",
            marginBottom: "1rem",
          }}
        />
        <Container style={{ marginTop: "3%", marginLeft: "4%" }}>
          <Flex style={{ color: "white" }}>
            <h3>Download Apps</h3>
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="googleplaystore"
              style={{
                width: "100px",
                height: "40px",
                marginTop: "10px",
                marginLeft: "5px",
              }}
            />
            <h3 style={{ marginLeft: "50%" }}>Connect with us</h3>
            <div>
              <a href="https://m.facebook.com/ZEE5/events/">
                <CiFacebook
                  style={{
                    width: "30px",
                    height: "30px",
                    marginTop: "15px",
                    marginLeft: "30px",
                    borderRadius: "50%",
                    color: "white",
                    // backgroundColor: "rgb(42, 41, 41)",
                  }}
                />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/zee5/">
                <BiLogoInstagram
                  style={{
                    width: "30px",
                    height: "30px",
                    marginTop: "15px",
                    marginLeft: "30px",
                    borderRadius: "50%",
                    color: "white",
                    // backgroundColor: "rgb(42, 41, 41)",
                  }}
                />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/ZEE5India?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <CiTwitter
                  style={{
                    width: "30px",
                    height: "30px",
                    marginTop: "15px",
                    marginLeft: "30px",
                    borderRadius: "50%",
                    color: "white",
                    // backgroundColor: "rgb(42, 41, 41)",
                  }}
                />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/channel/UCXOgAl4w-FQero1ERbGHpXQ">
                <AiOutlineYoutube
                  style={{
                    width: "30px",
                    height: "30px",
                    marginTop: "15px",
                    marginLeft: "30px",
                    borderRadius: "50%",
                    color: "white",
                    // backgroundColor: "rgb(42, 41, 41)",
                  }}
                />
              </a>
            </div>
          </Flex>
          <Flex style={{ color: "grey", marginTop: "40px" }}>
            <div>About Us</div>
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>|</div>
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>
              Help Center
            </div>
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>|</div>
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>
              Privacy Policy
            </div>
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>|</div>
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>
              Terms of Use
            </div>
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>|</div>
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>
              Preference
            </div>
          </Flex>
          <Flex
            style={{
              color: "white",
              fontSize: "15px",
              marginTop: "40px",
              gap: "60px",
            }}
          >
            <h4 tyle={{ marginLeft: "20px", marginRight: "10px" }}>
              Popular TV Shows
              <h5 style={{ color: "grey" }}>Kumkum Bhagya</h5>
              <h5 style={{ color: "grey" }}>Kundali Bhagya</h5>
              <h5 style={{ color: "grey" }}>Bhagya Lakshmi</h5>
              <h5 style={{ color: "grey" }}>Meet</h5>
              <h5 style={{ color: "grey" }}>Annapoorna</h5>
              <h5 style={{ color: "grey" }}>Indira</h5>
            </h4>

            <h4 style={{ marginLeft: "20px", marginRight: "10px" }}>
              Premium Movies
              <h5 style={{ color: "grey" }}>Haddi</h5>
              <h5 style={{ color: "grey" }}>Kisi ka Bhai Kisi Ki Jaan</h5>
              <h5 style={{ color: "grey" }}>Bandaa</h5>
              <h5 style={{ color: "grey" }}>RRR</h5>
              <h5 style={{ color: "grey" }}>Uunchai</h5>
              <h5 style={{ color: "grey" }}>Uri: The Surgical Strike</h5>
              <h5 style={{ color: "grey" }}>The Kasmir Files</h5>
            </h4>
            <h4 style={{ marginLeft: "20px", marginRight: "10px" }}>
              Popular LIVE TV Channels
              <h5 style={{ color: "grey" }}>Kumkum Bhagya</h5>
              <h5 style={{ color: "grey" }}>Kundali Bhagya</h5>
              <h5 style={{ color: "grey" }}>Bhagya Lakshmi</h5>
              <h5 style={{ color: "grey" }}>Meet</h5>
              <h5 style={{ color: "grey" }}>Annapoorna</h5>
              <h5 style={{ color: "grey" }}>Indira</h5>
            </h4>
            <h4 style={{ marginLeft: "20px", marginRight: "10px" }}>
              Popular Web Series
              <h5 style={{ color: "grey" }}>Taj</h5>
              <h5 style={{ color: "grey" }}>Sunflower</h5>
              <h5 style={{ color: "grey" }}>Tripling</h5>
              <h5 style={{ color: "grey" }}>Pitchers</h5>
              <h5 style={{ color: "grey" }}>Naxalbari</h5>
              <h5 style={{ color: "grey" }}>Anantham</h5>
              <h5 style={{ color: "grey" }}>Gaalivana</h5>
            </h4>
            <h4 style={{ marginLeft: "20px", marginRight: "10px" }}>
              Bollywood Top Celebrities
              <h5 style={{ color: "grey" }}>Suuny Deol</h5>
              <h5 style={{ color: "grey" }}>Shahrukh khan</h5>
              <h5 style={{ color: "grey" }}>Salman khan</h5>
              <h5 style={{ color: "grey" }}>Manoj Bajpayee</h5>
              <h5 style={{ color: "grey" }}>Deepika Padukone</h5>
              <h5 style={{ color: "grey" }}>Noora Fatehi</h5>
              <h5 style={{ color: "grey" }}>Pooja Hegde</h5>
            </h4>
            <h4 style={{ marginLeft: "20px", marginRight: "10px" }}>
              Games & News
              <h5 style={{ color: "grey" }}>Play</h5>
              <h5 style={{ color: "grey" }}>Stories</h5>
            </h4>
          </Flex>
          <div style={{ marginTop: "40px", color: "grey", fontSize: "14px" }}>
            Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla
            Firefox 75+, Safari 5.1.5+
          </div>
          <div
            style={{ color: "grey", marginBottom: "20px", fontSize: "14px" }}
          >
            Copyright © 2023 Zee Entertainment Enterprises Ltd. All rights
            reserved.
          </div>
        </Container>
      </Container>
    )}
  </>

    // ------------------------------------------------------------------------------------------
    // <Container style={{ marginTop: "4%" }}>
    //   <hr
    //     style={{
    //       borderColor: "gray",
    //       borderWidth: "1px",
    //       marginBottom: "1rem",
    //     }}
    //   />
    //   <Container style={{ marginTop: "3%", marginLeft: "4%" }}>
    //     <Flex style={{ color: "white" }}>
    //       <h3>Download Apps</h3>
    //       <img
    //         src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
    //         alt="googleplaystore"
    //         style={{
    //           width: "100px",
    //           height: "40px",
    //           marginTop: "10px",
    //           marginLeft: "5px",
    //         }}
    //       />

    //       <img
    //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VHug-W1jZ__hBrcEGEhEsuZV2ghsB3EUrw&usqp=CAU"
    //         alt="AppleAppStore"
    //         style={{
    //           width: "100px",
    //           height: "25px",
    //           marginTop: "16px",
    //           marginLeft: "5px",
    //         }}
    //       />
    //       <h3 style={{ marginLeft: "50%" }}>Connect with us</h3>
    //       <div>
    //         <a href="https://m.facebook.com/ZEE5/events/">
    //           <img
    //             src="https://i.pinimg.com/originals/63/42/e0/6342e06ac7fbcef4595e6978b791beb5.jpg"
    //             alt="facebook"
    //             style={{
    //               width: "30px",
    //               height: "30px",
    //               marginTop: "15px",
    //               marginLeft: "30px",
    //               borderRadius: "50%",
    //             }}
    //           />
    //         </a>
    //       </div>
    //       <div>
    //         <a href="https://www.instagram.com/zee5/">
    //           <img
    //             src="https://i.pinimg.com/736x/a0/a6/66/a0a66670e75807e529358cb88a5972df.jpg"
    //             alt="instagram"
    //             style={{
    //               width: "30px",
    //               height: "30px",
    //               marginTop: "15px",
    //               marginLeft: "10px",
    //               borderRadius: "50%",
    //             }}
    //           />
    //         </a>
    //       </div>
    //       <div>
    //         <a href="https://twitter.com/ZEE5India?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
    //           <img
    //             src="https://i.pinimg.com/474x/14/fc/05/14fc05cbaf4e67318c060d25a8462b1b.jpg"
    //             alt="twitter"
    //             style={{
    //               width: "30px",
    //               height: "30px",
    //               marginTop: "15px",
    //               marginLeft: "10px",
    //               borderRadius: "50%",
    //             }}
    //           />
    //         </a>
    //       </div>
    //       <div>
    //         <a href="https://www.youtube.com/channel/UCXOgAl4w-FQero1ERbGHpXQ">
    //           <img
    //             src="https://i.pinimg.com/originals/50/68/ca/5068cae0be0b67710dda0360d42e64ac.jpg"
    //             alt="youtube"
    //             style={{
    //               width: "30px",
    //               height: "30px",
    //               marginTop: "15px",
    //               marginLeft: "10px",
    //               borderRadius: "50%",
    //             }}
    //           />
    //         </a>
    //       </div>
    //     </Flex>
    //     <Flex style={{ color: "grey", marginTop: "40px" }}>
    //       <div>About Us</div>
    //       <div style={{ marginLeft: "10px", marginRight: "10px" }}>|</div>
    //       <div style={{ marginLeft: "10px", marginRight: "10px" }}>
    //         Help Center
    //       </div>
    //       <div style={{ marginLeft: "10px", marginRight: "10px" }}>|</div>
    //       <div style={{ marginLeft: "10px", marginRight: "10px" }}>
    //         Privacy Policy
    //       </div>
    //       <div style={{ marginLeft: "10px", marginRight: "10px" }}>|</div>
    //       <div style={{ marginLeft: "10px", marginRight: "10px" }}>
    //         Terms of Use
    //       </div>
    //       <div style={{ marginLeft: "10px", marginRight: "10px" }}>|</div>
    //       <div style={{ marginLeft: "10px", marginRight: "10px" }}>
    //         Preference
    //       </div>
    //     </Flex>
    //     <Flex
    //       style={{
    //         color: "white",
    //         fontSize: "15px",
    //         marginTop: "40px",
    //         gap: "60px",
    //       }}
    //     >
    //       <h4>
    //         Popular TV Shows
    //         <h5 style={{ color: "grey" }}>Kumkum Bhagya</h5>
    //         <h5 style={{ color: "grey" }}>Kundali Bhagya</h5>
    //         <h5 style={{ color: "grey" }}>Bhagya Lakshmi</h5>
    //         <h5 style={{ color: "grey" }}>Meet</h5>
    //         <h5 style={{ color: "grey" }}>Annapoorna</h5>
    //         <h5 style={{ color: "grey" }}>Indira</h5>
    //       </h4>
    //       <h4 style={{ marginLeft: "20px", marginRight: "10px" }}>
    //         Premium Movies
    //         <h5 style={{ color: "grey" }}>Haddi</h5>
    //         <h5 style={{ color: "grey" }}>Kisi ka Bhai Kisi Ki Jaan</h5>
    //         <h5 style={{ color: "grey" }}>Bandaa</h5>
    //         <h5 style={{ color: "grey" }}>RRR</h5>
    //         <h5 style={{ color: "grey" }}>Uunchai</h5>
    //         <h5 style={{ color: "grey" }}>Uri: The Surgical Strike</h5>
    //         <h5 style={{ color: "grey" }}>The Kasmir Files</h5>
    //       </h4>
    //       <h4 style={{ marginLeft: "20px", marginRight: "10px" }}>
    //         Popular LIVE TV Channels
    //         <h5 style={{ color: "grey" }}>Zee News</h5>
    //         <h5 style={{ color: "grey" }}>Zee TV HD</h5>
    //         <h5 style={{ color: "grey" }}>&TV HD</h5>
    //         <h5 style={{ color: "grey" }}>Zee Marathi HD</h5>
    //       </h4>
    //       <h4 style={{ marginLeft: "20px", marginRight: "10px" }}>
    //         Popular Web Series
    //         <h5 style={{ color: "grey" }}>Taj</h5>
    //         <h5 style={{ color: "grey" }}>Sunflower</h5>
    //         <h5 style={{ color: "grey" }}>Tripling</h5>
    //         <h5 style={{ color: "grey" }}>Pitchers</h5>
    //         <h5 style={{ color: "grey" }}>Naxalbari</h5>
    //         <h5 style={{ color: "grey" }}>Anantham</h5>
    //         <h5 style={{ color: "grey" }}>Gaalivana</h5>
    //       </h4>
    //       <h4 style={{ marginLeft: "20px", marginRight: "10px" }}>
    //         Bollywood Top Celebrities
    //         <h5 style={{ color: "grey" }}>Suuny Deol</h5>
    //         <h5 style={{ color: "grey" }}>Shahrukh khan</h5>
    //         <h5 style={{ color: "grey" }}>Salman khan</h5>
    //         <h5 style={{ color: "grey" }}>Manoj Bajpayee</h5>
    //         <h5 style={{ color: "grey" }}>Deepika Padukone</h5>
    //         <h5 style={{ color: "grey" }}>Noora Fatehi</h5>
    //         <h5 style={{ color: "grey" }}>Pooja Hegde</h5>
    //       </h4>
    //       <h4 style={{ marginLeft: "20px", marginRight: "10px" }}>
    //         Games & News
    //         <h5 style={{ color: "grey" }}>Play</h5>
    //         <h5 style={{ color: "grey" }}>Stories</h5>
    //       </h4>
    //     </Flex>
    //     <div style={{ marginTop: "40px", fontSize: "14px", color: "grey" }}>
    //       Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla Firefox
    //       75+, Safari 5.1.5+
    //     </div>
    //     <div style={{ color: "grey", fontSize: "14px", marginBottom: "30px" }}>
    //       Copyright © 2023 Zee Entertainment Enterprises Ltd. All rights
    //       reserved.
    //     </div>
    //   </Container>
    // </Container>
  );
}


