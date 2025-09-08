import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Pricing from './components/Pricing';
import PrivacyPolicy from './components/PrivacyPolicy';

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
      case 'pricing':
        return (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Pricing />
          </>
        );
      case 'privacy-policy':
        return <PrivacyPolicy setCurrentPage={setCurrentPage} />;
      case 'home':
      default:
        return (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Hero setCurrentPage={setCurrentPage} />
            <Services />
            <About setCurrentPage={setCurrentPage} />
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