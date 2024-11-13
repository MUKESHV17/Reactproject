import React from 'react';
import './Blog.css'; // Import the CSS styles

const Blog = ({ onBack }) => {
  return (
    <div className="blog">
      <h2>Our Latest Blog Posts</h2>
      <div className="blog-list">
        <article className="blog-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT02NciCguNzSWWR7JrsJaHIJNoiDYSJN3z5g&s" alt="SEO in 2024" className="blog-image" />
          <h3>The Importance of SEO in 2024</h3>
          <p>Search Engine Optimization (SEO) remains critical for online success. Discover effective strategies for 2024.</p>
        </article>
        <article className="blog-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8iwSNCDCxUM3_CEQzPhrcpbPQN1bkTl-dl6SjzOjvup6V6niWun1aDZWsk3FT2VzW1ec&usqp=CAU" alt="Social Media Trends" className="blog-image" />
          <h3>Top Social Media Trends to Watch</h3>
          <p>Stay ahead of the competition by understanding the latest social media trends and how they can impact your business.</p>
        </article>
        <article className="blog-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWL688pnYC22ai2uxEluXouRGmHb05-bhYCXnWc4TkkfsbCO1xrolY_2tWv8yKDq06Xww&usqp=CAU" alt="Content Marketing" className="blog-image" />
          <h3>Essential Content Marketing Tips</h3>
          <p>Create compelling content that engages your audience and drives traffic to your website.</p>
        </article>
      </div>
      <button className="back-button" onClick={onBack}>Back to Home</button>
    </div>
  );
};

export default Blog;
