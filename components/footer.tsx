"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Website Development", href: "/website-development" },
        { name: "Digital Marketing", href: "/digital-marketing" },
        { name: "AI & ML", href: "/ai-ml" },
        { name: "ERP Solutions", href: "/erp-solutions" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/case-studies" },
        { name: "Documentation", href: "/docs" },
        { name: "Support", href: "/support" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Twitter", gradient: "from-blue-400 to-blue-600" },
    { name: "LinkedIn", gradient: "from-blue-600 to-blue-800" },
    { name: "GitHub", gradient: "from-gray-700 to-gray-900" },
    { name: "Dribbble", gradient: "from-pink-500 to-rose-600" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950/50 to-violet-950/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(99,102,241,0.1),transparent_50%)]" />

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
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent font-serif">
                Hanstrix Technologies
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
                Leading digital transformation solutions for modern businesses.
                We empower companies with innovative technology that drives
                growth and success.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center cursor-pointer group`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-white rounded-full group-hover:scale-110 transition-transform duration-300" />
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
                <h4 className="text-xl font-semibold mb-6 text-white font-serif">
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
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block group"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-violet-400 group-hover:w-full transition-all duration-300" />
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16 p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <h5 className="font-semibold mb-2 text-indigo-400">Address</h5>
            <p className="text-gray-300">
              123 Tech Street
              <br />
              Digital City, DC 12345
              <br />
              United States
            </p>
          </div>
          <div className="text-center md:text-left">
            <h5 className="font-semibold mb-2 text-violet-400">Contact</h5>
            <p className="text-gray-300">
              Phone: (555) 123-4567
              <br />
              Email: info@hanstrix.com
              <br />
              Support: 24/7 Available
            </p>
          </div>
          <div className="text-center md:text-left">
            <h5 className="font-semibold mb-2 text-pink-400">Business Hours</h5>
            <p className="text-gray-300">
              Mon - Fri: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; 2024 Hanstrix Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
