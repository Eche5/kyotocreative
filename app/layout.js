import { Inter } from "next/font/google";

import "./globals.css";
import { Suspense } from "react";
import FacebookPixelEvents from "@/components/FacebookPixelEvents";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Top Product & Marketing Agency in India, USA, UK & Canada | Kyoto Creative Co.",
  description:
    "Kyoto Creative Co. is an award-winning Product and Marketing agency, focusing on engineering today’s mobile-first businesses  to drive sales and leads for your business.",
  keywords: [
    "business growth",
    "marketing technology",
    "top solutions",
    "consulting",
    "research",
    "web development",
    "app development",
    "digital marketing",
    "creative media",
    "Kyoto Creative Co.",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title:
      "Top Product and Marketing Agency in India, USA, UK & Canada | Kyoto Creative Co.",
    description:
      "Kyoto Creative Co. is an award-winning Product and Marketing agency, focusing on engineering today’s mobile-first businesses  to drive sales and leads for your business.",
    url: "https://www.kyotocreative.com/",
    siteName: "Kyoto Creative",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/newfoodapp-6f76d.appspot.com/o/opengraph-imagepng.png?alt=media&token=c7542b24-0620-4c16-abb2-07d4c650050d", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Tech",
  name: "Kyoto Creatives Co.",
  image:
    "https://firebasestorage.googleapis.com/v0/b/newfoodapp-6f76d.appspot.com/o/opengraph-imagepng.png?alt=media&token=c7542b24-0620-4c16-abb2-07d4c650050d",
  description:
    "Kyoto Creative Co. is an award-winning Product and Marketing agency, focusing on engineering today’s mobile-first businesses  to drive sales and leads for your business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CQ7E180F2L"
        ></Script>
        <Script
          id=""
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CQ7E180F2L', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Script
          charset="utf-8"
          type="text/javascript"
          src="//js.hsforms.net/forms/embed/v2.js"
        ></Script>
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <SpeedInsights />
        <Analytics />
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
      </body>
    </html>
  );
}
