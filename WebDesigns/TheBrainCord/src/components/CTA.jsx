import React from 'react';

const CTA: React.FC = () => {
    return (
        <div className="cta-container">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">Join us today and take your business to the next level!</p>
            <a href="/contact" className="cta-button">Contact Us</a>
        </div>
    );
};

export default CTA;