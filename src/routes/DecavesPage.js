import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import DecaveList from '../concerts/decave/DecaveList';


const DecavesPage = () => {
    return (
        <>
            <Navbar/>
            <br/>
            <DecaveList />
             <Footer/>
        </>
    )
}

export default DecavesPage;