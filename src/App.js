import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Staff from './pages/Staff';
import Activities from './pages/Activities';
import Nutrition from './pages/Nutrition';
import ContactUs from './pages/ContactUs';
import Events from './pages/Events';
import './styles/styles.css';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <AboutUs /> } />
        <Route path="/staff" element={ <Staff /> } />
        <Route path="/gallery" element={ <Gallery /> } />
        <Route path="/activities" element={ <Activities /> } />
        <Route path="/nutrition" element={ <Nutrition /> } />
        <Route path="/events" element={ <Events /> } />
        <Route path="/contact" element={ <ContactUs /> } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
