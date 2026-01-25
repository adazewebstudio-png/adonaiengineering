import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";
import {
    Building2, LandPlot, Wrench, MapPin, Calendar,
    CheckCircle2, ArrowRight, ShieldCheck, AlertCircle, TrendingUp
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Experience & Portfolio",
    description: "A portfolio of our delivered excellence across Ghana.",
};

export default function ExperiencePage() {

    const schema = {
        "@context": "https://schema.org",
        "@type": "Project",
        "name": "Construction Project Portfolio",
        "creator": {
            "@type": "Organization",
            "name": "Adonai Engineering and Construction Ltd"
        },
        "description": "Selected construction projects executed directly since 2021."
    };

    const projectCategories = [
        {
            icon: Building2,
            title: "Residential Buildings",
            description: "Single and multi-unit residential developments",
            count: "Multiple Projects"
        },
        {
            icon: Building2,
            title: "Commercial Buildings",
            description: "Office spaces and mixed-use developments",
            count: "Multiple Projects"
        },
        {
            icon: LandPlot,
            title: "Estate Developments",
            description: "Integrated housing with internal infrastructure",
            count: "Multiple Projects"
        },
        {
            icon: Wrench,
            title: "Civil Works",
            description: "Roads, drainage, and site infrastructure",
            count: "Multiple Projects"
        }
    ];

    const executionEmphasis = [
        "Direct site control and supervision",
        "Clear accountability for outcomes",
        "Structured reporting and coordination",
        "Technical integrity and compliance"
    ];

    const trackRecord = [
        "Residential buildings and housing developments",
        "Commercial and mixed-use buildings",
        "Estate developments with internal infrastructure",
        "Development-linked civil works"
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className="flex flex-col min-h-screen">
                <PageHeader
                    title="Experience & Portfolio"
                    subtitle="Direct construction execution experience grounded in discipline and site control."
                    image="/images/services/project-management.jpg"
                />

                {/* Overview */}
                <section className="py-20 bg-white dark:bg-zinc-950">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                                    <Calendar className="h-4 w-4" /> Since 2021
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                                    Grounded in <span className="text-primary">Real Delivery</span>
                                </h2>
                                <p className="text-lg text-muted-foreground dark:text-white leading-relaxed mb-6">
                                    Our experience is grounded in direct project execution across residential and commercial developments. We don't just advise — we build.
                                </p>
                                <p className="text-muted-foreground dark:text-white leading-relaxed">
                                    Our portfolio reflects hands-on construction delivery, disciplined site management, and the ability to coordinate buildings and supporting infrastructure within real development contexts.
                                </p>
                            </div>

                            {/* Track Record Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                {trackRecord.map((item, i) => (
                                    <div key={i} className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-sm border border-border hover:border-primary transition-colors">
                                        <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                                        <p className="text-sm font-medium dark:text-white">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Categories - 4 Column Grid */}
                <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Project Categories</h2>
                            <div className="h-1.5 w-20 bg-primary mx-auto mb-6" />
                            <p className="text-lg text-muted-foreground dark:text-white max-w-2xl mx-auto">
                                We have executed construction works across a range of project types.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {projectCategories.map((cat, index) => (
                                <div key={index} className="bg-white dark:bg-zinc-950 border border-border rounded-sm p-8 text-center hover:border-primary hover:shadow-lg transition-all group">
                                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                                        <cat.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h4 className="text-lg font-bold uppercase tracking-tight mb-2">{cat.title}</h4>
                                    <p className="text-sm text-muted-foreground dark:text-white mb-4">{cat.description}</p>
                                    <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-bold uppercase tracking-widest text-muted-foreground dark:text-white">
                                        {cat.count}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How We Execute */}
                <section className="py-20 bg-zinc-900 text-white">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                                    Execution Emphasis
                                </h2>
                                <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                                    Across all projects, our execution approach prioritises control, accountability, and technical integrity.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {executionEmphasis.map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center">
                                            <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                                            <span className="text-sm font-bold uppercase tracking-wide">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Note Card */}
                            <div className="bg-amber-500/10 border border-amber-500/30 p-8 rounded-sm">
                                <div className="flex items-start gap-4">
                                    <AlertCircle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold uppercase text-amber-400 mb-3">Portfolio Presentation Note</h4>
                                        <p className="text-sm leading-relaxed text-amber-100/80">
                                            Detailed project descriptions, images, and specifications are presented selectively and made available upon request or during proposal and tender processes, in line with client confidentiality and commercial considerations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Geographic Context */}
                <section className="py-16 bg-zinc-100 dark:bg-zinc-800 border-y border-border">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <MapPin className="h-7 w-7 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase">Geographic Context</h4>
                                    <p className="text-sm text-muted-foreground dark:text-white">Projects primarily based in Ghana</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground dark:text-white max-w-xl text-center md:text-left">
                                Our experience and delivery systems are designed to support projects of increasing scale across African markets.
                            </p>
                            <Link href="/markets-geography" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:underline shrink-0">
                                Learn More <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-primary text-white">
                    <div className="container px-4 md:px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                            Want to See Relevant Experience?
                        </h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
                            If you would like to review relevant project experience in relation to your proposed development, engage with us for a tailored discussion.
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
                            <Link href="/services" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground dark:text-white hover:text-primary transition-colors">
                                <Building2 className="h-4 w-4" /> Our Services
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
