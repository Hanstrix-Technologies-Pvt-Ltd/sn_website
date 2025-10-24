// app/layout.tsx

import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import "./globals.css";
import Providers from "@/app/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Hanstrix Technologies - Digital Transformation Agency",
  description: "Leading digital transformation solutions for modern businesses. Specializing in web development, AI/ML, digital marketing, and custom ERP solutions with cutting-edge technology and innovative approaches.",
  keywords: "digital transformation, web development, AI, machine learning, ERP solutions, digital marketing, Next.js, React, modern web design",
  authors: [{ name: "Hanstrix Technologies" }],
  creator: "Hanstrix Technologies",
  publisher: "Hanstrix Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hanstrix.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Hanstrix Technologies - Digital Transformation Agency",
    description: "Leading digital transformation solutions for modern businesses with cutting-edge technology and innovative approaches.",
    url: "https://hanstrix.com",
    siteName: "Hanstrix Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hanstrix Technologies - Digital Transformation Agency"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanstrix Technologies - Digital Transformation Agency",
    description: "Leading digital transformation solutions for modern businesses with cutting-edge technology and innovative approaches.",
    images: ["/og-image.jpg"],
    creator: "@hanstrix"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hanstrix Technologies",
              "description": "Leading digital transformation solutions for modern businesses",
              "url": "https://hanstrix.com",
              "logo": "https://hanstrix.com/logo.png",
              "foundingDate": "2020",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "info@hanstrix.com",
                "availableLanguage": ["English"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Tech Street",
                "addressLocality": "Digital City",
                "addressRegion": "DC",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://twitter.com/hanstrix",
                "https://linkedin.com/company/hanstrix",
                "https://facebook.com/hanstrix",
                "https://github.com/hanstrix"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Website Development",
                      "description": "Custom web solutions built with modern technologies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digital Marketing",
                      "description": "Data-driven marketing strategies that deliver results"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI & Machine Learning",
                      "description": "Intelligent solutions powered by cutting-edge AI"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "ERP Solutions",
                      "description": "Customized enterprise resource planning systems"
                    }
                  }
                ]
              }
            })
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
