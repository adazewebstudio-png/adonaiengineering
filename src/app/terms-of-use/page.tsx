import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
    title: "Terms of Use",
    description: "Terms and conditions for using Adonai Engineering and Construction Ltd's website.",
};

export default function TermsOfUsePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Terms of Use"
                subtitle="Legal terms governing the use of our digital platforms."
            />

            <div className="container py-24 px-4 md:px-6">
                <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tight">
                    <p className="text-sm text-muted-foreground mb-8 text-center italic">
                        Effective Date: January 24, 2026
                    </p>

                    <section className="mb-12">
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to the website of Adonai Engineering and Construction Ltd ("the Company," "we," "us," or "our").
                            By accessing or using our website, you agree to comply with and be bound by these Terms of Use.
                            If you do not agree with any part of these terms, you must not use our website.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2>2. Intellectual Property Rights</h2>
                        <p>
                            All content on this website, including but not limited to text, graphics, logos, images, design, and technical drawings,
                            is the property of Adonai Engineering and Construction Ltd or its licensors and is protected by copyright, trademark,
                            and other intellectual property laws in Ghana and internationally.
                        </p>
                        <p>
                            You may view and download content for personal, non-commercial use only. Any unauthorized reproduction,
                            distribution, or modification of the content is strictly prohibited.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2>3. No Professional Advice</h2>
                        <p>
                            The information provided on this website is for general informational purposes only. It does not constitute
                            engineering, architectural, or construction advice. While we strive for accuracy, the Company makes no
                            representations or warranties regarding the completeness or accuracy of any information provided.
                            Formal professional advice should be sought for specific projects.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2>4. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, Adonai Engineering and Construction Ltd shall not be liable for any
                            direct, indirect, incidental, or consequential damages arising out of your use of, or inability to use, our website.
                            This include, but is not limited to, damages for loss of profits, business interruption, or loss of data.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2>5. User Conduct</h2>
                        <p>
                            You agree not to use the website in any way that causes, or may cause, damage to the website or impairment
                            of the availability or accessibility of the website. You must not use our website to copy, store, host,
                            transmit, send, use, publish, or distribute any material which consists of (or is linked to) any spyware,
                            computer virus, or other malicious software.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2>6. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites. These links are provided for convenience only.
                            We do not endorse and are not responsible for the content or practices of any third-party sites.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2>7. Governing Law</h2>
                        <p>
                            These Terms of Use shall be governed by and construed in accordance with the laws of the Republic of Ghana.
                            Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of Ghana.
                        </p>
                    </section>

                    <section className="mb-12 text-center pt-8 border-t border-border">
                        <p className="font-bold">Contact Legal Department</p>
                        <p className="text-sm">
                            If you have any questions regarding these Terms of Use, please contact us at: <br />
                            <a href="mailto:legal@adonaiengineeringltd.com" className="text-primary hover:underline">legal@adonaiengineeringltd.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
