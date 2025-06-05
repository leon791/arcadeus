import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      
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
              AI-Powered Financial Modeling
              <span className="title-highlight"> for Private Equity</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Automate your underwriting process with cutting-edge AI technology. 
              Streamline due diligence, accelerate deal flow, and make data-driven 
              investment decisions with unprecedented speed and accuracy.
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
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="dashboard-mockup">
              <div className="dashboard-header">
                <div className="dashboard-nav">
                  <div className="nav-item active">Portfolio Analysis</div>
                  <div className="nav-item">Risk Assessment</div>
                  <div className="nav-item">Market Intelligence</div>
                </div>
              </div>
              
              <div className="dashboard-content">
                <div className="metric-card">
                  <div className="metric-label">IRR Projection</div>
                  <div className="metric-value">24.7%</div>
                  <div className="metric-trend positive">↗ +12.3%</div>
                </div>
                
                <div className="metric-card">
                  <div className="metric-label">Multiple</div>
                  <div className="metric-value">3.2x</div>
                  <div className="metric-trend positive">↗ +0.4x</div>
                </div>
                
                <div className="chart-area">
                  <div className="chart-bars">
                    <div className="bar" style={{height: '60%'}}></div>
                    <div className="bar" style={{height: '80%'}}></div>
                    <div className="bar" style={{height: '45%'}}></div>
                    <div className="bar" style={{height: '90%'}}></div>
                    <div className="bar" style={{height: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
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