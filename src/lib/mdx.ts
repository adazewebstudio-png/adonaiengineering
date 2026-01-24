import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export type Post = {
    slug: string;
    metadata: Record<string, any>;
    content: string;
};

export function getPostSlugs(type: string) {
    const dir = path.join(contentDirectory, type);
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter((file) => file.endsWith('.mdx'));
}

export function getPostBySlug(slug: string, type: string): Post {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, type, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        metadata: data,
        content,
    };
}

export function getAllPosts(type: string): Post[] {
    const slugs = getPostSlugs(type);
    const posts = slugs
        .map((slug) => getPostBySlug(slug, type))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.metadata.date > post2.metadata.date ? -1 : 1));
    return posts;
}
