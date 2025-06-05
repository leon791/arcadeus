import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'Advanced AI Analytics',
      description: 'Leverage machine learning algorithms trained on billions of financial data points for unprecedented insights.',
      icon: '🤖',
      stats: '99.7% accuracy'
    },
    {
      title: 'Real-time Processing',
      description: 'Process complex financial models and generate comprehensive reports in minutes, not days.',
      icon: '⚡',
      stats: '95% faster'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance, end-to-end encryption, and role-based access controls.',
      icon: '🔒',
      stats: 'SOC 2 certified'
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with existing financial platforms and data sources through robust APIs and native integrations.',
      icon: '🔗',
      stats: '50+ integrations'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Data Ingestion',
      description: 'Upload financial documents, market data, and company information through our secure platform.'
    },
    {
      step: '02',
      title: 'AI Analysis',
      description: 'Our advanced algorithms analyze data, identify patterns, and generate comprehensive financial models.'
    },
    {
      step: '03',
      title: 'Report Generation',
      description: 'Receive detailed investment reports, risk assessments, and actionable insights in minutes.'
    },
    {
      step: '04',
      title: 'Decision Support',
      description: 'Make informed investment decisions with confidence using our data-driven recommendations.'
    }
  ];

  return (
    <section id="features" className="features section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Why Choose Arcadeus</h2>
          <p className="section-subtitle">
            Cutting-edge technology meets financial expertise to deliver unparalleled results
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-stat">{feature.stats}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="process-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="process-title">How It Works</h3>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="technology-showcase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="tech-content">
            <h3>Powered by Advanced Technology</h3>
            <p>Our platform leverages cutting-edge artificial intelligence, machine learning, and natural language processing to deliver insights that traditional methods simply cannot match.</p>
            <div className="tech-features">
              <div className="tech-feature">
                <span className="tech-icon">📊</span>
                <span>Predictive Analytics</span>
              </div>
              <div className="tech-feature">
                <span className="tech-icon">🧠</span>
                <span>Machine Learning</span>
              </div>
              <div className="tech-feature">
                <span className="tech-icon">📝</span>
                <span>NLP Processing</span>
              </div>
              <div className="tech-feature">
                <span className="tech-icon">☁️</span>
                <span>Cloud Infrastructure</span>
              </div>
            </div>
          </div>
          
          <div className="tech-visual">
            <div className="tech-circle">
              <div className="circle-content">
                <div className="circle-text">AI Core</div>
                <div className="circle-subtext">Processing Engine</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;