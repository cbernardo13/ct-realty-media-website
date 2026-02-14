import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'wbmh4kzh',
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: false,
    token: process.env.SANITY_AUTH_TOKEN, // expecting this from --with-user-token or env var
})

if (!process.env.SANITY_AUTH_TOKEN) {
    console.error("❌ ERROR: No auth token found locally.")
    console.error("   1. Run 'npx sanity login' first.")
    console.error("   2. Then run: npx sanity exec seedData.js --with-user-token")
    process.exit(1);
} else {
    console.log("🔑 Auth token detected. Proceeding...")
}

const services = [
    {
        _type: 'service',
        title: 'HDR Photography',
        slug: { _type: 'slug', current: 'hdr-photography' },
        description: 'Capture your listing in its best light with our premium High Dynamic Range (HDR) photography. We blend multiple exposures to ensure perfectly balanced windows and bright interiors, delivering magazine-quality images that make a striking first impression.',
        features: ['Blue Sky Replacement', 'Window Pull Technique', 'Next-Day Delivery', '25+ High-Res Photos']
    },
    {
        _type: 'service',
        title: 'Cinematic Video Tours',
        slug: { _type: 'slug', current: 'cinematic-video-tours' },
        description: 'Engage potential buyers with a smooth, 4K cinematic video tour. Set to emotive music, our videos guide viewers through the flow of the home, highlighting key features and lifestyle elements that static photos simply cannot capture.',
        features: ['4K Resolution', 'Professional Color Grading', 'Licensed Music', 'Social Media Teaser Included']
    },
    {
        _type: 'service',
        title: 'Aerial / Drone Media',
        slug: { _type: 'slug', current: 'aerial-drone-media' },
        description: 'Showcase the property’s context, land, and surroundings with breathtaking aerial perspectives. Perfect for large estates, waterfront properties, or homes with unique roof lines and landscaping.',
        features: ['FAA Part 107 Certified Pilots', 'High-Res Aerial Photos', '4K Aerial Video', 'Property Boundary Outlines']
    },
    {
        _type: 'service',
        title: 'Matterport 3D Tours',
        slug: { _type: 'slug', current: 'matterport-3d-tours' },
        description: 'Give buyers the power to tour the property from anywhere in the world. Our interactive 3D Matterport tours create a digital twin of the home, allowing for a completely immersive self-guided walkthrough.',
        features: ['Dollhouse View', 'Floor Plan View', 'Measurement Tools', 'VR Headset Compatible']
    },
    {
        _type: 'service',
        title: 'Virtual Staging',
        slug: { _type: 'slug', current: 'virtual-staging' },
        description: 'Transform vacant or outdated spaces into inviting, fully furnished rooms. Our photorealistic virtual staging helps buyers visualize the potential of a home, increasing emotional connection and reducing time on market.',
        features: ['Photorealistic Furniture', 'Multiple Design Styles', 'Fast Turnaround', 'Cost-Effective vs. Physical Staging']
    },
    {
        _type: 'service',
        title: 'Floor Plans',
        slug: { _type: 'slug', current: 'floor-plans' },
        description: 'Provide clarity on the layout and flow of the property with professional 2D floor plans. An essential tool for serious buyers to understand room dimensions and relationships.',
        features: ['2D Black & White', 'Room Dimensions', 'Fixed Furniture Indication', 'Branded with Your Logo']
    },
    {
        _type: 'service',
        title: 'Zillow Showcase',
        slug: { _type: 'slug', current: 'zillow-showcase' },
        description: 'Boost your listing\'s visibility and engagement on Zillow. As a Zillow Showcase Photographer, we provide the specialized high-res interactive media required to unlock Zillow\'s premium Showcase listing features, prioritizing your home in search results.',
        features: ['Interactive Floor Plans', 'High-Res Virtual Tour', 'Boosted Search Ranking', 'Dedicated Email Blasts']
    }
]

async function seed() {
    console.log('🌱 Seeding services...')

    for (const service of services) {
        // Check if it exists to avoid dupes (simple check by slug)
        const exists = await client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug: service.slug.current })
        if (!exists) {
            await client.create(service)
            console.log(`✅ Created: ${service.title}`)
        } else {
            console.log(`Examples skipped (already exists): ${service.title}`)
        }
    }

    console.log('✨ Done!')
}

seed().catch(console.error)
