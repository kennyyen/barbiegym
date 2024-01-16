import styles from './styles.module.css';

export const VideoBlock = ({ src, type = 'video/mp4' }: PageWrapperProps) => {
  return (
    <video autoPlay loop muted className={styles['background-video']}>
      <source src={src} type={type} />
      {/* <!-- Your browser does not support the video tag --> */}
    </video>
  );
};

type PageWrapperProps = {
  src: string;
  type?: string;
};
