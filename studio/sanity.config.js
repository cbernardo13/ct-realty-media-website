import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
    name: 'default',
    title: 'CT Realty Media',

    projectId: 'wbmh4kzh',
    dataset: 'production',

    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('Content')
                    .items([
                        // Singleton: Home Page
                        S.listItem()
                            .title('Home Page')
                            .id('homepage')
                            .child(
                                S.document()
                                    .schemaType('homepage')
                                    .documentId('homepage')
                            ),
                        // Singleton: Global SEO
                        S.listItem()
                            .title('Global SEO')
                            .id('seo')
                            .child(
                                S.document()
                                    .schemaType('seo')
                                    .documentId('seo')
                            ),
                        // Regular document types
                        S.documentTypeListItem('sitePage').title('Site Pages'),
                        S.documentTypeListItem('service').title('Services'),
                        S.documentTypeListItem('testimonial').title('Testimonials'),
                    ]),
        }),
        visionTool(),
    ],

    schema: {
        types: schemaTypes,
    },
})
