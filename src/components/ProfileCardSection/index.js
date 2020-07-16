import React from 'react';
import ProfileCard from '../ProfileCard';
import ProfileCardFull from '../ProfileCardFull';
import styles from './profilecardsection.module.css';
import { profiles, profile1 } from './profileinfo.js';



const ProfileCardSection = () => {
  return (
    <div className={styles.top_div}>
      <div className={styles.about_text}>
        <h1>Example Mission Statement </h1>
        <h3>Main values of Business</h3>
        <p>Detailed explanation</p>
      </div>
      <div className={styles.top_card}>
        <ProfileCardFull profile={profile1} />
      </div>
      <div className={styles.card_section}>
        {profiles.map(profile => (
          <div key={profile.id} className={styles.card}>
            <ProfileCard key={profile.id} profile={profile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCardSection;
