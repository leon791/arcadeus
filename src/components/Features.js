import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const steps = [
    {
      week: "STEP ONE",
      icon: "📄",
      title: "UPLOAD",
      description: "Upload financial statements, reports, assumptions and documents."
    },
    {
      week: "STEP TWO", 
      icon: "🎯",
      title: "DEFINE",
      description: "Set your high-level parameters and deal assumptions to customize the model."
    },
    {
      week: "STEP THREE",
      icon: "💰",
      title: "CONFIGURE",
      description: "Configure revenue items, operating expenses, and capital expenditures with our guided setup."
    },
    {
      week: "STEP FOUR",
      icon: "🔧",
      title: "CUSTOMIZE",
      description: "Fine-tune debt models, exit assumptions, and sensitivity analysis parameters."
    },
    {
      week: "STEP FIVE",
      icon: "⚡",
      title: "GENERATE",
      description: "Our AI instantly creates your professional Excel model with all formulas and formatting."
    },
    {
      week: "STEP SIX",
      icon: "📊",
      title: "ANALYZE",
      description: "Review integrated charts, scenario analysis, and validation checks in your generated model."
    },
    {
      week: "STEP SEVEN",
      icon: "✅",
      title: "EXPORT",
      description: "Download your complete financial model ready for presentations and decision-making."
    }
  ];

  return (
    <section id="features" className="features section">
      <div className="container">
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="features-title">7 STEP PROCESS</h2>
          <p className="features-subtitle">Financial Model Generation Guide</p>
        </motion.div>

        <div className="process-container">
          <div className="steps-container">
            <div className="timeline-line"></div>
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="timeline-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="step-number">
                  {index + 1}
                </div>
                
                <div className="step-content">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-text">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;