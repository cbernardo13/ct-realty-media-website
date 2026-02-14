import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Resources', path: '/resources' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome
                ? 'bg-primary/95 backdrop-blur-md py-4 shadow-lg'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="CT Realty Media"
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-white hover:text-secondary transition-colors text-sm uppercase tracking-wider font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/book"
                        className="bg-secondary hover:bg-yellow-600 text-primary px-6 py-2 rounded-full transition-colors text-sm font-bold uppercase tracking-wide"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-primary border-t border-gray-800 shadow-xl md:hidden"
                    >
                        <div className="flex flex-col py-6 px-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => {
                                        setIsOpen(false);
                                        window.scrollTo(0, 0);
                                    }}
                                    className="text-gray-300 hover:text-white text-lg font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/book"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                                className="bg-secondary text-primary text-center py-3 rounded-md font-bold uppercase"
                            >
                                Book Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
