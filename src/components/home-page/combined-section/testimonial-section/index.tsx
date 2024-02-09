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

    const handleNext = () => {
        setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActiveIndex((currentIndex) => (currentIndex - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const intervalId = setInterval(handleNext, 30000);
        return () => clearInterval(intervalId);
    }, [activeIndex]);

    return (
        <section className="relative py-12 bg-black text-white" id="testimonial">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold uppercase" data-aos="fade-up">
                                Testimonials
                            </h2>
                        </div>
                        <div className="relative">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'} flex flex-col items-center justify-center`}
                                    style={{ height: '400px' }}
                                >
                                    <img
                                        src={testimonial.imageUrl}
                                        alt={`Testimonial from ${testimonial.clientName}`}
                                        className="rounded-full shadow-lg w-24 h-24 object-cover"
                                    />
                                    <p className="text-white my-4">{testimonial.content}</p>
                                    <h4 className="text-gray-400">{testimonial.clientName}</h4>
                                </div>
                            ))}
                            <button
                                aria-label="Previous testimonial"
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full border-2 border-black shadow-lg flex items-center justify-center hover:bg-gray-300"
                                onClick={handlePrev}
                                style={{ width: '45px', height: '45px' }}
                            >
                                <FaAngleLeft size={25} />
                            </button>
                            <button
                                aria-label="Next testimonial"
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full border-2 border-black shadow-lg flex items-center justify-center hover:bg-gray-300"
                                onClick={handleNext}
                                style={{ width: '45px', height: '45px' }}
                            >
                                <FaAngleRight size={25} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;