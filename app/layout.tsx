import Header from "./components/Header";
import Footer from "./components/Footer";
import '@/sass/main.scss';
import Navbar from "./components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Frontend Blog",
  description: "This is the description of my page",
  keywords: "nextjs, seo, metadata",
  author: "Jaehyeon",
  viewport: "width=device-width, initial-scale=1",
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
  themeColor: "#317EFB",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={ <Loading></Loading>}>
          
        <Navbar></Navbar>
        {/* <Header pageType="main"></Header> */}
        <Suspense fallback={ <Loading></Loading> }>
          {children}
        </Suspense>
        <Footer></Footer>
        </Suspense>
      </body>
    </html>
  );
}
