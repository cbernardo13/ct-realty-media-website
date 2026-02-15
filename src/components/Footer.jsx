import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-gray-300 py-16 border-t border-gray-800">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <Link to="/" className="inline-block mb-4">
                        <img
                            src="/logo.png"
                            alt="CT Realty Media"
                            className="h-10 w-auto object-contain"
                        />
                    </Link>
                    <p className="text-sm leading-relaxed text-gray-400">
                        Premium real estate photography and media services for Connecticut, Rhode Island, and Massachusetts.
                        Elevating listings with cinematic quality.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider">Explore</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
                        <li><Link to="/gallery" className="hover:text-secondary transition-colors">Portfolio</Link></li>
                        <li><Link to="/resources" className="hover:text-secondary transition-colors">Resources</Link></li>
                        <li><Link to="/faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider">Services</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/services" className="hover:text-secondary transition-colors">HDR Photography</Link></li>
                        <li><Link to="/services" className="hover:text-secondary transition-colors">Drone / Aerial</Link></li>
                        <li><Link to="/services" className="hover:text-secondary transition-colors">Cinematic Video</Link></li>
                        <li><Link to="/services" className="hover:text-secondary transition-colors">3D Virtual Tours</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider">Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start space-x-3">
                            <MapPin size={18} className="text-secondary mt-1 flex-shrink-0" />
                            <span>Serving CT, RI, & MA</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone size={18} className="text-secondary flex-shrink-0" />
                            <a href="tel:+18603226961" className="hover:text-white transition-colors">+1 (860) 322-6961</a>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail size={18} className="text-secondary flex-shrink-0" />
                            <a href="mailto:chris@ctrealtymedia.com" className="hover:text-white transition-colors">chris@ctrealtymedia.com</a>
                        </li>
                        <li className="pt-2 flex space-x-4">
                            <a
                                href="https://instagram.com/ctrealtymedia"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-secondary text-white transition-all transform hover:-translate-y-1"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://facebook.com/ctrealtymedia"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-secondary text-white transition-all transform hover:-translate-y-1"
                                aria-label="Facebook"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} CT Realty Media LLC. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
