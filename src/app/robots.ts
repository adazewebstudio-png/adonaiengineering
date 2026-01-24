import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/adonai-admin-portal',
                    '/_next',
                    '/api',
                ],
            },
            // OpenAI
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            // Google AI
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            // Anthropic/Claude
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
            {
                userAgent: 'Claude-Web',
                allow: '/',
            },
            {
                userAgent: 'anthropic-ai',
                allow: '/',
            },
            // Microsoft/Bing
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            // Perplexity
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            // Cohere
            {
                userAgent: 'cohere-ai',
                allow: '/',
            },
            // Meta
            {
                userAgent: 'FacebookBot',
                allow: '/',
            },
            // Common Crawl (used by many AI training)
            {
                userAgent: 'CCBot',
                allow: '/',
            },
        ],
        sitemap: 'https://adonai-engineering.com/sitemap.xml',
    }
}
