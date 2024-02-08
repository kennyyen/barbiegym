"use client";
import React, { useState } from 'react';

const StatementSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <section className="py-12" id="statement">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full mx-auto">
                        <div className="text-center mb-12 pt-6">
                            <h2 className="white-heading-with-decor" data-aos="fade-up">
                                Pricing
                            </h2>
                            <p className="text-lg pt-[4rem]" data-aos="fade-up" data-aos-delay="200">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            </p>
                            <button
                                onClick={toggleModal}
                                className="mt-11 inline-block px-9 py-2 border border-white text-white text-uppercase transition-transform duration-300 hover:bg-white hover:text-black"
                                style={{
                                    borderRadius: '0',
                                    borderWidth: '1.5px',
                                    transform: 'scale(1)',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                View Pricing Plan
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
                    <div className="relative p-8 bg-white text-black w-full max-w-md m-auto flex-col flex rounded-lg">
                        <div className="flex justify-between items-center pb-3">
                            <p className="text-2xl font-bold">Modal Demo</p>
                            <div className="cursor-pointer z-50" onClick={toggleModal}>
                                <span className="text-2xl font-semibold">&times;</span>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="text-lg">
                                <p>$89.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default StatementSection;
