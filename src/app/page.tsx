import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Building2, LandPlot, HardHat, CheckCircle2, ArrowRight, Globe2, ShieldCheck, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Adonai Engineering and Construction Ltd - Professional Engineering & Construction Company in Ghana",
  description: "A reliable engineering and construction company in Ghana. We are building contractors specializing in residential, commercial, and estate infrastructure projects.",
};

export default function Home() {
  const posts = getAllPosts("services");

  // Schema: Entity definition
  const schema = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "Adonai Engineering and Construction Ltd",
    "description": "Professional engineering and construction company delivering buildings, estate developments, and infrastructure.",
    "foundingDate": "2021",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GH"
    },
    "areaServed": ["Ghana", "Africa"],
    "url": "https://adonai-engineering.com",
    "logo": "https://adonai-engineering.com/logo.jpg"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="flex flex-col min-h-screen">

        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-900 text-white mt-[88px] md:mt-[96px]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/services/building-construction.jpg"
              alt="Building Construction"
              fill
              className="object-cover opacity-40"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900/90 to-black/80 z-10" />

          <div className="container relative z-20 px-4 md:px-6 py-12">
            <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
              {/* Entity Definition */}
              <div className="inline-block rounded-sm bg-primary/20 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-primary border border-primary/30">
                Adonai Engineering & Construction Ltd
              </div>

              {/* H1: Company Definition */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                Engineered <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">to Last.</span>
              </h1>

              {/* Subheading: What + How */}
              <p className="max-w-[800px] text-lg md:text-2xl text-gray-300 leading-relaxed font-light">
                A professional engineering and construction company delivering disciplined execution across buildings, estate developments, and supporting infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Button size="lg" className="text-lg h-14 px-10" href="/contact">
                  Request a Proposal
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg h-14 px-10" href="/services">
                  View Our Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. AUTHORITY SNAPSHOT */}
        <section className="py-12 bg-zinc-950 border-b border-white/10">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
              <Link href="/about" className="space-y-2 group">
                <span className="text-3xl font-black text-white/20 group-hover:text-primary/40 transition-colors">2021</span>
                <p className="text-sm font-bold uppercase text-primary tracking-widest group-hover:underline">Established in 2021</p>
              </Link>
              <Link href="/capabilities" className="space-y-2 group">
                <ShieldCheck className="h-8 w-8 text-white/20 mx-auto md:mx-0 group-hover:text-primary/40 transition-colors" />
                <p className="text-sm font-bold uppercase text-primary tracking-widest group-hover:underline">Direct construction execution experience</p>
              </Link>
              <Link href="/markets-geography" className="space-y-2 group">
                <Globe2 className="h-8 w-8 text-white/20 mx-auto md:mx-0 group-hover:text-primary/40 transition-colors" />
                <p className="text-sm font-bold uppercase text-primary tracking-widest group-hover:underline">Ghana-based operations with Africa-facing growth posture</p>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. SERVICES AT A GLANCE */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-primary mb-6">Services at a Glance</h2>
              <div className="h-1.5 w-24 bg-primary" />
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
                We provide end-to-end engineering solutions. From conception to commissioning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service 1 */}
              <Link href="/services/building-construction" className="group block h-full">
                <div className="relative h-full border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-xl hover:-translate-y-1">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold uppercase mb-3 group-hover:text-primary transition-colors">Building Construction</h3>
                  <p className="text-sm text-muted-foreground mb-4">Residential, commercial, hospitality, and institutional buildings delivered through direct execution.</p>
                  <span className="flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary">
                    Details <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>

              {/* Service 2 */}
              <Link href="/services/estate-development" className="group block h-full">
                <div className="relative h-full border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-xl hover:-translate-y-1">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <LandPlot className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold uppercase mb-3 group-hover:text-secondary transition-colors">Estate & Property Development Construction</h3>
                  <p className="text-sm text-muted-foreground mb-4">Turnkey and phased estate developments, including internal infrastructure.</p>
                  <span className="flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-secondary">
                    Details <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>

              {/* Service 3 */}
              <Link href="/services/civil-works" className="group block h-full">
                <div className="relative h-full border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-xl hover:-translate-y-1">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-zinc-100 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors dark:bg-zinc-800 dark:text-zinc-100">
                    <LandPlot className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold uppercase mb-3 group-hover:text-primary transition-colors">Civil Works & Development Infrastructure</h3>
                  <p className="text-sm text-muted-foreground mb-4">Estate and access roads, drainage systems, earthworks, and site formation.</p>
                  <span className="flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary">
                    Details <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>

              {/* Service 4 */}
              <Link href="/services/project-management" className="group block h-full">
                <div className="relative h-full border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-xl hover:-translate-y-1">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <HardHat className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold uppercase mb-3 group-hover:text-primary transition-colors">Project Execution & Construction Management</h3>
                  <p className="text-sm text-muted-foreground mb-4">Planning, cost and quality control, supervision, and coordinated delivery.</p>
                  <span className="flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary">
                    Details <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. WHY CHOOSE US */}
        <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
          {/* Abstract BG element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skewed transform -skew-x-12" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8 text-white leading-tight">
                  Why Clients Choose Us
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  We combine hands-on construction experience with structured project controls to deliver predictable outcomes.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase mb-2">Disciplined execution and site control</h4>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase mb-2">Clear accountability for cost, time, and quality</h4>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase mb-2">Independent project teams</h4>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase mb-2">Scalable delivery through structured partnerships</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[600px] w-full rounded-sm overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                {/* Background image for this section - reusing one of the site images */}
                <div className="absolute inset-0 bg-[url('/images/capabilities/delivery-model.jpg')] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. EXPERIENCE SIGNAL */}
        <section className="py-24 bg-zinc-100 dark:bg-zinc-900 border-b border-border">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Experience Signal</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Since 2021, we have executed construction works across residential and commercial developments, delivering complete buildings and supporting infrastructure.
            </p>
            <Button href="/experience" size="lg" variant="outline">View Our Experience</Button>
          </div>
        </section>

        {/* 6. GEOGRAPHIC POSTURE */}
        <section className="py-24 bg-white dark:bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/company/markets-geography.jpg')] bg-cover bg-center" />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                  <TrendingUp className="h-4 w-4" /> Geographic Posture
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Our operations are currently based in Ghana. Our systems, standards, and delivery approach are designed to support growth across African markets as opportunities arise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PRIMARY CTA */}
        <section className="py-24 bg-primary text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
              Ready to discuss your project?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="secondary" className="text-lg h-16 px-12" href="/contact">
                Request Proposal
              </Button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
