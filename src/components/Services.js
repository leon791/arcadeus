import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      title: 'Automated Underwriting',
      description: 'Streamline your due diligence process with AI-powered financial analysis, risk assessment, and valuation modeling.',
      features: ['Real-time data processing', 'Risk scoring algorithms', 'Automated report generation']
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
        </svg>
      ),
      title: 'Investment Banking Tools',
      description: 'Accelerate deal execution with intelligent pitch book creation, market analysis, and financial modeling.',
      features: ['Dynamic pitch decks', 'Comparable analysis', 'DCF modeling automation']
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="21 21l-4.35-4.35"/>
        </svg>
      ),
      title: 'Due Diligence Intelligence',
      description: 'Comprehensive analysis of target companies with automated document review and key metrics extraction.',
      features: ['Document intelligence', 'Financial statement analysis', 'Market positioning insights']
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="3,17 9,11 13,15 21,7"/>
          <polyline points="14,7 21,7 21,14"/>
        </svg>
      ),
      title: 'Portfolio Optimization',
      description: 'Maximize returns with AI-driven portfolio analysis, performance tracking, and strategic recommendations.',
      features: ['Performance analytics', 'Risk-return optimization', 'ESG integration']
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Comprehensive AI-powered solutions designed specifically for private equity and investment banking professionals
          </motion.p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <motion.div 
                className="service-icon"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15 + 0.3,
                  ease: "easeOut",
                  type: "spring"
                }}
                viewport={{ once: true }}
              >
                {service.icon}
              </motion.div>
              
              <motion.h3 
                className="service-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                viewport={{ once: true }}
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="service-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                viewport={{ once: true }}
              >
                {service.description}
              </motion.p>
              
              <motion.ul 
                className="service-features"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                viewport={{ once: true }}
              >
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.15 + 0.7 + featureIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="feature-check">✓</span>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
              
              <div className="service-cta">
                <a href="#contact" className="btn btn-secondary">Learn More</a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services-bottom"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="integration-banner"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="integration-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3>Seamless Integration</h3>
              <p>Works with your existing tools and workflows. No disruption to your current processes.</p>
            </motion.div>
            <motion.div 
              className="integration-logos"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {['Bloomberg', 'Refinitiv', 'FactSet', 'Excel'].map((logo, index) => (
                <motion.div 
                  key={logo}
                  className="integration-logo"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.9 + index * 0.1,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {logo}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;