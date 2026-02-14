export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Client Name',
            type: 'string',
        },
        {
            name: 'text',
            title: 'Testimonial Text',
            type: 'text',
        },
        {
            name: 'rating',
            title: 'Rating (1-5)',
            type: 'number',
            validation: Rule => Rule.min(1).max(5)
        },
        {
            name: 'source',
            title: 'Source',
            type: 'string',
            options: {
                list: [
                    { title: 'Google Review', value: 'Google Review' },
                    { title: 'Direct Feedback', value: 'Direct Feedback' },
                    { title: 'Facebook', value: 'Facebook' },
                    { title: 'Zillow', value: 'Zillow' },
                    { title: 'Other', value: 'Other' }
                ]
            }
        }
    ]
}
