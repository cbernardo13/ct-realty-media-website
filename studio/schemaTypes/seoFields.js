export default {
    name: 'seoFields',
    title: 'SEO & Social',
    type: 'object',
    fields: [
        // ─── SEARCH APPEARANCE ────────────────────────────
        {
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
            description: 'Title shown in search engine results and browser tabs. Aim for 50-60 characters.',
            validation: Rule => Rule.max(60).warning('⚠️ Longer titles may be truncated by Google (max ~60 chars)')
        },
        {
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            rows: 3,
            description: 'Description shown below the title in search results. Aim for 120-160 characters.',
            validation: Rule => Rule.max(160).warning('⚠️ Longer descriptions may be truncated (max ~160 chars)')
        },
        {
            name: 'focusKeyword',
            title: 'Focus Keyword',
            type: 'string',
            description: 'The primary keyword this page should rank for (e.g., "real estate photography Connecticut"). Used for internal reference only.'
        },
        // ─── SOCIAL SHARING ───────────────────────────────
        {
            name: 'shareImage',
            title: 'Social Share Image',
            type: 'image',
            description: 'Image used when sharing on Facebook, Twitter, LinkedIn, iMessage, etc. Recommended: 1200×630px.',
            options: {
                hotspot: true
            }
        },
        {
            name: 'ogTitle',
            title: 'Social Title Override',
            type: 'string',
            description: 'Optional: Override the title specifically for social media shares. If blank, Meta Title is used.'
        },
        {
            name: 'ogDescription',
            title: 'Social Description Override',
            type: 'text',
            rows: 2,
            description: 'Optional: Override the description specifically for social media shares. If blank, Meta Description is used.'
        },
        // ─── ADVANCED / TECHNICAL ─────────────────────────
        {
            name: 'canonicalUrl',
            title: 'Canonical URL',
            type: 'url',
            description: 'Optional: If this page has duplicate content elsewhere, set the preferred/original URL here. Leave blank to auto-generate.'
        },
        {
            name: 'noIndex',
            title: 'Hide from Search Engines (noindex)',
            type: 'boolean',
            description: '⚠️ If enabled, this page will NOT appear in Google or other search engines.',
            initialValue: false
        },
        {
            name: 'noFollow',
            title: 'Prevent Link Following (nofollow)',
            type: 'boolean',
            description: 'If enabled, search engines will not follow links on this page.',
            initialValue: false
        },
    ]
}
