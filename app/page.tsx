"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Cpu,
  Database,
  Globe,
  Instagram,
  Lightbulb,
  Linkedin,
  Menu,
  Moon,
  Rocket,
  Shield,
  Star,
  Sun,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 transform-gpu z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Bento Grid */}
      <ServicesBentoGrid />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Client Logos */}
      {/* <ClientLogosSection /> */}

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Banner */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

function HeroSection() {
  const [glitchText, setGlitchText] = useState("YOUR STOCK MARKET NAVIGATOR");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const originalText = "YOUR STOCK MARKET NAVIGATOR";

    const glitchInterval = setInterval(() => {
      let glitched = originalText;
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * originalText.length);
        const randomChar =
          glitchChars[Math.floor(Math.random() * glitchChars.length)];
        glitched =
          glitched.substring(0, randomIndex) +
          randomChar +
          glitched.substring(randomIndex + 1);
      }
      setGlitchText(glitched);

      setTimeout(() => setGlitchText(originalText), 100);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-20 px-6 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-60"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
            rotate: 360,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-6 h-6 bg-blue-400 rounded-full opacity-40"
          animate={{
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5,
            rotate: -360,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 15 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-600 rounded-full opacity-50"
          animate={{
            x: mousePosition.x * 3,
            y: mousePosition.y * 3,
            scale: [1, 1.2, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 40, damping: 10 },
            y: { type: "spring", stiffness: 40, damping: 10 },
            scale: { duration: 2, repeat: Infinity },
          }}
        />
      </div>

      <div className="md:container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* <div className="mb-8">
              <Badge
                variant="secondary"
                className="mb-6 px-6 py-2 text-sm font-medium bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 text-blue-600 dark:text-blue-400"
              >
                ✨ Navigate Your Financial Future Since 2020
              </Badge>
            </div> */}

            <h1 className="hero-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-left">
              <span className="font-serif tracking-tight block">
                <span className="block text-blue-500 hover:text-indigo-500 transition-colors duration-300">
                  YOUR
                </span>
                <span className="block text-blue-500 hover:text-indigo-500 transition-colors duration-300">
                  STOCK MARKET NAVIGATOR
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed font-light text-left">
              Unlocking Your Path to{" "}
              <span className="font-semibold bg-blue-600 bg-clip-text text-transparent">
                Financial Independence
              </span>
              : By Empowering You with Knowledge and Strategies to Achieve
              Financial Independence in Stock Market Trading
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-start items-start">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
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
              {/* 
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="group px-8 py-4 text-base font-semibold border-2 border-blue-600/30 dark:border-blue-400/30 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 rounded-2xl backdrop-blur-sm bg-white/10 dark:bg-slate-800/20"
                >
                  Unlock Trading Secrets
                  <motion.div
                    className="ml-3 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ArrowRight className="h-3 w-3 text-white" />
                  </motion.div>
                </Button>
              </motion.div> */}
            </div>
          </motion.div>

          {/* Right Column - Hero Banner Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-2xl">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-2xl scale-110" />

              {/* Hero Banner Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src="/stocknavii-website-hero-banner-2.png"
                  alt="Stock Navii Hero Banner"
                  width={600}
                  height={500}
                  className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-40"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Centered below grid */}
        <div className="mt-16 flex flex-col items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
            Scroll to explore
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-blue-600 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="pt-4 md:py-32 px-6 relative overflow-hidden"
    >
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-blue-50/30 to-blue-50/50 dark:from-slate-900/50 dark:via-blue-950/30 dark:to-blue-950/50 backdrop-blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.2),transparent_50%)]" />

      <div className="md:container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-16 items-center">
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-0"
              >
                About Stock Navii
              </Badge>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white font-serif leading-tight">
              Navigating Your{" "}
              <span className="bg-blue-600 bg-clip-text text-transparent">
                Financial Future
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                We are your dedicated stock market navigator, specializing in
                empowering individuals with the knowledge and strategies needed
                to achieve financial independence through smart stock market
                trading. Our mission is to unlock your path to financial freedom
                through expert guidance and proven trading methodologies.
              </p>
              <p>
                With a team of experienced traders, financial analysts, and
                market experts, we provide comprehensive education and support
                that fundamentally transforms how individuals approach stock
                market investing, creating sustainable wealth-building
                strategies through proven trading techniques.
              </p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4 mt-16 md:mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                { label: "13+ YearsTrading Experience", icon: "🏆" },
                { label: "1000+ Successful Traders", icon: "🚀" },
                { label: "95% Success Rate", icon: "❤️" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group"
                >
                  <Badge
                    variant="secondary"
                    className="px-6 py-3 text-sm font-medium bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    {item.label}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Liquid Glass Card */}
            <motion.div
              className="relative group cursor-pointer mt-12"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              <div className="relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-2xl rounded-3xl p-5 md:p-10 border border-white/20 dark:border-slate-700/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                {/* Refractive Light Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-indigo-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <motion.div
                    className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Lightbulb className="h-10 w-10" />
                  </motion.div>

                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white font-serif">
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    To empower individuals with the knowledge and strategies
                    needed to achieve financial independence through stock
                    market trading. We unlock the 3 secrets to stock market
                    success: Risk Management mastery, proven trading strategies,
                    and building a supportive trading community.
                  </p>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60 group-hover:scale-125 transition-transform duration-300" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-40 group-hover:scale-125 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesBentoGrid() {
  const services = [
    {
      title: "Risk Management Secrets",
      description:
        "Discover the closely guarded secrets of expert risk management strategies that protect your capital while maximizing returns in volatile market conditions.",
      icon: <Shield className="h-10 w-10" />,
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Position Sizing",
        "Stop Loss Strategy",
        "Portfolio Balance",
        "Risk Assessment",
      ],
      stats: "95% Protection Rate",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Trading Strategies",
      description:
        "Proven trading methodologies and market analysis techniques that help you identify profitable opportunities and make informed investment decisions.",
      icon: <TrendingUp className="h-8 w-8" />,
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Technical Analysis",
        "Market Timing",
        "Entry/Exit Points",
        "Trend Following",
      ],
      stats: "300% Average Returns",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Market Analysis & Insights",
      description:
        "Advanced market analysis tools and real-time insights that help you understand market trends, identify patterns, and make data-driven trading decisions.",
      icon: <Cpu className="h-8 w-8" />,
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Chart Analysis",
        "Market Indicators",
        "Trend Prediction",
        "Real-time Data",
      ],
      stats: "90% Accuracy Rate",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    },
    {
      title: "Community & Support",
      description:
        "Join an exclusive community of successful traders with 24/7 support, live trading sessions, and continuous learning opportunities to accelerate your trading journey.",
      icon: <Users className="h-8 w-8" />,
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Live Trading Sessions",
        "Expert Mentorship",
        "Community Forum",
        "24/7 Support",
      ],
      stats: "1000+ Active Members",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <section className="pt-16 md:py-32 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.2),transparent_50%)]" />

      <div className="md:container mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-0"
          >
            The 3 Secrets to Stock Market Success
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white font-serif leading-tight px-4">
            Unlock{" "}
            <span className="bg-blue-600 bg-clip-text text-transparent">
              Trading Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the proven strategies and insider knowledge that separate
            successful traders from the rest
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-32 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.title}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-4 md:gap-16 lg:gap-20`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
              >
                {/* Content Card */}
                <motion.div
                  className="flex-1 w-full"
                  whileHover={{
                    scale: 1.02,
                    y: -10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full bg-white/10 dark:bg-slate-800/10 backdrop-blur-2xl border border-white/20 dark:border-slate-700/20 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl overflow-hidden group">
                    <CardContent className="p-8 lg:p-12 h-full flex flex-col relative">
                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                      />

                      {/* Header with Icon and Stats */}
                      <div className="flex items-start justify-between mb-8">
                        <motion.div
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                        >
                          {service.icon}
                        </motion.div>
                        <Badge
                          variant="secondary"
                          className="ml-4 px-4 py-2 text-sm font-medium bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm border-0 text-gray-700 dark:text-gray-300"
                        >
                          {service.stats}
                        </Badge>
                      </div>

                      <div className="flex-grow relative z-10">
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-serif leading-tight mb-6">
                          {service.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg lg:text-xl">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-2 gap-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center space-x-2"
                              whileHover={{ x: 5 }}
                            >
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* <motion.div className="mt-auto" whileHover={{ x: 5 }}>
                        <Button
                          size="lg"
                          className={`group bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-blue-500/25 text-white border-0 transition-all duration-300 rounded-xl px-8 py-3`}
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </motion.div> */}

                      {/* Decorative Elements */}
                      <div className="absolute top-6 right-6 w-3 h-3 bg-blue-400 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-300" />
                      <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-300 rounded-full opacity-40 group-hover:scale-200 transition-transform duration-300" />
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Image Section */}
                <motion.div
                  className="flex-1 w-full"
                  initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: isEven ? 5 : -5,
                  }}
                >
                  <div className="relative group cursor-pointer">
                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 transform scale-105`}
                    />

                    {/* Image Container */}
                    <div className="relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-2xl rounded-3xl p-4 border border-white/20 dark:border-slate-700/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 relative">
                        {/* Actual Image */}
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-10 transition-opacity duration-500`}
                        />

                        {/* Icon Overlay */}
                        <div className="absolute top-4 right-4">
                          <div
                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg`}
                          >
                            {service.icon}
                          </div>
                        </div>

                        {/* Overlay with service title */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                            <h4 className="text-lg font-semibold text-white">
                              {service.title}
                            </h4>
                            <p className="text-sm text-white/80">
                              Professional Solutions
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-60 group-hover:scale-125 transition-transform duration-300" />
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-300 rounded-full opacity-40 group-hover:scale-150 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Proven Track Record",
      description: "13+ Yearsof successful trading with documented results",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Management Mastery",
      description:
        "Expert strategies to protect your capital and maximize returns",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Support",
      description: "Join 1000+ successful traders in our exclusive community",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Real-time Market Insights",
      description: "Get instant market analysis and trading opportunities",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Advanced Tools",
      description: "Cutting-edge trading tools and analytical software",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Fast Results",
      description: "Start seeing profitable trades within your first month",
      color: "from-blue-500 to-blue-600",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="md:py-32 px-6 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/50 dark:from-blue-950/20 dark:via-slate-900 dark:to-blue-950/20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.2),transparent_50%)]" />

      <div className="md:container mx-auto relative z-10 py-12">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-0"
          >
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white font-serif leading-tight px-4">
            What Sets Us{" "}
            <span className="bg-blue-600 bg-clip-text text-transparent">
              Apart
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the unique advantages that make us the preferred choice for
            digital transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="w-full"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
            >
              <Card className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl border border-white/20 dark:border-slate-700/20 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl overflow-hidden group">
                <CardContent className="p-8 text-center relative">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                  />

                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-serif">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {feature.description}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-60 group-hover:scale-125 transition-transform duration-300" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-300 rounded-full opacity-40 group-hover:scale-150 transition-transform duration-300" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicators */}
        {/* <div className="flex justify-center mt-8 space-x-2">
          {features.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 opacity-50"
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}

function ClientLogosSection() {
  const logos = [
    { name: "TechCorp", gradient: "from-blue-500 to-blue-600" },
    { name: "InnovateLab", gradient: "from-blue-500 to-blue-600" },
    { name: "DataFlow", gradient: "from-blue-500 to-blue-600" },
    { name: "CloudSync", gradient: "from-blue-500 to-blue-600" },
    { name: "AI Solutions", gradient: "from-blue-500 to-blue-600" },
    { name: "WebMaster", gradient: "from-blue-500 to-blue-600" },
    { name: "DigitalEdge", gradient: "from-blue-500 to-blue-600" },
    { name: "FutureTech", gradient: "from-blue-500 to-blue-600" },
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-900 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]" />

      <div className="md:container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-0"
          >
            Trusted Partners
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white font-serif">
            Trusted by{" "}
            <span className="bg-blue-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join the growing list of successful companies we've helped transform
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="flex gap-4 md:gap-16 items-center justify-center"
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <motion.div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="w-48 h-24 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-slate-700/20 group-hover:border-blue-200 dark:group-hover:border-blue-700">
                  <div
                    className={`text-2xl font-bold bg-gradient-to-r ${logo.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                  >
                    {logo.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-slate-900 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-slate-900 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Independent Trader",
      role: "Day Trader",
      content:
        "Stock Navii completely transformed my trading approach. Their risk management strategies helped me achieve 250% returns while protecting my capital. Life-changing!",
      rating: 5,
      avatar: "SM",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Michael Chen",
      company: "Portfolio Manager",
      role: "Investment Professional",
      content:
        "Outstanding market analysis and trading insights. The community support and expert guidance exceeded all my expectations. My portfolio grew by 180% in 6 months.",
      rating: 5,
      avatar: "MC",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Emily Rodriguez",
      company: "Swing Trader",
      role: "Financial Analyst",
      content:
        "Their trading strategies delivered exceptional results. I learned the 3 secrets to stock market success and achieved financial independence within a year!",
      rating: 5,
      avatar: "ER",
      gradient: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <section className="md:py-32 px-6 bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-blue-50/80 dark:from-slate-950/80 dark:via-blue-950/30 dark:to-blue-950/80 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.2),transparent_50%)]" />

      <div className="md:container mx-auto relative z-10 my-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-0"
          >
            Client Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white font-serif leading-tight px-4">
            What Our{" "}
            <span className="bg-blue-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real feedback from satisfied customers who've experienced
            transformational results
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
            >
              <Card className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl border border-white/20 dark:border-slate-700/20 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl overflow-hidden group">
                <CardContent className="p-8 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-6xl text-blue-200 dark:text-blue-800 opacity-50 font-serif">
                    "
                  </div>

                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="h-6 w-6 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-8 italic text-lg leading-relaxed relative z-10">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      {testimonial.avatar}
                    </motion.div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-60 group-hover:scale-125 transition-transform duration-300" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
