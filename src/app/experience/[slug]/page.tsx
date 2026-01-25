import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Building, User } from "lucide-react";

export async function generateStaticParams() {
    const slugs = getPostSlugs("experience");
    return slugs.map((file) => ({
        slug: file.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    try {
        const post = getPostBySlug(params.slug, "experience");
        return {
            title: post.metadata.title,
            description: post.metadata.description,
        }
    } catch (e) {
        return { title: 'Project Not Found' }
    }
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    try {
        const { metadata, content } = getPostBySlug(params.slug, "experience");

        const schema = {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": metadata.title,
            "description": metadata.description,
            "image": metadata.image ? `https://adonai-engineering.com${metadata.image}` : undefined,
            "creator": {
                "@type": "Organization",
                "name": "Adonai Engineering and Construction Ltd"
            },
            "locationCreated": {
                "@type": "Place",
                "name": metadata.location
            },
            "datePublished": metadata.date
        };

        return (
            <>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
                <article className="container py-24 md:py-32 px-4 md:px-6 mt-[88px] md:mt-[96px]">
                    <Link href="/experience" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-muted-foreground dark:text-white hover:text-primary mb-8">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Experience
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8">
                            <div className="flex flex-wrap gap-4 mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground dark:text-white">
                                {metadata.sector && (
                                    <span className="flex items-center gap-2 text-primary bg-primary/10 px-3 py-1 rounded-sm"><Building className="h-4 w-4" /> {metadata.sector}</span>
                                )}
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">{metadata.title}</h1>

                            <div className="aspect-video w-full bg-zinc-200 dark:bg-zinc-800 rounded-sm mb-12 flex items-center justify-center text-sm font-bold uppercase tracking-widest text-muted-foreground dark:text-white">
                                Featured Image: {metadata.image}
                            </div>

                            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:uppercase prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary">
                                <MDXRemote source={content} />
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="sticky top-32 space-y-8">
                                <div className="p-8 border border-border bg-zinc-50 dark:bg-zinc-900/50 rounded-sm space-y-6">
                                    <h3 className="text-xl font-bold uppercase tracking-tight pb-4 border-b border-border">Project Details</h3>

                                    {metadata.client && (
                                        <div>
                                            <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground dark:text-white mb-1">Client</span>
                                            <div className="flex items-center gap-2 font-medium"><User className="h-4 w-4 text-primary" /> {metadata.client}</div>
                                        </div>
                                    )}

                                    {metadata.location && (
                                        <div>
                                            <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground dark:text-white mb-1">Location</span>
                                            <div className="flex items-center gap-2 font-medium"><MapPin className="h-4 w-4 text-primary" /> {metadata.location}</div>
                                        </div>
                                    )}

                                    {metadata.date && (
                                        <div>
                                            <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground dark:text-white mb-1">Completion Date</span>
                                            <div className="flex items-center gap-2 font-medium"><Calendar className="h-4 w-4 text-primary" /> {metadata.date}</div>
                                        </div>
                                    )}
                                </div>

                                <div className="p-8 bg-zinc-900 text-white rounded-sm">
                                    <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Start Similar Project</h3>
                                    <p className="text-gray-400 mb-6 text-sm">
                                        Impressed by this result? Let's achieve the same for your next venture.
                                    </p>
                                    <Button className="w-full" size="lg" variant="secondary" href="/contact">
                                        Contact Us
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </>
        );
    } catch (error) {
        notFound();
    }
}
