import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const FloatingCTA = () => {
    const [visible, setVisible] = useState(false);
    const location = useLocation();
    const isBookPage = location.pathname === '/book';

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Don't render on the book page itself
    if (isBookPage) return null;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 right-6 z-40"
                >
                    <Link
                        to="/book"
                        className="flex items-center gap-2 bg-secondary hover:bg-yellow-600 text-primary px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide shadow-2xl transition-all transform hover:scale-105"
                    >
                        <Calendar size={18} />
                        Book Now
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
