import Link from "next/link";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-foreground text-background py-12 md:py-16 border-t border-primary/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">

                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-10 w-10 overflow-hidden bg-white p-1 rounded-sm">
                                <Image
                                    src="/logo.jpg"
                                    alt="Adonai Engineering Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold uppercase tracking-tighter text-white">
                                Adonai
                            </span>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Premier engineering and construction services delivering industrial excellence across Ghana.
                        </p>
                    </div>

                    {/* Services Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold uppercase tracking-wider text-primary">Services</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services Overview</Link></li>
                            <li><Link href="/services/building-construction" className="hover:text-primary transition-colors">Building Construction</Link></li>
                            <li><Link href="/services/estate-development" className="hover:text-primary transition-colors">Estate Development</Link></li>
                            <li><Link href="/services/civil-works" className="hover:text-primary transition-colors">Civil Works</Link></li>
                            <li><Link href="/services/project-management" className="hover:text-primary transition-colors">Project Management</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold uppercase tracking-wider text-primary">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/capabilities" className="hover:text-primary transition-colors">Capabilities</Link></li>
                            <li><Link href="/experience" className="hover:text-primary transition-colors">Experience & Portfolio</Link></li>
                            <li><Link href="/safety-quality" className="hover:text-primary transition-colors">Safety & Quality</Link></li>
                            <li><Link href="/markets-geography" className="hover:text-primary transition-colors">Markets & Geography</Link></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold uppercase tracking-wider text-primary">Support</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
                            <li><Link href="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
                            <li><Link href="/terms-of-use" className="hover:text-primary transition-colors">Terms of Use</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact & Request a Proposal</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold uppercase tracking-wider text-primary">Contact</h3>
                        <address className="not-italic text-sm text-gray-300 space-y-2">
                            <p>Ho, Ghana</p>
                            <p><a href="mailto:enquiries@adonaiengineeringltd.com" className="hover:text-primary text-white">enquiries@adonaiengineeringltd.com</a></p>
                            <p><a href="tel:+233248629946" className="hover:text-primary text-white">+233 24 862 9946</a></p>
                        </address>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {currentYear} Adonai Engineering And Construction Ltd. All rights reserved.</p>
                    <p className="text-center">Engineered to Last.</p>
                    <p>Built by <a href="https://adazewebstudio.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Adaze Web Studio</a></p>
                </div>
            </div>
        </footer>
    );
}
