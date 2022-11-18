import React, { useState, useEffect} from 'react';
import './Decave.css';



function DecaveList(){
    const [decaves, setDecaves] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:8000/decaves')
        .then(response => response.json())
        .then(data => {
            setDecaves(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    },[]);

    return (
            <>
            <div id="banner">DECEMBER AVENUE</div>
            <h1>December Avenue</h1>
            <div className='container'>
            {decaves.map((decave)=>{
                return (
                    <div style={{border:"1px solid",width:"70%"}} className="row my-2 p-2 ">
                        <div className='col'>
                        <div style={{color:"rgb(20, 175, 175)",fontSize:"20px",fontWeight:"600"}}> {decave.date}</div>
                        <div> {decave.time}</div>
                        </div>
                        <div className='col'>
                        <div> {decave.title}</div>
                        <div> {decave.location}</div>
                        </div>
                        <div className='col'>
                        <button className="btn btn-primary">See Tickets</button>
                        </div>
                    </div>
                );
            })}
        </div>
        </>
    );
}
export default DecaveList;