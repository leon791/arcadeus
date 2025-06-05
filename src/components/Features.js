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
            Why Choose Arcadeus
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Cutting-edge technology meets financial expertise to deliver unparalleled results
          </motion.p>
        </motion.div>

        <div className="usage-stats-grid">
          {usageStats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
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
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <motion.div 
                className="stat-header"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="stat-label">{stat.metric}</div>
                <motion.div 
                  className="stat-change"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15 + 0.5,
                    type: "spring",
                    stiffness: 150
                  }}
                  viewport={{ once: true }}
                >
                  {stat.change}
                </motion.div>
              </motion.div>
              <motion.div 
                className="stat-value"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15 + 0.4,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <motion.div 
                className="mini-chart"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                viewport={{ once: true }}
              >
                {stat.data.map((point, i) => (
                  <motion.div 
                    key={i}
                    className="chart-bar"
                    style={{ height: `${point}%` }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15 + 0.7 + i * 0.05,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="growth-chart-section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3 
            className="chart-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Monthly Usage Growth
          </motion.h3>
          <div className="growth-chart">
            <motion.div 
              className="chart-container"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {monthlyGrowth.map((month, index) => (
                <motion.div 
                  key={index} 
                  className="chart-column"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="chart-bar-large"
                    style={{ height: `${(month.value / 24000) * 100}%` }}
                    initial={{ scaleY: 0, transformOrigin: "bottom" }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.9 + index * 0.08,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                  />
                  <motion.div 
                    className="chart-label"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.1 + index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    {month.month}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="chart-info"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="chart-metric"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
                viewport={{ once: true }}
              >
                <span className="metric-label">Total Models Processed</span>
                <span className="metric-value">24,000</span>
              </motion.div>
              <motion.div 
                className="chart-metric"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.9 }}
                viewport={{ once: true }}
              >
                <span className="metric-label">Average Monthly Growth</span>
                <span className="metric-value">+18.2%</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="excel-showcase"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3 
            className="showcase-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Excel Plugin Integration
          </motion.h3>
          <motion.p 
            className="showcase-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Seamlessly integrate Arcadeus into your existing Excel workflow with our powerful plugin
          </motion.p>
          
          <motion.div 
            className="excel-demo"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="excel-window">
              <div className="excel-header">
                <div className="window-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
                <div className="excel-title">Financial_Model_Q4_2024.xlsx - Excel</div>
              </div>
              
              <div className="excel-content">
                <div className="excel-split">
                  <div className="excel-output">
                    <div className="sheet-tab">DCF Model</div>
                    <div className="excel-grid">
                      <div className="excel-row header-row">
                        <div className="cell"></div>
                        <div className="cell">2024E</div>
                        <div className="cell">2025E</div>
                        <div className="cell">2026E</div>
                        <div className="cell">2027E</div>
                        <div className="cell">2028E</div>
                      </div>
                      <div className="excel-row">
                        <div className="cell label">Revenue</div>
                        <div className="cell">$125.4M</div>
                        <div className="cell">$156.8M</div>
                        <div className="cell">$196.0M</div>
                        <div className="cell">$245.0M</div>
                        <div className="cell">$306.3M</div>
                      </div>
                      <div className="excel-row">
                        <div className="cell label">EBITDA</div>
                        <div className="cell">$31.4M</div>
                        <div className="cell">$43.9M</div>
                        <div className="cell">$58.8M</div>
                        <div className="cell">$78.4M</div>
                        <div className="cell">$104.1M</div>
                      </div>
                      <div className="excel-row">
                        <div className="cell label">FCF</div>
                        <div className="cell">$22.6M</div>
                        <div className="cell">$32.9M</div>
                        <div className="cell">$45.1M</div>
                        <div className="cell">$61.5M</div>
                        <div className="cell">$83.3M</div>
                      </div>
                      <div className="excel-row highlight">
                        <div className="cell label">Enterprise Value</div>
                        <div className="cell" colSpan="5">$847.2M</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="arcadeus-panel">
                    <div className="panel-header">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>
                      </svg>
                      <span>Arcadeus AI</span>
                    </div>
                    
                    <div className="input-section">
                      <h4>Model Parameters</h4>
                      <div className="input-group">
                        <label>Industry</label>
                        <select>
                          <option>SaaS Technology</option>
                        </select>
                      </div>
                      <div className="input-group">
                        <label>Revenue Growth</label>
                        <input type="text" value="25% YoY" readOnly />
                      </div>
                      <div className="input-group">
                        <label>EBITDA Margin</label>
                        <input type="text" value="25-34%" readOnly />
                      </div>
                      <div className="input-group">
                        <label>Terminal Multiple</label>
                        <input type="text" value="6.5x" readOnly />
                      </div>
                    </div>
                    
                    <div className="ai-actions">
                      <button className="ai-button primary">Generate Model</button>
                      <button className="ai-button secondary">Sensitivity Analysis</button>
                      <button className="ai-button secondary">Scenario Planning</button>
                    </div>
                    
                    <div className="ai-insights">
                      <h4>AI Insights</h4>
                      <div className="insight">
                        <span className="insight-icon">✓</span>
                        <span>Model validated against 2,341 comparable transactions</span>
                      </div>
                      <div className="insight">
                        <span className="insight-icon">✓</span>
                        <span>Revenue projections align with industry benchmarks</span>
                      </div>
                      <div className="insight">
                        <span className="insight-icon">!</span>
                        <span>Consider adjusting terminal growth rate to 3%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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

      </div>
    </section>
  );
};

export default Features;