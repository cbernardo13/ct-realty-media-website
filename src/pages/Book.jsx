import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Shield, Camera, Video, Compass, Box, ChevronDown, ChevronUp, Star, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const faqs = [
    {
        q: `How far in advance do I need to book?`,
        a: `We recommend booking at least 48 hours in advance for standard sessions. Same-day and next-day availability may be possible depending on our schedule — just reach out and we'll do our best to accommodate you.`
    },
    {
        q: `What areas do you serve?`,
        a: `We proudly serve Connecticut, Rhode Island, and Massachusetts. Our team covers everything from Hartford and New Haven to Providence and the Cape Cod area. Contact us for locations outside our standard coverage.`
    },
    {
        q: `How quickly will I receive my photos and videos?`,
        a: `Most orders are delivered within 24 hours of your shoot. Larger projects like full cinematic video tours or commercial shoots may take 48–72 hours. Rush delivery is available upon request.`
    },
    {
        q: `Can I bundle multiple services?`,
        a: `Absolutely! Most of our clients combine HDR photography with drone aerials or video walkthroughs. Bundling services saves time and gives your listing a complete media package. Select everything you need when placing your order.`
    },
    {
        q: `What if the weather is bad on the day of my shoot?`,
        a: `For drone and exterior photography, we'll reschedule at no extra charge if weather conditions are unsafe or will result in poor-quality media. We'll proactively reach out if we need to move your session.`
    },
    {
        q: `Do you offer Zillow 3D Home tours?`,
        a: `Yes! We're a certified Zillow 3D Home photographer. Our interactive tours integrate directly with your Zillow listing, giving buyers a fully immersive walkthrough experience.`
    },
];

const services = [
    {
        icon: Camera,
        title: 'HDR Photography',
        desc: 'Magazine-quality photos with perfect exposure in every room. Includes interior, exterior, and twilight options.',
    },
    {
        icon: Compass,
        title: 'Drone & Aerial',
        desc: 'FAA-certified pilots capture stunning aerial perspectives of the property, land, and surrounding neighborhood.',
    },
    {
        icon: Video,
        title: 'Cinematic Video',
        desc: 'Professionally edited 4K video tours with smooth gimbal movements, music, and branded or unbranded options.',
    },
    {
        icon: Box,
        title: '3D Virtual Tours',
        desc: 'Interactive Zillow 3D Home tours and Matterport-style walkthroughs that let buyers explore from anywhere.',
    },
];

const steps = [
    { num: '01', title: 'Choose Your Services', desc: 'Select from photography, drone, video, 3D tours, or bundle them together for the best value.' },
    { num: '02', title: 'Pick a Date & Time', desc: 'Our calendar shows real-time availability. Book a slot that works for you — even same-week appointments.' },
    { num: '03', title: 'We Shoot On-Site', desc: 'Our team arrives on time, fully equipped and ready. Most sessions wrap in under 90 minutes.' },
    { num: '04', title: 'Media Delivered Fast', desc: 'Receive your polished, MLS-ready photos and media within 24 hours via your private gallery link.' },
];

const FaqItem = ({ q, a }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full py-5 text-left group"
            >
                <span className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors pr-4">{q}</span>
                {open ? <ChevronUp size={20} className="text-secondary shrink-0" /> : <ChevronDown size={20} className="text-gray-400 group-hover:text-secondary shrink-0 transition-colors" />}
            </button>
            {open && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pb-5 text-gray-600 leading-relaxed"
                >
                    {a}
                </motion.div>
            )}
        </div>
    );
};

const Book = () => {
    const iframeRef = useRef(null);

    // Listen for Aryeo's Penpal resize messages to auto-adjust iframe height
    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data && event.data.penpal === 'call' && iframeRef.current) {
                if (event.data.methodName === 'resize' && event.data.args) {
                    iframeRef.current.style.height = `${event.data.args[0]}px`;
                }
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <div className="bg-gray-50 pt-20">
            <SEO
                title="Book Your Shoot — CT Realty Media"
                description="Schedule professional real estate photography, drone aerial video, cinematic tours, and Zillow 3D Home shoots in Connecticut, Rhode Island, and Massachusetts. Fast online booking, 24-hour delivery."
            />

            {/* Hero Banner */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop')] bg-cover bg-center opacity-15"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-serif font-bold mb-6"
                    >
                        Book Your <span className="text-secondary">Shoot</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
                    >
                        Premium real estate photography, drone, video, and 3D tours — serving CT, RI, and MA.
                        Select your services, pick a date, and we'll handle the rest.
                    </motion.p>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-8 text-sm text-gray-400"
                    >
                        <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-secondary" />
                            <span>Flexible Scheduling</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} className="text-secondary" />
                            <span>24-Hour Turnaround</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield size={18} className="text-secondary" />
                            <span>Satisfaction Guaranteed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-secondary" />
                            <span>CT · RI · MA</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">How It Works</h2>
                        <div className="w-16 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600 max-w-xl mx-auto">From booking to delivery, we make the process seamless so you can focus on selling.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-center relative"
                            >
                                <div className="text-5xl font-serif font-bold text-secondary/20 mb-2">{step.num}</div>
                                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Aryeo Embed Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Place Your Order</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">Choose your services, property type, and preferred date below. It only takes a few minutes.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                    >
                        <iframe
                            ref={iframeRef}
                            src="https://media.ctrealtymedia.com/order"
                            title="CT Realty Media Order Form"
                            allow="geolocation"
                            className="w-full border-0"
                            style={{ minHeight: '800px', height: '800px' }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">What You Can Book</h2>
                        <div className="w-16 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600 max-w-xl mx-auto">Every service is designed to help your listing stand out and sell faster.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((svc, i) => (
                            <motion.div
                                key={svc.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-secondary/30 transition-all group"
                            >
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                                    <svc.icon size={24} className="text-secondary" />
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-2">{svc.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-primary rounded-2xl p-10 md:p-14 text-center text-white relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-gray-900 opacity-90"></div>
                        <div className="relative z-10">
                            <div className="flex justify-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={22} className="text-secondary fill-secondary" />
                                ))}
                            </div>
                            <blockquote className="text-xl md:text-2xl font-serif italic mb-6 max-w-3xl mx-auto leading-relaxed">
                                "Chris was AMAZING to work with and his photos are top notch! I would highly recommend Chris. He went above and beyond and worked on our photos on New Year's Day!! Incredible service!!"
                            </blockquote>
                            <p className="text-gray-400 font-medium">— K B, Google Review</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Frequently Asked Questions</h2>
                        <div className="w-16 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600 max-w-xl mx-auto">Everything you need to know before booking your shoot.</p>
                    </motion.div>
                    <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-100">
                        {faqs.map((faq, i) => (
                            <FaqItem key={i} q={faq.q} a={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Elevate Your Listings?</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                            Join hundreds of agents across Connecticut, Rhode Island, and Massachusetts who trust CT Realty Media with their property marketing.
                        </p>
                        <a
                            href="https://media.ctrealtymedia.com/order"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-secondary hover:bg-yellow-600 text-primary px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                        >
                            Book Your Shoot Now <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Book;
