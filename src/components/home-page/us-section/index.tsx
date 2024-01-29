"use client"

import React, { use } from 'react';
import styles from './style.module.css';
import { US_LOGO1_PATH, US_LOGO2_PATH, US_LOGO3_PATH, US_LOGO4_PATH } from '~/app/constants/path';

import { UsSectionBlock } from './sub-components';

import useAOS from '~/components/hook';

export const UsSection = () => {

  useAOS();

  return (
    <section className={styles['us_section']} id="us">
      <div className={styles['container']}>
        <div className={styles['heading_container']}>
          <h2 data-aos="fade-up" data-aos-delay="150">Why Choose Us</h2>
        </div>

        <div className={styles['us_container']}>
          <UsSectionBlock
            logo={US_LOGO1_PATH}
            title="QUALITY EQUIPMENT"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <UsSectionBlock
            logo={US_LOGO2_PATH}
            title="CERTIFIED TRAINER"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <UsSectionBlock
            logo={US_LOGO3_PATH}
            title="FAST PACE"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <UsSectionBlock
            logo={US_LOGO4_PATH}
            title="RESULT"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </section>
  );
};