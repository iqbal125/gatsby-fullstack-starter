import React, { useContext } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './layout.module.css';
import SEO from '../SEO';
import GeneralContext from '../../utils/general_context';

const Layout = ({ props, title, description, children }) => {
  const { sideState } = useContext(GeneralContext);
  const { isOpen } = sideState;

  const seoData = {
    title,
    description
  };

  return (
    <>
      <SEO seoData={seoData} />
      <div className={isOpen ? styles.layout_fade : styles.layout}>
        <Header props={{ ...props }} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
