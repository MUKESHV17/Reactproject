import React from 'react';
import './AboutUs.css'; // Ensure the CSS file is properly linked

const AboutUs = ({ onBack }) => {
  return (
    <div className="about-us">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          At Digi-Marketing Pro, we believe in helping businesses grow by providing
          top-notch digital marketing services. With our experienced team, we bring
          creativity and strategy together to deliver measurable results.
        </p>
        <p>
          Our mission is to help you reach your goals through tailored marketing strategies
          that resonate with your audience and drive success. Whether it’s SEO, content creation,
          or social media management, we are here to be your trusted partner in digital growth.
        </p>
        <button className="contact-button">Get In Touch</button>
        <button className="back-button" onClick={onBack}>Back to Home</button>
      </div>
      <div className="about-image">
        <img src="https://media.istockphoto.com/id/1471378553/photo/digital-marketing-technology-global-business-analysis-of-online-marketing-strategies-and.jpg?s=612x612&w=0&k=20&c=64suuhCnLezbcusgxICtP2FSLAboxA9gOuWZskOFa8U=" alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
