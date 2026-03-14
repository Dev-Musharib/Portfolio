import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Globe, Code, Zap, RefreshCw } from 'lucide-react';

const services = [
    {
        icon: <ShoppingBag className="w-8 h-8 text-cyan-400" />,
        title: "Shopify Store Development",
        description: "Complete setup of high-converting Shopify stores with custom themes, apps, and payment integration."
    },
    {
        icon: <Globe className="w-8 h-8 text-cyan-400" />,
        title: "WordPress Website Design",
        description: "Professional, responsive, and SEO-friendly WordPress websites tailored to your business needs."
    },
    {
        icon: <Code className="w-8 h-8 text-cyan-400" />,
        title: "E-Commerce Setup",
        description: "Full e-commerce functionality including COD, payment gateways, and local shipping configurations."
    },
    {
        icon: <Zap className="w-8 h-8 text-cyan-400" />,
        title: "Speed Optimization",
        description: "Boosting website performance for faster load times, better user experience, and higher search rankings."
    },
    {
        icon: <RefreshCw className="w-8 h-8 text-cyan-400" />,
        title: "Redesign & Maintenance",
        description: "Modernizing outdated websites and providing ongoing support to keep your site secure and fresh."
    }
];

const Services = () => {
    return (
        <section className="py-20 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">What I <span className="text-cyan-400">Do</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Specialized services to help your business grow online with robust technical solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all group"
                        >
                            <div className="mb-4 bg-slate-900 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
