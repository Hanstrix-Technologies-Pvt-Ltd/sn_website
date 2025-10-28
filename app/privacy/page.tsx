"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Shield, Lock, Eye, Database, UserCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Privacy Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Badge
              variant="secondary"
              className="mb-6 px-4 sm:px-6 py-2 text-sm font-medium bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 text-blue-600 dark:text-blue-400"
            >
              <Shield className="w-4 h-4 mr-2" />
              Data Protection
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent font-serif">
              Privacy Policy
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and
              protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="relative py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-slate-700/20 p-8 sm:p-12 shadow-2xl"
          >
            <div className="space-y-8">
              {/* Last Updated */}
              <div className="bg-blue-50/50 dark:bg-blue-950/50 rounded-2xl p-6 border border-blue-200/20 dark:border-blue-800/20">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Last Updated:</strong> October 27, 2025
                </p>
              </div>

              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif flex items-center">
                  <UserCheck className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                  1. Introduction
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Stock Navii ("we," "our," or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit
                  our website or use our services. Please read this policy
                  carefully to understand our practices regarding your personal
                  data.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif flex items-center">
                  <Database className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                  2. Information We Collect
                </h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Personal Information
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We may collect personal information that you voluntarily
                    provide, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Account credentials and profile information</li>
                    <li>Payment and billing information</li>
                    <li>Trading experience and investment goals</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">
                    Automatically Collected Information
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website information</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We use the collected information for various purposes,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Providing and maintaining our services</li>
                  <li>Processing transactions and managing your account</li>
                  <li>Sending you educational content and market updates</li>
                  <li>Personalizing your experience on our platform</li>
                  <li>Communicating with you about our services</li>
                  <li>Improving our website and services</li>
                  <li>Complying with legal obligations</li>
                  <li>Preventing fraud and ensuring security</li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="bg-green-50/50 dark:bg-green-950/50 rounded-2xl p-6 border border-green-200/20 dark:border-green-800/20">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-green-600 dark:text-green-400" />
                  4. Data Security
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  These measures include encryption, secure servers, and regular
                  security assessments. However, no method of transmission over
                  the Internet is 100% secure.
                </p>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  5. Information Sharing and Disclosure
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information only in the
                  following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Service Providers:</strong> With trusted third-party
                    service providers who assist us in operating our business
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or
                    to protect our rights and safety
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a
                    merger, acquisition, or sale of assets
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> When you explicitly
                    agree to the sharing
                  </li>
                </ul>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  6. Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance
                  your experience on our website. These technologies help us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve website functionality and performance</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  You can control cookie settings through your browser
                  preferences, but disabling cookies may affect website
                  functionality.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  7. Your Rights and Choices
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Access:</strong> Request access to your personal
                    information
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of
                    inaccurate information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    information
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data
                    to another service
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Unsubscribe from marketing
                    communications
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> Withdraw consent for data
                    processing
                  </li>
                </ul>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  8. Data Retention
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, comply with legal obligations, resolve disputes, and
                  enforce our agreements. When we no longer need your
                  information, we will securely delete or anonymize it.
                </p>
              </div>

              {/* Third-Party Links */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  9. Third-Party Links
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices of these external
                  sites. We encourage you to review the privacy policies of any
                  third-party websites you visit.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  10. Children's Privacy
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our services are not intended for individuals under the age of
                  18. We do not knowingly collect personal information from
                  children under 18. If we become aware that we have collected
                  such information, we will take steps to delete it promptly.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  11. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or legal requirements. We will notify
                  you of any material changes by posting the new Privacy Policy
                  on our website and updating the "Last Updated" date. Your
                  continued use of our services after such changes constitutes
                  acceptance of the updated policy.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50/50 dark:bg-blue-950/50 rounded-2xl p-6 border border-blue-200/20 dark:border-blue-800/20">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  12. Contact Us
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Email:</strong> privacy@stocknavii.com
                  </p>
                  <p>
                    <strong>General Inquiries:</strong> info@stocknavii.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 97014 61661
                  </p>
                  <p>
                    <strong>Address:</strong> Raja Rajeshwari Nagar, Bengaluru -
                    560068, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
