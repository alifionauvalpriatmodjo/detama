// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects'; 
import ScrollToTop from './components/ScrollToTop'; // <--- IMPORT INI
import './App.css';

function App() {
  return (
    <Router>
      {/* Pasang ScrollToTop di sini agar aktif di semua halaman */}
      <ScrollToTop />
      
      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;