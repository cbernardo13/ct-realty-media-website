export default {
    name: 'homepage',
    title: 'Home Page',
    type: 'document',
    fields: [
        {
            name: 'heroHeading',
            title: 'Hero Heading',
            type: 'string',
            description: 'Main heading on the homepage'
        },
        {
            name: 'heroSubheading',
            title: 'Hero Subheading',
            type: 'text',
            description: 'Subheading text below the main title'
        },
        {
            name: 'heroImage',
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
            title: 'CTA Section Title',
            type: 'string',
            description: 'Title for the Call to Action section at the bottom'
        },
        {
            name: 'ctaText',
            title: 'CTA Section Text',
            type: 'text',
            description: 'Text for the Call to Action section'
        },
        {
            name: 'servicesHeaderImage',
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
