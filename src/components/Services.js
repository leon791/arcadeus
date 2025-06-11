import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('EXCEL_INTEGRATION');
  const [progress, setProgress] = useState(0);
  const [isManuallyControlled, setIsManuallyControlled] = useState(false);

  useEffect(() => {
    let interval;
    let progressInterval;

    if (!isManuallyControlled) {
      // Progress bar animation
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            // Auto switch tabs in sequence
            setActiveTab(current => {
              switch(current) {
                case 'EXCEL_INTEGRATION': return 'AI_CHAT';
                case 'AI_CHAT': return 'AUTO_INGEST';
                case 'AUTO_INGEST': return 'SCENARIO_CHARTS';
                case 'SCENARIO_CHARTS': return 'MODEL_REVIEW';
                case 'MODEL_REVIEW': return 'EXCEL_INTEGRATION';
                default: return 'EXCEL_INTEGRATION';
              }
            });
            return 0;
          }
          return prev + 2; // Increment by 2% every 100ms = 5 seconds total
        });
      }, 100);
    } else {
      // Reset manual control after 10 seconds of inactivity
      const resetTimeout = setTimeout(() => {
        setIsManuallyControlled(false);
        setProgress(0);
      }, 10000);

      return () => clearTimeout(resetTimeout);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [isManuallyControlled]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsManuallyControlled(true);
    setProgress(0);
  };

  const content = {
    EXCEL_INTEGRATION: {
      icon: '📊',
      title: 'Integrate',
      subtitle: 'Seamless Excel plugin for\nprofessional financial modeling',
      description: 'Install our Excel add-in, access model templates,\nautomatically populate data, generate formulas,\ncreate formatted reports, and export\nprofessional-grade financial models.',
      footnote: '* Compatible with Excel 2016 and newer'
    },
    AI_CHAT: {
      icon: '🤖',
      title: 'Converse',
      subtitle: 'Intelligent AI assistant for\nfinancial modeling guidance',
      description: 'Ask questions about your models, get instant\nanswers on assumptions, receive formula suggestions,\ntroubleshoot errors, optimize structures,\nand learn best practices through conversation.',
      footnote: '* Powered by advanced financial LLM'
    },
    AUTO_INGEST: {
      icon: '📄',
      title: 'Automate',
      subtitle: 'Intelligent data extraction from\nfinancial documents',
      description: 'Upload PDFs, spreadsheets, and reports,\nautomatically extract key metrics, populate\nmodel inputs, validate data accuracy,\nand streamline your workflow.',
      footnote: '* Supports 20+ document formats'
    },
    SCENARIO_CHARTS: {
      icon: '📈',
      title: 'Visualize',
      subtitle: 'Dynamic charts and scenario\nanalysis for better insights',
      description: 'Generate interactive charts, run sensitivity\nanalysis, create scenario comparisons,\nvisualize key metrics, export presentations,\nand communicate results effectively.',
      footnote: '* Real-time chart updates'
    },
    MODEL_REVIEW: {
      icon: '🔍',
      title: 'Validate',
      subtitle: 'Comprehensive model review\nand error detection',
      description: 'Automated error checking, formula validation,\nassumption testing, consistency verification,\nbest practice compliance, and detailed\nreview reports with recommendations.',
      footnote: '* Industry-standard validation rules'
    }
  };

  const currentContent = content[activeTab];

  return (
    <>
      <section className="services">
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
        </div>
      </section>

      <motion.section 
        id="services" 
        className="raise-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="raise-content">
          <div className="raise-left">
            <motion.div 
              className="total-committed-card"
              key={currentContent.icon}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="card-icon">{currentContent.icon}</div>
            </motion.div>
          </div>
          
          <div className="raise-right">
            <motion.h1 
              className="raise-main-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Flip Raw Numbers into Closed Deals.
            </motion.h1>
            
            <div className="raise-tabs">
              <div className="tab-buttons">
                <button 
                  className={`tab-button ${activeTab === 'EXCEL_INTEGRATION' ? 'active' : ''}`}
                  onClick={() => handleTabClick('EXCEL_INTEGRATION')}
                >
                  EXCEL INTEGRATION
                </button>
                <button 
                  className={`tab-button ${activeTab === 'AI_CHAT' ? 'active' : ''}`}
                  onClick={() => handleTabClick('AI_CHAT')}
                >
                  AI CHAT
                </button>
                <button 
                  className={`tab-button ${activeTab === 'AUTO_INGEST' ? 'active' : ''}`}
                  onClick={() => handleTabClick('AUTO_INGEST')}
                >
                  AUTO INGEST
                </button>
                <button 
                  className={`tab-button ${activeTab === 'SCENARIO_CHARTS' ? 'active' : ''}`}
                  onClick={() => handleTabClick('SCENARIO_CHARTS')}
                >
                  SCENARIO CHARTS
                </button>
                <button 
                  className={`tab-button ${activeTab === 'MODEL_REVIEW' ? 'active' : ''}`}
                  onClick={() => handleTabClick('MODEL_REVIEW')}
                >
                  MODEL REVIEW
                </button>
              </div>
              
              {!isManuallyControlled && (
                <div className="progress-container">
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>
              )}
            </div>
            
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="raise-title">{currentContent.title}</h2>
              
              <p className="raise-subtitle">
                {currentContent.subtitle.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < currentContent.subtitle.split('\n').length - 1 && <br/>}
                  </React.Fragment>
                ))}
              </p>
              
              <p className="raise-description">
                {currentContent.description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < currentContent.description.split('\n').length - 1 && <br/>}
                  </React.Fragment>
                ))}
              </p>
              
              <p className="raise-footnote">
                {currentContent.footnote}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
    </>
  );
};

export default Services;