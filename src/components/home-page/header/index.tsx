'use client';
import Image from 'next/image';
import Link from 'next/link';

import { useHeader } from './hooks';
import styles from './styles.module.css';

import { LOGO_PATH } from '~/app/constants/path';
import { useScrollPage } from '~/components/common/hooks/use-scroll-page';

export const Header = () => {
  return (
    <header>
      <div className={styles['container-fluid']}>
        <div className={styles['logo-box']}>
          <Link href="/">
            <Image
              alt=""
              className={styles.logo}
              height={1}
              layout="responsive"
              src={LOGO_PATH}
              title=""
              width={1}
            />
          </Link>
        </div>
      </div>
      <nav className={styles['nav-container']}>
        {/* <button
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbarSupportedContent"
          data-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div
          className={`${styles.collapsible} ${styles['navbar-collapse']}`}
          id="navbarSupportedContent"
        >
          {renderNavBar()}
        </div>
      </nav>
    </header>
  );
};

const renderNavBar = () => {
  const { navItems } = useHeader();
  const { scrollToRef } = useScrollPage();

  return (
    <div className={styles['nav-collapse-container']}>
      <ul className={styles['navbar-nav']}>
        {navItems.map(({ text, ref }, index) => {
          return (
            <li key={index} className={styles['nav-item']}>
              <a
                className={styles['nav-link']}
                onClick={() => scrollToRef(ref)}
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
