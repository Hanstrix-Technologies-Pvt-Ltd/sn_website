"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FileText, Shield, AlertCircle } from "lucide-react";

export default function TermsPage() {
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

      {/* Terms Hero Section */}
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
              <FileText className="w-4 h-4 mr-2" />
              Legal Information
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent font-serif">
              Terms & Conditions
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed">
              Please read these terms and conditions carefully before using our
              services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  1. Introduction
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Welcome to Stock Navii. These Terms and Conditions ("Terms")
                  govern your use of our website, services, and trading
                  education platform. By accessing or using our services, you
                  agree to be bound by these Terms.
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  2. Our Services
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Stock Navii provides:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    Educational content about stock market trading and
                    investment strategies
                  </li>
                  <li>Market analysis and insights</li>
                  <li>Trading guidance and mentorship</li>
                  <li>Community access for learning and discussion</li>
                  <li>Risk management techniques and tools</li>
                </ul>
              </div>

              {/* Risk Disclaimer */}
              <div className="bg-yellow-50/50 dark:bg-yellow-950/50 rounded-2xl p-6 border border-yellow-200/20 dark:border-yellow-800/20">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Risk Disclaimer
                    </h3>
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm leading-relaxed">
                      Trading and investing in financial markets involves
                      substantial risk of loss and is not suitable for all
                      investors. Past performance does not guarantee future
                      results. All information provided is for educational
                      purposes only and should not be considered as financial
                      advice.
                    </p>
                  </div>
                </div>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  3. User Responsibilities
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>By using our services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Provide accurate and complete information when registering
                    </li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Not share your account credentials with others</li>
                    <li>Respect intellectual property rights</li>
                    <li>Not engage in any form of market manipulation</li>
                    <li>
                      Understand that all trading decisions are your own
                      responsibility
                    </li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  4. Intellectual Property
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  All content, including but not limited to text, graphics,
                  logos, images, audio clips, digital downloads, and software,
                  is the property of Stock Navii and is protected by
                  international copyright laws. Unauthorized reproduction or
                  distribution is prohibited.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  5. Limitation of Liability
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Stock Navii and its affiliates shall not be liable for any
                  direct, indirect, incidental, special, or consequential
                  damages resulting from your use of our services or any trading
                  decisions made based on our educational content. You
                  acknowledge that trading involves risk and you are solely
                  responsible for your trading decisions.
                </p>
              </div>

              {/* Privacy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  6. Privacy
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy
                  Policy to understand how we collect, use, and protect your
                  personal information.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  7. Termination
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We may terminate or suspend your access to our services at any
                  time, without prior notice, for conduct that we believe
                  violates these Terms or is harmful to other users, us, or
                  third parties.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  8. Changes to Terms
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We
                  will notify users of any material changes by posting the new
                  Terms on our website. Your continued use of our services after
                  such modifications constitutes acceptance of the updated
                  Terms.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  9. Governing Law
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  These Terms shall be governed by and construed in accordance
                  with the laws of India. Any disputes arising under these Terms
                  shall be subject to the exclusive jurisdiction of the courts
                  in Bengaluru, Karnataka, India.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50/50 dark:bg-blue-950/50 rounded-2xl p-6 border border-blue-200/20 dark:border-blue-800/20">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                  10. Contact Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact
                  us:
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Email:</strong> info@stocknavii.com
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
