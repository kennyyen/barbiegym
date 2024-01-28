import React from 'react';
import styles from './style.module.css';

interface UsSectionBlockProps {
  logo: string;
  title: string;
  description: string;
  aosDelay: number;
}

const UsSectionBlock: React.FC<UsSectionBlockProps> = ({ logo, title, description, aosDelay }) => {
  return (
    <div className={styles.box} data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className={styles.imgBox}>
        <img src={logo} alt={title} />
      </div>
      <div className={styles.detailBox}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default UsSectionBlock;