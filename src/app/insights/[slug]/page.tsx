import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Button } from "@/components/ui/Button";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  excerpt,
  body,
  author
}`;

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const post = await client.fetch(postQuery, { slug });

    if (!post) {
        return {
            title: "Article Not Found",
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    const posts = await client.fetch(groq`*[_type == "post"] { "slug": slug.current }`);
    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}

const components = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="my-10 relative aspect-video w-full rounded-sm overflow-hidden border border-border">
                    <Image
                        src={urlForImage(value).url()}
                        alt={value.alt || 'Post Image'}
                        fill
                        className="object-cover"
                    />
                </div>
            )
        },
    },
    block: {
        h2: ({ children }: any) => <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-12 mb-6 text-foreground dark:text-white">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mt-10 mb-4 text-foreground dark:text-white">{children}</h3>,
        normal: ({ children }: any) => <p className="text-muted-foreground dark:text-white leading-relaxed mb-6">{children}</p>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-xl text-foreground dark:text-white my-8">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground dark:text-white">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-muted-foreground dark:text-white">{children}</ol>,
    },
}

export default async function InsightPost({ params }: PageProps) {
    const { slug } = await params;
    const post = await client.fetch(postQuery, { slug });

    if (!post) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen pt-[88px]">
            <div className="bg-zinc-100 dark:bg-zinc-900 border-b border-border">
                <div className="container px-4 md:px-6 py-4">
                    <Link href="/insights" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-muted-foreground dark:text-white hover:text-primary transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
                    </Link>
                </div>
            </div>

            <article className="container py-20 px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-12">
                        <div className="flex items-center gap-3 text-xs font-bold text-primary uppercase tracking-widest mb-6">
                            <span>{format(new Date(post.publishedAt), "MMMM d, yyyy")}</span>
                            <span className="text-muted-foreground dark:text-white">•</span>
                            <span>By {post.author}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-8 leading-[1.1] text-foreground dark:text-white">
                            {post.title}
                        </h1>
                        <p className="text-xl text-muted-foreground dark:text-white leading-relaxed italic border-l-4 border-primary/20 pl-6">
                            {post.excerpt}
                        </p>
                    </div>

                    {post.mainImage && (
                        <div className="relative aspect-video w-full rounded-sm overflow-hidden mb-16 border border-border shadow-2xl">
                            <Image
                                src={urlForImage(post.mainImage).url()}
                                alt={post.mainImage.alt || post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                        <PortableText value={post.body} components={components} />
                    </div>

                    <div className="mt-20 pt-12 border-t border-border bg-zinc-50 dark:bg-zinc-900 p-8 md:p-12 rounded-sm text-center">
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Have a project in mind?</h3>
                        <p className="text-muted-foreground dark:text-white mb-8 text-lg">
                            Let's discuss how Adonai Engineering can bring your vision to life with disciplined execution.
                        </p>
                        <Button href="/contact" size="lg" className="h-14 px-10 text-lg">
                            Work With Us
                        </Button>
                    </div>
                </div>
            </article>
        </div>
    );
}
