import React from 'react'
import {TbFaceIdError} from 'react-icons/tb';
import { Flex, Container } from '@chakra-ui/react';

import {BsChevronRight} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import ProfileItem from '../ProfileItem/ProfileItem';

const Transaction = () => {
  return (
    <Flex style={{marginTop:"10rem", marginLeft:"5rem", border:"1px solid grey", width:"70rem"}}>
         <Container style={{ width: "20rem", flex: "0 0 10rem"}}>
            <ProfileItem />
              </Container>
        <Flex style={{flexDirection:"column"}}>
        <h1 style={{color: "white", height:"30px", width:"40%", padding:"10px", paddingLeft:"40px"}}>My Transactions</h1>
        <hr className="divider" />
        <div style={{width:"50rem", height:"auto", marginLeft:"0"}}>
        <TbFaceIdError style={{color:"grey", fontSize:"200px", paddingTop:"30px", paddingLeft:"42%" }}/>
       <div style={{color:"grey", fontSize:"50px", paddingLeft:"35%"}}>No Transaction</div> 
       <NavLink to="/BuyPlan" style={{textDecoration:"none"}}>
       <div className='transaction'>
        <div style={{textAlign:"center", fontSize:"20px", fontWeight:"bold"}}>Buy Plan</div>
        <div style={{textAlign:"center"}}>Exclusive Shows, Movies, & Live TV <br/>Downloadable, Uncensored.</div>
        <BsChevronRight style={{fontSize:"25px", paddingLeft:"90%"}}/>
        </div>
        </NavLink>
      </div>
      </Flex>
      
      </Flex>
  )
}

export default Transaction
