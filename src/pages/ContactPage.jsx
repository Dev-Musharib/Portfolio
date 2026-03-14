import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <>
            <Navbar />
            <div className="pt-20">
                <Contact />
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;
