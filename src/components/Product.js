import React from 'react';
import { motion } from 'framer-motion';
import './Product.css';

const Product = () => {
  const productFeatures = [
    {
      id: 'excel-integration',
      icon: '📊',
      title: 'Excel Integration',
      subtitle: 'Seamless Excel plugin for professional financial modeling',
      description: 'Install our Excel add-in and transform your spreadsheet experience. Access model templates, automatically populate data, generate formulas, create formatted reports, and export professional-grade financial models - all within your familiar Excel environment.',
      features: [
        'One-click Excel add-in installation',
        'Pre-built financial model templates',
        'Automatic data population and validation',
        'Smart formula generation',
        'Professional formatting and reports',
        'Real-time collaboration features'
      ]
    },
    {
      id: 'ai-chat',
      icon: '🤖',
      title: 'AI Chat',
      subtitle: 'Intelligent AI assistant for financial modeling guidance',
      description: 'Converse naturally with our AI to build and refine your models. Ask questions, get instant answers on assumptions, receive formula suggestions, troubleshoot errors, and learn best practices through an intuitive chat interface.',
      features: [
        'Natural language model building',
        'Instant formula suggestions',
        'Error detection and troubleshooting',
        'Best practice recommendations',
        'Context-aware assistance',
        'Multi-language support'
      ]
    },
    {
      id: 'auto-ingest',
      icon: '📄',
      title: 'Auto Ingest',
      subtitle: 'Intelligent data extraction from financial documents',
      description: 'Upload any financial document and watch our AI extract and structure the data automatically. From PDFs to images, from annual reports to pitch decks - we handle it all with precision and speed.',
      features: [
        'Support for 20+ document formats',
        'OCR for scanned documents',
        'Automatic data categorization',
        'Smart table extraction',
        'Data validation and cleaning',
        'Bulk document processing'
      ]
    },
    {
      id: 'scenario-charts',
      icon: '📈',
      title: 'Scenario Charts',
      subtitle: 'Dynamic charts and scenario analysis for better insights',
      description: 'Visualize your financial models with interactive charts. Run sensitivity analyses, create scenario comparisons, and generate presentation-ready visuals that update in real-time as your data changes.',
      features: [
        'Interactive dashboard creation',
        'Real-time chart updates',
        'Sensitivity analysis tools',
        'Scenario comparison views',
        'Export to PowerPoint/PDF',
        'Custom branding options'
      ]
    },
    {
      id: 'model-review',
      icon: '🔍',
      title: 'Model Review',
      subtitle: 'Comprehensive model review and error detection',
      description: 'Ensure accuracy and compliance with automated model review. Our AI checks formulas, validates assumptions, tests consistency, and provides detailed reports with actionable recommendations.',
      features: [
        'Automated error checking',
        'Formula validation',
        'Circular reference detection',
        'Assumption testing',
        'Compliance verification',
        'Detailed audit reports'
      ]
    }
  ];

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="product-title">
              Everything You Need to Model Faster
            </h1>
            <p className="product-subtitle">
              Five powerful features that transform financial modeling from hours to minutes.
            </p>
          </motion.div>
        </div>
      </section>

      {productFeatures.map((feature, index) => (
        <section 
          key={feature.id} 
          className={`product-feature-section ${index % 2 === 0 ? 'left-aligned' : 'right-aligned'}`}
        >
          <div className="container">
            <motion.div
              className="feature-row"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="feature-content">
                <div className="feature-header">
                  <h2 className="feature-title">{feature.title}</h2>
                  <p className="feature-subtitle">{feature.subtitle}</p>
                </div>
                
                <p className="feature-description">{feature.description}</p>
                
                <div className="feature-list">
                  <h3>Key Features:</h3>
                  <ul>
                    {feature.features.map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="checkmark">✓</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <motion.div 
                className="feature-visual"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 1,
                  delay: 0.2,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                viewport={{ once: true }}
              >
                <div className="screenshot-placeholder">
                  <div className="placeholder-content">
                    <h4>{feature.title} Screenshot</h4>
                    <p>Product screenshot will be inserted here</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="ecosystem-section">
        <div className="container">
          <motion.div
            className="ecosystem-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="ecosystem-title">The Arcadeus Ecosystem</h2>
            <p className="ecosystem-subtitle">
              From raw data to professional valuation - powered by Excel Integration throughout
            </p>
          </motion.div>

          <div className="ecosystem-timeline">
            <div className="timeline-track">
              <motion.div 
                className="timeline-progress"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              
              {[
                {
                  number: '01',
                  title: 'Auto Ingest',
                  description: 'Import data from any source',
                  delay: 0.3
                },
                {
                  number: '02',
                  title: 'AI Chat',
                  description: 'Build and refine your model',
                  delay: 0.5
                },
                {
                  number: '03',
                  title: 'Refine',
                  description: 'Perfect your assumptions',
                  delay: 0.7
                },
                {
                  number: '04',
                  title: 'Scenario Analysis',
                  description: 'Test multiple outcomes',
                  delay: 0.9
                },
                {
                  number: '05',
                  title: 'Model Review',
                  description: 'Validate and audit',
                  delay: 1.1
                },
                {
                  number: '✓',
                  title: 'Valuation',
                  description: 'Professional output ready',
                  delay: 1.3,
                  isGoal: true
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className={`timeline-step ${step.isGoal ? 'goal' : ''}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: step.delay }}
                  viewport={{ once: true }}
                >
                  <div className="step-marker">
                    <div className="step-number">{step.number}</div>
                  </div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="product-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-stats">
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="stat-number">85%</span>
                <span className="stat-label">Time Saved</span>
              </motion.div>
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="stat-number">500+</span>
                <span className="stat-label">Models Built</span>
              </motion.div>
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Accuracy</span>
              </motion.div>
            </div>
            
            <motion.div
              className="cta-main"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Ready to transform your financial modeling?</h2>
              <p>Join leading PE firms, investment banks, and hedge funds using Arcadeus</p>
              
              <div className="cta-buttons">
                <a href="mailto:info@arcadeus.ai?subject=Arcadeus%20-%20Product%20Demo" className="btn btn-primary btn-large">
                  Request a Demo
                </a>
                <a href="#trial" className="btn btn-secondary btn-large">
                  Start Free Trial
                </a>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Product;