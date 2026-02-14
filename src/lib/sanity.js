import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'wbmh4kzh',
    dataset: 'production',
    useCdn: false, // Changed to false to avoid caching issues during development
    apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}

// Helper to fetch data
export async function getServices() {
    return await client.fetch(`*[_type == "service"] | order(title asc) {
    title,
    description,
    "image": coalesce(serviceImage.asset->url, image.asset->url),
    "alt": coalesce(serviceImage.alt, image.alt),
    features,
    slug
  }`);
}

export async function getSEO() {
    return await client.fetch(`*[_id == "seo"][0]`);
}

export async function getHomepage() {
    return await client.fetch(`*[_id == "homepage"][0]{
        heroHeading,
        heroSubheading,
        "heroImage": heroImage.asset->url,
        "heroImageAlt": heroImage.alt,
        ctaTitle,
        ctaText,
        "servicesHeaderImage": servicesHeaderImage.asset->url,
        "servicesHeaderImageAlt": servicesHeaderImage.alt
    }`);
}

export async function getTestimonials() {
    return await client.fetch(`* [_type == "testimonial"] | order(_createdAt desc)`);
}
