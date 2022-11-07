import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Searchbar from './components/searchbar/SearchBar';
import Footer from './components/footer/Footer';
import CarouselComponent from './components/carousel/CarouselComponent';

function App() {
  return (
    <>
      <Navbar />
      <CarouselComponent/>
      <Footer />
    </>
  );
}

export default App;