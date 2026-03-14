import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code2, Rocket, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: <MessageSquare className="w-6 h-6" />,
        title: "Requirement Discussion",
        description: "Understanding your goals and project needs."
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        title: "Design & Planning",
        description: "Creating a roadmap and visual structure."
    },
    {
        icon: <Code2 className="w-6 h-6" />,
        title: "Development",
        description: "Building the website with clean, efficient code."
    },
    {
        icon: <CheckCircle className="w-6 h-6" />,
        title: "Testing & Optimization",
        description: "Ensuring bug-free and fast performance."
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: "Final Delivery",
        description: "Launching your project with ongoing support."
    }
];

const Process = () => {
    return (
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">How I <span className="text-cyan-400">Work</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A streamlined process to ensure your project is delivered on time and effectively.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold mb-4 shadow-[0_0_15px_rgba(6,182,212,0.4)] border-4 border-slate-950">
                                    {index + 1}
                                </div>
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 w-full hover:border-cyan-500/30 transition-all h-full">
                                    <div className="text-cyan-400 mb-3 flex justify-center">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-slate-400 text-xs">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
