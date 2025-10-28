"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight, TrendingUp, Users, Award, Target } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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

      {/* About Hero Section */}
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
              ✨ Meet Your Coach
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent font-serif">
              Radha Krishna
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed px-4">
              A Stock Market Specialist, a professional who helps every
              individual improve their income and create wealth by following the
              right systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="pt-6 pb-20 sm:py-32 md:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="md:container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white font-serif leading-tight">
                Why Choose{" "}
                <span className="bg-blue-600 bg-clip-text text-transparent">
                  Stock Navii
                </span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  With 13+ Yearsof Stock market journey, results have shown up
                  once my life transformed personally in every area. So I always
                  believe to change your life, 'you need to change first'.
                </p>
                <p>
                  Are you a person who is looking to change your life
                  'Personally and Financially'? Then you are at the right place
                  with the right person at the right time.
                </p>
                <p>
                  I specialize in Responsible Investing and help you unlock your
                  path to financial independence by empowering you with
                  knowledge and strategies to achieve financial independence in
                  stock market trading.
                </p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="group relative px-8 py-4 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-2xl overflow-hidden"
                >
                  <a
                    href="/contact"
                    className="relative z-10 flex items-center"
                  >
                    Join The Stock Navii Community
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-white/20 dark:border-slate-700/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-3 sm:mb-4 mx-auto">
                      <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      10+
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      Years Experience
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-3 sm:mb-4 mx-auto">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      1000+
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      Students Guided
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-3 sm:mb-4 mx-auto">
                      <Award className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      95%
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      Success Rate
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-3 sm:mb-4 mx-auto">
                      <Target className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      300%
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      Average Returns
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/50 dark:from-blue-950/20 dark:via-slate-900 dark:to-blue-950/20 relative overflow-hidden">
        <div className="md:container mx-auto relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-0"
            >
              Our Values
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white font-serif leading-tight px-4">
              What Drives{" "}
              <span className="bg-blue-600 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Personal Transformation",
                description:
                  "We believe that to change your life, you need to change first. Personal growth leads to financial growth.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Community Support",
                description:
                  "Join a community of like-minded individuals all working towards financial independence together.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Proven Results",
                description:
                  "13+ Yearsof market experience with documented results and a track record of helping students succeed.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-4 sm:mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white font-serif leading-tight px-4">
              Ready to Transform Your{" "}
              <span className="bg-blue-600 bg-clip-text text-transparent">
                Financial Future?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed px-4">
              Join thousands of successful traders who have unlocked their path
              to financial independence with Stock Navii.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Button
                size="lg"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg"
              >
                Start Your Journey Today
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg border-2 border-blue-600/30 dark:border-blue-400/30 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50"
              >
                <Link href="/contact">Contact Radha Krishna</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
