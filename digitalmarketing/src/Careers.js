import React from 'react';
import './Careers.css';

const Careers = ({ onBack }) => {
  return (
    <div className="careers">
      <h2>Join Our Team</h2>
      <p className="intro-text">
        We are always looking for talented individuals to join our team. If you are passionate about digital marketing, we want to hear from you!
      </p>
      <h3>Open Positions:</h3>
      <div className="positions">
        <div className="position-card">
          <img src="https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=612x612&w=0&k=20&c=S7d_Mof_fEsM69inW540APogoXkz-eA23XE1AIhTaBA=" alt="Digital Marketing Specialist" />
          <h4>Digital Marketing Specialist</h4>
        </div>
        <div className="position-card">
          <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201225181639/How-to-Become-an-SEO-Expert.png" alt="SEO Expert" />
          <h4>SEO Expert</h4>
        </div>
        <div className="position-card">
          <img src="https://www.shutterstock.com/image-photo/man-writing-text-document-essay-600nw-2376208001.jpg" alt="Content Writer" />
          <h4>Content Writer</h4>
        </div>
      </div>
      <button className="back-button" onClick={onBack}>Back to Home</button>
    </div>
  );
};

export default Careers;
