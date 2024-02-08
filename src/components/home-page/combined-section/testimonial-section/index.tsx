"use client";

import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


type Testimonial = {
    id: number;
    content: string;
    clientName: string;
    imageUrl: string;
};

// Mock data for the testimonials
const testimonials: Testimonial[] = [
    {
        id: 1,
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        clientName: 'Client 1',
        imageUrl: '/images/user-1.png',
    },

    {
        id: 2,
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        clientName: 'Client 2',
        imageUrl: '/images/user-2.png',
    },

    {
        id: 3,
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        clientName: 'Client 3',
        imageUrl: '/images/user-3.png',
    },
];

const TestimonialSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to go to the next testimonial
    const handleNext = () => {
        setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
    };

    // Function to go to the previous testimonial
    const handlePrev = () => {
        setActiveIndex((currentIndex) =>
            (currentIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    // Auto-loop functionality
    useEffect(() => {
        const intervalId = setInterval(handleNext, 30000); // Change testimonials every 30 seconds
        return () => clearInterval(intervalId);
    }, [handleNext]);

    return (
        <section className="py-12" id="statement">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full mx-auto">
                        <div className="text-center mb-12 pt-6">
                            <h2 className="white-heading-with-decor" data-aos="fade-up">
                                Testimonial
                            </h2>
                            <div className="carousel pt-[4rem]">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={testimonial.id}
                                        className={`transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    >
                                        <img
                                            src={testimonial.imageUrl}
                                            alt={`Testimonial from ${testimonial.clientName}`}
                                            className="mx-auto rounded-full shadow-custom"
                                        />
                                        <p className="text-white my-4 pt-6">{testimonial.content}</p>
                                        <h4 className="text-gray-400">{testimonial.clientName}</h4>
                                    </div>
                                ))}
                                <button
                                    aria-label="Previous testimonial"
                                    className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-white p-2 rounded-full cursor-pointer text-black"
                                    onClick={handlePrev}
                                >
                                    <FaAngleLeft size={25} />
                                </button>
                                <button
                                    aria-label="Next testimonial"
                                    className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white p-2 rounded-full cursor-pointer text-black"
                                    onClick={handleNext}
                                >
                                    <FaAngleRight size={25} />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
