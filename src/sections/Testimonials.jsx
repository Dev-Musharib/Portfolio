import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "CEO, TechStart",
        message: "Musharib delivered an exceptional website that perfectly captures our brand. His attention to detail and technical expertise are top-notch.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "David Chen",
        role: "Marketing Director",
        message: "The Shopify store he built for us doubled our conversion rate in the first month. Highly recommended for e-commerce solutions!",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Emily Davis",
        role: "Founder, GreenLife",
        message: "Professional, responsive, and incredibly skilled. He solved complex WordPress issues that other developers couldn't fix.",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-slate-950 relative overflow-hidden">
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
                            Client <span className="text-cyan-400">Feedback</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            What my clients say about working with me.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative hover:border-cyan-500/30 transition-all"
                            >
                                <Quote className="w-10 h-10 text-cyan-500/20 absolute top-6 right-6" />
                                <p className="text-slate-300 mb-6 italic relative z-10 font-light">
                                    "{testimonial.message}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full border-2 border-cyan-500/50"
                                    />
                                    <div>
                                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                                        <p className="text-xs text-cyan-400">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
