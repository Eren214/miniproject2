import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Submenu from './components/submenu/Submenu';
import Carousel1 from './components/carousel1/Carousel1';
import Carousel2 from './components/carousel2/Carousel2';

function App() {
  return (
    <>
      <Navbar />
      <Submenu/>
      <h2 style={{color:"rgb(245, 67, 67)",fontSize:"21px",paddingTop:"0px"}}>Top Events</h2>
     <Carousel1/>
     <Carousel2/>
      <Footer />
    </>
  );
}

export default App;