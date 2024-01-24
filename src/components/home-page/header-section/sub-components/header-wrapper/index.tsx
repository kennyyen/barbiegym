import { type ReactNode } from 'react';

import styles from './styles.module.css';

export const HeaderWrapper = ({ children }: HeaderWrapperProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

type HeaderWrapperProps = {
  children?: ReactNode;
};
