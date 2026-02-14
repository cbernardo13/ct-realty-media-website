import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Video, Compass, Home as HomeIcon } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';
import { getHomepage, getServices } from '../lib/sanity';

const Home = () => {
    const [homeData, setHomeData] = useState(null);
    const [services, setServices] = useState([]);

    useEffect(() => {
        getHomepage().then(data => setHomeData(data)).catch(console.error);
        getServices().then(data => setServices(data)).catch(console.error);
    }, []);

    const heroHeading = homeData?.heroHeading || (<span>Elevate Your <span className="text-secondary italic">Listings</span></span>);
    const heroSubheading = homeData?.heroSubheading || "Premium real estate photography, cinematic video, and drone tours for Connecticut's finest properties.";
    const heroBg = homeData?.heroImage || "https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?q=80&w=2075&auto=format&fit=crop";

    // Helper to map service titles to icons
    const getServiceIcon = (title) => {
        const t = title.toLowerCase();
        if (t.includes('photo')) return <Camera size={24} />;
        if (t.includes('video')) return <Video size={24} />;
        if (t.includes('drone') || t.includes('aerial')) return <Compass size={24} />;
        return <HomeIcon size={24} />;
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <SEO
                seo={homeData?.seo}
                title="Home"
                breadcrumbs={[
                    { name: "Home", url: "https://www.ctrealtymedia.com/" }
                ]}
            />
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-gray-900 to-black z-0">
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                    <motion.div
                        className="absolute inset-0 opacity-30"
                        animate={{
                            scale: [1, 1.1],
                            rotate: [0, 1]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        style={{
                            backgroundImage: `url("${heroBg}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                        role="img"
                        aria-label={homeData?.heroImageAlt || "Hero Background Image"}
                    />
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 relative z-20 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight leading-tight drop-shadow-lg text-white"
                    >
                        {typeof heroHeading === 'string' ? heroHeading : heroHeading}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
                    >
                        {heroSubheading}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
                    >
                        <Link
                            to="/book"
                            className="bg-secondary hover:bg-yellow-600 text-primary px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg border-2 border-transparent"
                        >
                            Book Now
                        </Link>
                        <Link
                            to="/gallery"
                            className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all border-2 border-white flex items-center"
                        >
                            View Portfolio <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-20"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-white rounded-full"></div>
                    </div>
                </motion.div>
            </section>

            {/* Services Preview Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Services</h2>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            We provide a comprehensive suite of media services designed to showcase your property in its best light.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {services.length > 0 ? (
                            services.slice(0, 3).map((service, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -10 }}
                                    className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                                >
                                    <div className="h-64 bg-gray-200 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10"></div>
                                        <img
                                            src={service.image || "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"}
                                            alt={service.alt || service.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <div className="bg-white p-3 rounded-full inline-block mb-4 shadow-sm text-secondary">
                                            {getServiceIcon(service.title)}
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                                        <p className="text-gray-700 mb-6 line-clamp-3">
                                            {service.description}
                                        </p>
                                        <Link to="/services" className="text-secondary font-bold uppercase text-sm tracking-wide hover:text-primary transition-colors inline-flex items-center">
                                            Learn More <ArrowRight size={16} className="ml-1" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-500 py-12">
                                Loading services...
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />

            {/* CTA Section */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                        {homeData?.ctaTitle || "Ready to Showcase Your Listing?"}
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        {homeData?.ctaText || "Book your shoot today and receive professional media within 24 hours."}
                    </p>
                    <Link
                        to="/book"
                        className="bg-secondary hover:bg-white text-primary px-12 py-4 rounded-full font-bold text-lg transition-all"
                    >
                        Book Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
