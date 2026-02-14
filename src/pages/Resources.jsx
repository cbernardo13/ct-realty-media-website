import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Sun, Trash2, LayoutGrid } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <div className="bg-gray-50 pt-20 min-h-screen">
            <SEO
                title="Resources & Guides"
                description="Helpful guides and checklists for preparing your home for a real estate photoshoot. Maximize your listing's potential."
            />

            {/* Header */}
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-bold mb-4"
                    >
                        Resources & Guides
                    </motion.h1>
                    <p className="text-xl text-gray-300">Tips to get your property photo-ready.</p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-16">
                {/* Featured Guide: Home Prep */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
                >
                    <div className="md:flex">
                        <div className="md:w-1/3 bg-gray-200 relative">
                            <img
                                src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                                alt="Clean Living Room"
                                className="w-full h-full object-cover absolute inset-0"
                            />
                            <div className="absolute inset-0 bg-primary/10"></div>
                        </div>
                        <div className="md:w-2/3 p-8 md:p-12">
                            <div className="uppercase tracking-wide text-sm text-secondary font-bold mb-2">Seller's Guide</div>
                            <h2 className="text-3xl font-serif font-bold text-primary mb-6">How to Prepare Your Home for a Photoshoot</h2>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                A well-prepared home allows us to capture the best possible angles and lighting.
                                Follow this checklist to ensure your listing shines online and attracts more buyers.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="flex items-start">
                                    <div className="bg-green-100 p-2 rounded-full text-green-700 mr-4">
                                        <Sun size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Maximize Light</h4>
                                        <p className="text-sm text-gray-500">Open all blinds and curtains. Turn on all overhead lights and lamps.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-red-100 p-2 rounded-full text-red-700 mr-4">
                                        <Trash2 size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Declutter Surfaces</h4>
                                        <p className="text-sm text-gray-500">Remove magnets from the fridge, clear kitchen counters, and hide toiletries.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full text-blue-700 mr-4">
                                        <LayoutGrid size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Depersonalize</h4>
                                        <p className="text-sm text-gray-500">Remove family photos and personal items to help buyers visualize themselves.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-yellow-100 p-2 rounded-full text-yellow-700 mr-4">
                                        <CheckCircle size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Exterior Check</h4>
                                        <p className="text-sm text-gray-500">Hide trash bins, mow the lawn, and remove vehicles from the driveway.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 border-l-4 border-secondary p-4 italic text-gray-700 text-sm">
                                <strong>Pro Tip:</strong> Don't forget to hide pet bowls, beds, and toys!
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Other Resources Grid (Placeholders for future content) */}
                <h3 className="text-2xl font-serif font-bold text-primary mb-8 px-2">More Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <FileText className="text-secondary mb-4" size={32} />
                        <h4 className="text-xl font-bold text-primary mb-2">Why Drone Photos Matter</h4>
                        <p className="text-gray-500 text-sm mb-4">Discover how aerial photography can increase your listing's engagement by up to 50%.</p>
                        <span className="text-secondary font-bold text-sm cursor-pointer hover:underline">Read Article &rarr;</span>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <FileText className="text-secondary mb-4" size={32} />
                        <h4 className="text-xl font-bold text-primary mb-2">3D Tours: The New Standard</h4>
                        <p className="text-gray-500 text-sm mb-4">How Matterport tours filter for serious buyers and save you time on showings.</p>
                        <span className="text-secondary font-bold text-sm cursor-pointer hover:underline">Read Article &rarr;</span>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <FileText className="text-secondary mb-4" size={32} />
                        <h4 className="text-xl font-bold text-primary mb-2">The Golden Hour</h4>
                        <p className="text-gray-500 text-sm mb-4">Why scheduling your shoot during twilight can transform the look of a property.</p>
                        <span className="text-secondary font-bold text-sm cursor-pointer hover:underline">Read Article &rarr;</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Resources;
