import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Home from './pages/Home';

import Services from './pages/Services';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Book from './pages/Book';

// Placeholder pages to prevent routing errors
const PageMockup = ({ title }) => (
  <div className="pt-32 pb-20 px-6 container mx-auto text-center min-h-[60vh]">
    <h1 className="text-4xl font-serif font-bold text-primary mb-4">{title}</h1>
    <p className="text-gray-600">This page is under construction.</p>
  </div>
);

function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="antialiased text-gray-800 bg-white font-sans selection:bg-secondary selection:text-white">
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<PageMockup title="Portfolio Gallery" />} />
          <Route path="/about" element={<PageMockup title="About Us" />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<PageMockup title="Frequently Asked Questions" />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </main>
      <FloatingCTA />
      <Footer />
    </div>
  );
}

export default App;
