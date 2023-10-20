import React from 'react'
import { NavLink } from 'react-router-dom';

export default function ProfileItem(){

    const ProfileLinkStyle =({ isActive }) => {
        return {
          borderBottom: isActive ? "2px solid white" : "none",
          color: isActive ? "white" : "grey",
        }
        };

  return (
    <>
    <div className="profile" style={{fontFamily:"Noto Sans, sans-serif"}}>
    <NavLink to='/Profile' style={ProfileLinkStyle} className="profileItemList">
    <div style={{paddingTop:"30px", paddingLeft:"20px"}}>My Profile</div>
    </NavLink>

    <NavLink to='/Watchlist' style={ProfileLinkStyle} className="profileItemList">
    <div style={{paddingTop:"50px", paddingLeft:"20px"}} className="profileItemList">My WatchList</div>
    </NavLink>

    <NavLink to='/Subscription' style={ProfileLinkStyle} className="profileItemList">
    <div style={{paddingTop:"30px", paddingLeft:"20px"}} className="profileItemList">My Subscription</div>
    </NavLink>

    <NavLink to='/Rental' style={ProfileLinkStyle} className="profileItemList">
    <div style={{paddingTop:"30px", paddingLeft:"20px"}}  className="profileItemList">My Rentals</div>
    </NavLink>
    
    <NavLink to='/Transaction' style={ProfileLinkStyle} className="profileItemList">
    <div style={{paddingTop:"30px", paddingLeft:"20px"}} className="profileItemList">My Transactions</div>
    </NavLink>
    
    </div>
    </>
  )
}


