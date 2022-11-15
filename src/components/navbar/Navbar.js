import React, {useState} from 'react';
import { HiChevronRight } from "react-icons/hi";
import "./Navbar.css";
import {Link} from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';
import DataBooks from './Data.json';


function Navbar(){
    const [showLinks, setShowLinks]=useState(false);
    return(
    <div className='Navbar'>
        <div className='leftSide'>
            <Link to='/'style={{textDecoration:"none"}}><img id="brand" src="./images/ticket.png"/><h2>ticketlab</h2></Link>
            <button onClick={()=>setShowLinks(!showLinks)}>Menu<HiChevronRight id="arrow"/></button>
            <div className='searchbar'>
                <SearchBar id="input" data={DataBooks} placeholder="Events,artist and location"/>
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