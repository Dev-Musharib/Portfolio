import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, MessageCircle, Briefcase } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900/50 relative overflow-hidden">
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
                    <h2 className="text-3xl font-bold mb-4">Get In <span className="text-cyan-400">Touch</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss a new idea? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info & Socials */}
                    <div className="space-y-8">
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Email Me</h4>
                                        <a href="mailto:musharibmmm@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                            musharibmmm@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Call / WhatsApp</h4>
                                        <a href="tel:+923704231773" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                            +92 370 423 1773
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Location</h4>
                                        <p className="text-slate-400">
                                            Available Globally (Remote)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="mt-8 pt-8 border-t border-slate-800">
                                <h4 className="text-white font-medium mb-4">Follow Me</h4>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/in/muhammad-musharib-7b210336b/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.upwork.com/freelancers/~01daba8d9217aca7f3" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all">
                                        <Briefcase className="w-5 h-5" />
                                    </a>
                                    <a href="https://wa.me/923704231773" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all">
                                        <MessageCircle className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 h-fit">
                        <form
                            action="https://formsubmit.co/musharibmmm@gmail.com"
                            method="POST"
                            className="space-y-6"
                        >
                            {/* Honeypot & Captcha Disable */}
                            <input type="text" name="_honey" style={{ display: 'none' }} />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="http://localhost:5173/#/contact" />

                            <div>
                                <label className="block text-slate-400 mb-2 text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-slate-400 mb-2 text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-slate-400 mb-2 text-sm font-medium">Message</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-1"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
