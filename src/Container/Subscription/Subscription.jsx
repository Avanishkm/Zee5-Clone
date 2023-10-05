import React from 'react'
import {TbFaceIdError} from 'react-icons/tb';
import { Flex, Container } from '@chakra-ui/react';
import ProfileItem from '../ProfileItem/ProfileItem'

const Subscription = () => {
  return (
    <Flex style={{marginTop:"10rem", marginLeft:"5rem", border:"1px solid grey", width:"70rem"}}>
     <Container style={{ width: "20rem", flex: "0 0 10rem"}}>
        <ProfileItem />
          </Container>
    <Flex style={{flexDirection:"column"}}>
    <h1 style={{color: "white", height:"30px", width:"40%", padding:"10px", paddingLeft:"40px"}}>My Subscription</h1>
        <hr className="divider" />
   
    <div style={{width:"50rem", height:"auto", marginLeft:"0"}}>
    <TbFaceIdError style={{color:"grey", fontSize:"200px", paddingTop:"50px", paddingLeft:"42%" }}/>
   <div style={{color:"grey", fontSize:"50px", paddingLeft:"20%"}}>No Active Subscription</div> 
   
  </div>
  </Flex>
  
  </Flex>
  )
}

export default Subscription
