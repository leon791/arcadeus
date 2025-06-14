import React from 'react';
import { motion } from 'framer-motion';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      id: 'enterprise',
      title: 'Arcadeus for Enterprises',
      subtitle: 'Scale financial modeling across your organization',
      description: 'Transform how your enterprise handles complex financial modeling with our comprehensive platform designed for large-scale operations.',
      features: [
        'Enterprise-grade security and compliance',
        'Multi-team collaboration tools',
        'Custom model templates and workflows',
        'Advanced analytics and reporting',
        'API integrations with existing systems',
        'Dedicated support and training'
      ],
      benefits: [
        'Reduce modeling time by 85% across teams',
        'Standardize processes organization-wide',
        'Scale operations without increasing headcount'
      ]
    },
    {
      id: 'professionals',
      title: 'Arcadeus for Finance Professionals',
      subtitle: 'Accelerate your financial modeling expertise',
      description: 'Empower individual professionals and small teams with advanced AI-driven tools that enhance productivity and accuracy.',
      features: [
        'Professional model library access',
        'AI-powered formula suggestions',
        'Real-time error detection and correction',
        'Industry-specific templates',
        'Professional certification programs',
        'Expert community access'
      ],
      benefits: [
        'Complete models 10x faster',
        'Eliminate common modeling errors',
        'Access best practices from industry experts'
      ]
    },
    {
      id: 'education',
      title: 'Arcadeus for Education',
      subtitle: 'Next-generation financial modeling education',
      description: 'Prepare the next generation of finance professionals with cutting-edge tools and curriculum designed for academic excellence.',
      features: [
        'Comprehensive curriculum integration',
        'Student progress tracking',
        'Interactive learning modules',
        'Real-world case studies',
        'Instructor support tools',
        'Academic licensing programs'
      ],
      benefits: [
        'Engage students with practical tools',
        'Prepare graduates for modern finance roles',
        'Bridge theory and real-world application'
      ]
    }
  ];

  return (
    <div className="solutions-page">
      <section className="solutions-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="solutions-title">
              Solutions Built for Every Need
            </h1>
            <p className="solutions-subtitle">
              Whether you're an enterprise, finance professional, or educator, 
              Arcadeus adapts to your unique requirements and scales with your ambitions.
            </p>
          </motion.div>
        </div>
      </section>

      {solutions.map((solution, index) => (
        <section 
          key={solution.id} 
          className={`solution-section ${index % 2 === 0 ? 'left-aligned' : 'right-aligned'}`}
        >
          <div className="container">
            <motion.div
              className="solution-row"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="solution-content">
                <div className="solution-header">
                  <h2 className="solution-title">{solution.title}</h2>
                  <p className="solution-subtitle">{solution.subtitle}</p>
                </div>
                
                <p className="solution-description">{solution.description}</p>
                
                <div className="solution-features">
                  <h3>Key Features:</h3>
                  <ul>
                    {solution.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="checkmark">✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="solution-benefits">
                  <h3>Key Benefits:</h3>
                  <ul>
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx}>
                        <span className="bullet">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <motion.div 
                className="solution-visual"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 1,
                  delay: 0.2,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                viewport={{ once: true }}
              >
                <div className="solution-image">
                  <div className={`image-icon ${
                    solution.id === 'enterprise' ? 'enterprise-icon' :
                    solution.id === 'professionals' ? 'professional-icon' : 'education-icon'
                  }`}>
                    {solution.id === 'enterprise' ? '🏢' :
                     solution.id === 'professionals' ? '📊' : '🎓'}
                  </div>
                  <h4 className="image-placeholder-text">
                    {solution.id === 'enterprise' ? 'Financial District' :
                     solution.id === 'professionals' ? 'Data Analysis' : 'Academic Environment'}
                  </h4>
                  <p className="image-description">
                    {solution.id === 'enterprise' ? 'Corporate skyscrapers and financial centers representing enterprise-scale operations' :
                     solution.id === 'professionals' ? 'Professional analyzing financial data and market trends' : 'University campus and educational setting for financial modeling'}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="solutions-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to transform your approach to financial modeling?</h2>
            <p>Discover how Arcadeus can be tailored to your specific needs</p>
            
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary btn-large">
                Schedule a Demo
              </a>
              <a href="#pricing" className="btn btn-secondary btn-large">
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;