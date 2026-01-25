import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";
import {
    Mail, MapPin, Phone, Send, FileText, CheckCircle2,
    ShieldCheck, Building2, Clock, ArrowRight
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Contact & Request a Proposal",
    description: "Get in touch with Adonai Engineering regarding your project.",
};

export default function ContactPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ConstructionBusiness",
        "name": "Adonai Engineering and Construction Ltd",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "GH"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Business Enquiries"
        }
    };

    const proposalInfo = [
        "Project type and brief description",
        "Location of the project",
        "Estimated project scope or size",
        "Anticipated timeline",
        "Preferred procurement or engagement approach"
    ];

    const engagementProcess = [
        { step: "1", title: "Initial Discussion", description: "Understand scope and objectives" },
        { step: "2", title: "Information Review", description: "Review available information and site context" },
        { step: "3", title: "Approach Clarification", description: "Clarify delivery approach and expectations" },
        { step: "4", title: "Proposal Submission", description: "Prepare and submit a project-specific proposal" }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className="flex flex-col min-h-screen">
                <PageHeader
                    title="Contact Us"
                    subtitle="Engage with us for a professional discussion about your construction project."
                    image="/images/services/building-construction.jpg"
                />

                {/* Overview */}
                <section className="py-20 bg-white dark:bg-zinc-950">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                                <Send className="h-4 w-4" /> Get in Touch
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                                Let's <span className="text-primary">Build Together</span>
                            </h2>
                            <p className="text-xl text-muted-foreground dark:text-white leading-relaxed">
                                Whether you are planning a building project, estate development, civil works, or require structured project execution support, we welcome enquiries from clients, developers, institutions, and partners.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Grid */}
                <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                            {/* Left: Info Cards */}
                            <div className="space-y-8">

                                {/* Request a Proposal Card */}
                                <div className="bg-white dark:bg-zinc-950 border border-border rounded-sm p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="h-12 w-12 rounded-sm bg-primary flex items-center justify-center shrink-0">
                                            <FileText className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight">Request a Proposal</h3>
                                    </div>
                                    <p className="text-muted-foreground dark:text-white mb-6 text-sm">
                                        To help us respond effectively, please provide:
                                    </p>
                                    <div className="space-y-3">
                                        {proposalInfo.map((item, i) => (
                                            <div key={i} className="flex gap-3 items-start">
                                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm dark:text-white">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Info Card */}
                                <div className="bg-zinc-900 text-white rounded-sm p-8">
                                    <h3 className="text-xl font-bold uppercase tracking-tight mb-6">Contact Information</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                                <MapPin className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 block">Location</span>
                                                <span className="font-bold">Ho, Ghana</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                                <Phone className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 block">Phone</span>
                                                <a href="tel:+233248629946" className="font-bold hover:text-primary transition-colors">+233 24 862 9946</a>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                                <Mail className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 block">Email</span>
                                                <a href="mailto:enquiries@adonaiengineeringltd.com" className="font-bold hover:text-primary transition-colors">enquiries@adonaiengineeringltd.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Google Map */}
                                <div className="rounded-sm overflow-hidden border border-border shadow-lg">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4302953690913!2d0.5455753739939087!3d6.5933201934003725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1027275d1ee44f87%3A0xb86674efd07f77ec!2sAirport%20Golf%20City%20Police%20Station!5e0!3m2!1sen!2sgh!4v1769280198378!5m2!1sen!2sgh"
                                        width="100%"
                                        height="250"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Adonai Engineering Location - Ho, Ghana"
                                    />
                                </div>

                            </div>

                            {/* Right: Contact Form */}
                            <div className="bg-white dark:bg-zinc-950 border border-border rounded-sm p-8 md:p-10 shadow-lg">
                                <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 flex items-center gap-3">
                                    <Send className="h-6 w-6 text-primary" /> Send a Message
                                </h3>
                                <form name="contact" method="POST" data-netlify="true" action="/contact?success=true" className="space-y-6">
                                    <input type="hidden" name="form-name" value="contact" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground dark:text-white">Your Name *</label>
                                            <input type="text" id="name" name="name" required className="flex h-12 w-full rounded-sm border border-input bg-zinc-50 dark:bg-zinc-900 px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all" placeholder="Full Name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground dark:text-white">Email *</label>
                                            <input type="email" id="email" name="email" required className="flex h-12 w-full rounded-sm border border-input bg-zinc-50 dark:bg-zinc-900 px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all" placeholder="you@example.com" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Company / Organization</label>
                                        <input type="text" id="company" name="company" className="flex h-12 w-full rounded-sm border border-input bg-zinc-50 dark:bg-zinc-900 px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all" placeholder="Your Company Name" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Project Type *</label>
                                        <select id="subject" name="project-type" required className="flex h-12 w-full rounded-sm border border-input bg-zinc-50 dark:bg-zinc-900 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all">
                                            <option value="">Select a project type...</option>
                                            <option>Building Construction</option>
                                            <option>Estate Development</option>
                                            <option>Civil Works / Infrastructure</option>
                                            <option>Project Management Support</option>
                                            <option>Partnership Proposal</option>
                                            <option>Other Enquiry</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Project Brief *</label>
                                        <textarea id="message" name="message" required className="flex min-h-[150px] w-full rounded-sm border border-input bg-zinc-50 dark:bg-zinc-900 px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all" placeholder="Describe your project, including location, scope, and timeline..."></textarea>
                                    </div>

                                    <Button className="w-full text-lg h-14" type="submit">
                                        Submit Enquiry
                                    </Button>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Engagement Process */}
                <section className="py-20 bg-white dark:bg-zinc-950">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">How We Engage</h2>
                            <div className="h-1.5 w-20 bg-primary mx-auto mb-6" />
                            <p className="text-lg text-muted-foreground dark:text-white max-w-2xl mx-auto">
                                Our engagement process ensures clarity from the outset.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {engagementProcess.map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-black">
                                        {item.step}
                                    </div>
                                    <h4 className="font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground dark:text-white">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Assurance Bar */}
                <section className="py-16 bg-primary text-white">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                            <ShieldCheck className="h-16 w-16 opacity-80 shrink-0" />
                            <div>
                                <h3 className="text-2xl font-bold uppercase mb-2">Professional Assurance</h3>
                                <p className="text-lg opacity-90 max-w-2xl">
                                    All enquiries are treated professionally and in confidence. Engagements are assessed carefully to ensure we can deliver with quality, safety, and accountability.
                                </p>
                            </div>
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
                            <Link href="/capabilities" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground dark:text-white hover:text-primary transition-colors">
                                <CheckCircle2 className="h-4 w-4" /> Capabilities
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
