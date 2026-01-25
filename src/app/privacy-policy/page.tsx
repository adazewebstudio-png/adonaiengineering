import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for Adonai Engineering and Construction Ltd, ensuring compliance with Ghana's Data Protection Act.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Privacy Policy"
                subtitle="Our commitment to protecting your personal data and privacy."
            />

            <div className="container py-24 px-4 md:px-6">
                <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tight">
                    <p className="text-sm text-muted-foreground dark:text-white mb-8 text-center italic">
                        Effective Date: January 24, 2026
                    </p>

                    <section className="mb-12">
                        <h2>1. Policy Overview</h2>
                        <p>
                            Adonai Engineering and Construction Ltd is committed to protecting the privacy and security of your personal data.
                            This policy describes how we collect, use, and safeguard the information you provide to us through our website,
                            in accordance with the <strong>Data Protection Act, 2012 (Act 843) of Ghana</strong>.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2>2. Information We Collect</h2>
                        <p>
                            We may collect personal information when you interact with our website, such as when you fill out a contact form
                            or request a proposal. This information may include:
                        </p>
                        <ul>
                            <li>Full Name</li>
                            <li>Email Address</li>
                            <li>Phone Number</li>
                            <li>Company/Organization Name</li>
                            <li>Project Details and Location</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2>3. How We Use Your Information</h2>
                        <p>
                            The information we collect is used solely for professional purposes, including:
                        </p>
                        <ul>
                            <li>Responding to your project enquiries and requests for proposals.</li>
                            <li>Providing information about our services and capabilities.</li>
                            <li>Communicating regarding project management and site updates.</li>
                            <li>Improving our website performance and user experience.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2>4. Data Storage and Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your data against unauthorized access,
                            loss, or disclosure. Personal data is stored on secure servers and is only accessible by authorized personnel
                            required to handle your enquiry.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2>5. Disclosure to Third Parties</h2>
                        <p>
                            We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include
                            trusted partners who assist us in operating our website or conducting our business, so long as those parties
                            agree to keep this information confidential. We may also release information when required to comply with
                            Ghanaian law.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2>6. Your Rights</h2>
                        <p>
                            In accordance with Act 843, you have the right to request access to the personal data we hold about you,
                            the right to request corrections, and the right to request the deletion of your data from our systems.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2>7. Modernized Answer Engine Optimization (AEO) Statement</h2>
                        <p>
                            This website may use cookies or similar tracking technologies to analyze trends and track user movement around the site
                            to improve our visibility on search and answer engines. No sensitive personal data is shared with AI training
                            crawlers without your explicit interaction with our forms.
                        </p>
                    </section>

                    <section className="mb-12 text-center pt-8 border-t border-border">
                        <p className="font-bold">Data Protection Officer</p>
                        <p className="text-sm">
                            For any data-related requests or privacy concerns, please contact our designated officer: <br />
                            <a href="mailto:legal@adonaiengineeringltd.com" className="text-primary hover:underline">legal@adonaiengineeringltd.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
