import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 -z-10" />

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Start Your <span className="text-cyan-400">Project?</span>
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                        Let's collaborate to build something amazing. Whether it's a new store,
                        a website redesign, or a custom application, I'm here to help.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                    >
                        Hire Me Now
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
