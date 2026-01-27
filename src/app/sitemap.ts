import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://adonaiengineeringltd.com';

    const services = getAllPosts("services").map((post) => ({
        url: `${baseUrl}/services/${post.slug}`,
        lastModified: post.metadata.date ? new Date(post.metadata.date) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const capabilities = getAllPosts("capabilities").map((post) => ({
        url: `${baseUrl}/capabilities/${post.slug}`,
        lastModified: post.metadata.date ? new Date(post.metadata.date) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const projects = getAllPosts("experience").map((post) => ({
        url: `${baseUrl}/experience/${post.slug}`,
        lastModified: post.metadata.date ? new Date(post.metadata.date) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const insights = getAllPosts("insights").map((post) => ({
        url: `${baseUrl}/insights/${post.slug}`,
        lastModified: post.metadata.date ? new Date(post.metadata.date) : new Date(),
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

    return [...staticRoutes, ...services, ...capabilities, ...projects, ...insights];
}
