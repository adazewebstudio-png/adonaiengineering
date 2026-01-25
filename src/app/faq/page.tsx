import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";
import {
    MessageSquare, HelpCircle, Building2, TrendingUp,
    Wrench, Users, ArrowRight
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Frequently Asked Questions",
    description: "Common questions about Adonai Engineering's capabilities and reach.",
};

export default function FAQPage() {

    const generalFaqs = [
        {
            question: "Are you an independent construction company?",
            answer: "Yes. Adonai Engineering and Construction Ltd operates as an independent engineering and construction firm. While we are a subsidiary of Adonai Estate Limited, we execute projects independently and provide construction services to both group and third-party clients."
        },
        {
            question: "When was Adonai Engineering and Construction Ltd established?",
            answer: "The company was established in 2021 and has executed construction works directly across residential and commercial developments since inception."
        },
        {
            question: "What types of projects do you handle?",
            answer: "We deliver a range of construction projects, including: Residential buildings, Commercial and mixed-use developments, Hotels and hospitality facilities, Estate developments, and Development-linked civil works and infrastructure. Projects are assessed based on scope, complexity, and delivery requirements."
        },
    ];

    const capabilityFaqs = [
        {
            question: "Can you handle large or complex construction projects?",
            answer: "Yes. We are structured to execute projects of increasing scale and complexity through disciplined project controls and, where appropriate, structured partnerships with specialist contractors."
        },
        {
            question: "Do you construct roads and infrastructure?",
            answer: "Yes. We undertake estate roads, access roads, drainage systems, earthworks, and other development-linked infrastructure as part of property and urban development projects."
        },
        {
            question: "Do you work on projects outside Ghana?",
            answer: "Our current operations are based in Ghana. However, our systems and delivery frameworks are designed to support project-led expansion into other African markets through strategic partnerships, subject to project requirements."
        },
    ];

    const deliveryFaqs = [
        {
            question: "How do you manage construction quality?",
            answer: "Quality is managed through structured planning, qualified site supervision, inspections at defined milestones, and coordination with consultants and inspectors where required."
        },
        {
            question: "How do you manage construction safety?",
            answer: "We implement project-specific safety plans, conduct regular site inductions and toolbox talks, enforce PPE requirements, and monitor site activities to protect workers and surrounding communities."
        },
        {
            question: "Do you manage subcontractors and suppliers?",
            answer: "Yes. We coordinate and manage subcontractors and suppliers as part of our execution framework, ensuring alignment with project schedules, quality standards, and safety requirements."
        },
    ];

    const workingWithUsFaqs = [
        {
            question: "How can we request a proposal?",
            answer: "You can request a proposal by contacting us through our website or directly engaging our team to discuss your project requirements. We typically review project scope, timelines, and objectives before submitting a tailored proposal."
        },
        {
            question: "Do you work with consultants and project teams appointed by clients?",
            answer: "Yes. We regularly work alongside architects, engineers, quantity surveyors, and other consultants appointed by clients, coordinating construction delivery within agreed project frameworks."
        },
    ];

    const allFaqs = [...generalFaqs, ...capabilityFaqs, ...deliveryFaqs, ...workingWithUsFaqs];

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": allFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    const categories = [
        { title: "General Questions", icon: HelpCircle, faqs: generalFaqs, id: "general" },
        { title: "Capability & Scale", icon: TrendingUp, faqs: capabilityFaqs, id: "capability" },
        { title: "Delivery & Execution", icon: Wrench, faqs: deliveryFaqs, id: "delivery" },
        { title: "Working With Us", icon: Users, faqs: workingWithUsFaqs, id: "working" },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className="flex flex-col min-h-screen">
                <PageHeader
                    title="Frequently Asked Questions"
                    subtitle="Common questions from clients, partners, and stakeholders."
                    image="/images/about/team.jpg"
                />

                {/* Intro */}
                <section className="py-16 bg-white dark:bg-zinc-950">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-xl text-muted-foreground dark:text-white leading-relaxed">
                                Find answers to common questions about our services, capabilities, and how we work. Can't find what you're looking for? <Link href="/contact" className="text-primary hover:underline font-bold">Contact us directly</Link>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Category Grid - Quick Jump */}
                <section className="py-8 bg-zinc-50 dark:bg-zinc-900 border-y border-border">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {categories.map((cat, i) => (
                                <a key={i} href={`#${cat.id}`} className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-950 border border-border rounded-sm hover:border-primary transition-colors group">
                                    <cat.icon className="h-5 w-5 text-primary shrink-0" />
                                    <span className="text-sm font-bold uppercase tracking-wide group-hover:text-primary transition-colors">{cat.title}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Sections */}
                <section className="py-20 bg-white dark:bg-zinc-950">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-3xl mx-auto space-y-16">
                            {categories.map((category, catIndex) => (
                                <div key={catIndex} id={category.id}>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="h-12 w-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                                            <category.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <h2 className="text-2xl font-black uppercase tracking-tight">{category.title}</h2>
                                    </div>
                                    <Accordion type="single" collapsible className="space-y-4">
                                        {category.faqs.map((faq, index) => (
                                            <AccordionItem
                                                key={index}
                                                value={`${category.id}-${index}`}
                                                className="border border-border bg-zinc-50 dark:bg-zinc-900 rounded-sm overflow-hidden data-[state=open]:border-primary transition-all"
                                            >
                                                <AccordionTrigger className="text-left font-bold px-6 py-5 hover:no-underline hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="px-6 pb-6 text-muted-foreground dark:text-white leading-relaxed">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-zinc-900 text-white">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="h-20 w-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-8">
                                <MessageSquare className="h-10 w-10 text-primary" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
                                Still Have Questions?
                            </h2>
                            <p className="text-xl text-zinc-300 mb-10">
                                If you have additional questions or require clarification, we encourage you to contact us directly for a detailed discussion.
                            </p>
                            <Button href="/contact" size="lg" variant="secondary" className="text-lg h-14 px-10">
                                Contact Us
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
                            <Link href="/capabilities" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground dark:text-white hover:text-primary transition-colors">
                                <TrendingUp className="h-4 w-4" /> Capabilities
                            </Link>
                            <Link href="/markets-geography" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-muted-foreground dark:text-white hover:text-primary transition-colors">
                                <ArrowRight className="h-4 w-4" /> Markets & Geography
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
