import React from "react";
import { motion } from "framer-motion";
import resume from "../assets/Musharib Resume.pdf";

const skills = [
    "WordPress", "Shopify", "Dropshipping", "Product Listing", "WooCommerce", "Review Writing", "Data Entry", "Virtual Assistant"
];

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900/50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold mb-8">
                        Who I <span className="text-cyan-400">Am</span>
                    </h2>

                    <div className="space-y-6 text-slate-300 text-lg leading-relaxed mb-10">
                        <p>
                            I’m a passionate <b>Web Developer</b> and <b>E-Commerce Specialist</b> with hands-on experience in building Shopify and WordPress websites.
                            I focus on creating clean, fast, and user-friendly websites that help businesses grow online.
                        </p>
                        <p>
                            My journey started as a Web Developer Intern, where I gained practical experience working on real client projects.
                            Now, I help small businesses and online brands build professional, functional, and high-converting digital assets.
                        </p>
                    </div>

                    <a
                        href={resume}
                        download="Musharib Resume.pdf"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-1"
                    >
                        Download CV
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
