import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MessageCircle, Linkedin } from "lucide-react";
import musharibImg from "../assets/Musharib.jpg";
import resume from "../assets/Musharib Resume.pdf";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Background Elements */}
            <motion.div
                animate={{ y: [0, 50, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"
            />
            <motion.div
                animate={{ y: [0, -50, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"
            />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-cyan-400 font-medium mb-4 text-lg">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="text-white">M.</span>
                        <span className="text-gradient">Musharib</span>
                    </h1>
                    <p className="text-slate-400 text-lg mb-8 max-w-lg">
                        Expert developer specializing in <b>WordPress</b>, <b>Shopify</b>, and <b>Dropshipping</b>.
                        I build high-converting stores and professional websites that drive growth.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="group bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2"
                        >
                            View Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href={resume}
                            download
                            className="border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all"
                        >
                            Download CV
                        </a>
                    </div>

                    <div className="flex gap-6 mt-12">
                        <a
                            href="https://www.upwork.com/freelancers/~01d8e9e6e3c0c0c0c0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-400 transition-colors"
                            aria-label="Upwork"
                        >
                            <Briefcase className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/musharib"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-400 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://wa.me/923000000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-400 transition-colors"
                            aria-label="WhatsApp"
                        >
                            <MessageCircle className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden md:block relative"
                >
                    <div className="relative z-10 w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-white/10">
                        <img
                            src={musharibImg}
                            alt="M. Musharib"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    {/* Decorative dots */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-600/20 pattern-dots rounded-lg -z-10" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
