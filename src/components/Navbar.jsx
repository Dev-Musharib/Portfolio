import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsOpen(false);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-md py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform shadow-lg shadow-cyan-500/20">
                        <span className="text-white font-bold text-2xl font-mono">M</span>
                    </div>
                    <span className="text-xl font-bold text-white hidden sm:block tracking-wide">Musharib</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`transition-colors ${location.pathname === item.path
                                ? "text-cyan-400 font-medium"
                                : "text-slate-300 hover:text-cyan-400"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-white/10 md:hidden p-4">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`transition-colors ${location.pathname === item.path
                                        ? "text-cyan-400 font-medium"
                                        : "text-slate-300 hover:text-cyan-400"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
