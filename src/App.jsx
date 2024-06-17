import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, ScrollRestoration } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';

import HomePage from './pages/HomePage'
import MovieDetails from './pages/MovieDetails';
import TheatreDetails from './pages/TheatreDetails';

function App() {

  const startFrom = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };
  
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      startFrom();
    }, [pathname]);
  
    return null;
  };


  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movie/:mid/theatre/:tid/screening/:sid" element={<TheatreDetails />} />
      </Routes>
    </Router>
  );

}


export default App
