import Image from "next/image";
import styles from './style.module.css';
import UsSectionBlock from './sub-components/';

export const UsSection = () => {
    return (
        <section className="us_section layout_padding" id="us">
          <div className="container">
            <div className="heading_container">
              <h2 data-aos="fade-up">
                Why Choose Us
              </h2>
            </div>
    
            <div className="us_container ">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <UsSectionBlock
                    logo="images/u-1.png"
                    title="QUALITY EQUIPMENT"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    aosDelay={150}
                  />
                </div>
                <div className="col-lg-3 col-md-6">
                  <UsSectionBlock
                    logo="images/u-2.png"
                    title="CERTIFIED TRAINER"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    aosDelay={300}
                  />
                </div>
                <div className="col-lg-3 col-md-6">
                  <UsSectionBlock
                    logo="images/u-3.png"
                    title="FAST PACE"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    aosDelay={450}
                  />
                </div>
                <div className="col-lg-3 col-md-6">
                  <UsSectionBlock
                    logo="images/u-4.png"
                    title="RESULT"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    aosDelay={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      );
};