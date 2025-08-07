import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Pricing.css';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingTiers = [
    {
      id: 'pro',
      name: 'Pro',
      price: isAnnual ? 32 : 40,
      originalPrice: isAnnual ? 480 : null,
      period: '/month',
      description: 'For most users',
      subtitle: 'Powerful but prone to mistakes.',
      detailText: 'For casual Excel users and AI enthusiasts. Supports our Base model. More powerful than Gemini/Copilot, but may make mistakes and is not nearly as strong as Max.',
      features: [
        'Unlimited messages & actions',
        '2 Max model uses per day',
        'Access to our Base model'
      ],
      buttonText: 'Start 7-day free trial',
      buttonType: 'secondary',
      popular: false
    },
    {
      id: 'max',
      name: 'Max',
      price: isAnnual ? 160 : 200,
      originalPrice: isAnnual ? 2400 : null,
      period: '/month',
      description: 'For power users & professionals',
      subtitle: 'Powered by our strongest AI model.',
      detailText: 'For professional users and people at the AI frontier looking for the strongest Excel/Spreadsheet agent in the world.',
      features: [
        'Everything in Pro',
        'Unlimited Access to our Max model',
        'Unlimited actions and messages'
      ],
      additionalText: 'Max provides access to our Analyst Mode Beta.',
      buttonText: 'Start 7-day free trial',
      buttonType: 'primary',
      popular: true,
      badge: 'Most Powerful'
    },
    {
      id: 'teams',
      name: 'Teams',
      price: isAnnual ? 400 : 500,
      originalPrice: isAnnual ? 6000 : null,
      period: '/month/seat',
      description: 'For teams & businesses',
      subtitle: 'Zero Data Retention and Zero Training (in partnership with Anthropic)',
      detailText: 'Perfect for teams and businesses. Get Max-level access with year-end pricing, team collaboration features, and direct founder access. Try it risk-free for 7 days.',
      features: [
        'Everything in Max',
        'Enterprise Grade Security',
        'Direct access to Shortcut Founders'
      ],
      buttonText: 'Start Team Free Trial',
      buttonType: 'secondary',
      popular: false,
      badge: 'Enterprise Security'
    }
  ];

  return (
    <div className="pricing-page">
      <div className="rainbow-background"></div>
      
      <section className="pricing-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <button className="close-button">×</button>
            <h1 className="pricing-title">Choose Your Plan</h1>
            <p className="pricing-subtitle">Select the plan that best fits your needs.</p>
            
            <div className="billing-toggle">
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={isAnnual}
                  onChange={(e) => setIsAnnual(e.target.checked)}
                  className="toggle-input"
                />
                <span className="toggle-slider">
                  <span className="toggle-option">Quarterly</span>
                  <span className="toggle-option">Annual</span>
                </span>
              </label>
              {isAnnual && (
                <div className="savings-text">
                  (Save £1,200/year per seat)
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pricing-cards">
        <div className="container">
          <div className="pricing-grid">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                className={`pricing-card ${tier.popular ? 'popular' : ''} ${tier.id === 'teams' ? 'teams-card' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {tier.badge && (
                  <div className={`plan-badge ${tier.id === 'max' ? 'badge-purple' : 'badge-green'}`}>
                    {tier.badge}
                  </div>
                )}
                
                <div className="card-content">
                  <div className="plan-header">
                    <h3 className="plan-name">{tier.name}</h3>
                    
                    <div className="price-section">
                      <div className="price-container">
                        <span className="currency">£</span>
                        <span className="price">{tier.price}</span>
                        <span className="period">{tier.period}</span>
                      </div>
                    </div>
                    
                    <p className="plan-description">{tier.description}</p>
                  </div>

                  <div className="plan-body">
                    <p className="plan-subtitle">{tier.subtitle}</p>
                    <p className="plan-detail">{tier.detailText}</p>
                    
                    <ul className="features-list">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <span className="checkmark">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {tier.additionalText && (
                      <p className="additional-text">{tier.additionalText}</p>
                    )}
                  </div>

                  <div className="card-footer">
                    <button className={`cta-button ${tier.buttonType}`}>
                      {tier.buttonText}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;