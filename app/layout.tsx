import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.headerTitle,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.headerTitle,
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero-laundry.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Laundry Kiloan Yogyakarta`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.headerTitle,
    description: siteConfig.description,
    images: ["/images/hero-laundry.jpg"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="theme-color" content="#16A34A" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pt-5 sm:pt-10`}>
        {children}
      </body>
    </html>
  );
}
