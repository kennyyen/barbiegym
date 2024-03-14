import { useEffect, useState } from 'react';
import { type Testimonials } from '.';

export const useCombinedSection = ({
  testimonials,
}: useCombinedSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + testimonials.length) % testimonials.length,
    );
  };
  useEffect(() => {
    const intervalId = setInterval(handleNext, 30000);
    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return { activeIndex, setActiveIndex, handleNext, handlePrev };
};

export type useCombinedSectionProps = {
  testimonials: Testimonials;
};
