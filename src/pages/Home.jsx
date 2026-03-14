import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Testimonials from '../sections/Testimonials';
import Experience from '../sections/Experience';
import CallToAction from '../sections/CallToAction';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Testimonials />
            <Experience />
            <CallToAction />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
