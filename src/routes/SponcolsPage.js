import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import SponcolList from '../concerts/spongecola/SponcolList';


const SponcolsPage = () => {
    return (
        <>
            <Navbar/>
            <br/>
            <SponcolList />
             <Footer/>
        </>
    )
}

export default SponcolsPage;