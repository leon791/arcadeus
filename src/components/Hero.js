import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import './Hero.css';

const CountUpNumber = ({ end, suffix = "", prefix = "", duration = 2, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      
      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        let currentCount;
        if (end === 2.3) {
          // For decimal numbers like 2.3
          currentCount = (easeOutQuart * end).toFixed(1);
        } else if (end === 99.7) {
          // For decimal percentages like 99.7
          currentCount = (easeOutQuart * end).toFixed(1);
        } else {
          // For whole numbers like 95 and 150
          currentCount = Math.floor(easeOutQuart * end);
        }
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };
      
      updateCount();
    }, delay);

    return () => clearTimeout(timer);
  }, [hasStarted, end, duration, delay]);

  return (
    <motion.div 
      className="stat-number"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true }}
    >
      {prefix}{count}{suffix}
    </motion.div>
  );
};

const Hero = ({ setCurrentPage }) => {
  const { isAuthenticated } = useAuth();

  const handleDownloadClick = () => {
    if (!isAuthenticated) {
      // Redirect to auth if not logged in
      setCurrentPage('auth');
    } else {
      // Redirect to installation page if authenticated
      setCurrentPage('install');
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Built for dealmakers. Powered by precision.
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Arcadeus is the first financial modeling AI, that fully automates the way 
              financial institutions underwrite transactions.
            </motion.p>
            
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <button 
                onClick={handleDownloadClick}
                className="btn btn-primary btn-large download-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Add-In
              </button>
              <a href="#contact" className="btn btn-secondary btn-large">
                Request Demo
              </a>
              <a href="#services" className="btn btn-outline btn-large">
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="stat">
            <CountUpNumber end={95} suffix="%" duration={4} delay={0} />
            <div className="stat-label">Faster Analysis</div>
          </div>
          <div className="stat">
            <CountUpNumber end={2.3} prefix="$" suffix="B+" duration={4} delay={500} />
            <div className="stat-label">Assets Analyzed</div>
          </div>
          <div className="stat">
            <CountUpNumber end={150} suffix="+" duration={4} delay={1000} />
            <div className="stat-label">Deals Completed</div>
          </div>
          <div className="stat">
            <CountUpNumber end={99.7} suffix="%" duration={4} delay={1500} />
            <div className="stat-label">Accuracy Rate</div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual-integrated"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          <div className="integrated-demo">
            <div className="demo-placeholder">
              <div className="placeholder-content">
                <div className="placeholder-icon">📊</div>
                <h3>Excel Model Integration</h3>
                <p>Interactive demo placeholder - screenshot will be inserted here</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;