import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="py-8 bg-slate-950 border-t border-slate-900">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center gap-8 mb-8 flex-wrap">
                    <Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors">Home</Link>
                    <Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">About</Link>
                    <Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">Experience</Link>
                    <Link to="/projects" className="text-slate-400 hover:text-cyan-400 transition-colors">Projects</Link>
                    <Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors">Testimonials</Link>
                    <Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</Link>
                </div>
                <p className="text-slate-500">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
