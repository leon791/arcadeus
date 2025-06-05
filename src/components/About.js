import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const metrics = [
    { value: '$2.3B+', label: 'Assets Under Analysis' },
    { value: '150+', label: 'Successful Deals' },
    { value: '99.7%', label: 'Accuracy Rate' },
    { value: '50+', label: 'Enterprise Clients' }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', description: 'Security & Availability' },
    { name: 'ISO 27001', description: 'Information Security' },
    { name: 'GDPR', description: 'Data Protection' },
    { name: 'PCI DSS', description: 'Payment Security' }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      background: 'Former Goldman Sachs VP, 15+ years in PE',
      education: 'Harvard MBA, Stanford CS'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      background: 'Ex-Google Senior Engineer, AI/ML Expert',
      education: 'MIT PhD Computer Science'
    },
    {
      name: 'David Thompson',
      role: 'Head of Financial Engineering',
      background: 'Former Blackstone Principal, 12+ years',
      education: 'Wharton MBA, CFA'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Trusted by Leading Financial Institutions</h2>
          <p className="section-subtitle">
            Built by finance veterans and AI experts, Arcadeus combines deep industry knowledge with cutting-edge technology
          </p>
        </motion.div>

        <motion.div
          className="trust-metrics"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="trust-metric"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Our Story</h3>
            <p>
              Founded in 2021 by a team of former Wall Street professionals and Silicon Valley engineers, 
              Arcadeus emerged from a simple observation: the financial industry was drowning in data but 
              starving for insights.
            </p>
            <p>
              Having worked at top-tier investment banks and private equity firms, our founders experienced 
              firsthand the inefficiencies of traditional financial modeling. They saw analysts spending 
              80% of their time on data collection and formatting, leaving just 20% for actual analysis.
            </p>
            <p>
              Today, Arcadeus serves leading financial institutions worldwide, processing billions in 
              assets and enabling faster, more accurate investment decisions through the power of AI.
            </p>
          </motion.div>

          <motion.div
            className="certifications-grid"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Security & Compliance</h3>
            <div className="certifications">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-badge">✓</div>
                  <div className="cert-content">
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-description">{cert.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="team-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="team-title">Leadership Team</h3>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="member-avatar">
                  <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h4 className="member-name">{member.name}</h4>
                <div className="member-role">{member.role}</div>
                <div className="member-background">{member.background}</div>
                <div className="member-education">{member.education}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="investors-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="investors-banner">
            <h3>Backed by Leading Investors</h3>
            <p>Supported by top-tier venture capital firms and industry leaders</p>
            <div className="investor-logos">
              <div className="investor-logo">Andreessen Horowitz</div>
              <div className="investor-logo">Sequoia Capital</div>
              <div className="investor-logo">General Atlantic</div>
              <div className="investor-logo">FinTech Collective</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;