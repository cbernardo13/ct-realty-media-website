export default {
    name: 'seo',
    title: 'Global SEO',
    type: 'document',
    groups: [
        { name: 'general', title: 'General', default: true },
        { name: 'social', title: 'Social Profiles' },
        { name: 'advanced', title: 'Advanced' },
    ],
    fields: [
        // ─── GENERAL ──────────────────────────────────────
        {
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
            group: 'general',
            description: 'The default title of the website (appears in browser tab). Used as fallback for all pages.'
        },
        {
            name: 'titleSeparator',
            title: 'Title Separator',
            type: 'string',
            group: 'general',
            description: 'Character used between page title and site name (e.g., | or – or ·)',
            initialValue: '|',
            options: {
                list: [
                    { title: '| (Pipe)', value: '|' },
                    { title: '– (Dash)', value: '–' },
                    { title: '· (Dot)', value: '·' },
                    { title: '› (Arrow)', value: '›' },
                ]
            }
        },
        {
            name: 'metaDescription',
            title: 'Global Meta Description',
            type: 'text',
            group: 'general',
            description: 'The default description used for SEO when a page does not have its own.'
        },
        {
            name: 'ogImage',
            title: 'Default Social Share Image',
            type: 'image',
            group: 'general',
            description: 'Default image displayed when sharing any page that doesn\'t have its own. Recommended: 1200×630px.'
        },
        {
            name: 'keywords',
            title: 'Global Keywords',
            type: 'array',
            group: 'general',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            },
            description: 'Site-wide keywords for internal reference and meta tags.'
        },
        // ─── ORGANIZATION / BUSINESS ───────────────────────
        {
            name: 'organizationName',
            title: 'Business / Organization Name',
            type: 'string',
            group: 'general',
            description: 'Your legal business name for structured data.',
            initialValue: 'CT Realty Media LLC'
        },
        {
            name: 'logo',
            title: 'Business Logo',
            type: 'image',
            group: 'general',
            description: 'Your company logo for Google Knowledge Panel and rich results.'
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            group: 'general',
            description: 'Business phone number (e.g., +18603226961)',
            initialValue: '+18603226961'
        },
        {
            name: 'email',
            title: 'Business Email',
            type: 'string',
            group: 'general',
            description: 'Primary contact email.',
            initialValue: 'info@ctrealtymedia.com'
        },
        {
            name: 'address',
            title: 'Business Address',
            type: 'object',
            group: 'general',
            fields: [
                { name: 'street', title: 'Street', type: 'string' },
                { name: 'city', title: 'City', type: 'string' },
                { name: 'state', title: 'State', type: 'string', initialValue: 'CT' },
                { name: 'zip', title: 'ZIP Code', type: 'string' },
                { name: 'country', title: 'Country', type: 'string', initialValue: 'US' },
            ]
        },
        {
            name: 'geo',
            title: 'Geo Coordinates',
            type: 'object',
            group: 'general',
            description: 'Latitude and longitude for Local SEO. Find yours at latlong.net.',
            fields: [
                { name: 'lat', title: 'Latitude', type: 'string' },
                { name: 'lng', title: 'Longitude', type: 'string' },
            ]
        },
        {
            name: 'priceRange',
            title: 'Price Range',
            type: 'string',
            group: 'general',
            description: 'Price range indicator for Google (e.g., $$, $$$)',
            initialValue: '$$$'
        },
        {
            name: 'areasServed',
            title: 'Areas Served',
            type: 'array',
            group: 'general',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
            description: 'Service areas (e.g., Connecticut, Rhode Island, Massachusetts)',
        },
        // ─── SOCIAL PROFILES ──────────────────────────────
        {
            name: 'socialProfiles',
            title: 'Social Media Profiles',
            type: 'object',
            group: 'social',
            description: 'Used in Organization schema so Google can link your profiles.',
            fields: [
                { name: 'instagram', title: 'Instagram URL', type: 'url' },
                { name: 'facebook', title: 'Facebook URL', type: 'url' },
                { name: 'youtube', title: 'YouTube URL', type: 'url' },
                { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
                { name: 'twitter', title: 'X (Twitter) URL', type: 'url' },
                { name: 'tiktok', title: 'TikTok URL', type: 'url' },
                { name: 'googleBusiness', title: 'Google Business URL', type: 'url' },
            ]
        },
        // ─── ADVANCED ─────────────────────────────────────
        {
            name: 'googleSiteVerification',
            title: 'Google Site Verification Code',
            type: 'string',
            group: 'advanced',
            description: 'The content value from your Google Search Console HTML tag verification.'
        },
        {
            name: 'bingSiteVerification',
            title: 'Bing Site Verification Code',
            type: 'string',
            group: 'advanced',
            description: 'The content value from Bing Webmaster Tools.'
        },
    ]
}
