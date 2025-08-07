import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { signOut } from '../firebase/auth';
import './Header.css';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInverted, setIsInverted] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, isAuthenticated, userName, userPhoto } = useAuth();

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

  const handleSignOut = async () => {
    const result = await signOut();
    if (result.success) {
      setShowUserMenu(false);
      setCurrentPage('home');
    }
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserMenu && !event.target.closest('.user-menu-container')) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showUserMenu]);

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
            {isAuthenticated ? (
              <div className="user-menu-container">
                <button className="user-button" onClick={toggleUserMenu}>
                  {userPhoto ? (
                    <img src={userPhoto} alt="User" className="user-avatar" />
                  ) : (
                    <div className="user-avatar-placeholder">
                      {userName?.charAt(0)?.toUpperCase() || 'U'}
                    </div>
                  )}
                  <span className="user-name">{userName}</span>
                  <svg 
                    className={`dropdown-arrow ${showUserMenu ? 'rotated' : ''}`}
                    width="12" 
                    height="12" 
                    viewBox="0 0 12 12"
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </button>
                
                {showUserMenu && (
                  <div className="user-dropdown">
                    <div className="user-info">
                      <div className="user-email">{user?.email}</div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" onClick={() => setCurrentPage('profile')}>
                      Profile
                    </button>
                    <button className="dropdown-item" onClick={() => setCurrentPage('settings')}>
                      Settings
                    </button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item sign-out" onClick={handleSignOut}>
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <a href="#login" className="nav-link" onClick={(e) => handleNavClick(e, 'auth')}>Log In</a>
                <a href="#signup" className="btn btn-primary" onClick={(e) => handleNavClick(e, 'auth')}>Sign Up</a>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;