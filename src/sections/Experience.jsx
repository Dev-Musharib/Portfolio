import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        year: "2023 - Present",
        role: "Web Developer & E-Commerce Specialist",
        company: "Freelance",
        description: [
            "Developed Shopify and WordPress websites for small businesses and online stores.",
            "Built COD-based e-commerce stores with product, payment, and WhatsApp integration.",
            "Customized themes, improved performance, and ensured mobile responsiveness."
        ]
    },
    {
        year: "2024 - Present",
        role: "Shopify Store Developer",
        company: "Contract / Freelance",
        description: [
            "Created Shopify stores including homepage, product pages, and collections.",
            "Installed and configured essential Shopify apps.",
            "Optimized store layout for better user experience and conversions."
        ]
    },
    {
        year: "2023 - 2024",
        role: "E-Commerce Assistant / Store Setup Specialist",
        company: "Remote",
        description: [
            "Set up e-commerce stores for local clients using Shopify and WooCommerce.",
            "Added products, managed collections, and configured COD workflows.",
            "Helped clients with store launch and basic store management."
        ]
    },
    {
        year: "2022 - 2023",
        role: "WordPress Developer Intern",
        company: "Dynsof Solution Software",
        description: [
            "Assisted senior developers in building and customizing WordPress websites.",
            "Fixed layout, responsiveness, and speed-related issues.",
            "Performed content updates and basic SEO tasks."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">
                            Work <span className="text-cyan-400">Experience</span>
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto relative">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 h-full w-px bg-slate-800 -translate-x-1/2 hidden md:block" />

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full -translate-x-[5px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)] border-4 border-slate-950" />

                                    {/* Content spacing for desktop */}
                                    <div className="hidden md:block w-1/2" />

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[calc(50%-2rem)] pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 text-left'}`}>
                                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all">
                                            <span className="text-cyan-400 text-sm font-mono mb-2 block">{exp.year}</span>
                                            <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                            <h4 className="text-slate-400 text-sm mb-4 flex items-center gap-2 justify-start md:justify-inherit">
                                                <Briefcase className="w-4 h-4 shrink-0" />
                                                {exp.company}
                                            </h4>

                                            {Array.isArray(exp.description) ? (
                                                <ul className={`text-slate-400 text-sm leading-relaxed list-disc list-inside space-y-1 ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                                                    {exp.description.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-slate-400 text-sm leading-relaxed">
                                                    {exp.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
