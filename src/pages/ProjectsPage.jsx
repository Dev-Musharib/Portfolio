import React from 'react';
import Navbar from '../components/Navbar';
import Projects from '../sections/Projects';
import Footer from '../components/Footer';

const ProjectsPage = () => {
    return (
        <>
            <Navbar />
            <div className="pt-20">
                <Projects />
            </div>
            <Footer />
        </>
    );
};

export default ProjectsPage;
