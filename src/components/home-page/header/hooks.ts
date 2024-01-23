import { useRef } from 'react';

export const useHeader = () => {
  const headerRef: React.RefObject<HTMLElement> = useRef(null);

  const navItems: NavItemProps[] = [
    { text: 'Home', ref: headerRef },
    { text: 'Why us' },
    { text: 'Pricing' },
    { text: 'Testimonial' },
    { text: 'Trainers' },
    { text: 'Contact Us' },
    { text: 'Login' },
  ];
  const setTabActive = () => {
    return;
  };
  return {
    navItems,
    setTabActive,
  };
};

type NavItemProps = {
  text: string;
  ref?: React.RefObject<HTMLElement>;
};
