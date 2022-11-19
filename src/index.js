import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "slick-carousel/slick/slick.css";

import SignIn from './routes/SigninPage';
import RegisterPage from './routes/RegisterPage';
import DecavesPage from './routes/DecavesPage';
import SponcolsPage from './routes/SponcolsPage';
import CueshePage from './routes/CueshePage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/decave' element={<DecavesPage />} />
      <Route path='/sponcol' element={<SponcolsPage />} />
      <Route path='/cueshe' element={<CueshePage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

