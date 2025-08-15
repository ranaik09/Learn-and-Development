import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to Our Marketing Site</h1>
                <p>Your success is our priority. Discover our services and solutions tailored for you.</p>
                <a href="#services" className="cta-button">Get Started</a>
            </div>
        </section>
    );
};

export default Hero;