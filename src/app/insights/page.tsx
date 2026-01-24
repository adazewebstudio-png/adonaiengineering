import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
import { ArrowRight, FileText, Calendar } from "lucide-react";
import { format } from "date-fns";
import { PageHeader } from "@/components/layout/PageHeader";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export const metadata = {
    title: "Insights",
    description: "Industry insights and news from Adonai Engineering.",
};

export const revalidate = 3600; // revalidate every hour

const insightsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  excerpt,
  author
}`;

export default async function InsightsPage() {
    const posts = await client.fetch(insightsQuery);

    const schema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Adonai Engineering Insights",
        "description": "Perspectives on construction, engineering, and development in Africa.",
        "publisher": {
            "@type": "Organization",
            "name": "Adonai Engineering and Construction Ltd",
            "logo": "https://adonai-engineering.com/logo.jpg"
        },
        "blogPost": posts.map((post: any) => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.publishedAt,
            "author": {
                "@type": "Person",
                "name": post.author || "Adonai Engineering"
            },
            "url": `https://adonai-engineering.com/insights/${post.slug}`
        }))
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <PageHeader
                title="Insights"
                subtitle="Perspectives on construction, engineering, and development in Africa."
                image="/images/insights/blog-placeholder.jpg"
            />

            <div className="container py-24 px-4 md:px-6">
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: any) => (
                            <Link key={post.slug} href={`/insights/${post.slug}`} className="group block h-full">
                                <div className="border border-border bg-card overflow-hidden rounded-sm hover:border-primary transition-all hover:shadow-xl h-full flex flex-col">
                                    <div className="aspect-video w-full bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                                        {post.mainImage ? (
                                            <Image
                                                src={urlForImage(post.mainImage).url()}
                                                alt={post.mainImage.alt || post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-zinc-500">
                                                <FileText className="h-12 w-12 opacity-20" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                                            <Calendar className="h-3 w-3" />
                                            {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                                        </div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-primary transition-colors line-clamp-2 text-foreground">
                                            {post.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm line-clamp-3 mb-8 flex-1 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-sm font-bold uppercase tracking-widest text-primary mt-auto">
                                            Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground">No insights published yet. Check back soon.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
