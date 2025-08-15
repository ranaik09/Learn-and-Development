import React from 'react';
import Hero from '../components/Hero';
import ValueProps from '../components/ValueProps';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <ValueProps />
    </Layout>
  );
};

export default HomePage;