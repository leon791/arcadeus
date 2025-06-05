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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive AI-powered solutions designed specifically for private equity and investment banking professionals
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="service-cta">
                <a href="#contact" className="btn btn-secondary">Learn More</a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services-bottom"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="integration-banner">
            <div className="integration-content">
              <h3>Seamless Integration</h3>
              <p>Works with your existing tools and workflows. No disruption to your current processes.</p>
            </div>
            <div className="integration-logos">
              <div className="integration-logo">Bloomberg</div>
              <div className="integration-logo">Refinitiv</div>
              <div className="integration-logo">FactSet</div>
              <div className="integration-logo">Excel</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;