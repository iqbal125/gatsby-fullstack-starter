import React from 'react';
import ContactForm from '../Form';
import SocialBar from '../SocialBar';
import styles from './contactsection.module.css';
import image2 from '../../../static/uploads/wave2.svg';

const ContactSection = () => {
  return (
    <div className={styles.top_div}>
      <div className={styles.page_column}>
        <h2 className={styles.cta}>
          Get in touch to see how we can help you with your next project
        </h2>
        <h3> Free Consultations</h3>
        <ContactForm />
        <img src={image2} alt="" />
        <div className={styles.background}> </div>
        <div className={styles.email_phone}>
          <h2>Also Available by Phone and Email</h2>
          <h3>Email: </h3>
          <p> example@example.com</p>
          <h3>Phone: </h3>
          <p> 1-111-1111</p>
        </div>
        <div className={styles.social_bar}>
          <h3 className={styles.social_title}>
            Feel Free to Connect With Us on Social Just to Chat
          </h3>
          <SocialBar />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
