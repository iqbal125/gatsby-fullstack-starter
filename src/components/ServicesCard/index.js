import React from 'react';
import styles from './servicecard.module.css';

const ServiceCard = props => {
  const { service } = props;

  return (
    <div className={styles.card}>
      <h1 className={styles.service_title}>{service.title}</h1>
      <div className={styles.icon}>{service.icon()}</div>
      <ul className={styles.service_list}>
        {service.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
