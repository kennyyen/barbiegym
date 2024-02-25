import React from 'react';
import StatementSection from "./statement-section";
import TestimonialSection from "./testimonial-section";

export const CombineSection = () => {
    const backgroundStyle = {
        backgroundImage: `url('images/gym-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'scroll'
    };

    return (
        <div style={backgroundStyle} className="text-white min-h-full">
            <StatementSection />
            <TestimonialSection />
        </div>
    );
};
