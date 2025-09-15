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
              Built for dealmakers.<br />Powered by precision.
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
              <a href="mailto:info@arcadeus.ai?subject=Arcadeus%20-%20Product%20Demo%20Request&body=Hello%20Arcadeus%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20product%20demo%20to%20learn%20more%20about%20your%20financial%20modeling%20solutions.%0A%0AI%20am%20particularly%20interested%20in%3A%0A-%20Excel%20integration%20capabilities%0A-%20AI-powered%20financial%20modeling%0A-%20Automated%20data%20processing%0A-%20Model%20review%20and%20validation%20features%0A%0AContact%20information%3A%0A-%20Name%3A%20%5BPlease%20fill%20in%5D%0A-%20Company%3A%20%5BPlease%20fill%20in%5D%0A-%20Role%2FTitle%3A%20%5BPlease%20fill%20in%5D%0A-%20Email%3A%20%5BPlease%20fill%20in%5D%0A-%20Phone%3A%20%5BOptional%5D%0A-%20Preferred%20demo%20time%3A%20%5BPlease%20fill%20in%5D%0A%0AThank%20you%20for%20your%20time.%20I%20look%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D" className="btn btn-primary btn-large">
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
        
        <div className="hero-visual-integrated">
          <div className="integrated-demo">
            <div className="excel-model-screenshot">
              <img 
                src="/images/arcadeus_excel_model.png" 
                alt="Arcadeus Excel Integration - Live Financial Model with MA PE Modeler" 
                className="hero-excel-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;