import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://adonai-engineering.com';

    const services = getAllPosts("services").map((post) => ({
        url: `${baseUrl}/services/${post.slug}`,
        lastModified: new Date(post.metadata.date),
    }));

    const capabilities = getAllPosts("capabilities").map((post) => ({
        url: `${baseUrl}/capabilities/${post.slug}`,
        lastModified: new Date(post.metadata.date),
    }));

    const projects = getAllPosts("experience").map((post) => ({
        url: `${baseUrl}/experience/${post.slug}`,
        lastModified: new Date(post.metadata.date),
    }));

    const insights = getAllPosts("insights").map((post) => ({
        url: `${baseUrl}/insights/${post.slug}`,
        lastModified: new Date(post.metadata.date),
    }));

    const routes = [
        '',
        '/services',
        '/capabilities',
        '/experience',
        '/about',
        '/contact',
        '/safety-quality',
        '/markets-geography',
        '/insights',
        '/faq',
        '/terms-of-use',
        '/privacy-policy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
    }));

    return [...routes, ...services, ...capabilities, ...projects, ...insights];
}
