import React from 'react';
import './TestimonialsPage.css'; // Import the CSS styles

const TestimonialsPage = ({ onBack }) => {
  return (
    <div className="testimonials-page">
      <h2>Client Testimonials</h2>
      <p className="intro-text">
        Our clients love working with us! Here’s what they have to say about Digi-Marketing Pro.
      </p>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <p>"Digi-Marketing Pro has transformed our online strategy. Their team is professional and results-driven."</p>
          <cite>- Jane11 Doe, CEO of Company XYZ</cite>
        </div>
        <div className="testimonial-item">
          <p>"Thanks to their marketing efforts, our traffic has doubled! Highly recommend!"</p>
          <cite>- John Smith, Marketing Director at ABC Inc.</cite>
        </div>
      </div>
      <button className="back-button" onClick={onBack}>Back to Home</button>
    </div>
  );
};

export default TestimonialsPage;
