import React from 'react';
import './Pricing.css';

const Pricing = ({ onBack }) => {
  return (
    <div className="pricing">
      <h2>Our Pricing Plans</h2>
      <div className="pricing-table">
        <div className="pricing-plan basic-plan">
          <h3>Basic Plan</h3>
          <p>Includes essential features for small businesses.</p>
          <p className="price">$99/month</p>
          <button className="choose-plan">Choose Plan</button>
        </div>
        <div className="pricing-plan pro-plan">
          <h3>Pro Plan</h3>
          <p>Advanced features for growing businesses.</p>
          <p className="price">$199/month</p>
          <button className="choose-plan">Choose Plan</button>
        </div>
        <div className="pricing-plan enterprise-plan">
          <h3>Enterprise Plan</h3>
          <p>Customized solutions for large organizations.</p>
          <p className="price">Contact us for a quote</p>
          <button className="choose-plan">Contact Us</button>
        </div>
      </div>
      <button className="back-button" onClick={onBack}>Back to Home</button>
    </div>
  );
};

export default Pricing;
