import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Solutions from './components/Solutions';
import Pricing from './components/Pricing';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'product':
        return (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Product />
          </>
        );
      case 'solutions':
        return (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Solutions />
          </>
        );
      case 'pricing':
        return (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Pricing />
          </>
        );
      case 'home':
      default:
        return (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Hero />
            <Services />
            <About />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;