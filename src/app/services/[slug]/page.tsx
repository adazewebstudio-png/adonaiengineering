import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
    ArrowLeft, CheckCircle2, Building2, LandPlot, Wrench, HardHat,
    ArrowRight, ShieldCheck, Target, Users
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";

export async function generateStaticParams() {
    const slugs = getPostSlugs("services");
    return slugs.map((file) => ({
        slug: file.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    try {
        const post = getPostBySlug(params.slug, "services");
        return {
            title: post.metadata.title,
            description: post.metadata.description,
            alternates: {
                canonical: `/services/${params.slug}`,
            },
        }
    } catch (_e) {
        return { title: 'Service Not Found' }
    }
}

// Service-specific data
const serviceData: Record<string, {
    icon: any;
    tagline: string;
    overview: string;
    whatWeBuild: { title: string; description: string }[];
    howWeExecute: string[];
    whyChooseUs: string[];
    relatedService?: { name: string; slug: string };
}> = {
    'building-construction': {
        icon: Building2,
        tagline: "From Foundation to Finish",
        overview: "Adonai Engineering and Construction Ltd delivers professional building construction services across residential, commercial, hospitality, and institutional developments. Our building projects are executed through disciplined planning, direct site execution, and structured project controls.",
        whatWeBuild: [
            { title: "Residential Buildings", description: "Single-family homes and multi-unit residential developments, delivering durable structures that meet defined quality, cost, and time objectives." },
            { title: "Commercial & Mixed-Use", description: "Offices, retail spaces, and mixed-use developments, executed with attention to functionality, compliance, and long-term performance." },
            { title: "Hotels & Hospitality", description: "Hospitality buildings that require a high level of coordination, quality control, and technical oversight." },
            { title: "Institutional Buildings", description: "Schools, clinics, and administrative buildings, delivered through structured execution and regulatory compliance." }
        ],
        howWeExecute: [
            "Detailed construction planning and scheduling",
            "Direct site execution by experienced teams",
            "Structured cost and progress monitoring",
            "Quality assurance and technical supervision",
            "Safety and compliance management"
        ],
        whyChooseUs: [
            "Site-specific planning and coordination",
            "Flexibility to scale project resources as required",
            "Predictable outcomes through disciplined execution",
            "Clear accountability at every stage"
        ]
    },
    'estate-development': {
        icon: LandPlot,
        tagline: "Integrated Estate Solutions",
        overview: "Adonai Engineering and Construction Ltd provides integrated estate development construction services, supporting estate developers and property companies in delivering residential and mixed-use developments from ground-up.",
        whatWeBuild: [
            { title: "Turnkey Estates", description: "Complete estate construction from site preparation to unit handover, including all internal infrastructure." },
            { title: "Phased Developments", description: "Supporting developers who roll out estate units in phases, ensuring consistency across phases." },
            { title: "Internal Infrastructure", description: "Estate roads, drainage systems, utility networks, and common areas integrated with building works." },
            { title: "Mixed-Use Estates", description: "Developments combining residential, commercial, and amenity components." }
        ],
        howWeExecute: [
            "End-to-end construction coordination",
            "Multi-front work management",
            "Integration of buildings and infrastructure",
            "Consistent quality across all units",
            "Progress reporting and milestone tracking"
        ],
        whyChooseUs: [
            "Experience managing complex, multi-building projects",
            "Integrated delivery of structures and infrastructure",
            "Scalable execution through partnerships",
            "Reliable delivery within agreed timelines"
        ],
        relatedService: { name: "Building Construction", slug: "building-construction" }
    },
    'civil-works': {
        icon: Wrench,
        tagline: "Infrastructure That Supports Growth",
        overview: "Adonai Engineering and Construction Ltd delivers civil works and development infrastructure as part of property and urban development projects. Our civil works are integrated with building and estate construction to support complete development delivery.",
        whatWeBuild: [
            { title: "Estate & Access Roads", description: "Internal estate roads and access roads connecting developments to public infrastructure." },
            { title: "Drainage Systems", description: "Stormwater drainage and surface water management systems designed for local conditions." },
            { title: "Earthworks & Site Preparation", description: "Grading, levelling, and land preparation for development projects." },
            { title: "Utility Infrastructure", description: "Water supply networks, sewage systems, and utility corridors within development sites." }
        ],
        howWeExecute: [
            "Coordination with building construction schedules",
            "Compliance with local engineering standards",
            "Efficient resource mobilisation",
            "Quality control for civil structures",
            "Environmental and safety considerations"
        ],
        whyChooseUs: [
            "Integrated delivery with building works",
            "Practical experience in development contexts",
            "Structured project coordination",
            "Scalable through specialist partnerships"
        ],
        relatedService: { name: "Estate Development", slug: "estate-development" }
    },
    'project-management': {
        icon: HardHat,
        tagline: "Structured Execution & Control",
        overview: "Adonai Engineering and Construction Ltd provides construction project management and execution support for clients requiring structured oversight of their construction projects. We bring disciplined planning, coordination, and control to project delivery.",
        whatWeBuild: [
            { title: "Construction Planning", description: "Detailed scheduling, sequencing, and resource planning for construction works." },
            { title: "Site Supervision", description: "On-site management and supervision of construction activities." },
            { title: "Cost & Progress Control", description: "Budget tracking, progress monitoring, and variance management." },
            { title: "Contractor Coordination", description: "Managing subcontractors, suppliers, and specialist trades." }
        ],
        howWeExecute: [
            "Clear project governance structures",
            "Regular reporting and stakeholder communication",
            "Risk identification and mitigation",
            "Quality and safety oversight",
            "Coordination with client consultants"
        ],
        whyChooseUs: [
            "Experienced project management team",
            "Proven delivery frameworks",
            "Accountability for project outcomes",
            "Flexibility to support various project types"
        ],
        relatedService: { name: "Building Construction", slug: "building-construction" }
    }
};

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    try {
        const { metadata, slug } = getPostBySlug(params.slug, "services");
        const service = serviceData[slug];

        if (!service) {
            notFound();
        }

        const ServiceIcon = service.icon;

        const schema: any = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": metadata.title,
            "serviceType": metadata.title,
            "category": "Construction and Engineering",
            "areaServed": "Ghana",
            "provider": {
                "@type": "ConstructionBusiness",
                "name": "Adonai Engineering and Construction Ltd",
                "url": "https://adonaiengineeringltd.com",
                "logo": "https://adonaiengineeringltd.com/logo.jpg"
            },
            "description": metadata.description
        };

        return (
            <>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
                <div className="flex flex-col min-h-screen">
                    <PageHeader
                        title={metadata.title}
                        subtitle={service.tagline}
                        image={metadata.image}
                    />

                    {/* Back Link */}
                    <div className="bg-zinc-100 dark:bg-zinc-900 border-b border-border">
                        <div className="container px-4 md:px-6 py-4">
                            <Link href="/services" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-muted-foreground dark:text-white hover:text-primary transition-colors">
                                <ArrowLeft className="mr-2 h-4 w-4" /> All Services
                            </Link>
                        </div>
                    </div>

                    {/* Overview Section */}
                    <section className="py-20 bg-white dark:bg-zinc-950">
                        <div className="container px-4 md:px-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                                        <ServiceIcon className="h-4 w-4" /> {metadata.title}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                                        Overview
                                    </h2>
                                    <p className="text-lg text-muted-foreground dark:text-white leading-relaxed">
                                        {service.overview}
                                    </p>
                                </div>
                                <div className="bg-zinc-900 text-white p-10 rounded-sm">
                                    <h3 className="text-xl font-bold uppercase tracking-tight mb-6 flex items-center gap-3">
                                        <Target className="h-6 w-6 text-primary" /> Why Choose Us
                                    </h3>
                                    <div className="space-y-4">
                                        {service.whyChooseUs.map((item, i) => (
                                            <div key={i} className="flex gap-3 items-start">
                                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* What We Build - Card Grid */}
                    <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
                        <div className="container px-4 md:px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">What We Deliver</h2>
                                <div className="h-1.5 w-20 bg-primary mx-auto" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.whatWeBuild.map((item, index) => (
                                    <div key={index} className="bg-white dark:bg-zinc-950 border border-border rounded-sm p-8 hover:border-primary hover:shadow-lg transition-all group">
                                        <div className="flex items-start gap-4">
                                            <div className="h-12 w-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                                <CheckCircle2 className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                                                <p className="text-sm text-muted-foreground dark:text-white leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* How We Execute */}
                    <section className="py-20 bg-white dark:bg-zinc-950">
                        <div className="container px-4 md:px-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                                        How We Execute
                                    </h2>
                                    <p className="text-lg text-muted-foreground dark:text-white mb-8 leading-relaxed">
                                        Our approach is defined by clarity, control, and accountability at every stage.
                                    </p>
                                    <div className="space-y-4">
                                        {service.howWeExecute.map((item, i) => (
                                            <div key={i} className="flex gap-4 items-center p-4 bg-zinc-50 dark:bg-zinc-900 rounded-sm border border-border">
                                                <span className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                                                <span className="font-medium dark:text-white">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Card */}
                                <div className="bg-primary text-white p-10 rounded-sm">
                                    <ShieldCheck className="h-12 w-12 mb-6 opacity-80" />
                                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Ready to Start?</h3>
                                    <p className="text-lg opacity-90 mb-8 leading-relaxed">
                                        Engage with us for a professional discussion about your {metadata.title.toLowerCase()} project requirements.
                                    </p>
                                    <Button href="/contact" size="lg" variant="secondary" className="w-full text-lg h-14">
                                        Request a Proposal
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="py-12 bg-zinc-100 dark:bg-zinc-800 border-t border-border">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-wrap justify-center gap-8 text-sm">
                                <Link href="/capabilities" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground dark:text-white hover:text-primary transition-colors">
                                    <Users className="h-4 w-4" /> Our Capabilities
                                </Link>
                                <Link href="/experience" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground dark:text-white hover:text-primary transition-colors">
                                    <Building2 className="h-4 w-4" /> Experience & Portfolio
                                </Link>
                                {service.relatedService && (
                                    <Link href={`/services/${service.relatedService.slug}`} className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground dark:text-white hover:text-primary transition-colors">
                                        <ArrowRight className="h-4 w-4" /> {service.relatedService.name}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    } catch (_error) {
        notFound();
    }
}
