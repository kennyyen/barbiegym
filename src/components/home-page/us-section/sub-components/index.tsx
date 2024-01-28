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
    <div className="box" data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className="img-box">
        <img src={logo} alt={title} />
      </div>
      <div className="detail-box">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default UsSectionBlock;