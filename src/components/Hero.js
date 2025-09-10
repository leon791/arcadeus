import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
              Arcadeus fully automates institutional underwriting and applies artificial 
              reasoning to reinvent the modeling process.
            </motion.p>
            
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <a href="mailto:info@arcadeus.ai?subject=Arcadeus%20-%20Product%20Demo" className="btn btn-primary btn-large">
                Request Demo
              </a>
              <button onClick={() => setCurrentPage && setCurrentPage('product')} className="btn btn-secondary btn-large">
                Learn More
              </button>
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
            <CountUpNumber end={92} suffix="%" duration={4} delay={0} />
            <div className="stat-label">Automation of all data inputs</div>
          </div>
          <div className="stat">
            <CountUpNumber end={6} suffix="+" duration={4} delay={500} />
            <div className="stat-label">Agents available at any time</div>
          </div>
          <div className="stat">
            <CountUpNumber end={12} suffix=" sec" duration={4} delay={1000} />
            <div className="stat-label">Average time to generate model</div>
          </div>
          <div className="stat">
            <CountUpNumber end={2} suffix="%" duration={4} delay={1500} />
            <div className="stat-label">Average error rate of Arcadeus models</div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual-integrated"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          <div className="integrated-demo">
            <motion.div 
              className="excel-model-screenshot"
              initial={{ opacity: 0, scale: 0.9, y: 80 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 1.4, 
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img 
                src="/images/arcadeus_excel_model.png2.png" 
                alt="Arcadeus Excel Integration - Live Financial Model with MA PE Modeler" 
                className="hero-excel-image"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-8px)';
                  e.target.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0px)';
                  e.target.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;