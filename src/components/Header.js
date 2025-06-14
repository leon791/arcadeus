import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInverted, setIsInverted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check if the black section is in view
      const blackSection = document.querySelector('.raise-section');
      if (blackSection) {
        const rect = blackSection.getBoundingClientRect();
        const headerHeight = 80; // Approximate header height
        
        // Invert when the black section starts overlapping with the header
        setIsInverted(rect.top <= headerHeight && rect.bottom > headerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isInverted ? 'inverted' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-left">
            <div className="logo">
              <span 
                className="logo-text" 
                onClick={(e) => handleNavClick(e, 'home')}
                style={{ cursor: 'pointer' }}
              >
                Arcadeus
              </span>
            </div>
            
            <ul className="nav-links">
              <li><a href="#product" onClick={(e) => handleNavClick(e, 'product')}>Product</a></li>
              <li><a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')}>Solutions</a></li>
              <li><a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a></li>
            </ul>
          </div>
          
          <div className="nav-right">
            <a href="#login" className="nav-link">Log In</a>
            <a href="#signup" className="btn btn-primary">Sign Up</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;