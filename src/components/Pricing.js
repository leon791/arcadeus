import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Pricing.css';
import ComingSoonModal from './ComingSoonModal';

const Pricing = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const pricingTiers = [
    {
      id: 'lite',
      name: 'Finance Professional Lite',
      subtitle: 'Essential tools for getting started',
      price: '$39',
      period: '/month',
      description: 'Core features to begin your financial modeling journey',
      features: [
        'Up to 10 models per month',
        'Basic AI formula suggestions',
        'Standard templates library',
        'Excel integration plugin'
      ],
      buttonText: 'Start Free Trial',
      buttonType: 'secondary',
      popular: false
    },
    {
      id: 'expert',
      name: 'Finance Professional Expert',
      subtitle: 'Advanced finance tools',
      price: '$59',
      period: '/month',
      description: 'Advanced tools for finance professionals',
      features: [
        'Unlimited model creation',
        'Advanced AI-powered suggestions',
        'Premium templates library'
      ],
      buttonText: 'Start Free Trial',
      buttonType: 'primary',
      popular: true
    },
    {
      id: 'education',
      name: 'Education',
      subtitle: 'Tailored for academic institutions',
      price: 'Custom',
      period: '',
      description: 'Comprehensive solutions for educational excellence',
      features: [
        'Curriculum integration support',
        'Student progress tracking',
        'Bulk licensing discounts',
        'Instructor training programs'
      ],
      buttonText: 'Contact Sales',
      buttonType: 'secondary',
      popular: false
    },
    {
      id: 'enterprise',
      name: 'Enterprise Licenses',
      subtitle: 'Scale across your organization',
      price: 'Custom',
      period: '',
      description: 'Advanced features for large-scale operations',
      features: [
        'Unlimited team members',
        'Advanced security & compliance',
        'Custom integrations',
        'Dedicated account manager'
      ],
      buttonText: 'Contact Sales',
      buttonType: 'secondary',
      popular: false
    }
  ];

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="pricing-title">
              Choose Your Plan
            </h1>
            <p className="pricing-subtitle">
              Flexible pricing options designed to grow with your needs. 
              Start with a free trial and upgrade anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pricing-cards">
        <div className="container">
          <div className="pricing-grid">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                className={`pricing-card ${tier.popular ? 'popular' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {tier.popular && (
                  <div className="popular-badge">
                    Most Popular
                  </div>
                )}
                
                <div className="card-header">
                  <h3 className="tier-name">{tier.name}</h3>
                  <p className="tier-subtitle">{tier.subtitle}</p>
                  
                  <div className="pricing-info">
                    <span className="price">{tier.price}</span>
                    <span className="period">{tier.period}</span>
                  </div>
                  
                  <p className="tier-description">{tier.description}</p>
                </div>

                <div className="card-body">
                  <ul className="features-list">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  <a 
                    href={`mailto:info@arcadeus.ai?subject=Arcadeus%20-%20${tier.buttonText === 'Start Free Trial' ? 'Free%20Trial%20Request' : 'Contact%20Sales'}`}
                    className={`pricing-btn ${tier.buttonType === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
                  >
                    {tier.buttonText}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-faq">
        <div className="container">
          <motion.div
            className="faq-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Questions? We're here to help.</h2>
            <p>
              Need a custom solution or have questions about our pricing? 
              Our team is ready to help you find the perfect plan.
            </p>
            
            <div className="faq-buttons">
              <a href="mailto:info@arcadeus.ai?subject=Arcadeus%20-%20Contact%20Sales" className="btn btn-primary">
                Contact Sales
              </a>
              <a href="#support" className="btn btn-secondary">
                View FAQ
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <ComingSoonModal 
        isOpen={showComingSoon} 
        onClose={() => setShowComingSoon(false)} 
      />
    </div>
  );
};

export default Pricing;