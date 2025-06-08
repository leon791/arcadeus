import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const metrics = [
    { value: '$2.3B+', label: 'Assets Under Analysis' },
    { value: '150+', label: 'Successful Deals' },
    { value: '99.7%', label: 'Accuracy Rate' },
    { value: '50+', label: 'Enterprise Clients' }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', description: 'Security & Availability' },
    { name: 'ISO 27001', description: 'Information Security' },
    { name: 'GDPR', description: 'Data Protection' },
    { name: 'PCI DSS', description: 'Payment Security' }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      background: 'Former Goldman Sachs VP, 15+ years in PE',
      education: 'Harvard MBA, Stanford CS'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      background: 'Ex-Google Senior Engineer, AI/ML Expert',
      education: 'MIT PhD Computer Science'
    },
    {
      name: 'David Thompson',
      role: 'Head of Financial Engineering',
      background: 'Former Blackstone Principal, 12+ years',
      education: 'Wharton MBA, CFA'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="how-it-works-container">
          <motion.div
            className="how-it-works-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Go from 6 tools to 1.
            </h2>
            <p className="how-it-works-description">
              Arcadeus streamlines your entire financial modeling workflow into one powerful platform. 
              Follow these simple steps to transform how you build and analyze financial models.
            </p>
          </motion.div>
          
          <motion.div
            className="how-it-works-steps"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="steps-title">How to Generate a Model</h3>
            
            <div className="steps-flow">
              <motion.div 
                className="step-flow-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 120 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="step-circle"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="step-number">1</span>
                </motion.div>
                <h4 className="step-title">Download</h4>
                <p className="step-description">Excel Plugin</p>
              </motion.div>
              
              <motion.div 
                className="flow-connector"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="connector-line"></div>
                <motion.div 
                  className="connector-arrow"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  →
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="step-flow-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 120 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="step-circle"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="step-number">2</span>
                </motion.div>
                <h4 className="step-title">Import</h4>
                <p className="step-description">Financial Data</p>
              </motion.div>
              
              <motion.div 
                className="flow-connector"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <div className="connector-line"></div>
                <motion.div 
                  className="connector-arrow"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  viewport={{ once: true }}
                >
                  →
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="step-flow-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 120 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="step-circle"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="step-number">3</span>
                </motion.div>
                <h4 className="step-title">Generate</h4>
                <p className="step-description">AI Model</p>
              </motion.div>
              
              <motion.div 
                className="flow-connector"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="connector-line"></div>
                <motion.div 
                  className="connector-arrow"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  viewport={{ once: true }}
                >
                  →
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="step-flow-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1, type: "spring", stiffness: 120 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="step-circle"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="step-number">4</span>
                </motion.div>
                <h4 className="step-title">Refine</h4>
                <p className="step-description">AI LLM Enhancement</p>
              </motion.div>
              
              <motion.div 
                className="flow-connector"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                viewport={{ once: true }}
              >
                <div className="connector-line"></div>
                <motion.div 
                  className="connector-arrow"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  viewport={{ once: true }}
                >
                  →
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="step-flow-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.3, type: "spring", stiffness: 120 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="step-circle"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="step-number">5</span>
                </motion.div>
                <h4 className="step-title">Analyze</h4>
                <p className="step-description">AI Deep Analysis</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="additional-features-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="feature-highlight">
            <h3 className="feature-highlight-subtitle">LOOK MA', NO HANDS</h3>
            <div className="feature-title-wrapper">
              <h2 className="feature-highlight-title">
                Models built<br/>
                instantly with AI.
              </h2>
            </div>
            <p className="feature-highlight-description">
              Once data is imported – models generated<br/>
              in seconds without a single formula typed.<br/>
              Can't miss assumptions, no calculation errors.
            </p>
          </div>
          
          <div className="feature-side">
            <h3 className="feature-side-subtitle">REAL-TIME INSIGHTS</h3>
            <div className="feature-title-wrapper">
              <h2 className="feature-side-title">
                Everything at<br/>
                your fingertips.
              </h2>
            </div>
          </div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Our Story</h3>
            <p>
              Founded in 2021 by a team of former Wall Street professionals and Silicon Valley engineers, 
              Arcadeus emerged from a simple observation: the financial industry was drowning in data but 
              starving for insights.
            </p>
            <p>
              Having worked at top-tier investment banks and private equity firms, our founders experienced 
              firsthand the inefficiencies of traditional financial modeling. They saw analysts spending 
              80% of their time on data collection and formatting, leaving just 20% for actual analysis.
            </p>
            <p>
              Today, Arcadeus serves leading financial institutions worldwide, processing billions in 
              assets and enabling faster, more accurate investment decisions through the power of AI.
            </p>
          </motion.div>

          <motion.div
            className="certifications-grid"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Security & Compliance</h3>
            <div className="certifications">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-badge">✓</div>
                  <div className="cert-content">
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-description">{cert.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;