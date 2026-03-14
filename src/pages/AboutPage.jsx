import React from 'react';
import Navbar from '../components/Navbar';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <div className="pt-20">
                <About />
                <Experience />
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;
