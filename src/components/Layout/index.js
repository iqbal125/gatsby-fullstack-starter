import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './layout.module.css';
import SEO from '../SEO';

const Layout = ({ props, title, description, children }) => {
  const seoData = {
    title,
    description
  };

  return (
    <>
      <SEO seoData={seoData} />
      <div className={styles.layout}>
        <Header props={{ ...props }} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
