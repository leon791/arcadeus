import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="product-showcase">
          <motion.div 
            className="showcase-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="showcase-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Financial Modeling Was Never Easier
            </motion.h2>
            
            <motion.p 
              className="showcase-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Transform complex financial analysis into simple, automated workflows. 
              Our AI-powered Excel plugin generates professional-grade models, performs 
              sensitivity analysis, and validates assumptions in seconds—not hours.
            </motion.p>
            
          </motion.div>
          
          <motion.div 
            className="showcase-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="excel-demo">
                <div className="excel-header">
                  <div className="window-controls">
                    <span className="control red"></span>
                    <span className="control yellow"></span>
                    <span className="control green"></span>
                  </div>
                  <div className="excel-title">M&A_Model_Analysis.xlsx - Excel</div>
                </div>
                
                <div className="excel-content">
                  <div className="excel-split">
                    <div className="excel-output">
                      <div className="company-header">Company Logo (doing the M&A Process)</div>
                      <div className="excel-grid">
                        <div className="excel-row section-header">
                          <div className="cell section-title">Profit & Loss Statement</div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                        </div>
                        <div className="excel-row revenue-header">
                          <div className="cell section-label">Revenue Items</div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                        </div>
                        <div className="excel-row dates-row">
                          <div className="cell"></div>
                          <div className="cell header">31-May-25</div>
                          <div className="cell header">30-Jun-25</div>
                          <div className="cell header">30-Jul-25</div>
                          <div className="cell header">30-Aug-25</div>
                          <div className="cell header">30-Sep-25</div>
                          <div className="cell header">30-Oct-25</div>
                          <div className="cell header">30-Nov-25</div>
                        </div>
                        <div className="excel-row">
                          <div className="cell label">Period</div>
                          <div className="cell">1</div>
                          <div className="cell">2</div>
                          <div className="cell">3</div>
                          <div className="cell">4</div>
                          <div className="cell">5</div>
                          <div className="cell">6</div>
                          <div className="cell">7</div>
                        </div>
                        <div className="excel-row">
                          <div className="cell label">Revenue Item 1</div>
                          <div className="cell">-</div>
                          <div className="cell">330,000</div>
                          <div className="cell">365,000</div>
                          <div className="cell">399,300</div>
                          <div className="cell">439,230</div>
                          <div className="cell">483,153</div>
                          <div className="cell">531,468</div>
                        </div>
                        <div className="excel-row">
                          <div className="cell label">Revenue Item 2</div>
                          <div className="cell">-</div>
                          <div className="cell">760,000</div>
                          <div className="cell">836,000</div>
                          <div className="cell">919,600</div>
                          <div className="cell">1,011,560</div>
                          <div className="cell">1,112,716</div>
                          <div className="cell">1,223,988</div>
                        </div>
                        <div className="excel-row total-row">
                          <div className="cell label-bold">Total Revenue</div>
                          <div className="cell bold">-</div>
                          <div className="cell bold">1,090,000</div>
                          <div className="cell bold">1,199,000</div>
                          <div className="cell bold">1,318,900</div>
                          <div className="cell bold">1,450,790</div>
                          <div className="cell bold">1,595,869</div>
                          <div className="cell bold">1,755,456</div>
                        </div>
                        <div className="excel-row cost-header">
                          <div className="cell section-label">Cost Items</div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                          <div className="cell"></div>
                        </div>
                        <div className="excel-row">
                          <div className="cell label">Cost Item 1</div>
                          <div className="cell">-</div>
                          <div className="cell">200,000</div>
                          <div className="cell">210,000</div>
                          <div className="cell">220,500</div>
                          <div className="cell">231,525</div>
                          <div className="cell">243,101</div>
                          <div className="cell">255,256</div>
                        </div>
                        <div className="excel-row">
                          <div className="cell label">Cost Item 2</div>
                          <div className="cell">-</div>
                          <div className="cell">1,000</div>
                          <div className="cell">1,050</div>
                          <div className="cell">1,103</div>
                          <div className="cell">1,158</div>
                          <div className="cell">1,216</div>
                          <div className="cell">1,276</div>
                        </div>
                        <div className="excel-row">
                          <div className="cell label">Cost Item 3</div>
                          <div className="cell">-</div>
                          <div className="cell">20,000</div>
                          <div className="cell">21,000</div>
                          <div className="cell">22,050</div>
                          <div className="cell">23,153</div>
                          <div className="cell">24,310</div>
                          <div className="cell">25,526</div>
                        </div>
                        <div className="excel-row total-row">
                          <div className="cell label-bold">Total Operating Expenses</div>
                          <div className="cell bold">-</div>
                          <div className="cell bold">328,400</div>
                          <div className="cell bold">344,820</div>
                          <div className="cell bold">362,061</div>
                          <div className="cell bold">380,164</div>
                          <div className="cell bold">399,172</div>
                          <div className="cell bold">419,131</div>
                        </div>
                        <div className="excel-row highlight">
                          <div className="cell label-bold">Gross Operating Profit</div>
                          <div className="cell bold">-</div>
                          <div className="cell bold">761,600</div>
                          <div className="cell bold">854,180</div>
                          <div className="cell bold">956,839</div>
                          <div className="cell bold">1,070,626</div>
                          <div className="cell bold">1,196,697</div>
                          <div className="cell bold">1,336,325</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="arcadeus-panel">
                    <div className="panel-header">
                      <div className="arcadeus-logo">
                        <span className="logo-icon">A</span>
                        <div className="logo-text">
                          <span className="brand-name">Arcadeus</span>
                          <span className="tagline">M&A INTELLIGENCE SUITE</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="upload-section">
                      <div className="upload-area">
                        <div className="upload-icon">📄</div>
                        <h4>Drop your files here</h4>
                        <p>Upload target company reports or spreadsheets to auto-fill data</p>
                        <p className="file-info">Up to 4 files • 10MB total • CSV, PDF, PNG formats</p>
                        <button className="browse-btn">📁 Browse Files</button>
                      </div>
                    </div>
                    
                    <div className="parameters-section">
                      <div className="param-group">
                        <h4>🎯 High-Level Parameters</h4>
                        <button className="expand-btn">+</button>
                      </div>
                      <div className="param-group">
                        <h4>📊 Deal Assumptions</h4>
                        <button className="expand-btn">+</button>
                      </div>
                      <div className="param-group">
                        <h4>💰 Revenue Items</h4>
                        <button className="expand-btn">+</button>
                      </div>
                      <div className="param-group">
                        <h4>💼 Operating Expenses</h4>
                        <button className="expand-btn">+</button>
                      </div>
                      <div className="param-group">
                        <h4>💸 Capital Expenses</h4>
                        <button className="expand-btn">+</button>
                      </div>
                      <div className="param-group">
                        <h4>📈 Exit Assumptions</h4>
                        <button className="expand-btn">+</button>
                      </div>
                      <div className="param-group">
                        <h4>🏦 Debt Model</h4>
                        <button className="expand-btn">+</button>
                      </div>
                    </div>
                    
                    <div className="generate-section">
                      <button className="generate-btn">📊 Generate Model in Excel</button>
                    </div>
                  </div>
                  </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;