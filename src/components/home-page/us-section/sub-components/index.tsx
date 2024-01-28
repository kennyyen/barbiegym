import styles from './style.module.css';

export const UsSectionBlock = ({ logo, title, description, aosDelay }: UsSectionBlockProps) => {
  return (
    <div className={styles['box']} data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className={styles['image-box']}>
        <img src={logo} alt={title} />
      </div>
      <div className={styles['detail-box']}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

interface UsSectionBlockProps {
  logo: string;
  title: string;
  description: string;
  aosDelay: number;
};