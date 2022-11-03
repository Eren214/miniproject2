import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/Navbar";
import Header from './Header';
import Footer from './Footer';
import CarouselComponent from './CarouselComponent';




function App() {
  return (
  <div>
    <Navbar/>
    <CarouselComponent></CarouselComponent>
    
    <hr/>
   <Footer/>
  </div>
  );
}

export default App;
