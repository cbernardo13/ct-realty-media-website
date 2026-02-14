import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { getSEO, getPageSEO } from '../lib/sanity';

/**
 * Comprehensive SEO Component — Feature parity with Yoast/RankMath
 *
 * Features:
 *  - Meta Title & Description (with Sanity override)
 *  - Open Graph (Facebook, LinkedIn, iMessage, WhatsApp)
 *  - Twitter Cards (summary_large_image)
 *  - Canonical URL (auto or manual override)
 *  - Noindex / Nofollow (per-page control from Sanity)
 *  - Organization Schema (JSON-LD)
 *  - LocalBusiness Schema (JSON-LD)
 *  - WebSite Schema with SearchAction (JSON-LD)
 *  - BreadcrumbList Schema (JSON-LD)
 *  - Geo Meta Tags for Local SEO
 *  - Google/Bing Site Verification
 *  - Additional JSON-LD passthrough (Service, FAQ, etc.)
 */
const SEO = ({ title, description, seo, canonical, additionalJsonLd, breadcrumbs }) => {
    const [seoData, setSeoData] = useState(null);
    const [pageSeo, setPageSeo] = useState(null);

    useEffect(() => {
        getSEO().then(data => setSeoData(data)).catch(console.error);

        // If no explicit SEO object is passed, try to fetch it via the URL slug
        if (!seo) {
            const slug = window.location.pathname.replace(/^\/|\/$/g, '');
            if (slug) {
                getPageSEO(slug).then(data => setPageSeo(data)).catch(console.error);
            }
        }
    }, [seo]);

    const activeSeo = seo || pageSeo;

    // ─── BRAND & TITLES ────────────────────────────────
    const brandName = seoData?.organizationName || "CT Realty Media";
    const separator = seoData?.titleSeparator || "|";
    const globalTitle = seoData?.siteTitle || `${brandName} ${separator} Real Estate Photography in CT, RI & MA`;

    let fullTitle = globalTitle;
    if (activeSeo?.metaTitle) {
        fullTitle = activeSeo.metaTitle;
    } else if (title) {
        fullTitle = `${title} ${separator} ${brandName}`;
    }

    // ─── DESCRIPTIONS ──────────────────────────────────
    const metaDescription = activeSeo?.metaDescription || description || seoData?.metaDescription || "Professional real estate photography, drone aerials, and 3D tours in CT, RI, and MA. Fast 24-hour delivery on all media packages.";

    // ─── IMAGES ────────────────────────────────────────
    const ogImage = activeSeo?.shareImage?.asset?.url || seoData?.ogImage || "https://www.ctrealtymedia.com/wp-content/uploads/2024/05/ctrealtymedia_newlogo.png";

    // ─── SOCIAL OVERRIDES ──────────────────────────────
    const ogTitle = activeSeo?.ogTitle || fullTitle;
    const ogDescription = activeSeo?.ogDescription || metaDescription;

    // ─── CANONICAL & INDEXING ──────────────────────────
    const canonicalUrl = activeSeo?.canonicalUrl || canonical || window.location.href;
    const noIndex = activeSeo?.noIndex || false;
    const noFollow = activeSeo?.noFollow || false;
    const robotsContent = `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`;

    // ─── GEO ────────────────────────────────────────────
    const geoLat = seoData?.geo?.lat;
    const geoLng = seoData?.geo?.lng;
    const geoRegion = seoData?.address?.state ? `US-${seoData.address.state}` : 'US-CT';

    // ─── SOCIAL PROFILES (for Organization schema) ─────
    const socialLinks = seoData?.socialProfiles || {};
    const sameAs = Object.values(socialLinks).filter(Boolean);

    // ─── STRUCTURED DATA: Organization ──────────────────
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": brandName,
        "url": "https://www.ctrealtymedia.com",
        "logo": seoData?.logo?.asset?.url || ogImage,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": seoData?.phone || "+18603226961",
            "contactType": "customer service",
            "email": seoData?.email || "info@ctrealtymedia.com",
            "areaServed": seoData?.areasServed || ["Connecticut", "Rhode Island", "Massachusetts"],
            "availableLanguage": "English"
        },
        ...(sameAs.length > 0 && { "sameAs": sameAs })
    };

    // ─── STRUCTURED DATA: LocalBusiness ─────────────────
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.ctrealtymedia.com/#localbusiness",
        "name": brandName,
        "image": ogImage,
        "url": "https://www.ctrealtymedia.com",
        "telephone": seoData?.phone || "+18603226961",
        "email": seoData?.email || "info@ctrealtymedia.com",
        "address": {
            "@type": "PostalAddress",
            ...(seoData?.address?.street && { "streetAddress": seoData.address.street }),
            ...(seoData?.address?.city && { "addressLocality": seoData.address.city }),
            "addressRegion": seoData?.address?.state || "CT",
            ...(seoData?.address?.zip && { "postalCode": seoData.address.zip }),
            "addressCountry": seoData?.address?.country || "US"
        },
        ...(geoLat && geoLng && {
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": geoLat,
                "longitude": geoLng
            }
        }),
        "priceRange": seoData?.priceRange || "$$$",
        "areaServed": (seoData?.areasServed || ["Connecticut", "Rhode Island", "Massachusetts"]).map(area => ({
            "@type": "State",
            "name": area
        })),
        "description": metaDescription,
        ...(sameAs.length > 0 && { "sameAs": sameAs })
    };

    // ─── STRUCTURED DATA: WebSite (with SearchAction) ───
    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": brandName,
        "url": "https://www.ctrealtymedia.com",
        "description": seoData?.metaDescription || metaDescription,
    };

    // ─── STRUCTURED DATA: WebPage ───────────────────────
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": fullTitle,
        "description": metaDescription,
        "url": canonicalUrl,
        "isPartOf": {
            "@type": "WebSite",
            "name": brandName,
            "url": "https://www.ctrealtymedia.com"
        },
        ...(ogImage && { "primaryImageOfPage": { "@type": "ImageObject", "url": ogImage } })
    };

    // ─── STRUCTURED DATA: BreadcrumbList ────────────────
    const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.url
        }))
    } : null;

    return (
        <HelmetProvider>
            <Helmet>
                {/* ─── BASIC META ──────────────────────── */}
                <title>{fullTitle}</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={canonicalUrl} />
                <meta name="robots" content={robotsContent} />

                {/* ─── GEO META TAGS (Local SEO) ──────── */}
                <meta name="geo.region" content={geoRegion} />
                {seoData?.address?.city && <meta name="geo.placename" content={seoData.address.city} />}
                {geoLat && geoLng && <meta name="geo.position" content={`${geoLat};${geoLng}`} />}
                {geoLat && geoLng && <meta name="ICBM" content={`${geoLat}, ${geoLng}`} />}

                {/* ─── OPEN GRAPH / FACEBOOK ───────────── */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={ogTitle} />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:site_name" content={brandName} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:locale" content="en_US" />
                {ogImage && <meta property="og:image" content={ogImage} />}
                {ogImage && <meta property="og:image:width" content="1200" />}
                {ogImage && <meta property="og:image:height" content="630" />}
                {ogImage && <meta property="og:image:type" content="image/jpeg" />}

                {/* ─── TWITTER CARDS ───────────────────── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={ogTitle} />
                <meta name="twitter:description" content={ogDescription} />
                {ogImage && <meta name="twitter:image" content={ogImage} />}

                {/* ─── WEBMASTER VERIFICATION ──────────── */}
                {seoData?.googleSiteVerification && (
                    <meta name="google-site-verification" content={seoData.googleSiteVerification} />
                )}
                {seoData?.bingSiteVerification && (
                    <meta name="msvalidate.01" content={seoData.bingSiteVerification} />
                )}

                {/* ─── JSON-LD: Organization ───────────── */}
                <script type="application/ld+json">
                    {JSON.stringify(organizationSchema)}
                </script>

                {/* ─── JSON-LD: LocalBusiness ──────────── */}
                <script type="application/ld+json">
                    {JSON.stringify(localBusinessSchema)}
                </script>

                {/* ─── JSON-LD: WebSite ────────────────── */}
                <script type="application/ld+json">
                    {JSON.stringify(webSiteSchema)}
                </script>

                {/* ─── JSON-LD: WebPage ────────────────── */}
                <script type="application/ld+json">
                    {JSON.stringify(webPageSchema)}
                </script>

                {/* ─── JSON-LD: Breadcrumbs ────────────── */}
                {breadcrumbSchema && (
                    <script type="application/ld+json">
                        {JSON.stringify(breadcrumbSchema)}
                    </script>
                )}

                {/* ─── JSON-LD: Additional (Service, FAQ, etc.) */}
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
