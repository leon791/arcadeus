import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
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
              Built for dealmakers.
              <span className="title-highlight"> Powered by precision.</span>
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
              <a href="#contact" className="btn btn-primary btn-large">
                Request Demo
              </a>
              <a href="#services" className="btn btn-secondary btn-large">
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
            <div className="stat-number">95%</div>
            <div className="stat-label">Faster Analysis</div>
          </div>
          <div className="stat">
            <div className="stat-number">$2.3B+</div>
            <div className="stat-label">Assets Analyzed</div>
          </div>
          <div className="stat">
            <div className="stat-number">150+</div>
            <div className="stat-label">Deals Completed</div>
          </div>
          <div className="stat">
            <div className="stat-number">99.7%</div>
            <div className="stat-label">Accuracy Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;