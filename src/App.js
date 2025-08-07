import React, { useState } from 'react';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Solutions from './components/Solutions';
import Pricing from './components/Pricing';
import Auth from './components/Auth';
import Install from './components/Install';

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
      case 'auth':
        return (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Auth setCurrentPage={setCurrentPage} />
          </>
        );
      case 'install':
        return (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Install />
          </>
        );
      case 'profile':
        return (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
              <h2>Profile Page</h2>
              <p>Profile functionality coming soon...</p>
            </div>
          </>
        );
      case 'settings':
        return (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
              <h2>Settings Page</h2>
              <p>Settings functionality coming soon...</p>
            </div>
          </>
        );
      case 'home':
      default:
        return (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Hero setCurrentPage={setCurrentPage} />
            <Services />
            <About />
            <Contact />
          </>
        );
    }
  };

  return (
    <AuthProvider>
      <div className="App">
        {renderPage()}
      </div>
    </AuthProvider>
  );
}

export default App;