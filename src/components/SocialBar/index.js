import React from 'react';
import styles from './socialbar.module.css';

import twitter from '../../../static/logos/iconfinder_1_Twitter3_colored_svg_5296516.svg';
import facebook from '../../../static/logos/iconfinder_Colored_Facebook3_svg_5365678.svg';
import linkedin from '../../../static/logos/iconfinder_1_Linkedin_unofficial_colored_svg_5296501.svg';

const SocialBar = () => {
  return (
    <div className={styles.social_bar}>
      <a href="https://twitter.com" rel="noopener noreferrer" target="_blank">
        <img src={twitter} alt="" />
      </a>
      <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
        <img src={facebook} alt="" />
      </a>
      <a href="https://www.linkedin.com" rel="noopener noreferrer" target="_blank">
        <img src={linkedin} alt="" />
      </a>
    </div>
  );
};

export default SocialBar;
