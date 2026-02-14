import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'wbmh4kzh',
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: false,
    token: process.env.SANITY_AUTH_TOKEN,
})

async function check() {
    const services = await client.fetch(`*[_type == "service"]{title, _id}`)
    console.log("--- FOUND SERVICES ---")
    services.forEach(s => console.log(`- ${s.title} (${s._id})`))
    console.log("----------------------")
    console.log(`Total: ${services.length}`)
}

check().catch(console.error)
