import React from 'react';
import './Portfolio.css'; // Link to the CSS file

const Portfolio = ({ onBack }) => {
  return (
    <div className="portfolio">
      <h2>Our Portfolio</h2>
      <p className="portfolio-intro">
        Check out some of the amazing projects we’ve worked on. Each project has helped our clients achieve their digital marketing goals!
      </p>
      <div className="portfolio-items">
        <div className="portfolio-item">
          <img src="https://media.licdn.com/dms/image/v2/D4D12AQEt6oa1JEP7sg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709375533832?e=2147483647&v=beta&t=3_kpi1HQNieax2IxVeh9Q4NDpcLSLEnDAKXpSLPRpJo" alt="Project 1" className="portfolio-img" />
          <h3>Project 1 Title</h3>
          <p>Description of Project 1. Explain what was done and the results achieved.</p>
        </div>
        <div className="portfolio-item">
          <img src="https://media.istockphoto.com/id/959020654/photo/digital-marketing-new-startup-project-millennials-business-team-hands-at-work-with-financial.jpg?s=612x612&w=0&k=20&c=wwkyGtXxNKuew7FkH3DeJ5DCdqeM6kAhzj1II6yxQJI=" alt="Project 2" className="portfolio-img" />
          <h3>Project 2 Title</h3>
          <p>Description of Project 2. Explain what was done and the results achieved.</p>
        </div>
        <div className="portfolio-item">
          <img src="https://media.istockphoto.com/id/1349094880/photo/marketer-using-a-computer-to-digital-online-marketing-banner-web-icon-for-business-and-social.jpg?s=612x612&w=0&k=20&c=cGy3UqLgfE3rn4lWgBxxZFX7lQivIvipE91UT5kWnhE=" alt="Project 3" className="portfolio-img" />
          <h3>Project 3 Title</h3>
          <p>Description of Project 3. Explain what was done and the results achieved.</p>
        </div>
      </div>
      <button className="back-button" onClick={onBack}>Back to Home</button>
    </div>
  );
};

export default Portfolio;
