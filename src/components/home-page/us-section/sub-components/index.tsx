import styles from './style.module.css';

export const UsSectionBlock: React.FC<UsSectionBlockProps> = ({ logo, title, description }) => {
  return (
    <div className={styles['us-section-block']}>
      <img src={logo} alt={title} className={styles['us-section-block-logo']} />
      <h3>{title}</h3>
      <p className={styles['us-section-block-description']}>{description}</p>
    </div>
  );
};

interface UsSectionBlockProps {
  logo: string;
  title: string;
  description: string;
}