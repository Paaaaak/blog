import Header from "../components/header";
import Footer from "../components/footer";
import "@/sass/main.scss";
import Navbar from "../components/navbar";
import { Suspense } from "react";

/**
 * Metadata for Next.js pages.
 *
 * Head tag is populated in different ways in Next.js by exporting metadata.
 * The `metadata` object in Next.js allows you to define various metadata properties
 * for a specific page or layout. This metadata includes information such as the page title,
 * description, open graph details, Twitter card details, and other SEO-related elements.
 * By setting metadata, you can improve the SEO and social media presence of your web pages.
 */
export const metadata = {
  title: "Frontend Blog",
  description: "This is the description of my page",
  keywords: "nextjs, seo, metadata",
  author: "Jaehyeon",
  // viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  charset: "UTF-8",
  canonical: "https://www.example.com/",
  openGraph: {
    title: "My Page Title",
    description: "This is the description of my page",
    image: "https://www.example.com/image.jpg",
    url: "https://www.example.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Page Title",
    description: "This is the description of my page",
    image: "https://www.example.com/image.jpg",
  },
  // themeColor: "#317EFB",
  icon: "/favicon.ico",
  appleTouchIcon: "/apple-touch-icon.png",
  manifest: "/site.webmanifest",
  alternate: {
    href: "https://www.example.com/es",
    hreflang: "es",
  },
  httpEquiv: {
    refresh: "30",
  },
};

/**
 * layout.js is not supposed to be imported in any components.
 * Next.js will automatically look to see if this file exist and if it does,
 * it will work as a layout/wrapper to any active route.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
