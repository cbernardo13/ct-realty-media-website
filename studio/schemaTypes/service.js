export default {
    name: 'service',
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Service Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'serviceImage',
            title: 'Service Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text',
                    description: 'Required for SEO and Accessibility'
                }
            ]
        },
        {
            name: 'features',
            title: 'Key Features',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'seo',
            title: 'SEO & Social',
            type: 'seoFields',
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'serviceImage'
        },
        prepare({ title, media }) {
            return {
                title: title || 'New Service (Untitled)',
                media: media
            }
        }
    }
}
