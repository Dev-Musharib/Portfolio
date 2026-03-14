import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
    { url: "https://mitomax.no/", title: "MitoMax", type: "E-Commerce" },
    { url: "https://miancaters.com/", title: "Mian Caters", type: "Catering" },
    { url: "https://pureslavicwigs.com/", title: "Pure Slavic Wigs", type: "Beauty Store" },
    { url: "https://primecarrecoveryservices.com/", title: "Prime Car Recovery", type: "Service" },
    { url: "https://storemartpk.com/", title: "Store Mart PK", type: "E-Commerce" },
    { url: "https://builddreamgift.com/", title: "Build Dream Gift", type: "Gift Shop" },
    { url: "https://bluum.pk/", title: "Bluum", type: "Fashion" },
    { url: "https://greenyieldnetwork.com/", title: "Green Yield Network", type: "Business" },
    { url: "https://vegoland.com/", title: "Vegoland", type: "Food & Beverage" },
    { url: "https://novavory.com/", title: "Novavory", type: "Fashion" },
    { url: "https://alecomania.com/", title: "Alecomania", type: "E-Commerce" },
    { url: "https://dayf.us/", title: "Dayf", type: "Business" },
    { url: "https://electricsupply.shop/", title: "Electric Supply", type: "Equipment" },
    { url: "https://almirahboutique.com/", title: "Almirah Boutique", type: "Fashion" },
    { url: "https://coverkingsa.co.za/", title: "Cover King SA", type: "Automotive" },
    { url: "https://coshine.pk/", title: "Coshine", type: "Beauty" }
];

const Projects = () => {
    const [filter, setFilter] = React.useState("All");
    const categories = ["All", ...new Set(projects.map(p => p.type))];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.type === filter);

    return (
        <section id="projects" className="py-20 bg-slate-900/50 relative overflow-hidden">
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
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            My <span className="text-cyan-400">Work</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                            A collection of websites I've built using WordPress and Shopify.
                            Each project represents a unique business need solved with professional design.
                        </p>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {categories.map((cat, index) => (
                                <button
                                    key={index}
                                    onClick={() => setFilter(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                        ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                                        : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredProjects.map((project, index) => (
                            <motion.a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={project.url} // Changed key to url for stability during filtering
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-1 block"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                        <img
                                            src={`https://www.google.com/s2/favicons?domain=${project.url}&sz=64`}
                                            alt={`${project.title} icon`}
                                            className="w-6 h-6 object-contain"
                                        />
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                <p className="text-sm text-slate-500">{project.type}</p>
                                <div className="mt-4 text-xs font-mono text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {project.url.replace('https://', '').replace(/\/$/, '')}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
