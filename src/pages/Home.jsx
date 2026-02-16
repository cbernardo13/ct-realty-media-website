import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Video, Compass, Home as HomeIcon, CheckCircle, MapPin, Instagram, Facebook, Clock, Award, Zap } from 'lucide-react';
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
                    {/* Visible img tag for SEO crawlers */}
                    <img
                        src={heroBg}
                        alt="Professional real estate photography of a luxury Connecticut home by CT Realty Media"
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                        loading="eager"
                    />
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
                        aria-label={homeData?.heroImageAlt || "Premium real estate photography showcasing a luxury property listing"}
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
                        {heroHeading}
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
                            We provide a comprehensive suite of real estate media services designed to showcase your property in its best light — from HDR photography and cinematic video to drone aerials and 3D virtual tours.
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

            {/* Why Choose CT Realty Media Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-primary mb-4">Why Choose CT Realty Media</h2>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                            In today's competitive real estate market, premium photography and media are no longer optional — they're essential.
                            According to the{' '}
                            <a href="https://www.nar.realtor/research-and-statistics/research-reports/highlights-from-the-profile-of-home-buyers-and-sellers" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary underline font-medium">
                                National Association of Realtors
                            </a>, over 97% of home buyers begin their search online, and listings with professional photography receive significantly more views and sell faster than those without. At CT Realty Media, we specialize in creating stunning visual content that helps Connecticut real estate agents and brokers stand out in a crowded marketplace.
                        </p>

                        <p>
                            Our team delivers a full suite of real estate media services, including HDR photography, cinematic property videos, FAA-certified drone and aerial imaging, and immersive 3D virtual tours. Every shoot is handled with meticulous attention to detail, from composition and lighting to color grading and delivery. We understand that each listing is unique, and we tailor our approach to highlight the features that matter most to potential buyers.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
                            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="bg-secondary/10 p-4 rounded-full mb-4">
                                    <Clock size={32} className="text-secondary" />
                                </div>
                                <h3 className="font-bold text-primary text-lg mb-2">24-Hour Delivery</h3>
                                <p className="text-gray-600 text-base">Professional media delivered within 24 hours of your shoot — keeping your listing timeline on track.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="bg-secondary/10 p-4 rounded-full mb-4">
                                    <Award size={32} className="text-secondary" />
                                </div>
                                <h3 className="font-bold text-primary text-lg mb-2">MLS-Ready Quality</h3>
                                <p className="text-gray-600 text-base">All images are edited and formatted to meet{' '}
                                    <a href="https://www.ctmls.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary underline">
                                        CT MLS
                                    </a>{' '}standards and requirements.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="bg-secondary/10 p-4 rounded-full mb-4">
                                    <Zap size={32} className="text-secondary" />
                                </div>
                                <h3 className="font-bold text-primary text-lg mb-2">Easy Online Booking</h3>
                                <p className="text-gray-600 text-base">
                                    <Link to="/book" className="text-secondary hover:text-primary underline">Schedule your shoot online</Link> in minutes — no phone calls or emails required.
                                </p>
                            </div>
                        </div>

                        <p>
                            Whether you're a seasoned agent looking for a reliable media partner or preparing your first listing, CT Realty Media is here to make your properties shine. Explore our{' '}
                            <Link to="/services" className="text-secondary hover:text-primary underline font-medium">full range of services</Link>, browse our{' '}
                            <Link to="/gallery" className="text-secondary hover:text-primary underline font-medium">portfolio</Link> of recent work, or visit our{' '}
                            <Link to="/resources" className="text-secondary hover:text-primary underline font-medium">resources page</Link> for tips on preparing your listing for a shoot. Have questions?{' '}
                            <Link to="/contact" className="text-secondary hover:text-primary underline font-medium">Contact us</Link> — we'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Areas We Serve Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-primary mb-4">Areas We Serve</h2>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            CT Realty Media provides professional real estate photography and media services across the tri-state area. We proudly serve agents, brokers, and property managers throughout Connecticut, Rhode Island, and Massachusetts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <motion.div whileHover={{ y: -5 }} className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100 shadow-sm">
                            <MapPin size={32} className="text-secondary mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-primary mb-3">Connecticut</h3>
                            <p className="text-gray-600">Serving all of CT including Hartford, New Haven, Fairfield County, Litchfield, and the shoreline communities.</p>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100 shadow-sm">
                            <MapPin size={32} className="text-secondary mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-primary mb-3">Rhode Island</h3>
                            <p className="text-gray-600">Available throughout Rhode Island including Providence, Newport, Warwick, and surrounding areas.</p>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100 shadow-sm">
                            <MapPin size={32} className="text-secondary mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-primary mb-3">Massachusetts</h3>
                            <p className="text-gray-600">Covering western and central Massachusetts, including Springfield, Worcester, and the Berkshires.</p>
                        </motion.div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/book"
                            className="inline-flex items-center bg-secondary hover:bg-yellow-600 text-primary px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                        >
                            Book a Shoot in Your Area <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />

            {/* Social Follow Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Follow Us on Social Media</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Stay up to date with our latest real estate photography, behind-the-scenes content, and featured listings.
                    </p>
                    <div className="flex justify-center items-center space-x-6">
                        <a
                            href="https://instagram.com/ctrealtymedia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md hover:border-secondary transition-all group"
                            aria-label="Follow CT Realty Media on Instagram"
                        >
                            <Instagram size={24} className="text-pink-500 group-hover:scale-110 transition-transform" />
                            <span className="font-medium text-primary">@ctrealtymedia</span>
                        </a>
                        <a
                            href="https://facebook.com/ctrealtymedia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md hover:border-secondary transition-all group"
                            aria-label="Follow CT Realty Media on Facebook"
                        >
                            <Facebook size={24} className="text-blue-600 group-hover:scale-110 transition-transform" />
                            <span className="font-medium text-primary">CT Realty Media</span>
                        </a>
                    </div>
                </div>
            </section>

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

