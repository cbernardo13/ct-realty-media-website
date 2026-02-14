export default {
  name: 'seo',
  title: 'Global SEO',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'The main title of the website (appears in browser tab)'
    },
    {
      name: 'metaDescription',
      title: 'Global Meta Description',
      type: 'text',
      description: 'The default description used for SEO'
    },
    {
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      description: 'Image displayed when sharing the site on social media'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ]
}
