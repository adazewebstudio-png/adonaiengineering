import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata = {
    title: "Engineering & Construction Services in Ghana",
    description: "Comprehensive list of construction services: Building construction, estate development, civil works, and project management in Ghana.",
};

export default function ServicesPage() {
    const services = getAllPosts("services");

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Engineering and Construction Services",
        "provider": {
            "@type": "Organization",
            "name": "Adonai Engineering and Construction Ltd"
        },
        "areaServed": "Ghana"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className="flex flex-col min-h-screen">
                <PageHeader
                    title="Our Services"
                    subtitle="We provide end-to-end engineering solutions. From conception to commissioning, we are your partners in building the future."
                    image="/images/services/building-construction.jpg"
                />

                <section className="container py-24 px-4 md:px-6">

                    {/* Intro Block */}
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Structured for Success</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Our services are structured to cover the entire lifecycle of the built environment. Whether you are building a commercial high-rise, a sprawling residential estate, or the infrastructure that connects them, we have the specialized expertise to deliver.
                        </p>
                    </div>

                    <div className="grid gap-12 lg:gap-24 mb-24">
                        {services.map((service, index) => (
                            <div key={service.slug} className="group grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">

                                {/* Text Side */}
                                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                                        Service 0{index + 1}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">
                                        {service.metadata.title}
                                    </h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {service.metadata.description}
                                    </p>
                                    <div className="pt-4">
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
                                        >
                                            Explore Service <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Image Side */}
                                <div className={`relative h-[300px] md:h-[400px] w-full rounded-sm overflow-hidden border border-border group-hover:border-primary transition-all duration-500 shadow-sm group-hover:shadow-xl ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                                    <Link href={`/services/${service.slug}`}>
                                        {service.metadata.image ? (
                                            <Image
                                                src={service.metadata.image}
                                                alt={service.metadata.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                                                <span className="text-zinc-500 uppercase font-bold tracking-widest">No Image</span>
                                            </div>
                                        )}

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Delivery Philosophy Block */}
                    <div className="bg-zinc-100 dark:bg-zinc-900 rounded-sm p-8 md:p-12 lg:p-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Delivery Philosophy</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    We believe in flexibility without compromising control. Our hybrid delivery model ensures we can handle projects of varying scale and complexity.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                        <div>
                                            <h4 className="font-bold uppercase">Direct Execution</h4>
                                            <p className="text-sm text-muted-foreground">For core works, we deploy our own teams to ensure quality.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                        <div>
                                            <h4 className="font-bold uppercase">Scalable Partnerships</h4>
                                            <p className="text-sm text-muted-foreground">For specialized trades, we manage vetted partners under our systems.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center lg:text-right">
                                <h3 className="text-2xl font-bold uppercase mb-6">Ready to start?</h3>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                                    <Button href="/capabilities" variant="outline" size="lg">View Capabilities</Button>
                                    <Button href="/contact" size="lg">Contact Us</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}
