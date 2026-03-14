import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const benefits = [
    "Clean & professional design aesthetics",
    "Fast and mobile-responsive websites",
    "Clear communication throughout the project",
    "On-time delivery commitment",
    "Affordable pricing structure",
    "Post-launch support and reliability"
];

const WhyChooseMe = () => {
    return (
        <section className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl font-bold mb-6">Why <span className="text-cyan-400">Choose Me?</span></h2>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            I don't just build websites; I build digital assets that help your business grow.
                            My focus is on delivering high-quality, functional, and visually appealing solutions
                            that meet your specific goals.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-cyan-400" />
                                    </div>
                                    <span className="text-slate-400 text-sm">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50"
                    >
                        <h3 className="text-xl font-bold text-white mb-4">Values & Philosophy</h3>
                        <blockquote className="text-slate-400 italic mb-6 border-l-4 border-cyan-500 pl-4 py-1">
                            "I believe in building long-term relationships with clients by delivering honest work, clear communication, and reliable support."
                        </blockquote>
                        <div className="flex flex-wrap gap-2">
                            {/* Optional Tech Logos/Badges could go here if using images */}
                            <span className="px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-500 font-mono">Shopify</span>
                            <span className="px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-500 font-mono">WordPress</span>
                            <span className="px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-500 font-mono">React</span>
                            <span className="px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-500 font-mono">Design</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;
