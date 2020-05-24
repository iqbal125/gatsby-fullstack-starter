import React from 'react';
import ServiceCard from '../ServicesCard';
import styles from './servicecardsection.module.css';
import { servicesWeb, otherServices } from './services';
import { FaReact } from 'react-icons/fa';
import { FcOnlineSupport } from 'react-icons/fc';

const ServiceCardSection = () => {
  return (
    <div className={styles.top_div}>
      <h1 className={styles.top_header}>Areas Of Expertise</h1>
      <FaReact className={styles.main_icon} />
      <h3 className={styles.title_desc}>
        We have the tech experience you need, Our expert team of advisors and consultants can answer
        your questions and design solutions
      </h3>

      <div className={styles.consult_card}>
        <div className={styles.consult_icon}>
          <FcOnlineSupport />
        </div>
        <p>
          <strong>Free Consultations</strong> to discuss your software & engineering needs
        </p>
      </div>

      <h1> Web Development</h1>
      <div className={styles.card_rows}>
        {servicesWeb.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <h1 className={styles.second_header}>Other Services</h1>
      <div className={styles.card_rows}>
        {otherServices.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCardSection;
