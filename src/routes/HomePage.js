import React from 'react';

import Navbar from '../components/navbar/Navbar';
import CarouselComponent from '../components/carousel/CarouselComponent';
import Footer from '../components/footer/Footer';
import Carousel2 from '../components/carousel2/Carousel2';

const HomePage = () => {
    return (
        <>
           <Navbar /> 
           <CarouselComponent/>
           <Carousel2/>
           <Footer />
        </>
    )
}

export default HomePage;