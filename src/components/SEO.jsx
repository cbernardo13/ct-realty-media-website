import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { getSEO } from '../lib/sanity';

const SEO = ({ title, description, canonical, additionalJsonLd }) => {
    const [seoData, setSeoData] = useState(null);

    useEffect(() => {
        getSEO().then(data => setSeoData(data)).catch(console.error);
    }, []);

    const globalTitle = seoData?.siteTitle || "CT Realty Media | Premium Real Estate Photography";

    // If a specific title is provided, append the brand name. Otherwise use the global title.
    // If the global title is just the brand name, we might want to change formatting, but for now:
    // If title is "Home", result: "Home | CT Realty Media..."
    // logic: if title exists, use `${title} | CT Realty Media` (hardcoded suffix? or derived?)
    // Let's assume globalTitle IS the suffix brand name if title is provided.
    // Actually, usually `siteTitle` in Sanity is the whole default title.
    // Let's split it: "Page Title | Brand Name".
    // If I can't easily parse it, I'll stick to the existing logic but use Sanity for the fallback.

    const brandName = "CT Realty Media"; // Could also be fetched
    const fullTitle = title ? `${title} | ${brandName}` : globalTitle;

    const metaDescription = description || seoData?.metaDescription || "Professional real estate photography, cinematic video tours, and drone services in Connecticut, Massachusetts, and Rhode Island.";
    const ogImage = seoData?.ogImage?.asset?.url || "https://www.ctrealtymedia.com/wp-content/uploads/2024/05/ctrealtymedia_newlogo.png";

    // Schema.org for Local Business (AEO)
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": brandName,
        "image": ogImage,
        "telephone": "+18603226961",
        "email": "info@ctrealtymedia.com",
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "CT",
            "addressCountry": "US"
        },
        "priceRange": "$$$",
        "areaServed": ["Connecticut", "Rhode Island", "Massachusetts"],
        "description": metaDescription
    };

    return (
        <HelmetProvider>
            <Helmet>
                {/* Basic Meta Tags */}
                <title>{fullTitle}</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={canonical || window.location.href} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={fullTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:site_name" content={brandName} />
                {ogImage && <meta property="og:image" content={ogImage} />}

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={fullTitle} />
                <meta name="twitter:description" content={metaDescription} />
                {ogImage && <meta name="twitter:image" content={ogImage} />}

                {/* JSON-LD Structured Data for AEO */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>

                {/* Additional JSON-LD passed via props */}
                {additionalJsonLd && (
                    <script type="application/ld+json">
                        {JSON.stringify(additionalJsonLd)}
                    </script>
                )}
            </Helmet>
        </HelmetProvider>
    );
};

export default SEO;
