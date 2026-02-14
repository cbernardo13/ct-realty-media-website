import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';
import { getTestimonials } from '../lib/sanity';

const defaultTestimonials = [
    {
        name: `K B`,
        text: `Chris was AMAZING to work with and his photos are top notch! I would highly recommend Chris. He went above and beyond and worked on our photos on New Year's Day!! Incredible service!!`,
        rating: 5,
        source: `Google Review`
    },
    {
        name: `Cheryl Whitelaw`,
        text: `Our photographer, Chris was very professional and had our new pictures up and running within days. Great experience! We highly recommend Chris for your future photo shoots.`,
        rating: 5,
        source: `Google Review`
    },
    {
        name: `Avery Barlow`,
        text: `Chris was fast and responsive. His pictures were beautiful! Would recommend to anyone looking for reasonably priced awesome pics!`,
        rating: 5,
        source: `Google Review`
    }
];

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState(defaultTestimonials);

    useEffect(() => {
        getTestimonials().then(data => {
            if (data && data.length > 0) {
                setTestimonials(data);
            }
        }).catch(console.error);
    }, []);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-primary mb-4">What Our Clients Say</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Real reviews from real clients across Connecticut and New England.
                    </p>

                    {/* Google Rating Badge */}
                    <div className="inline-flex items-center gap-3 mt-6 bg-gray-50 border border-gray-200 rounded-full px-6 py-3">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <div className="flex items-center gap-1.5">
                            <span className="font-bold text-primary text-lg">5.0</span>
                            <div className="flex text-secondary">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" />
                                ))}
                            </div>
                        </div>
                        <span className="text-gray-500 text-sm">on Google</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow relative"
                        >
                            <div className="absolute top-6 right-8 text-secondary/20">
                                <Quote size={40} />
                            </div>

                            <div className="flex text-secondary mb-4">
                                {[...Array(item.rating || 5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-700 italic mb-6 leading-relaxed">
                                "{item.text}"
                            </p>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-bold text-primary">{item.name}</h4>
                                    <p className="text-sm text-gray-500">{item.source}</p>
                                </div>
                                <svg viewBox="0 0 24 24" className="w-5 h-5 opacity-40" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Link to Google Reviews */}
                <div className="text-center mt-12">
                    <a
                        href="https://www.google.com/maps/place/?q=place_id:ChIJyZsDj3MT5okRvZ4sXt2V1rM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-secondary hover:text-yellow-600 font-medium transition-colors"
                    >
                        <MapPin size={16} />
                        See all reviews on Google
                        <span className="text-sm">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
