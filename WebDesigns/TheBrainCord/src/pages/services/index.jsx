import React from 'react';
import Layout from '../../components/Layout';
import PricingTable from '../../components/PricingTable';
import Testimonial from '../../components/Testimonial';

const ServicesPage = () => {
    return (
        <Layout>
            <h1>Our Services</h1>
            <p>We offer a variety of services to meet your needs.</p>
            <PricingTable />
            <Testimonial />
        </Layout>
    );
};

export default ServicesPage;