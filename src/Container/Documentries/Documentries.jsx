import { Box, Container, Flex, Button, border } from '@chakra-ui/react'
import { SmallAddIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import ComponentCard from '../ComponentCard/ComponentCard'
import { useState, useEffect } from 'react'
import Footer from "../../Components/Footer/Footer";

const Documentries = ({handleShown}) => { 
  handleShown()

  const[documentaryList, setDoumentaryList] = useState([]);
    const[romantic, setRomantic] = useState([]);
    const[action, setAction] = useState([]);
    const[horror, setHorror] = useState([]);
    const[comedy, setComedy] = useState([]);

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

    const getMovies=async()=>{
      try{const storedData = localStorage.getItem("videoData");
               
          if(storedData){
              const getData = JSON.parse(storedData);
              const parseData = getData.videoData;
              console.log(parseData);
      const DocumentaryData = parseData.filter(item=>item.type==='documentary');
      const romanticData = parseData.filter(item=> (item.type==="documentary") && (item.keywords.includes("romance")||item.keywords.includes("sci-fi")||item.keywords.includes("darkness")));
      const actionData = parseData.filter(item=> (item.type==="documentary") && (item.keywords.includes("action")||item.keywords.includes("thriller")|| item.keywords.includes("mystery")|| item.keywords.includes("epic")|| item.keywords.includes("revenge")));
      const comedyData = parseData.filter(item=> (item.type==="documentary") && (item.keywords.includes("drama") ||item.keywords.includes("adventure")||  item.keywords.includes("love") ||item.keywords.includes("revenge")));
      const horrorData = parseData.filter(item => (item.type==="video song") && (item.keywords.includes("horror")|| item.keywords.includes("darkness")||item.keywords.includes("betrayal")));
      //  console.log(data.data);
       setDoumentaryList(DocumentaryData);
       setRomantic(romanticData);
       setAction(actionData); 
       setComedy(comedyData);
       setHorror(horrorData);
      }
  }catch(error){console.error("error")}
}
      useEffect(()=>{
          getMovies();
      },[])
  return (
    <>
    <Container style={{marginTop:"8rem"}}>
   <Container style={{ marginLeft:"40px"}}>
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
          <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
            {documentaryList.map((exclusive, index) => (
              <ComponentCard
                key={exclusive._id}
                item={exclusive}
                isHovered={hoveredStates.exclusive[index]}
                handleHover={(isHovered) => handleHover("exclusive", index, isHovered)}
              />
            ))}
          </Flex>
        </Container>

        <Container style={{marginLeft:"40px", marginTop:"40px"}}>
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
            Documentaries You Can't Miss
          </Box>
          <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
            {action.map((action, index) => (
              <ComponentCard
                key={action._id}
                item={action}
                isHovered={hoveredStates.action[index]}
                handleHover={(isHovered) => handleHover("action", index, isHovered)}
              />
            ))}
          </Flex>
        </Container>

        <Container style={{marginLeft:"40px", marginTop:"40px"}}>
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
          Action Documentaries
          </Box>
          <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
            {comedy.map((comedy, index) => (
              <ComponentCard
                key={comedy._id}
                item={comedy}
                isHovered={hoveredStates.comedy[index]}
                handleHover={(isHovered) => handleHover("comedy", index, isHovered)}
              />
            ))}
          </Flex>
        </Container>

        <Container style={{marginLeft:"40px", marginTop:"40px"}}>
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
          Horror Documentaries 
          </Box>
          <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
            {romantic.map((romantic, index) => (
              <ComponentCard
                key={romantic._id}
                item={romantic}
                isHovered={hoveredStates.romantic[index]}
                handleHover={(isHovered) => handleHover("romantic", index, isHovered)}
              />
            ))}
          </Flex>
        </Container>


         <Container style={{marginLeft:"40px", marginTop:"40px"}}>
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
            Horror Documentaries
          </Box>
          <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
            {horror.map((horror, index) => (
              <ComponentCard
                key={horror._id}
                item={horror}
                isHovered={hoveredStates.horror[index]}
                handleHover={(isHovered) => handleHover("horror", index, isHovered)}
              />
            ))}
          </Flex>
        </Container>
        </Container>
        <Footer/>
      
    </>
  )
}

export default Documentries
