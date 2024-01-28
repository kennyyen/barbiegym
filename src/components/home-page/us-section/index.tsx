import Image from "next/image";
import styles from './style.module.css';
import { UsSectionBlock } from './sub-components/';
import { US_LOGO1_PATH, US_LOGO2_PATH, US_LOGO3_PATH, US_LOGO4_PATH, US_LOGO5_PATH, US_LOGO6_PATH, US_LOGO7_PATH } from '~/app/constants/path';


export const UsSection = () => {
  return (
    <section className={styles['us_section']} id="us">
      <div className={styles['heading_container']}>
        <h2 data-aos="fade-up">
          Why Choose Us
        </h2>
      </div>

      <div className={styles['us_container']}>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <UsSectionBlock
              logo={US_LOGO1_PATH}
              title="QUALITY EQUIPMENT"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              aosDelay={150}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <UsSectionBlock
              logo={US_LOGO2_PATH}
              title="CERTIFIED TRAINER"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              aosDelay={300}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <UsSectionBlock
              logo={US_LOGO3_PATH}
              title="FAST PACE"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              aosDelay={450}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <UsSectionBlock
              logo={US_LOGO4_PATH}
              title="RESULT"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              aosDelay={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};