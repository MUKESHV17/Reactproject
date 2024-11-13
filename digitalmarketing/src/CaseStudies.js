import React from 'react';
import './CaseStudies.css'; // Import CSS styles

const CaseStudies = ({ onBack }) => {
  return (
    <div className="case-studies">
      <h2>Our Case Studies</h2>
      <p className="intro-text">
        Discover how we've helped our clients achieve their business goals through targeted digital marketing strategies.
      </p>
      <div className="case-study-list">
        <div className="case-study">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6qFhGBHGZ-l4vVJbv9oi-RN_gH3S1KMf4UxMYKGx_K95-wCbX5duk0egih-0LNaeUTE&usqp=CAU" alt="E-commerce Growth" className="case-study-img" />
          <div className="case-study-content">
            <h3>Case Study 1: E-commerce Growth</h3>
            <p>We helped an e-commerce company increase sales by 150% in 6 months through targeted advertising and SEO.</p>
          </div>
        </div>
        <div className="case-study">
          <img src="https://www.markivis.com/wp-content/uploads/2023/05/brand-awareness.jpg" alt="Brand Awareness" className="case-study-img" />
          <div className="case-study-content">
            <h3>Case Study 2: Brand Awareness</h3>
            <p>A local business saw a 200% increase in brand awareness through our social media management strategy.</p>
          </div>
        </div>
      </div>
      <button className="back-button" onClick={onBack}>Back to Home</button>
    </div>
  );
};

export default CaseStudies;
