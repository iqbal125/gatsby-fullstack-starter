import React from 'react';
import { FcApproval } from 'react-icons/fc';
import styles from './formsubmit.module.css';

const FormSubmitSection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.thank_you_message}>
        Thank you for contacting us, a team member will get in touch with you within 1 business day.{' '}
      </h1>
      <div className={styles.icon}>
        <FcApproval />
      </div>
    </div>
  );
};

export default FormSubmitSection;
