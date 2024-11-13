import React, { useState } from 'react';
import SignUp from './SignUp';
import AboutUs from './AboutUs';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Dashboard from './Dashboard';
import Careers from './Careers';
import Contact from './Contact';
import CaseStudies from './CaseStudies';
import TestimonialsPage from './TestimonialsPage';
import './App.css';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleSignUp = () => {
    setIsSignedIn(true);
    setCurrentPage('home');
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (!isSignedIn) {
      return <SignUp onSignUp={handleSignUp} />;
    }

    switch (currentPage) {
      case 'about':
        return <AboutUs onBack={() => setCurrentPage('home')} />;
      case 'portfolio':
        return <Portfolio onBack={() => setCurrentPage('home')} />;
      case 'blog':
        return <Blog onBack={() => setCurrentPage('home')} />;
      case 'pricing':
        return <Pricing onBack={() => setCurrentPage('home')} />;
      case 'faq':
        return <FAQ onBack={() => setCurrentPage('home')} />;
      case 'dashboard':
        return <Dashboard onBack={() => setCurrentPage('home')} />;
      case 'careers':
        return <Careers onBack={() => setCurrentPage('home')} />;
      case 'contact':
        return <Contact onBack={() => setCurrentPage('home')} />;
      case 'caseStudies':
        return <CaseStudies onBack={() => setCurrentPage('home')} />;
      case 'testimonials':
        return <TestimonialsPage onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <>
            {/* Header */}
            <header className="header">
              <div className="container">
                <h1 className="logo">Digi-Marketing Pro</h1>
                <nav className="nav">
                  <button onClick={() => handleNavigation('home')} className="button">Home</button>

                  {/* Services dropdown */}
                  <div className="dropdown">
                    <button className="dropbtn">Services</button>
                    <div className="dropdown-content">
                      <button onClick={() => handleNavigation('pricing')} className="button">Pricing</button>
                      <button onClick={() => handleNavigation('faq')} className="button">FAQ</button>
                      <button onClick={() => handleNavigation('dashboard')} className="button">Dashboard</button>
                      <button onClick={() => handleNavigation('careers')} className="button">Careers</button>
                    </div>
                  </div>

                  {/* About dropdown */}
                  <div className="dropdown">
                    <button className="dropbtn">About</button>
                    <div className="dropdown-content">
                      <button onClick={() => handleNavigation('about')} className="button">About Us</button>
                      <button onClick={() => handleNavigation('portfolio')} className="button">Portfolio</button>
                      <button onClick={() => handleNavigation('caseStudies')} className="button">Case Studies</button>
                      <button onClick={() => handleNavigation('testimonials')} className="button">Testimonials</button>
                    </div>
                  </div>

                  <button onClick={() => handleNavigation('blog')} className="button">Blog</button>
                  <button onClick={() => handleNavigation('contact')} className="button">Contact</button>
                </nav>
              </div>
            </header>

            {/* Rest of the content */}
            {/* You can keep your hero section, services, testimonials, etc., below this as per your current structure */}
            {/* Hero Section */}
            <section className="hero">
              <div className="container">
                <h1>Transform Your Business with Expert Digital Marketing</h1>
                <p>Our tailored strategies help you increase online visibility and drive growth.</p>
                <button className="cta-button" onClick={() => handleNavigation('contact')}>Get Started</button>

              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services">
              <div className="container">
                <h2>Our Services</h2>
                <div className="service-list">
                  <div className="service-item">
                    <h3>SEO Optimization</h3>
                    <p>Boost your website’s ranking on search engines.</p>
                  </div>
                  <div className="service-item">
                    <h3>Social Media Management</h3>
                    <p>Manage and grow your social media presence.</p>
                  </div>
                  <div className="service-item">
                    <h3>Content Creation</h3>
                    <p>Engage your audience with high-quality content.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="footer">
              <div className="container">
                <p>&copy; 2024 Digi-Marketing Pro. All rights reserved.</p>
                <p><a href="#contact">Contact Us</a></p>
              </div>
            </footer>
          </>
        );
    }
  };

  return (
    <div className={isSignedIn ? 'App home-background' : 'App signup-background'}>
      {renderPage()}
    </div>
  );
};

export default App;
