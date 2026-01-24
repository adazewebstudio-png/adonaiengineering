import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    const slugs = getPostSlugs("capabilities");
    return slugs.map((file) => ({
        slug: file.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    try {
        const post = getPostBySlug(params.slug, "capabilities");
        return {
            title: post.metadata.title,
            description: post.metadata.description,
        }
    } catch (e) {
        return { title: 'Capability Not Found' }
    }
}

export default async function CapabilityPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    try {
        const { metadata, content } = getPostBySlug(params.slug, "capabilities");

        return (
            <article className="container py-24 md:py-32 px-4 md:px-6 mt-[88px] md:mt-[96px]">
                <Link href="/capabilities" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-secondary mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Capabilities
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8">
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-secondary">{metadata.title}</h1>
                        <div className="aspect-video w-full bg-zinc-200 dark:bg-zinc-800 rounded-sm mb-8 flex items-center justify-center text-sm font-bold uppercase tracking-widest text-muted-foreground">
                            Featured Image: {metadata.image}
                        </div>

                        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:uppercase prose-headings:font-bold prose-headings:tracking-tight prose-a:text-secondary">
                            <MDXRemote source={content} />
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="sticky top-32 p-8 border border-border bg-zinc-50 dark:bg-zinc-900/50 rounded-sm">
                            <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Put this capability to work</h3>
                            <p className="text-muted-foreground mb-6">
                                Our fleet and engineers are ready to deploy. Let's discuss your infrastructure needs.
                            </p>
                            <Button className="w-full" size="lg" variant="secondary" href="/contact">
                                Get a Quote
                            </Button>
                        </div>
                    </div>
                </div>
            </article>
        );
    } catch (error) {
        notFound();
    }
}
