"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import AccountPopup from "@/components/login/AccountPopup";
import { useUser } from "@clerk/nextjs";
import { IconUser } from "@tabler/icons-react";
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAccountPopupOpen, setIsAccountPopupOpen] = useState(false);
  const { user: clerkUser, isSignedIn } = useUser();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  if (!mounted) return null;

  return (
    <>
    <motion.nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl border border-white/20 dark:border-slate-700/20"
          : "bg-white/10 dark:bg-slate-800/10 backdrop-blur-sm border border-white/20 dark:border-slate-700/20"
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="font-serif tracking-tight">
              <Image
                src={theme === "dark" ? "/logo-light.png" : "/logo.png"}
                alt="Logo"
                width={150}
                height={150}
                className="w-24 h-auto sm:w-32 md:w-40"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Link
                href="/"
                className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Link
                href="/about"
                className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Link
                href="/contact"
                className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-600 group-hover:text-slate-500 transition-colors duration-300" />
                )}
              </motion.button>
              
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-gray-900 dark:text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 pointer-events-none">
                {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </div>
            </div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block"
            >
              {isSignedIn && clerkUser ? (
                <Button onClick={() => setIsAccountPopupOpen(true)} className="bg-white/10 dark:bg-slate-800/50 text-gray-800 dark:text-gray-200 border border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-700/50">
                  {clerkUser.unsafeMetadata?.firstName as string || `${clerkUser.firstName ?? ''} ${clerkUser.lastName ?? ''}`.trim() || clerkUser.emailAddresses?.[0]?.emailAddress || 'Account'}
                  <IconUser className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={() => setIsAccountPopupOpen(true)} className=" bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  Login
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/20 dark:border-slate-700/20"
            >
              <div className="flex flex-col space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0 * 0.1 }}
                >
                  <Link
                    href="/"
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 * 0.1 }}
                >
                  <Link
                    href="/about"
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2 * 0.1 }}
                >
                  <Link
                    href="/contact"
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3 * 0.1 }}
                  className="pt-2"
                >
                  {isSignedIn && clerkUser ? (
                    <Button 
                      onClick={() => {
                        setIsAccountPopupOpen(true);
                        setIsMenuOpen(false);
                      }} 
                      className="w-full bg-white/10 dark:bg-slate-800/50 text-gray-800 dark:text-gray-200 border border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-700/50"
                    >
                      {clerkUser.unsafeMetadata?.firstName as string || `${clerkUser.firstName ?? ''} ${clerkUser.lastName ?? ''}`.trim() || clerkUser.emailAddresses?.[0]?.emailAddress || 'Account'}
                      <IconUser className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button 
                      onClick={() => {
                        setIsAccountPopupOpen(true);
                        setIsMenuOpen(false);
                      }} 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Login
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 4 * 0.1 }}
                  className="pt-2"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Join Community
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
    <AccountPopup open={isAccountPopupOpen} onClose={() => setIsAccountPopupOpen(false)} />
    </>
  );
}
