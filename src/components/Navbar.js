import React, {useState} from 'react';
import { HiChevronRight } from "react-icons/hi";
import { FaSistrix } from "react-icons/fa";
import "./App.css";
function Navbar(){

    const [showLinks, setShowLinks]=useState(false);
    return(
    <div className='Navbar'>
        <div className='leftSide'>
            <img id="logo" src="ticket.png"/><h2>ticketlab</h2>
            <button onClick={()=>setShowLinks(!showLinks)}>Menu<HiChevronRight id="arrow"/></button>
            <div className='searchbar'>
                <button id="search"><FaSistrix/></button>
                <input type="text" placeholder='    Event,artist or location' />
            </div>   
        </div>
        <div className='rightSide'>
            <div className='links' id={showLinks ? "hidden" : ""}>
                <a href='/home'>My Tickets</a>
                <a href='/feedback'>Sign In</a>   
            </div>
        </div>
    </div>
    )
}
export default Navbar;