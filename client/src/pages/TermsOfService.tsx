import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-brand-gradient py-16 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                    >
                        TERMS AND CONDITIONS
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-blue-100"
                    >
                        Last Updated: 24th January 2026
                    </motion.p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-12">
                        <div className="prose prose-slate max-w-none">
                            <p className="lead text-lg text-slate-600 mb-8">
                                These Terms and Conditions (“Terms”) govern your access to and use of the website operated by Eazytaxes Inc. (“Eazytaxes,” “we,” “our,” or “us”). By accessing or using this website, you agree to be bound by these Terms.
                            </p>
                            <p className="text-slate-600 mb-8 font-medium">
                                If you do not agree with these Terms, you should not access or use this website.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Nature of Information Provided</h2>
                            <p className="text-slate-600 mb-4">
                                All content on this website is provided for general informational purposes only. Information presented may not be complete, accurate, or current and is subject to change without notice.
                            </p>
                            <p className="text-slate-600 mb-4">Nothing on this website constitutes:</p>
                            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
                                <li>Tax advice</li>
                                <li>Legal advice</li>
                                <li>Accounting advice</li>
                                <li>Financial or investment advice</li>
                                <li>A recommendation or representation of services</li>
                            </ul>
                            <p className="text-slate-600 mb-8">
                                You should not rely on any information on this website to make decisions without obtaining professional advice tailored to your specific circumstances.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. No Client or Advisory Relationship</h2>
                            <p className="text-slate-600 mb-4">
                                Accessing this website, submitting an inquiry, contacting us by email, phone, or form, or downloading materials does not create a client, advisor, fiduciary, or professional relationship with Eazytaxes.
                            </p>
                            <p className="text-slate-600 mb-8">
                                A client relationship is established only through a formal written engagement agreement signed by both parties.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. No Reliance / No Representations</h2>
                            <p className="text-slate-600 mb-4">Eazytaxes makes no representations or warranties, express or implied, regarding:</p>
                            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
                                <li>The accuracy, completeness, or reliability of website content</li>
                                <li>The suitability of any information for a particular purpose</li>
                                <li>The availability of any service described</li>
                            </ul>
                            <p className="text-slate-600 mb-8">
                                You agree that no reliance has been placed on website content in deciding to engage or not engage Eazytaxes.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Services and Availability</h2>
                            <p className="text-slate-600 mb-4">Services described on this website:</p>
                            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
                                <li>May not be available in all jurisdictions</li>
                                <li>May be subject to regulatory, licensing, eligibility, or engagement-specific requirements</li>
                                <li>Are provided only pursuant to written engagement terms</li>
                            </ul>
                            <p className="text-slate-600 mb-8">
                                Eazytaxes reserves the right to decline any engagement at its discretion.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Professional Capacity and Service Delivery</h2>
                            <p className="text-slate-600 mb-4">Services may be performed by:</p>
                            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
                                <li>Licensed professionals (including CPAs, Enrolled Agents, or other credentialed professionals)</li>
                                <li>Supervised team members</li>
                                <li>Affiliates or contractors</li>
                            </ul>
                            <p className="text-slate-600 mb-8">
                                The composition of service teams depends on the engagement scope and jurisdiction.
                            </p>
                            <p className="text-slate-600 mb-8 text-primary font-medium">
                                We are partnered with Octondata for the Tax Eazytaxes dashboard, document collection, client portal, and other related functionalities.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
                            <p className="text-slate-600 mb-4">
                                All content on this website, including text, graphics, logos, designs, and layout, is the property of Eazytaxes Inc. or its licensors and is protected by applicable intellectual property laws.
                            </p>
                            <p className="text-slate-600 mb-8">
                                You may not copy, reproduce, distribute, or exploit any content without prior written consent.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
                            <p className="text-slate-600 mb-4">To the maximum extent permitted by law, Eazytaxes shall not be liable for:</p>
                            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
                                <li>Any direct, indirect, incidental, consequential, or special damages</li>
                                <li>Loss of profits, data, business, or opportunities</li>
                                <li>Claims arising from reliance on website information</li>
                            </ul>
                            <p className="text-slate-600 mb-8">
                                Your use of this website is entirely at your own risk.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Third-Party Links</h2>
                            <p className="text-slate-600 mb-8">
                                This website may contain links to third-party websites. Eazytaxes does not control or endorse such websites and is not responsible for their content, policies, or practices.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Governing Law and Jurisdiction</h2>
                            <p className="text-slate-600 mb-8">
                                These Terms and any disputes arising out of or relating to this website shall be governed by the laws of the State of Florida, United States, without regard to conflict-of-laws principles.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to These Terms</h2>
                            <p className="text-slate-600 mb-8">
                                Eazytaxes may update these Terms at any time without notice. Continued use of the website constitutes acceptance of the revised Terms.
                            </p>

                            <hr className="my-8 border-slate-200" />

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Information</h2>
                            <p className="text-slate-600 mb-2">For questions regarding these Terms, contact:</p>
                            <p className="text-lg font-semibold text-primary">
                                <a href="mailto:contact@eazytaxes.com" className="hover:underline">
                                    contact@eazytaxes.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
