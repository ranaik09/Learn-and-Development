import React from 'react';

const PricingTable = () => {
    const pricingOptions = [
        {
            title: 'Basic',
            price: '$10/month',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
        },
        {
            title: 'Pro',
            price: '$20/month',
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
        },
        {
            title: 'Enterprise',
            price: '$30/month',
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
        },
    ];

    return (
        <div className="pricing-table">
            <h2>Pricing Plans</h2>
            <div className="pricing-options">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="pricing-option">
                        <h3>{option.title}</h3>
                        <p>{option.price}</p>
                        <ul>
                            {option.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                        <button>Choose Plan</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingTable;