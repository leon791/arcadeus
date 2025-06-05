import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    assetsUnderManagement: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your interest! We will contact you shortly.');
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'contact@arcadeus.com',
      action: 'mailto:contact@arcadeus.com'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Office',
      content: 'New York, NY\nLondon, UK',
      action: null
    },
    {
      icon: '💬',
      title: 'Schedule Demo',
      content: 'Book a personalized demo',
      action: '#demo'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get Started Today</h2>
          <p className="section-subtitle">
            Ready to transform your financial modeling process? Contact our team for a personalized demonstration.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="form-header">
              <h3>Request a Demo</h3>
              <p>Fill out the form below and our team will reach out within 24 hours</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Business Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Company"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Role *</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select your role</option>
                    <option value="Managing Director">Managing Director</option>
                    <option value="Principal">Principal</option>
                    <option value="Vice President">Vice President</option>
                    <option value="Associate">Associate</option>
                    <option value="Analyst">Analyst</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="assetsUnderManagement">Assets Under Management</label>
                <select
                  id="assetsUnderManagement"
                  name="assetsUnderManagement"
                  value={formData.assetsUnderManagement}
                  onChange={handleInputChange}
                >
                  <option value="">Select range (optional)</option>
                  <option value="Under $100M">Under $100M</option>
                  <option value="$100M - $500M">$100M - $500M</option>
                  <option value="$500M - $1B">$500M - $1B</option>
                  <option value="$1B - $5B">$1B - $5B</option>
                  <option value="Over $5B">Over $5B</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about your specific needs or questions..."
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary btn-large form-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Demo
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>Prefer to speak directly? Reach out through any of these channels.</p>

              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-method"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="method-icon">{info.icon}</div>
                    <div className="method-content">
                      <div className="method-title">{info.title}</div>
                      {info.action ? (
                        <a href={info.action} className="method-link">
                          {info.content}
                        </a>
                      ) : (
                        <div className="method-text">{info.content}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="demo-benefits">
              <h4>What you'll get in the demo:</h4>
              <ul>
                <li>Live platform walkthrough</li>
                <li>Custom use case examples</li>
                <li>ROI analysis for your firm</li>
                <li>Integration discussion</li>
                <li>Pricing options</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Ready to revolutionize your financial modeling?</h3>
            <p>Join leading PE firms and investment banks already using Arcadeus</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary btn-large">Start Free Trial</a>
              <a href="#services" className="btn btn-secondary btn-large">View Pricing</a>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">Arcadeus</div>
              <p>AI-powered financial modeling for the modern investment professional.</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h5>Product</h5>
                <ul>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#integrations">Integrations</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h5>Company</h5>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#news">News</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h5>Resources</h5>
                <ul>
                  <li><a href="#documentation">Documentation</a></li>
                  <li><a href="#support">Support</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#security">Security</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Arcadeus. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;