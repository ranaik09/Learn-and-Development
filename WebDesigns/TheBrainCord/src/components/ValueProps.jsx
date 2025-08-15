import React from 'react';

const ValueProps: React.FC = () => {
    const valueProps = [
        {
            title: 'High Quality',
            description: 'Our products are made with the highest quality materials and craftsmanship.'
        },
        {
            title: 'Affordable Prices',
            description: 'We offer competitive pricing without compromising on quality.'
        },
        {
            title: 'Excellent Support',
            description: 'Our customer support team is here to help you with any inquiries or issues.'
        }
    ];

    return (
        <section className="value-props">
            <h2>Why Choose Us?</h2>
            <div className="value-props-list">
                {valueProps.map((prop, index) => (
                    <div key={index} className="value-prop">
                        <h3>{prop.title}</h3>
                        <p>{prop.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ValueProps;