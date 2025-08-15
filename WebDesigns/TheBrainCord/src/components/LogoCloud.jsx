import React from 'react';

const logos = [
    { src: '/path/to/logo1.png', alt: 'Logo 1' },
    { src: '/path/to/logo2.png', alt: 'Logo 2' },
    { src: '/path/to/logo3.png', alt: 'Logo 3' },
    { src: '/path/to/logo4.png', alt: 'Logo 4' },
    { src: '/path/to/logo5.png', alt: 'Logo 5' },
];

const LogoCloud: React.FC = () => {
    return (
        <div className="logo-cloud">
            {logos.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.alt} className="logo" />
            ))}
        </div>
    );
};

export default LogoCloud;