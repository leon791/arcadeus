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
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // For Netlify Forms submission
    const encode = (data) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ 
          "form-name": "demo-request",
          ...formData 
        })
      });
      
      // Show success screen
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        message: '',
        assetsUnderManagement: '',
        teamSize: ''
      });
      
      // Hide success screen after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      alert('There was an error submitting your request. Please try again or email us directly at info@arcadeus.ai');
    }
  };


  return (
    <>
      {/* Success Screen Overlay */}
      {showSuccess && (
        <motion.div 
          className="success-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="success-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="success-title">Thank You!</h2>
              <p className="success-message">
                Your demo request has been received.<br/>
                Our team will be in contact within 24 hours.
              </p>
            </motion.div>
            
            <motion.div 
              className="success-logo"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <img 
                src="/arcadeus-logo-black-on-white-simple.svg" 
                alt="Arcadeus" 
                className="success-logo-img"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}

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
            Schedule a demo for enterprise licenses of 10+ users.
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
            </div>

            <form className="contact-form" name="demo-request" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="demo-request" />
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
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <p>&copy; 2025 Arcadeus. All rights reserved.</p>
              <div className="footer-legal">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#cookies">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
    </>
  );
};

export default Contact;