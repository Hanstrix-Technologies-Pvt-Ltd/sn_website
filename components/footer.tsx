"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Trading Services",
      links: [
        { name: "Risk Management", href: "/risk-management" },
        { name: "Trading Strategies", href: "/trading-strategies" },
        { name: "Market Analysis", href: "/market-analysis" },
        { name: "Community Access", href: "/community" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      gradient: "from-blue-400 to-blue-600",
      icon: <Instagram className="h-6 w-6" />,
      platform: "Instagram",
      url: "https://www.instagram.com/stocknavii",
    },
    {
      name: "LinkedIn",
      gradient: "from-blue-500 to-blue-700",
      icon: <Linkedin className="h-6 w-6" />,
      platform: "LinkedIn",
      url: "https://www.linkedin.com/company/stocknavii/",
    },
    {
      name: "Facebook",
      gradient: "from-blue-600 to-blue-800",
      icon: (
        <div className="h-10 w-10 flex items-center justify-center">
          <span className="text-white font-bold text-xl">f</span>
        </div>
      ),
      platform: "Facebook",
      url: "https://www.facebook.com/stocknavii",
    },
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-slate-900 via-blue-50 dark:via-blue-950/50 to-blue-50 dark:to-blue-950/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(147,51,234,0.1),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-blue-400 bg-clip-text text-transparent font-serif">
                Stock Navii
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
                Your Stock Market Navigator. Unlocking Your Path to Financial
                Independence through proven trading strategies and expert market
                guidance.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <motion.div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center cursor-pointer group relative`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <div className="text-white group-hover:scale-110 transition-transform duration-300">
                          {social.icon}
                        </div>
                      </motion.div>
                    </Link>
                    {/* Hover text */}
                    <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                      Follow us on {social.platform}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white font-serif">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: sectionIndex * 0.1 + linkIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                    >
                      <p className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block group">
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
                        </span>
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16 p-8 rounded-3xl bg-gray-100 dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <h5 className="font-semibold mb-2 text-blue-400">Address</h5>
            <p className="text-gray-700 dark:text-gray-300">
              Raja Rajeshwari Nagar
              <br />
              Bengaluru - 560068
              <br />
              Karnataka, India
            </p>
          </div>
          <div className="text-center md:text-left">
            <h5 className="font-semibold mb-2 text-blue-400">Contact</h5>
            <p className="text-gray-700 dark:text-gray-300">
              Phone: +91 97014 61661
              <br />
              Email: info@stocknavii.com
              <br />
              Support: WhatsApp Available
            </p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-300 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            &copy; 2025 . All Rights Reserved By Stock Navii. Designed By Team
            &nbsp;
            <a href="https://hanstrix.com" target="_blank">
              hanstrix.com
            </a>
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
