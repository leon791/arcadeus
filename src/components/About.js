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

        <motion.div
          className="additional-features-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="feature-highlight">
            <h3 className="feature-highlight-subtitle">AUTOMATED INTELLIGENCE</h3>
            <div className="feature-title-wrapper">
              <h2 className="feature-highlight-title">
                Financial modeling<br/>
                meets machine intelligence.
              </h2>
            </div>
            <p className="feature-highlight-description">
              Once data is imported – comprehensive financial models are generated<br/>
              in seconds without a single formula typed. Advanced AI algorithms ensure<br/>
              you can't miss critical assumptions and eliminate calculation errors entirely.
            </p>
          </div>
          
          <div className="feature-side">
            <h3 className="feature-side-subtitle">INSTANT EXECUTION</h3>
            <div className="feature-title-wrapper">
              <h2 className="feature-side-title">
                Deals don't wait.<br/>
                Neither should your model.
              </h2>
            </div>
            <p className="feature-side-description">
              Once data is imported – comprehensive financial models are generated<br/>
              in seconds without a single formula typed. Advanced AI algorithms ensure<br/>
              you can't miss critical assumptions and eliminate calculation errors entirely.
            </p>
          </div>
        </motion.div>

        <div className="get-started-section">
          <motion.div 
            className="get-started-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="get-started-title">Get Started in 3 steps</h2>
          </motion.div>

          <div className="steps-grid">
            <motion.div
              className="step-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-number-circle">1</div>
              <h3 className="step-heading">Sign up and get started</h3>
              <p className="step-text">
                Sign up in seconds and start using Arcadeus for free. Get instant access to AI-powered financial models without any commitments or setup.
              </p>
            </motion.div>

            <motion.div
              className="step-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number-circle">2</div>
              <h3 className="step-heading">Create model</h3>
              <p className="step-text">
                Use AI to instantly generate financial models or create your own from scratch. Tailor models for M&A analysis, valuations, or investment decisions.
              </p>
            </motion.div>

            <motion.div
              className="step-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="step-number-circle">3</div>
              <h3 className="step-heading">Export in Excel</h3>
              <p className="step-text">
                Export your completed models directly to Excel format. Seamlessly integrate with your existing workflow and share with stakeholders in familiar spreadsheet format.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="get-started-buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="start-free-btn">Start for free</button>
            <button className="book-demo-btn">Book a demo</button>
          </motion.div>
        </div>



      </div>
    </section>
  );
};

export default About;