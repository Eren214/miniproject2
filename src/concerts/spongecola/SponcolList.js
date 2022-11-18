import React, { useState, useEffect} from 'react';
import './Sponcol.css';



function SponcolList(){
    const [sponcols, setSponcols] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:8000/sponcols')
        .then(response => response.json())
        .then(data => {
            setSponcols(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    },[]);

    return (
            <>
            <div id="banner">SPONGECOLA</div>
            <h1>Spongecola</h1>
            <div className='container'>
            {sponcols.map((sponcol)=>{
                return (
                    <div style={{border:"1px solid",width:"70%"}} className="row my-2 p-2 ">
                        <div className='col'>
                        <div style={{color:"rgb(20, 175, 175)",fontSize:"20px",fontWeight:"600"}}> {sponcol.date}</div>
                        <div> {sponcol.time}</div>
                        </div>
                        <div className='col'>
                        <div> {sponcol.title}</div>
                        <div> {sponcol.location}</div>
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
export default SponcolList;