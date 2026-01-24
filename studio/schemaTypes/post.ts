import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Insight Post',
    type: 'document',
    groups: [
        { name: 'content', title: 'Content' },
        { name: 'aeo', title: 'Answer Engine (AEO/RAO)' },
        { name: 'seo', title: 'SEO & Meta' },
    ],
    fields: [
        // --- CONTENT GROUP ---
        defineField({
            name: 'title',
            title: 'Display Title',
            type: 'string',
            group: 'content',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'content',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            group: 'content',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
            group: 'content',
            initialValue: 'Adonai Engineering',
        }),
        defineField({
            name: 'mainImage',
            title: 'Featured Image',
            type: 'image',
            group: 'content',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text (Crucial for SEO)',
                    validation: (Rule) => Rule.required(),
                }
            ]
        }),
        defineField({
            name: 'excerpt',
            title: 'Executive Summary / Excerpt',
            description: 'Used for previews and the first paragraph bots read.',
            type: 'text',
            group: 'content',
            rows: 3,
            validation: (Rule) => Rule.max(200).warning('Keep it concise for better snippets.'),
        }),
        defineField({
            name: 'body',
            title: 'Main Article Body',
            type: 'array',
            group: 'content',
            of: [
                { type: 'block' },
                { type: 'image', options: { hotspot: true } },
            ],
        }),

        // --- AEO / RAO GROUP (For LLMs & Answer Engines) ---
        defineField({
            name: 'keyTakeaways',
            title: 'Key Takeaways',
            description: 'Explicit list of facts for AI Answer Engines (Perplexity, ChatGPT, etc.) to extract.',
            type: 'array',
            group: 'aeo',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'faqs',
            title: 'Page FAQs',
            description: 'Structured Q&A to help the site appear in People Also Ask and AI summary boxes.',
            type: 'array',
            group: 'aeo',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', type: 'string', title: 'Question' },
                        { name: 'answer', type: 'text', title: 'Answer' },
                    ]
                }
            ],
        }),
        defineField({
            name: 'semanticKeywords',
            title: 'Semantic Keywords',
            description: 'Keywords that help LLMs categorize the depth of this content.',
            type: 'array',
            group: 'aeo',
            of: [{ type: 'string' }],
            options: { layout: 'tags' }
        }),

        // --- SEO GROUP ---
        defineField({
            name: 'metaTitle',
            title: 'Meta Title (SEO)',
            description: 'Title seen in Google Search. Use keywords.',
            type: 'string',
            group: 'seo',
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            description: 'The snippet seen in search results.',
            type: 'text',
            group: 'seo',
            rows: 2,
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author ? `by ${author}` : '' }
        },
    },
})

