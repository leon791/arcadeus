import React, { useState, useEffect } from 'react';
import './Header.css';
import ComingSoonModal from './ComingSoonModal';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInverted, setIsInverted] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // If on product page, always keep header inverted (black)
      if (currentPage === 'product') {
        setIsInverted(true);
        return;
      }
      
      // Check if the black section is in view (home page only)
      const blackSection = document.querySelector('.raise-section');
      if (blackSection) {
        const rect = blackSection.getBoundingClientRect();
        const headerHeight = 80; // Approximate header height
        
        // Invert when the black section starts overlapping with the header
        setIsInverted(rect.top <= headerHeight && rect.bottom > headerHeight);
      } else {
        setIsInverted(false);
      }
    };

    // Initial check when page loads
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
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
              <li><a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a></li>
            </ul>
          </div>
          
          <div className="nav-right">
            <button onClick={() => setShowComingSoon(true)} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Log In</button>
            <button onClick={(e) => handleNavClick(e, 'pricing')} className="btn btn-primary">Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
    
    <ComingSoonModal 
      isOpen={showComingSoon} 
      onClose={() => setShowComingSoon(false)} 
    />
    </>
  );
};

export default Header;