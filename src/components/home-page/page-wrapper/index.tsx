import { type ReactNode } from 'react';

import styles from './styles.module.css';

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

type PageWrapperProps = {
  children?: ReactNode;
  // any props that come into the component
};
