import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';
import useImagesLoaded from './useImageLoaded'; 

function App() {
  const [loading, setLoading] = useState(true);
  const imagesLoaded = useImagesLoaded();

  useEffect(() => {
    if (imagesLoaded) {
      setLoading(false); 
    }
  }, [imagesLoaded]);

  return (
    <div>
      {loading && (
        <div className="loading-screen">
          <div className="dot-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      )}

      <Navbar />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
