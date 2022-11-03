import React from "react";
//import SearchBar from './components/searchBar'

//const logoSection="Logo Here";
//const menus=["HOME","ABOUT","CONTACT US","LOGIN"];
//const mainMenu=menus.map((item)=><li>{item}</li>);

class Header extends React.Component{
    constructor(props){
        super(props);
        this.menus=["My Tickets","Sign In"];
    }
    render(){
    return(
        <section className="header">
        <div className="container-fluid">
        <div className="navbar">
            <img id="logo" src="ticket.png"/><h2>ticketlab</h2>
            <input id="searchbar"  type="search"  placeholder="  Events,artist or location" /*onChange={handleChange}value={searchInput}*//>
            <ul>
                {this.menus.map(menu=>(
                <li>{menu}</li>
                ))}
            <img id="profile" src="profile.png"/>
            </ul>
        </div>
        </div>
        </section>
    );
}
}
export default Header;