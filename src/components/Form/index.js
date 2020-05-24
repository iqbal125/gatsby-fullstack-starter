import React, { useState } from 'react';
import styles from './contactform.module.css';
import { FcInvite } from 'react-icons/fc';
import { navigate } from 'gatsby';

const ContactForm = () => {
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => navigate('/formsubmit'), 800);
  };

  return (
    <div className={styles.form_wrap}>
      <div className={styles.icon}>
        <FcInvite />
      </div>
      {isLoading && (
        <>
          <div className={styles.loader}></div>
          <div className={styles.loading_background}></div>
        </>
      )}
      <form
        className={styles.main_form}
        onSubmit={handleSubmit}
        name="Contact Form"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <div className={styles.form_row}>
          <label>Your Name:</label>
          <input type="name" name="name" />
        </div>
        <div className={styles.form_row}>
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div className={styles.form_row}>
          <label>Subject:</label>
          <input name="subject" />
        </div>
        <div className={styles.form_row}>
          <label>Message:</label>
          <textarea name="message" />
        </div>
        <button className={styles.submit_button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
