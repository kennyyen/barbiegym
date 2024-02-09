import React from 'react';
import StatementSection from "./statement-section";
import TestimonialSection from "./testimonial-section";

export const CombineSection = () => {
    const backgroundStyle = {
        backgroundImage: `url('images/gym-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
    };

    return (
        <div style={backgroundStyle} className="text-white ">
            <StatementSection />
            <TestimonialSection />
        </div>
    );
};
