export default {
    name: 'sitePage',
    title: 'Site Pages',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Page Title (Internal Only)',
            type: 'string',
            description: 'Example: "About Us" or "Contact Page"'
        },
        {
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            description: 'Important: This must match the URL (e.g., "about" or "contact")',
            options: {
                source: 'title',
                maxLength: 96,
            },
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
            slug: 'slug.current'
        },
        prepare({ title, slug }) {
            return {
                title: title,
                subtitle: slug ? `/${slug}` : 'No slug set'
            }
        }
    }
}
