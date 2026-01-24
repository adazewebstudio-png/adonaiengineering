import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";
import { Building2, Target, Eye, ShieldCheck, CheckCircle2, Users, Award, TrendingUp, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "About Adonai Engineering and Construction Ltd - Established 2021",
    description: "Who is Adonai Engineering? An independent engineering and construction company in Ghana, established in 2021 as a professional subsidiary of Adonai Estate Ltd.",
};

export default function AboutPage() {

    const schema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "description": "Learn about Adonai Engineering and Construction Ltd, our history, execution model, and leadership.",
        "mainEntity": {
            "@type": "Organization",
            "name": "Adonai Engineering and Construction Ltd",
            "url": "https://adonai-engineering.com",
            "foundingDate": "2021",
            "description": "Independent engineering and construction firm executing projects directly since 2021.",
            "logo": "https://adonai-engineering.com/logo.jpg",
            "founder": {
                "@type": "Person",
                "name": "Rev. Dr. Bright Adonai",
                "jobTitle": "Founder & CEO"
            },
            "parentOrganization": {
                "@type": "Organization",
                "name": "Adonai Estate Limited"
            }
        }
    };

    const coreValues = [
        {
            title: "Execution Discipline",
            description: "We plan thoroughly, build methodically, and deliver consistently.",
            icon: CheckCircle2
        },
        {
            title: "Accountability",
            description: "We take clear responsibility for cost, time, quality, and outcomes.",
            icon: Users
        },
        {
            title: "Technical Integrity",
            description: "Engineering decisions prioritise durability, safety, and compliance.",
            icon: Award
        },
        {
            title: "Safety & Responsibility",
            description: "We protect people, projects, and communities throughout the process.",
            icon: ShieldCheck
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
                    title="About Us"
                    subtitle="A professional engineering and construction company delivering disciplined, high-quality construction solutions."
                    image="/images/about/team.jpg"
                />

                {/* Company Overview - Visual Hero Block */}
                <section className="py-20 md:py-28 bg-white dark:bg-zinc-950">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                                    <Building2 className="h-4 w-4" /> Est. 2021
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                                    Built on Execution,<br />
                                    <span className="text-primary">Not Theory</span>
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    <strong>Adonai Engineering and Construction Ltd</strong> is a professional engineering and construction company delivering disciplined, high-quality construction solutions across buildings, estate developments, and supporting infrastructure.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our experience is grounded in direct project delivery, site supervision, and coordinated construction management — shaping a culture of discipline, accountability, and technical integrity.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-sm border border-border">
                                        <span className="text-4xl font-black text-primary block mb-2">2021</span>
                                        <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Established</span>
                                    </div>
                                    <div className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-sm border border-border">
                                        <span className="text-4xl font-black text-primary block mb-2">GH</span>
                                        <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Ghana Based</span>
                                    </div>
                                    <div className="col-span-2 bg-primary text-white p-8 rounded-sm">
                                        <span className="text-lg font-bold block mb-2">Independent Execution</span>
                                        <span className="text-sm opacity-80">Construction firm serving both group and third-party clients</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Group Context - Minimal Card */}
                <section className="py-16 bg-zinc-50 dark:bg-zinc-900 border-y border-border">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Group Context</p>
                            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                                Adonai Engineering and Construction Ltd is a subsidiary of <strong className="text-primary">Adonai Estate Limited</strong>. Through this relationship, we have gained extensive experience executing construction works within a broader real estate development ecosystem.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision - Side by Side Cards */}
                <section className="py-20 md:py-28 bg-white dark:bg-zinc-950">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Mission */}
                            <div className="bg-gradient-to-br from-primary to-primary/80 text-white p-10 md:p-12 rounded-sm">
                                <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
                                    <Target className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-white">Our Mission</h3>
                                <p className="text-lg leading-relaxed opacity-90">
                                    To deliver reliable, high-quality construction solutions through <strong>disciplined execution</strong>, <strong>strong project controls</strong>, and <strong>technical integrity</strong>.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="bg-gradient-to-br from-primary to-primary/80 text-white p-10 md:p-12 rounded-sm">
                                <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
                                    <Eye className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-white">Our Vision</h3>
                                <p className="text-lg leading-relaxed opacity-90">
                                    To grow into a respected African construction brand known for <strong>dependable execution</strong> and <strong>enduring structures</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values - Icon Grid */}
                <section className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-900 border-b border-border">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Core Values</h2>
                            <div className="h-1.5 w-20 bg-primary mx-auto" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {coreValues.map((value, index) => (
                                <div key={index} className="bg-white dark:bg-zinc-950 p-8 rounded-sm border border-border hover:border-primary hover:shadow-lg transition-all group">
                                    <div className="h-14 w-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                        <value.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h4 className="text-lg font-bold uppercase tracking-tight mb-3">{value.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Executive Management */}
                <section className="py-20 md:py-28 bg-white dark:bg-zinc-950">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16">
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Leadership</p>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Executive Management</h2>
                            <div className="h-1.5 w-20 bg-primary mx-auto mt-6" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    name: "Rev. Dr. Bright Adonai",
                                    role: "Founder & CEO",
                                    image: "/images/about/bright-adonai.jpg",
                                    bio: "Directs the overall strategic trajectory and corporate governance of Adonai Engineering, bringing multidisciplinary leadership to the construction sector."
                                },
                                {
                                    name: "Technical Director",
                                    role: "Lead Engineer",
                                    bio: "Oversees technical integrity, engineering standards, and structural compliance across all project sites."
                                },
                                {
                                    name: "Operations Manager",
                                    role: "Head of Projects",
                                    bio: "Drives execution discipline, coordinating site teams and managing project timelines and controls."
                                },
                                {
                                    name: "Admin & Finance Manager",
                                    role: "Corporate Services",
                                    bio: "Ensures accountability through robust administrative systems, financial tracking, and reporting."
                                }
                            ].map((manager, index) => (
                                <div key={index} className="group h-full">
                                    <div className="bg-zinc-100 dark:bg-zinc-900 rounded-sm border border-border p-8 h-full flex flex-col hover:border-primary transition-all duration-300">
                                        <div className="relative h-24 w-24 rounded-full overflow-hidden mb-6 shrink-0 border-2 border-border group-hover:border-primary transition-colors bg-zinc-200 dark:bg-zinc-800">
                                            {manager.image ? (
                                                <Image
                                                    src={manager.image}
                                                    alt={manager.name}
                                                    fill
                                                    className="object-cover object-top"
                                                />
                                            ) : (
                                                <div className="h-full w-full flex items-center justify-center">
                                                    <Users className="h-10 w-10 text-zinc-400 group-hover:text-primary transition-colors" />
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight mb-1">{manager.name}</h3>
                                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">{manager.role}</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                                            {manager.bio}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary text-white">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                                Ready to Build Together?
                            </h2>
                            <p className="text-xl opacity-90 mb-10">
                                Engage with a construction partner built on execution discipline and technical integrity.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button href="/contact" size="lg" variant="secondary" className="text-lg h-14 px-10">
                                    Request a Proposal
                                </Button>
                                <Button href="/experience" size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg h-14 px-10">
                                    View Our Work
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Links Bar */}
                <section className="py-8 bg-zinc-100 dark:bg-zinc-900 border-t border-border">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-wrap justify-center gap-8 text-sm">
                            <Link href="/capabilities" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                                <TrendingUp className="h-4 w-4" /> How We Deliver
                            </Link>
                            <Link href="/services" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                                <Building2 className="h-4 w-4" /> Our Services
                            </Link>
                            <Link href="/markets-geography" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                                <Target className="h-4 w-4" /> Markets & Geography
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
