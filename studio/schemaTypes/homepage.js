export default {
    name: 'homepage',
    title: 'Home Page',
    type: 'document',
    groups: [
        { name: 'content', title: 'Page Content', default: true },
        { name: 'seo', title: 'SEO & Social' },
    ],
    fields: [
        {
            name: 'heroHeading',
            group: 'content',
            title: 'Hero Heading',
            type: 'string',
            description: 'Main heading on the homepage'
        },
        {
            name: 'heroSubheading',
            group: 'content',
            title: 'Hero Subheading',
            type: 'text',
            description: 'Subheading text below the main title'
        },
        {
            name: 'heroImage',
            group: 'content',
            title: 'Hero Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Important for SEO and accessiblity.',
                }
            ]
        },
        {
            name: 'ctaTitle',
            group: 'content',
            title: 'CTA Section Title',
            type: 'string',
            description: 'Title for the Call to Action section at the bottom'
        },
        {
            name: 'ctaText',
            group: 'content',
            title: 'CTA Section Text',
            type: 'text',
            description: 'Text for the Call to Action section'
        },
        {
            name: 'servicesHeaderImage',
            group: 'content',
            title: 'Services Page Header Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        },
        {
            name: 'seo',
            group: 'seo',
            title: 'Search Ranking (SEO)',
            type: 'seoFields',
        }
    ],
    preview: {
        select: {
            title: 'heroHeading',
            media: 'heroImage'
        },
        prepare({ title, media }) {
            return {
                title: title || 'Home Page Configuration',
                media: media
            }
        }
    }
}
