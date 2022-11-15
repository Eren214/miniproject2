import React,{useState} from "react";
import "./Searchbar.css";
import { FaSistrix } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";



function SearchBar({placeholder,data}){
  const[filteredData, setFilteredData]=useState([]);
  const[wordEntered,setwordEntered]=useState("");

  const handleFilter=(event)  =>{
    const searchWord=event.target.value
    setwordEntered(searchWord);
    const newFilter=data.filter((value)=>{
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    })
    if(searchWord===""){
      setFilteredData([])
    }else
    setFilteredData(newFilter);
  };

  const clearInput=()=>{
    setFilteredData([]);
    setwordEntered("");
  };
  
  return(
    <div className="search">
   <div className="searchInputs">
    <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
    <div className="searchIcon">
      {filteredData.length === 0 ? (<FaSistrix id="magnify"/>): (<FaTimes id="clearBtn" onClick={clearInput}/>)}
      </div>
   </div>
   {filteredData.length != 0 &&(
   <div className="dataResult">
    {filteredData.slice(0,15).map((value,key)=> {
      return(
      <a className="dataItem" href={value.link}target="_blank">
      <p>{value.title}</p>
      </a>
      );
    })}
   </div>
   )}
    </div>
  );
}
export default SearchBar;
