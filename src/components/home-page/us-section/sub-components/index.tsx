"use client"

import styles from './style.module.css';
import useAOS from '~/components/hook';

export const UsSectionBlock: React.FC<UsSectionBlockProps> = ({ logo, title, description }) => {

  useAOS();
  return (
    <div className={styles['us-section-block']} data-aos="fade-up">
      <img src={logo} alt={title} className={styles['us-section-block-logo']} data-aos="fade-up" data-aos-delay="150" />
      <h3 data-aos="fade-up" data-aos-delay="150">{title}</h3>
      <p className={styles['us-section-block-description']} data-aos="fade-up" data-aos-delay="150">{description}</p>
    </div>
  );
};

interface UsSectionBlockProps {
  logo: string;
  title: string;
  description: string;
}