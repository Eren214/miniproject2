import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Searchbar from './components/searchbar/SearchBar';
import Footer from './components/footer/Footer';
//import CarouselComponent from './components/carousel/CarouselComponent';
import Carousel2  from './components/carousel2/Carousel2'; 
import Submenu from './components/submenu/Submenu';

function App() {
  return (
    <>
      <Navbar />
      <Submenu/>
     <Carousel2/>
      <Footer />
    </>
  );
}

export default App;