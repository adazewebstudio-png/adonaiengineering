import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";
import {
    Globe2, MapPin, TrendingUp, CheckCircle2, ArrowRight,
    Building2, Users, FileCheck, Layers
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Markets & Geography",
    description: "Based in Ghana. Structured for growth across African markets.",
};

export default function MarketsPage() {

    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Adonai Engineering and Construction Ltd",
        "areaServed": [
            {
                "@type": "Country",
                "name": "Ghana"
            },
            {
                "@type": "Place",
                "name": "Africa"
            }
        ]
    };

    const ghanaAdvantages = [
        "Strong familiarity with local construction conditions",
        "Understanding of regulatory and compliance requirements",
        "Established supply chains and subcontractor networks",
        "Practical experience managing sites within local environments"
    ];

    const deliveryCapabilities = [
        {
            icon: Users,
            title: "Deploy Teams",
            description: "Project teams based on scope and requirements"
        },
        {
            icon: CheckCircle2,
            title: "Consistent Standards",
            description: "Apply consistent construction standards across sites"
        },
        {
            icon: FileCheck,
            title: "Structured Systems",
            description: "Coordinate through planning and reporting systems"
        },
        {
            icon: TrendingUp,
            title: "Scalable Capacity",
            description: "Scale execution through partnerships"
        }
    ];

    const growthApproach = [
        { title: "Project-led", description: "Driven by specific project opportunities" },
        { title: "Partnership-based", description: "Working with local professionals and specialists" },
        { title: "Governed", description: "Subject to internal capacity assessment and approvals" }
    ];

    const marketAssessment = [
        "Project scope and technical requirements",
        "Regulatory and compliance considerations",
        "Availability of qualified local partners",
        "Logistical and resource implications"
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className="flex flex-col min-h-screen">
                <PageHeader
                    title="Markets & Geography"
                    subtitle="Based in Ghana. Structured for growth across African markets."
                    image="/images/company/markets-geography.jpg"
                />

                {/* Current Base */}
                <section className="py-20 bg-white dark:bg-zinc-950">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                                    <MapPin className="h-4 w-4" /> Headquarters
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                                    Ghana-Based <span className="text-primary">Operations</span>
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                    Our construction operations are currently based in <strong>Ghana</strong>, where we have executed projects across residential and commercial developments since 2021.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {ghanaAdvantages.map((item, i) => (
                                        <div key={i} className="flex gap-3 items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Location Cards */}
                            <div className="space-y-4">
                                <div className="bg-primary text-white p-8 rounded-sm">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                            <MapPin className="h-7 w-7" />
                                        </div>
                                        <div>
                                            <span className="text-2xl font-black uppercase block">Ghana</span>
                                            <span className="text-sm opacity-80">Headquarters & Active Operations</span>
                                        </div>
                                    </div>
                                    <p className="text-sm opacity-80">
                                        Primary operating base with established infrastructure, supply chains, and proven delivery capability.
                                    </p>
                                </div>
                                <div className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-sm border border-border">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="h-14 w-14 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                                            <Globe2 className="h-7 w-7 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <span className="text-2xl font-black uppercase block text-muted-foreground">Africa</span>
                                            <span className="text-sm text-muted-foreground">Strategic Growth Posture</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Systems and delivery frameworks designed to support project-led expansion across African markets.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Structured for Scale */}
                <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Structured for Scale</h2>
                            <div className="h-1.5 w-20 bg-primary mx-auto mb-6" />
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                While anchored in Ghana, we are not structured as a location-bound contractor. Our delivery model is designed to scale.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {deliveryCapabilities.map((cap, index) => (
                                <div key={index} className="bg-white dark:bg-zinc-950 border border-border rounded-sm p-6 text-center hover:border-primary hover:shadow-lg transition-all group">
                                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                                        <cap.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h4 className="font-bold uppercase tracking-tight mb-2">{cap.title}</h4>
                                    <p className="text-sm text-muted-foreground">{cap.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Growth Approach */}
                <section className="py-20 bg-zinc-900 text-white">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                                    Africa-Facing Growth
                                </h2>
                                <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                                    Our long-term outlook recognises the scale of development opportunities across African markets. Rather than pursuing speculative expansion, our approach is deliberate and governed.
                                </p>
                                <div className="space-y-4">
                                    {growthApproach.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start p-4 bg-white/5 rounded-sm border border-white/10">
                                            <TrendingUp className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-bold uppercase block">{item.title}</span>
                                                <span className="text-sm text-zinc-400">{item.description}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* New Market Assessment */}
                            <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
                                <h3 className="text-xl font-bold uppercase tracking-tight mb-6">How We Approach New Markets</h3>
                                <p className="text-zinc-400 mb-6 text-sm">When engaging with projects outside our immediate operating base, we assess:</p>
                                <div className="space-y-3">
                                    {marketAssessment.map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center">
                                            <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">{i + 1}</span>
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-zinc-500 mt-6 italic">
                                    Projects are undertaken only where delivery standards, safety, and accountability can be maintained.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What This Means for Clients */}
                <section className="py-16 bg-zinc-100 dark:bg-zinc-800 border-y border-border">
                    <div className="container px-4 md:px-6">
                        <h3 className="text-center font-bold uppercase tracking-widest text-sm text-muted-foreground mb-8">What This Means for Clients</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                "Reliable execution grounded in real operating experience",
                                "A construction partner capable of supporting growth-oriented projects",
                                "Consistent standards regardless of project location",
                                "A disciplined approach to expansion"
                            ].map((item, i) => (
                                <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-sm border border-border text-center">
                                    <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-4" />
                                    <p className="text-sm">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-primary text-white">
                    <div className="container px-4 md:px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                            Planning a Project in Ghana?
                        </h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
                            Engage with a construction partner structured for growth and disciplined delivery.
                        </p>
                        <Button href="/contact" size="lg" variant="secondary" className="text-lg h-14 px-10">
                            Request a Proposal
                        </Button>
                    </div>
                </section>

                {/* Quick Links */}
                <section className="py-8 bg-zinc-100 dark:bg-zinc-900 border-t border-border">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-wrap justify-center gap-8 text-sm">
                            <Link href="/services" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                                <Building2 className="h-4 w-4" /> Our Services
                            </Link>
                            <Link href="/capabilities" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                                <Layers className="h-4 w-4" /> Capabilities
                            </Link>
                            <Link href="/experience" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                                <TrendingUp className="h-4 w-4" /> Experience
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
