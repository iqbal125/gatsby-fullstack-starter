import React from 'react';
import { navigate } from 'gatsby';
import SocialBar from '../SocialBar';

//illustrations
import image1 from '../../../static/uploads/coding_.svg';
import image2 from '../../../static/uploads/wave.svg';
import image3 from '../../../static/uploads/undraw_design_notes_8dmv.svg';
import image5 from '../../../static/uploads/code_development_.svg';

//pics
import pic1 from '../../../static/uploads/cloud.jpg';
import pic2 from '../../../static/uploads/database.jpg';
import pic3 from '../../../static/uploads/healthcare.jpg';

import styles from './home.module.css';

const Home = () => {
  const toContactPage = () => {
    navigate('/contact');
  };

  const toAboutPage = () => {
    navigate('/about');
  };

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.landing_hero}>
          <h1 className={styles.value_prop}>Main Value Prop</h1>

          <img className={styles.hero_illustration} src={image3} alt="" />
        </div>
        <div className={styles.wave_bottom_hero}>
          <img src={image2} alt="" />
        </div>
        <h1 className={styles.site_title}> Name of Business</h1>
        <hr className={styles.top_line} />

        <div className={styles.feature1}>
          <div className={styles.feature1_text}>
            <h2>Feature #1</h2>
            <p>Explanation of Feature</p>
            <button className={styles.find_out_more_button} onClick={toAboutPage}>
              Find Out More
            </button>
          </div>
          <img className={styles.feature1_img} src={image1} alt="" />
        </div>
        <div className={styles.feature2}>
          <img className={styles.feature2_img} src={image5} alt="" />
          <div className={styles.feature2_text}>
            <h2>Feature #2</h2>
            <p>Explanation of Feature</p>
          </div>
        </div>
        <div className={styles.bottom_cta_section}>
          <div className={styles.bottom_cta_text}>
            <h3>Get in touch to see how we can help you on your next project</h3>
            <button className={styles.get_started_button} onClick={toContactPage}>
              Get Started Now
            </button>
          </div>
          <div className={styles.pic_section}>
            <img className={styles.pic} src={pic1} alt="" />
            <img className={styles.pic} src={pic2} alt="" />
            <img className={styles.pic} src={pic3} alt="" />
          </div>
          <div className={styles.social_bar}>
            <h3 className={styles.social_title}> Or Connect With Us on Social Just to Chat</h3>
            <SocialBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
