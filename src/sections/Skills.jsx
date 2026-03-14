import React from "react";
import { motion } from "framer-motion";

const skills = [
    {
        category: "Frontend",
        items: [
            { name: "React", level: 90 },
            { name: "Tailwind CSS", level: 95 },
            { name: "JavaScript", level: 85 },
            { name: "HTML5/CSS3", level: 95 },
        ],
    },
    {
        category: "Backend & CMS",
        items: [
            { name: "WordPress", level: 95 },
            { name: "Shopify", level: 90 },
            { name: "Node.js", level: 70 },
            { name: "WooCommerce", level: 90 },
        ],
    },
    {
        category: "Tools & Others",
        items: [
            { name: "Git", level: 85 },
            { name: "Figma", level: 80 },
            { name: "SEO", level: 85 },
            { name: "Dropshipping", level: 90 },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">
                            Technical <span className="text-cyan-400">Skills</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            My technical expertise across various domains and technologies.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {skills.map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors"
                            >
                                <h3 className="text-xl font-bold mb-6 text-white text-center">
                                    {category.category}
                                </h3>
                                <div className="space-y-6">
                                    {category.items.map((skill, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between mb-2 text-sm">
                                                <span className="text-slate-300">{skill.name}</span>
                                                <span className="text-cyan-400">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                                    className="h-full bg-cyan-500 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
