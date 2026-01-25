import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";
import {
    Hammer, Users, Cpu, Building2, LandPlot, HardHat, Wrench,
    CheckCircle2, ArrowRight, ShieldCheck, TrendingUp, Layers
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Capabilities",
    description: "Our Delivery Model and Operational Capabilities.",
};

export default function CapabilitiesPage() {

    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Adonai Engineering and Construction Ltd",
        "knowsAbout": [
            "Building Construction",
            "Estate Development",
            "Civil Works",
            "Construction Management"
        ]
    };

    const deliveryPillars = [
        {
            icon: Hammer,
            title: "Direct Execution",
            description: "We execute construction works directly through experienced project managers, site engineers, supervisors, and skilled site teams.",
            benefits: [
                "Maintain control over quality, cost, and timelines",
                "Respond quickly to site realities",
                "Enforce safety and compliance consistently"
            ],
            highlight: "Our preferred execution mode"
        },
        {
            icon: Users,
            title: "Partnered Delivery",
            description: "For specialist systems or expanded capacity, we scale through carefully selected partners while retaining overall execution control.",
            benefits: [
                "Deliver larger and more complex projects",
                "Access specialist expertise without diluting accountability",
                "Manage risk through defined scopes"
            ],
            highlight: "Strategic partnerships"
        }
    ];

    const capabilities = [
        {
            icon: Building2,
            title: "Building Construction",
            items: [
                "Residential, commercial, hospitality, and institutional buildings",
                "Structural works, finishes, and coordinated services",
                "Site-based quality assurance and supervision"
            ],
            link: "/services/building-construction"
        },
        {
            icon: LandPlot,
            title: "Estate & Property Development",
            items: [
                "Turnkey and phased estate developments",
                "Integrated delivery of buildings and internal infrastructure",
                "Coordination of multiple work fronts"
            ],
            link: "/services/estate-development"
        },
        {
            icon: Wrench,
            title: "Civil Works & Infrastructure",
            items: [
                "Estate and access roads",
                "Drainage systems and earthworks",
                "Site formation and utility infrastructure"
            ],
            link: "/services/civil-works"
        },
        {
            icon: HardHat,
            title: "Project Management",
            items: [
                "Construction planning and scheduling",
                "Cost control and progress monitoring",
                "Site supervision and coordination"
            ],
            link: "/services/project-management"
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className="flex flex-col min-h-screen">
                <PageHeader
                    title="Capabilities"
                    subtitle="Delivering through direct execution and strategic partnerships."
                    image="/images/capabilities/delivery-model.jpg"
                />

                {/* Intro Block */}
                <section className="py-20 bg-white dark:bg-zinc-950">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                                <Layers className="h-4 w-4" /> Our Approach
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                                Grounded in <span className="text-primary">Real Execution</span>
                            </h2>
                            <p className="text-xl text-muted-foreground dark:text-white leading-relaxed">
                                Our capability is measured by how projects are actually delivered on site — through people, systems, and structured coordination. We do not rely on theory or broad claims.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Delivery Model - Two Column Cards */}
                <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Our Delivery Model</h2>
                            <div className="h-1.5 w-20 bg-primary mx-auto mb-6" />
                            <p className="text-lg text-muted-foreground dark:text-white max-w-2xl mx-auto">
                                A controlled execution framework that balances in-house capability with strategic partnerships.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {deliveryPillars.map((pillar, index) => (
                                <div key={index} className="bg-white dark:bg-zinc-950 border border-border rounded-sm overflow-hidden hover:border-primary hover:shadow-xl transition-all group">
                                    {/* Header */}
                                    <div className="bg-zinc-100 dark:bg-zinc-800 p-6 flex items-center gap-4">
                                        <div className="h-14 w-14 rounded-sm bg-primary flex items-center justify-center shrink-0">
                                            <pillar.icon className="h-7 w-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold uppercase tracking-tight">{pillar.title}</h3>
                                            <span className="text-xs font-bold uppercase tracking-widest text-primary">{pillar.highlight}</span>
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="p-8">
                                        <p className="text-muted-foreground dark:text-white mb-6 leading-relaxed">
                                            {pillar.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {pillar.benefits.map((benefit, i) => (
                                                <li key={i} className="flex gap-3 items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span className="text-sm dark:text-white">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Capability Areas - 4 Column Grid */}
                <section className="py-20 bg-white dark:bg-zinc-950">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Core Capability Areas</h2>
                            <div className="h-1.5 w-20 bg-primary mx-auto" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {capabilities.map((cap, index) => (
                                <Link key={index} href={cap.link} className="group">
                                    <div className="h-full bg-zinc-50 dark:bg-zinc-900 border border-border rounded-sm p-6 hover:border-primary hover:shadow-lg transition-all">
                                        <div className="h-12 w-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                            <cap.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <h4 className="text-lg font-bold uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">{cap.title}</h4>
                                        <ul className="space-y-2 mb-6">
                                            {cap.items.map((item, i) => (
                                                <li key={i} className="text-sm text-muted-foreground dark:text-white flex gap-2 items-start">
                                                    <span className="text-primary">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary group-hover:underline">
                                            Learn More <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Strategic Advantage Bar */}
                <section className="py-16 bg-zinc-900 text-white">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="space-y-2">
                                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                    <ShieldCheck className="h-6 w-6 text-primary" />
                                </div>
                                <h4 className="font-bold uppercase">Direct Execution</h4>
                                <p className="text-sm text-zinc-400">Control over core works</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <h4 className="font-bold uppercase">Scalable Partnership</h4>
                                <p className="text-sm text-zinc-400">Rapid resource mobilization</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                    <Cpu className="h-6 w-6 text-primary" />
                                </div>
                                <h4 className="font-bold uppercase">Tech-Driven</h4>
                                <p className="text-sm text-zinc-400">Real-time reporting</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-primary text-white">
                    <div className="container px-4 md:px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                            Ready to Build with a Capable Partner?
                        </h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
                            Discuss your project with a construction team structured for disciplined delivery.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/contact" size="lg" variant="secondary" className="text-lg h-14 px-10">
                                Request a Proposal
                            </Button>
                            <Button href="/experience" size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg h-14 px-10">
                                View Our Experience
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Quick Links */}
                <section className="py-8 bg-zinc-100 dark:bg-zinc-900 border-t border-border">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-wrap justify-center gap-8 text-sm">
                            <Link href="/safety-quality" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground dark:text-white hover:text-primary transition-colors">
                                <ShieldCheck className="h-4 w-4" /> Safety & Quality
                            </Link>
                            <Link href="/markets-geography" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground dark:text-white hover:text-primary transition-colors">
                                <TrendingUp className="h-4 w-4" /> Markets & Geography
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
