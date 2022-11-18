import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import CuesheList from '../concerts/cueshe/CuesheList';


const CueshePage = () => {
    return (
        <>
            <Navbar/>
            <br/>
            <CuesheList/>
             <Footer/>
        </>
    )
}

export default CueshePage;