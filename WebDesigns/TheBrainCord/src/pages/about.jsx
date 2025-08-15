import React from 'react';
import Layout from '../components/Layout';
import { Typography } from '@mui/material';

const About: React.FC = () => {
    return (
        <Layout>
            <div style={{ padding: '20px' }}>
                <Typography variant="h2">About Us</Typography>
                <Typography variant="body1" paragraph>
                    We are a dedicated team committed to providing the best services and products to our customers. Our mission is to deliver exceptional value and quality in everything we do.
                </Typography>
                <Typography variant="body1" paragraph>
                    With years of experience in the industry, we understand the needs of our clients and strive to exceed their expectations. Our team is passionate about innovation and continuously seeks to improve our offerings.
                </Typography>
                <Typography variant="body1" paragraph>
                    Thank you for choosing us. We look forward to serving you!
                </Typography>
            </div>
        </Layout>
    );
};

export default About;