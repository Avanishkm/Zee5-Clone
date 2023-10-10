import { Box, Container, Flex } from "@chakra-ui/react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  SmallAddIcon,
} from "@chakra-ui/icons";

import ComponentCard from "../ComponentCard/ComponentCard";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";

const TVSeries = () => {
  
  const[smallerScreen, setSmallerScreen] = useState(window.innerWidth<500)
  const [tvShowList, settvShowList] = useState([]);
  const [romantic, setRomantic] = useState([]);
  const [action, setAction] = useState([]);
  const [horror, setHorror] = useState([]);
  const [comedy, setComedy] = useState([]);

  const [hoveredStates, setHoveredStates] = useState({
    exclusive: [],
    romantic: [],
    action: [],
    horror: [],
    comedy: [],
  });

  const handleHover = (rowName, index, isHovered) => {
    // Clone the current state object
    const updatedHoveredStates = { ...hoveredStates };
    // Update the hover state for the specified row and index
    updatedHoveredStates[rowName][index] = isHovered;
    // Set the updated state object
    setHoveredStates(updatedHoveredStates);
  };

  const getMovies = async () => {
    try {
      const storedData = localStorage.getItem("videoData");

      if (storedData) {
        const getData = JSON.parse(storedData);
        const parseData = getData.videoData;
        console.log(parseData);

        const tvData = parseData.filter((item) => item.type === "web series");
        const romanticData = parseData.filter(
          (item) =>
            (item.type === "web series" || item.type === "tv show") &&
            (item.keywords.includes("romance") ||
              item.keywords.includes("love") ||
              item.keywords.includes("fantasy"))
        );
        // console.log(romanticData);
        const actionData = parseData.filter(
          (item) =>
            (item.type === "web series" || item.type === "tv show") &&
            (item.keywords.includes("action") ||
              item.keywords.includes("thriller") ||
              item.keywords.includes("sci-fi"))
        );
        // console.log(actionData);
        const horrorData = parseData.filter(
          (item) =>
            (item.type === "web series" || item.type === "tv show") &&
            (item.keywords.includes("horror") ||
              item.keywords.includes("darkness") ||
              item.keywords.includes("betrayal"))
        );
        // console.log(horrorData);
        const comedyData = parseData.filter(
          (item) =>
            (item.type === "web series" || item.type === "tv show") &&
            (item.keywords.includes("drama") ||
              item.keywords.includes("comedy"))
        );
        // console.log(comedyData);

        settvShowList(tvData);
        setRomantic(romanticData);
        setAction(actionData);
        setHorror(horrorData);
        setComedy(comedyData);
      }
    } catch (error) {
      console.error("error");
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div style={{backgroundColor: "black"}}>
      <Container style={{ marginTop: "8rem"}}>
        <Container style={{ marginLeft: "40px" }}>
          <Box
            as="p"
            sx={{
              fontSize: "25px",
              color: "white",
              fontFamily: "Arial",
              marginLeft: "20px",
              letterSpacing: "1px",
              marginBottom: "20px",
            }}
          >
            ZEE5 Exclusives
          </Box>
          <Flex
            sx={{
              overflowX: "scroll",
              overflowY: "scroll",
              "&::-webkit-scrollbar": { width: "1px" },
            }}
          >
            {tvShowList.map((exclusive, index) => (
              <ComponentCard
                key={exclusive._id}
                item={exclusive}
                isHovered={hoveredStates.exclusive[index]}
                handleHover={(isHovered) =>
                  handleHover("exclusive", index, isHovered)
                }
              />
            ))}
          </Flex>
        </Container>

        <Container style={{ marginLeft: "40px", marginTop: "40px" }}>
          <Box
            as="p"
            sx={{
              fontSize: "25px",
              color: "white",
              fontFamily: "Arial",
              marginLeft: "20px",
              letterSpacing: "1px",
              marginBottom: "20px",
            }}
          >
            Action Shows
          </Box>
          <Flex
            sx={{
              overflowX: "scroll",
              overflowY: "scroll",
              "&::-webkit-scrollbar": { width: "1px" },
            }}
          >
            {action.map((action, index) => (
              <ComponentCard
                key={action._id}
                item={action}
                isHovered={hoveredStates.action[index]}
                handleHover={(isHovered) =>
                  handleHover("action", index, isHovered)
                }
              />
            ))}
          </Flex>
        </Container>

        <Container style={{ marginLeft: "40px", marginTop: "40px" }}>
          <Box
            as="p"
            sx={{
              fontSize: "25px",
              color: "white",
              fontFamily: "Arial",
              marginLeft: "20px",
              letterSpacing: "1px",
              marginBottom: "20px",
            }}
          >
            Comedy Shows
          </Box>
          <Flex
            sx={{
              overflowX: "scroll",
              overflowY: "scroll",
              "&::-webkit-scrollbar": { width: "1px" },
            }}
          >
            {comedy.map((comedy, index) => (
              <ComponentCard
                key={comedy._id}
                item={comedy}
                isHovered={hoveredStates.comedy[index]}
                handleHover={(isHovered) =>
                  handleHover("comedy", index, isHovered)
                }
              />
            ))}
          </Flex>
        </Container>

        <Container style={{ marginLeft: "40px", marginTop: "40px" }}>
          <Box
            as="p"
            sx={{
              fontSize: "25px",
              color: "white",
              fontFamily: "Arial",
              marginLeft: "20px",
              letterSpacing: "1px",
              marginBottom: "20px",
            }}
          >
            Romantic Shows
          </Box>
          <Flex
            sx={{
              overflowX: "scroll",
              overflowY: "scroll",
              "&::-webkit-scrollbar": { width: "1px" },
            }}
          >
            {romantic.map((romantic, index) => (
              <ComponentCard
                key={romantic._id}
                item={romantic}
                isHovered={hoveredStates.romantic[index]}
                handleHover={(isHovered) =>
                  handleHover("romantic", index, isHovered)
                }
              />
            ))}
          </Flex>
        </Container>

        <Container style={{ marginLeft: "40px", marginTop: "40px" }}>
          <Box
            as="p"
            sx={{
              fontSize: "25px",
              color: "white",
              fontFamily: "Arial",
              marginLeft: "20px",
              letterSpacing: "1px",
              marginBottom: "20px",
            }}
          >
            Horror Shows
          </Box>
          <Flex
            sx={{
              overflowX: "scroll",
              overflowY: "scroll",
              "&::-webkit-scrollbar": { width: "1px" },
            }}
          >
            {horror.map((horror, index) => (
              <ComponentCard
                key={horror._id}
                item={horror}
                isHovered={hoveredStates.horror[index]}
                handleHover={(isHovered) =>
                  handleHover("horror", index, isHovered)
                }
              />
            ))}
          </Flex>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default TVSeries;
