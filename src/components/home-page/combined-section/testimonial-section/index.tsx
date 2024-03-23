'use client';

import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useCombinedSection } from './hooks';

// Mock data for the testimonials
const testimonials: Testimonials = [
  {
    id: 1,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    clientName: 'Client 1',
    imageUrl: '/images/user-1.png',
  },

  {
    id: 2,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    clientName: 'Client 2',
    imageUrl: '/images/user-2.png',
  },

  {
    id: 3,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    clientName: 'Client 3',
    imageUrl: '/images/user-3.png',
  },
];

const TestimonialSection: React.FC = () => {
  const { activeIndex, handleNext, handlePrev } = useCombinedSection({
    testimonials,
  });

  return (
    <section className="relative py-8" id="testimonial">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap justify-center">
          <div className="w-full">
            <div className="text-center mb-8">
              <h2 className="white-heading-with-decor" data-aos="fade-up">
                Testimonials
              </h2>
            </div>
            <div className="relative block">
              <div className="relative block">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`relative inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === activeIndex ? 'opacity-100' : 'hidden'
                    } flex flex-col items-center justify-center text-center`}
                    style={{ height: '400px', padding: '2rem' }}
                  >
                    <Image
                      alt={`Testimonial from ${testimonial.clientName}`}
                      className="rounded-full shadow-lg w-24 h-24 object-cover"
                      data-aos="fade-up"
                      height={96}
                      src={testimonial.imageUrl}
                      width={96}
                    />
                    <p
                      className={styles['testimonial-content']}
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      {testimonial.content}
                    </p>
                    <h4 className="text-gray-400">{testimonial.clientName}</h4>
                  </div>
                ))}
              </div>
              <button
                aria-label="Previous testimonial"
                className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-white text-black p-2 rounded-full border-2 border-black shadow-lg flex items-center justify-center hover:bg-gray-300"
                style={{ width: '45px', height: '45px' }}
                onClick={handlePrev}
              >
                <FaAngleLeft size={25} />
              </button>
              <button
                aria-label="Next testimonial"
                className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white text-black p-2 rounded-full border-2 border-black shadow-lg flex items-center justify-center hover:bg-gray-300"
                style={{ width: '45px', height: '45px' }}
                onClick={handleNext}
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

type Testimonial = {
  id: number;
  content: string;
  clientName: string;
  imageUrl: string;
};
export type Testimonials = Testimonial[];
