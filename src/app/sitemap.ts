import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://adonaiengineeringltd.com';

    const services = getAllPosts("services").map((post) => ({
        url: `${baseUrl}/services/${post.slug}`,
        lastModified: post.metadata.date ? new Date(post.metadata.date) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Fetch Insights from Sanity
    const sanityPosts = await client.fetch(groq`*[_type == "post"] {
        "slug": slug.current,
        publishedAt
    }`);

    const insights = sanityPosts.map((post: any) => ({
        url: `${baseUrl}/insights/${post.slug}`,
        lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    const staticRoutes = [
        { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
        { url: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/capabilities', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/experience', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/safety-quality', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/markets-geography', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/insights', priority: 0.7, changeFrequency: 'weekly' as const },
        { url: '/faq', priority: 0.6, changeFrequency: 'monthly' as const },
        { url: '/terms-of-use', priority: 0.3, changeFrequency: 'yearly' as const },
        { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    ].map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: new Date(),
        priority: route.priority,
        changeFrequency: route.changeFrequency,
    }));

    return [...staticRoutes, ...services, ...insights];
}
