import React from 'react';
import Layout from '../components/Layout';
import Home from '../components/LandingPage';

import './styles/global.css';

const Index = props => {
  return (
    <Layout props={props}>
      <Home />
    </Layout>
  );
};

export default Index;
