import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const usageStats = [
    {
      metric: 'Models Processed',
      value: '2.4M+',
      change: '+127%',
      data: [20, 35, 45, 60, 80, 95, 100]
    },
    {
      metric: 'Time Saved',
      value: '890K hrs',
      change: '+89%',
      data: [15, 25, 40, 55, 70, 85, 95]
    },
    {
      metric: 'Active Users',
      value: '12,500+',
      change: '+156%',
      data: [10, 20, 30, 50, 65, 80, 100]
    },
    {
      metric: 'Deal Volume',
      value: '$47.2B',
      change: '+203%',
      data: [25, 40, 35, 60, 75, 90, 100]
    }
  ];

  const monthlyGrowth = [
    { month: 'Jan', value: 2400 },
    { month: 'Feb', value: 3200 },
    { month: 'Mar', value: 4100 },
    { month: 'Apr', value: 5800 },
    { month: 'May', value: 7200 },
    { month: 'Jun', value: 8900 },
    { month: 'Jul', value: 11200 },
    { month: 'Aug', value: 13500 },
    { month: 'Sep', value: 16800 },
    { month: 'Oct', value: 19200 },
    { month: 'Nov', value: 22400 },
    { month: 'Dec', value: 24000 }
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

        <div className="usage-stats-grid">
          {usageStats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-header">
                <div className="stat-label">{stat.metric}</div>
                <div className="stat-change">{stat.change}</div>
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="mini-chart">
                {stat.data.map((point, i) => (
                  <div 
                    key={i}
                    className="chart-bar"
                    style={{ height: `${point}%` }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="growth-chart-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="chart-title">Monthly Usage Growth</h3>
          <div className="growth-chart">
            <div className="chart-container">
              {monthlyGrowth.map((month, index) => (
                <div key={index} className="chart-column">
                  <div 
                    className="chart-bar-large"
                    style={{ height: `${(month.value / 24000) * 100}%` }}
                  />
                  <div className="chart-label">{month.month}</div>
                </div>
              ))}
            </div>
            <div className="chart-info">
              <div className="chart-metric">
                <span className="metric-label">Total Models Processed</span>
                <span className="metric-value">24,000</span>
              </div>
              <div className="chart-metric">
                <span className="metric-label">Average Monthly Growth</span>
                <span className="metric-value">+18.2%</span>
              </div>
            </div>
          </div>
        </motion.div>

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