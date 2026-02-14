import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        serviceType: 'Photography'
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            setSubmitted(true);
            window.scrollTo(0, 0);
        }, 1000);
    };

    return (
        <div className="bg-gray-50 pt-20 min-h-screen">
            <SEO
                title="Contact"
                description="Book your next real estate photoshoot in CT, RI, or MA. Contact CT Realty Media today."
                breadcrumbs={[
                    { name: "Home", url: "https://www.ctrealtymedia.com/" },
                    { name: "Contact", url: "https://www.ctrealtymedia.com/contact" }
                ]}
            />
            {/* Header */}
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-serif font-bold mb-4"
                    >
                        Contact Us
                    </motion.h1>
                    <p className="text-xl text-gray-300">Ready to schedule a shoot or have a question? Reach out today.</p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-serif font-bold text-primary mb-8">Get in Touch</h2>
                        <p className="text-gray-700 mb-10 leading-relaxed">
                            We service all of Connecticut, Rhode Island, and Massachusetts.
                            Whether you have a small condo listing or a luxury waterfront estate, we're here to help you market it effectively.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-6">
                                <div className="bg-secondary/10 p-4 rounded-full text-secondary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-1">Phone</h3>
                                    <p className="text-gray-500 mb-2">Mon-Fri from 9am to 6pm</p>
                                    <a href="tel:+18603226961" className="text-lg font-medium hover:text-secondary transition-colors">+1 (860) 322-6961</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="bg-secondary/10 p-4 rounded-full text-secondary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-1">Email</h3>
                                    <p className="text-gray-500 mb-2">For general inquiries</p>
                                    <a href="mailto:info@ctrealtymedia.com" className="text-lg font-medium hover:text-secondary transition-colors">info@ctrealtymedia.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="bg-secondary/10 p-4 rounded-full text-secondary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-1">Service Area</h3>
                                    <p className="text-gray-600">Connecticut, Rhode Island, Massachusetts</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                    >
                        {submitted ? (
                            <div className="text-center py-20">
                                <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">Message Sent!</h3>
                                <p className="text-gray-600">Thank you for contacting us. We will get back to you shortly.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-secondary font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                            placeholder="(860) 555-0123"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="serviceType" className="block text-sm font-bold text-gray-700 mb-2">Interested Service</label>
                                    <select
                                        id="serviceType"
                                        name="serviceType"
                                        value={formData.serviceType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white"
                                    >
                                        <option>Photography</option>
                                        <option>Video Tour</option>
                                        <option>Drone / Aerial</option>
                                        <option>3D Virtual Tour</option>
                                        <option>Full Package</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                                        placeholder="Tell us about the property..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-secondary hover:bg-yellow-600 text-white font-bold py-4 rounded-lg transition-colors flex justify-center items-center shadow-lg"
                                >
                                    Send Message <Send size={20} className="ml-2" />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
