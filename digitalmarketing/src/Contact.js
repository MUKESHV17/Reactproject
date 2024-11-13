import React from 'react';
import './Contact.css';

const Contact = ({ onBack }) => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p className="intro-text">
        Don't hesitate to get in touch. We're here to help you with all your digital marketing needs.
      </p>

      <div className="contact-content">
        {/* Contact Form Section */}
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your Email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Your Message" required></textarea>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        {/* Contact Information Section */}
        <div className="contact-info">
          <h3>Let's Make it Happen</h3>
          <p>We're always available for your inquiries and are happy to assist with any questions.</p>

          <div className="info-item">
            <h4>Address:</h4>
            <p>123 Demo St, Lakeland, FL 45678, United States</p>
          </div>

          <div className="info-item">
            <h4>Phone:</h4>
            <p>+1 123-456-7890</p>
          </div>

          <div className="info-item">
            <h4>Email:</h4>
            <p>mail@example.com</p>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <button className="back-btn" onClick={onBack}>Back to Home</button>
    </div>
  );
};

export default Contact;
