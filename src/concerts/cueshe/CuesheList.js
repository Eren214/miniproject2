import React, { useState, useEffect} from 'react';
import './Cueshe.css';



function CuesheList(){
    const [cueshes, setCueshes] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:8000/cueshes')
        .then(response => response.json())
        .then(data => {
            setCueshes(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    },[]);

    return (
            <>
            <div id="banner">CUESHE</div>
            <h1>Cueshe</h1>
            <div className='container'>
            {cueshes.map((cueshe)=>{
                return (
                    <div style={{border:"1px solid",width:"70%"}} className="row my-2 p-2 ">
                        <div className='col'>
                        <div style={{color:"rgb(20, 175, 175)",fontSize:"20px",fontWeight:"600"}}> {cueshe.date}</div>
                        <div> {cueshe.time}</div>
                        </div>
                        <div className='col'>
                        <div> {cueshe.title}</div>
                        <div> {cueshe.location}</div>
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
export default CuesheList;