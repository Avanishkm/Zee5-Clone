import { CloseIcon } from '@chakra-ui/icons'
import { Button, background } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const BuyPlan = () => {
  const background = {
    background: `url('https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2023/06/Zee5-Subscription-plans.jpg')`,
    backgroundSize: 'cover',
    width: 'auto',
    height:"700px",
    
  }

  
  return (
    <>
    <div style={background}>
      <NavLink to="/">
      <Button style={{ cursor:"pointer", backgroundColor:" #4B0082", color:"white",marginTop:"16px", marginLeft:"93%", width:"60px", height:"30px", border:"2px solid #4B0082", borderRadius:"10px" }}><CloseIcon /></Button>


      </NavLink>
      
    </div>
    </>
  )
}

export default BuyPlan
