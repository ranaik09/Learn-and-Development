import React from 'react';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out to us using the form below.</p>
            <ContactForm />
        </Layout>
    );
};

export default ContactPage;