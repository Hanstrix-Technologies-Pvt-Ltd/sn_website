"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed px-4">
              Ready to transform your trading journey? Let's discuss your goals
              and explore how Stock Navii can help you achieve financial
              independence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-slate-800 border-0 shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    Send us a Message
                  </h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <Label
                          htmlFor="name"
                          className="text-gray-700 dark:text-gray-300 font-medium"
                        >
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-gray-700 dark:text-gray-300 font-medium"
                        >
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div>
                      <Label
                        htmlFor="company"
                        className="text-gray-700 dark:text-gray-300 font-medium"
                      >
                        Company
                      </Label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="subject"
                        className="text-gray-700 dark:text-gray-300 font-medium"
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="What's this about?"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="message"
                        className="text-gray-700 dark:text-gray-300 font-medium"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        className="mt-2 min-h-[120px]"
                      />
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-base sm:text-lg"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                  Contact Information
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                  We're here to help you navigate your stock market journey with
                  expert guidance and personalized coaching. Reach out to us
                  through any of the following channels.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  className="flex items-start space-x-3 sm:space-x-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Address
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      Raja Rajeshwari Nagar
                      <br />
                      Bengaluru - 560068
                      <br />
                      Karnataka, India
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3 sm:space-x-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Phone
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      +91 97014 61661
                      <br />
                      Available for consultations
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3 sm:space-x-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Email
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      info@stocknavii.com
                      <br />
                      For general inquiries and coaching
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Location Info */}
              <motion.div
                className="flex items-start space-x-3 sm:space-x-4"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center text-white flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Find Us in Bengaluru
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Raja Rajeshwari Nagar
                    <br />
                    Bengaluru - 560068, Karnataka
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 px-4 sm:px-6 bg-white dark:bg-slate-800">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">
              Consultation Hours
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Monday - Friday
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">9:00 AM - 6:00 PM</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Saturday</h3>
                  <p className="text-gray-600 dark:text-gray-300">10:00 AM - 4:00 PM</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sunday</h3>
                  <p className="text-gray-600 dark:text-gray-300">By Appointment</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Emergency
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">WhatsApp Support</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
