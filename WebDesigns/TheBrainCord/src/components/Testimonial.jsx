import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (
        <div className="testimonial">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
        </div>
    );
};

export default Testimonial;