import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";
import {
    ShieldCheck, HardHat, CheckCircle2, AlertTriangle,
    Eye, FileCheck, Users, ArrowRight, Layers
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Safety & Quality",
    description: "Our uncompromising standards for safety and construction quality.",
};

export default function SafetyPage() {

    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Adonai Engineering and Construction Ltd",
        "hasPolicy": {
            "@type": "CreativeWork",
            "name": "Safety and Quality Policy"
        }
    };

    const safetyProtocols = [
        {
            icon: HardHat,
            title: "Mandatory PPE",
            description: "Strict enforcement on all sites"
        },
        {
            icon: Users,
            title: "Site Inductions",
            description: "No worker starts without training"
        },
        {
            icon: AlertTriangle,
            title: "Toolbox Talks",
            description: "Regular safety briefings"
        },
        {
            icon: Eye,
            title: "Site Monitoring",
            description: "Continuous safety oversight"
        }
    ];

    const qualityControls = [
        {
            icon: FileCheck,
            title: "Material Testing",
            description: "Aggregates and concrete tested daily"
        },
        {
            icon: CheckCircle2,
            title: "Milestone Inspections",
            description: "Quality checks at defined stages"
        },
        {
            icon: Layers,
            title: "Structured Planning",
            description: "Detailed work sequencing"
        },
        {
            icon: Users,
            title: "Qualified Supervision",
            description: "Experienced site management"
        }
    ];

    const commitments = [
        "People — Safety of all workers and visitors on our sites",
        "Projects — Protecting the integrity and quality of our works",
        "Communities — Minimising disruption and risk to surrounding areas",
        "Standards — Upholding regulatory and technical compliance"
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className="flex flex-col min-h-screen">
                <PageHeader
                    title="Safety & Quality"
                    subtitle="We operate under a strict 'Zero Harm' objective. Safety is integral to our operations."
                    image="/images/company/safety-quality.jpg"
                />

                {/* Zero Harm Statement */}
                <section className="py-16 bg-primary text-white">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <ShieldCheck className="h-16 w-16 mx-auto mb-6 opacity-80" />
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
                                Zero Harm Objective
                            </h2>
                            <p className="text-xl opacity-90 leading-relaxed">
                                Safety is not a policy document — it is a lived practice on every site. Our goal is simple: <strong>zero harm to people, property, and communities.</strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Commitment */}
                <section className="py-20 bg-white dark:bg-zinc-950">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                                    Our Commitment
                                </h2>
                                <p className="text-lg text-muted-foreground dark:text-white leading-relaxed mb-8">
                                    We are committed to protecting the safety and integrity of everyone and everything connected to our projects.
                                </p>
                                <div className="space-y-4">
                                    {commitments.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start p-4 bg-zinc-50 dark:bg-zinc-900 rounded-sm border border-border">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm dark:text-white">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quote Card */}
                            <div className="bg-zinc-900 text-white p-10 md:p-12 rounded-sm">
                                <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                                    <ShieldCheck className="h-7 w-7 text-primary" />
                                </div>
                                <blockquote className="text-2xl font-bold italic leading-snug mb-6">
                                    "Quality is not checked in — it is built in."
                                </blockquote>
                                <p className="text-zinc-400 text-sm">
                                    Our approach to quality assurance is proactive, not reactive. We design for quality from the start, not just at inspection.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Safety Protocols - 4 Column Grid */}
                <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Safety Protocols</h2>
                            <div className="h-1.5 w-20 bg-primary mx-auto mb-6" />
                            <p className="text-lg text-muted-foreground dark:text-white max-w-2xl mx-auto">
                                Systematic safety measures implemented on every project site.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {safetyProtocols.map((protocol, index) => (
                                <div key={index} className="bg-white dark:bg-zinc-950 border border-border rounded-sm p-6 text-center hover:border-primary hover:shadow-lg transition-all group">
                                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                                        <protocol.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h4 className="font-bold uppercase tracking-tight mb-2">{protocol.title}</h4>
                                    <p className="text-sm text-muted-foreground dark:text-white">{protocol.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quality Controls - 4 Column Grid */}
                <section className="py-20 bg-white dark:bg-zinc-950">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Quality Controls</h2>
                            <div className="h-1.5 w-20 bg-primary mx-auto mb-6" />
                            <p className="text-lg text-muted-foreground dark:text-white max-w-2xl mx-auto">
                                Structured quality assurance throughout project delivery.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {qualityControls.map((control, index) => (
                                <div key={index} className="bg-zinc-50 dark:bg-zinc-900 border border-border rounded-sm p-6 text-center hover:border-primary hover:shadow-lg transition-all group">
                                    <div className="h-14 w-14 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                                        <control.icon className="h-7 w-7 text-zinc-600 dark:text-zinc-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <h4 className="font-bold uppercase tracking-tight mb-2">{control.title}</h4>
                                    <p className="text-sm text-muted-foreground dark:text-white">{control.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-zinc-900 text-white">
                    <div className="container px-4 md:px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                            Build with a Safety-First Partner
                        </h2>
                        <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-10">
                            Engage with a construction team that prioritises safety and quality on every project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/contact" size="lg" variant="secondary" className="text-lg h-14 px-10">
                                Request a Proposal
                            </Button>
                            <Button href="/capabilities" size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg h-14 px-10">
                                View Capabilities
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Quick Links */}
                <section className="py-8 bg-zinc-100 dark:bg-zinc-900 border-t border-border">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-wrap justify-center gap-8 text-sm">
                            <Link href="/capabilities" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground dark:text-white hover:text-primary transition-colors">
                                <Layers className="h-4 w-4" /> Our Capabilities
                            </Link>
                            <Link href="/services/project-management" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground dark:text-white hover:text-primary transition-colors">
                                <HardHat className="h-4 w-4" /> Project Management
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
