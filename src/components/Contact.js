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
    assetsUnderManagement: '',
    teamSize: ''
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
    alert('Thank you for your enterprise inquiry! Our sales team will contact you within 24 hours to schedule a personalized demo.');
  };


  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Enterprise Solutions</h2>
          <p className="section-subtitle">
            For teams of 10+ users seeking custom enterprise deployment. Schedule a personalized demo to explore advanced features, integrations, and tailored solutions for your organization.
          </p>
        </motion.div>

        <motion.div
          className="contact-form-section full-width"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
            <div className="form-header">
              <h3>Request a Demo</h3>
              <p>For enterprise deployments and custom solutions. Individual users can sign up directly without a demo.</p>
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
                    <option value="Partner">Partner</option>
                    <option value="Principal">Principal</option>
                    <option value="Vice President">Vice President</option>
                    <option value="Director">Director</option>
                    <option value="Head of Technology">Head of Technology</option>
                    <option value="Other C-Suite">Other C-Suite</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="assetsUnderManagement">Assets Under Management *</label>
                  <select
                    id="assetsUnderManagement"
                    name="assetsUnderManagement"
                    value={formData.assetsUnderManagement}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select range</option>
                    <option value="Under $100M">Under $100M</option>
                    <option value="$100M - $500M">$100M - $500M</option>
                    <option value="$500M - $1B">$500M - $1B</option>
                    <option value="$1B - $5B">$1B - $5B</option>
                    <option value="Over $5B">Over $5B</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="teamSize">Team Size *</label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select team size</option>
                    <option value="10-25">10-25 users</option>
                    <option value="25-50">25-50 users</option>
                    <option value="50-100">50-100 users</option>
                    <option value="100-250">100-250 users</option>
                    <option value="250+">250+ users</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about your team size, specific use cases, and integration requirements..."
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary btn-large form-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Enterprise Demo
              </motion.button>
            </form>
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