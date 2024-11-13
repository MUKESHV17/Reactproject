import React from 'react';
import './FAQ.css';

const FAQ = ({ onBack }) => {
  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        <div className="faq-item">
          <h3>What services do you offer?</h3>
          <p>We offer a variety of digital marketing services including SEO, social media management, and content creation.</p>
        </div>
        <div className="faq-item">
          <h3>How long does it take to see results?</h3>
          <p>Results can vary based on the service, but many clients start seeing improvements within 3 months.</p>
        </div>
        <div className="faq-item">
          <h3>Can I customize my plan?</h3>
          <p>Yes, we offer customizable solutions to meet your specific needs.</p>
        </div>
      </div>
      <button className="back-button" onClick={onBack}>Back to Home</button>
    </div>
  );
};

export default FAQ;
