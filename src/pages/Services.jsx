import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Compass, Home as HomeIcon, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getServices, getHomepage } from '../lib/sanity';

const ServiceSection = ({ title, description, icon: Icon, features, image, reversed, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''} items-center gap-12 py-24 border-b border-gray-100 last:border-0`}
        >
            <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                    <img
                        src={image || "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"}
                        alt={title}
                        className="w-full h-80 md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                </div>
            </div>

            <div className="w-full md:w-1/2 md:px-6">
                <div className="bg-secondary/10 p-4 rounded-full inline-block mb-6 text-secondary">
                    <Icon size={32} strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">{title}</h2>
                <div className="w-20 h-1 bg-secondary mb-8"></div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                    {description}
                </p>

                {features && features.length > 0 && (
                    <ul className="space-y-4 mb-10">
                        {features.map((feature, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="flex items-center text-gray-700 font-medium"
                            >
                                <div className="bg-green-100 p-1 rounded-full mr-3">
                                    <Check size={16} className="text-green-600 flex-shrink-0" />
                                </div>
                                <span>{feature}</span>
                            </motion.li>
                        ))}
                    </ul>
                )}

                <Link
                    to="/book"
                    className="group bg-primary hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold transition-all inline-flex items-center shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                    Book This Service
                    <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

const Services = () => {
    const [services, setServices] = useState([]);
    const [homeData, setHomeData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            getServices().then(setServices).catch(console.error),
            getHomepage().then(setHomeData).catch(console.error)
        ]).finally(() => setLoading(false));
    }, []);

    const servicesHeaderBg = homeData?.servicesHeaderImage || 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop';

    // Smart fallbacks so the page looks good even before you upload your own photos
    const defaultImages = {
        'HDR Photography': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', // Bright Living Room
        'Cinematic Video Tours': 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop', // Camera/Production
        'Drone / Aerial Media': 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop', // Aerial View
        'Aerial / Drone Media': 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop', // Aerial View (Alt title)
        'Matterport 3D Tours': 'https://images.unsplash.com/photo-1558036117-15ea788860bc?q=80&w=2070&auto=format&fit=crop', // Modern Interior
        'Virtual Staging': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop', // Interior Design
        'Floor Plans': 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=1974&auto=format&fit=crop', // Blueprint/Sketch look
        'Zillow Showcase': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop' // Modern House Front
    };

    const getServiceIcon = (title) => {
        const t = title.toLowerCase();
        if (t.includes('photo')) return Camera;
        if (t.includes('video')) return Video;
        if (t.includes('drone') || t.includes('aerial')) return Compass;
        return HomeIcon;
    };

    // Generate JSON-LD for AEO (Assistive Engine Optimization)
    const serviceSchema = services.map(service => ({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
            "@type": "LocalBusiness",
            "name": "CT Realty Media"
        },
        "areaServed": {
            "@type": "State",
            "name": "Connecticut"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Real Estate Media Packages",
            "itemListElement": service.features?.map(feature => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": feature
                }
            }))
        }
    }));

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Services"
                description="Explore our premium real estate media services: HDR photography, drone aerials, cinematic video tours, and 3D Matterport walkthroughs."
                seo={homeData?.seo}
                additionalJsonLd={serviceSchema}
                breadcrumbs={[
                    { name: "Home", url: "https://www.ctrealtymedia.com/" },
                    { name: "Services", url: "https://www.ctrealtymedia.com/services" }
                ]}
            />
            {/* Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${servicesHeaderBg}")` }}
                    role="img"
                    aria-label={homeData?.servicesHeaderImageAlt || "Services Header Background"}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30"></div>

                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-sm font-light tracking-widest uppercase mb-4 backdrop-blur-sm shadow-sm">
                            Premium Media Solutions
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight drop-shadow-xl text-white">
                            Our <span className="text-secondary italic">Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                            Comprehensive visual marketing tailored for the modern real estate market.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-20"
                    animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs uppercase tracking-widest text-white/80">Scroll</span>
                        <div className="w-1 h-12 bg-gradient-to-b from-secondary via-secondary/60 to-transparent rounded-full"></div>
                    </div>
                </motion.div>
            </section>

            <div className="container mx-auto px-6 pb-20 -mt-20 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    {loading ? (
                        <div className="py-20 text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                            <p className="text-gray-500">Loading premium services...</p>
                        </div>
                    ) : services.length > 0 ? (
                        services.map((service, index) => (
                            <ServiceSection
                                key={index}
                                index={index}
                                title={service.title}
                                description={service.description}
                                icon={getServiceIcon(service.title)}
                                features={service.features}
                                image={service.image || defaultImages[service.title]}
                                reversed={index % 2 !== 0}
                            />
                        ))
                    ) : (
                        <div className="py-20 text-center text-gray-500">
                            <p className="text-xl mb-4">No services found.</p>
                            <p>Please add services in your Sanity Studio to populate this page.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Pricing Teaser / CTA */}
            <section className="bg-primary text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary via-primary to-primary"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to Book?</h2>
                        <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
                            Packages start at just $199. We offer custom quotes used by top producers for luxury estates and commercial projects.
                        </p>
                        <Link
                            to="/book"
                            className="bg-secondary hover:bg-white text-primary px-12 py-5 rounded-full font-bold text-xl transition-all shadow-lg hover:shadow-2xl hover:scale-105 inline-block"
                        >
                            Book Now
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
