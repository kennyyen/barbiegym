import React from 'react';
import StatmentSection from "./statement-section";

// You can pass the other section as a prop, or import it directly like PricingSection
export const CombineSection = () => {
    const backgroundStyle = {
        backgroundImage: 'url(images/gym-bg.jpg)', // Replace with the path to your background image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };

    return (
        <div style={backgroundStyle} className="text-white">
            <StatmentSection />
        </div>
    );
};
