import React, {useState} from 'react';
import "./Submenu.css";
import {Link} from 'react-router-dom';

function Submenu(){

    const [showLinks, setShowLinks]=useState(false);
    return(
    <div className="Navbar container my-2">
        <div className='leftSide'>
        <div className="links" id={showLinks ? "hidden" : ""}>
        <div className="dropdown">
        <Link id="concert" className="dropbtn">Concerts</Link>
        <div className="dropdown-content">
            <Link>December Avenue</Link>
            <Link>Spongecola</Link>
            <Link>Ben and Ben</Link>
            <Link>Rocksteddy</Link>
            <Link>Parokya ni Edgar</Link>
            <Link>Cueshe</Link>
        </div>  
        </div>
        <div className="dropdown2">
        <Link id="artist" className="artistbtn" to='/signin'>Artists</Link> 
            <div className="artist-content">
                <Link>Cueshe</Link>
                <Link>Spongecola</Link>
                <Link>Ben and Ben</Link>
                <Link>Rocksteddy</Link>
                <Link>Parokya ni Edgar</Link>
                <Link>Cueshe</Link>
            </div> 
        </div>
        <div className="dropdown3">
        <Link id="location" className="locationbtn" to='/signin'>Location</Link> 
            <div className="location-content">
                <Link>Araneta Coliseum</Link>
                <Link>MOA Arena</Link>
                <Link>Phil. Arena</Link>
                <Link>SM Seaside</Link>
                <Link>BGC Grounds</Link>
                <Link>KIA Theatre</Link>
            </div>
        </div> 
                
        <div className="dropdown4">
            <Link id="gc" className="gcbtn" to='/signin'>Gift Cards</Link>
        </div>   
        </div>
        </div>
    </div>
    )
}
export default Submenu;