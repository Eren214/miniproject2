import React, {useState} from 'react';
import { HiChevronRight } from "react-icons/hi";
import { FaSistrix } from "react-icons/fa";
import "./Navbar.css";
import {Link} from 'react-router-dom';

function Navbar(){

    const [showLinks, setShowLinks]=useState(false);
    return(
    <div className='Navbar'>
        <div className='leftSide'>
            <img id="logo" src="./images/ticket.png"/><h2>ticketlab</h2>
            <button onClick={()=>setShowLinks(!showLinks)}>Menu<HiChevronRight id="arrow"/></button>
            <div className='searchbar'>
                <button id="search"><FaSistrix/></button>
                <input type="text" placeholder='    Event,artist or location' />
            </div>   
        </div>
        <div className='rightSide'>
            <div className='links' id={showLinks ? "hidden" : ""}>
                <div className="dropdown">
                <Link id="myticket" className="myticketsbtn" to='/'>My Tickets</Link>
                    <div className="dropdown-content">
                        <Link>Orders</Link>
                        <Link>My Listings</Link>
                        <Link>My Sales</Link>
                        <Link>Payments</Link>
                    </div> 
                </div>
                <Link id="sigin" to='/signin'>Sign In
                <img id="profile" src="./images/profile.png"/></Link>  
            </div>
        </div>
    </div>
    )
}
export default Navbar;